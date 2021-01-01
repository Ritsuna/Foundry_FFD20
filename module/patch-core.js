import { _rollInitiative, _getInitiativeFormula } from "./combat.js";
import { _preProcessDiceFormula } from "./dice.js";
import "./misc/vision-permission.js";
import { ActorPF } from "./actor/entity.js";
import { addCombatTrackerContextOptions } from "./combat.js";

const FormApplication_close = FormApplication.prototype.close;

export async function PatchCore() {
  // Patch getTemplate to prevent unwanted indentation in things things like <textarea> elements.
  async function PF1_getTemplate(path) {
    if (!Object.prototype.hasOwnProperty.call(_templateCache, path)) {
      await new Promise((resolve) => {
        game.socket.emit("template", path, (resp) => {
          const compiled = Handlebars.compile(resp.html, { preventIndent: true });
          Handlebars.registerPartial(path, compiled);
          _templateCache[path] = compiled;
          console.log(`Foundry VTT | Retrieved and compiled template ${path}`);
          resolve(compiled);
        });
      });
    }
    return _templateCache[path];
  }

  // Patch TokenHUD.getData to show resource bars even if their value is 0
  const TokenHUD_getData = TokenHUD.prototype.getData;
  TokenHUD.prototype.getData = function () {
    const data = TokenHUD_getData.call(this);
    const bar1 = this.object.getBarAttribute("bar1");
    const bar2 = this.object.getBarAttribute("bar2");
    return mergeObject(data, {
      displayBar1: bar1 != null && bar1.attribute != null && bar1.value != null,
      displayBar2: bar2 != null && bar2.attribute != null && bar2.value != null,
    });
  };

  const Roll__identifyTerms = Roll.prototype._identifyTerms;
  Roll.prototype._identifyTerms = function (formula, { step = 0 } = {}) {
    formula = _preProcessDiceFormula(formula, this.data);
    const terms = Roll__identifyTerms.call(this, formula, step);
    return terms;
  };

  if (isMinimumCoreVersion("0.7.7") && !isMinimumCoreVersion("0.7.8")) {
    //Override null values throwing warnings
    const Roll_replaceFormulaData = Roll.replaceFormulaData;
    Roll.replaceFormulaData = function (formula, data, { missing, warn = false } = {}) {
      let dataRgx = new RegExp(/@([a-z.0-9_-]+)/gi);
      return formula.replace(dataRgx, (match, term) => {
        let value = getProperty(data, term);
        if (value !== undefined) return String(value).trim();
        if (warn) ui.notifications.warn(game.i18n.format("DICE.WarnMissingData", { match }));
        if (missing !== undefined) return String(missing);
        else return match;
      });
    };

    //Override null values not being treated as 0 for Roll#total
    const Roll__safeEval = Roll.prototype._safeEval;
    Roll.prototype._safeEval = function (expression) {
      const src = "with (sandbox) { return " + expression + "}";
      const evl = new Function("sandbox", src);
      const evld = evl(this.constructor.MATH_PROXY);
      return evld === null ? 0 : evld;
    };
  }

  if (isMinimumCoreVersion("0.7.8")) {
    const Roll__splitParentheticalTerms = Roll.prototype._splitParentheticalTerms;
    Roll.prototype._splitParentheticalTerms = function (formula) {
      // Augment parentheses with semicolons and split into terms
      const split = formula.replace(/\(/g, ";(;").replace(/\)/g, ";);");

      // Match outer-parenthetical groups
      let nOpen = 0;
      const terms = split.split(";").reduce((arr, t, i, terms) => {
        if (t === "") return arr;

        // Identify whether the left-parentheses opens a math function
        let mathFn = false;
        if (t === "(") {
          const fn = terms[i - 1].match(/(?:\s)?([A-z0-9]+)$/);
          mathFn = fn && !!Roll.MATH_PROXY[fn[1]];
        }

        // Combine terms using open parentheses and math expressions
        if (nOpen > 0 || mathFn) arr[arr.length - 1] += t;
        else arr.push(t);

        // Increment the count
        if (t === "(") nOpen++;
        else if (t === ")" && nOpen > 0) nOpen--;
        return arr;
      }, []);

      // Close any un-closed parentheses
      for (let i = 0; i < nOpen; i++) terms[terms.length - 1] += ")";

      // Substitute parenthetical dice rolls groups to inner Roll objects
      return terms.reduce((terms, term) => {
        const prior = terms.length ? terms[terms.length - 1] : null;
        if (term[0] === "(") {
          // Handle inner Roll parenthetical groups
          if (/[dD]/.test(term)) {
            terms.push(Roll.fromTerm(term, this.data));
            return terms;
          }

          // Evaluate arithmetic-only parenthetical groups
          term = this._safeEval(term);
          /* Changed functionality */
          /* Allow null/string/true/false as it used to be and crash on undefined */
          if (typeof term !== "undefined" && typeof term !== "number") term += "";
          else term = Number.isInteger(term) ? term : term.toFixed(2);
          /* End changed functionality */

          // Continue wrapping math functions
          const priorMath = prior && prior.split(" ").pop() in Math;
          if (priorMath) term = `(${term})`;
        }

        // Append terms to to non-Rolls
        if (prior !== null && !(prior instanceof Roll)) terms[terms.length - 1] += term;
        else terms.push(term);
        return terms;
      }, []);
    };
  }

  // Patch ActorTokenHelpers.update
  const ActorTokenHelpers_update = ActorTokenHelpers.prototype.update;
  ActorTokenHelpers.prototype.update = async function (data, options = {}) {
    // Avoid regular update flow for explicitly non-recursive update calls
    if (getProperty(options, "recursive") === false) {
      return ActorTokenHelpers_update.call(this, data, options);
    }

    const diff = await ActorPF.prototype.update.call(
      this,
      data,
      mergeObject(options, { recursive: true, skipUpdate: true })
    );
    if (Object.keys(diff).length) {
      await ActorTokenHelpers_update.call(this, diff, mergeObject(options, { recursive: true }));
      await this.toggleConditionStatusIcons();
      await this.refreshItems();
    }
  };
  // Patch ActorTokenHelpers.deleteEmbeddedEntity
  const ActorTokenHelpers_deleteEmbeddedEntity = ActorTokenHelpers.prototype.deleteEmbeddedEntity;
  ActorTokenHelpers.prototype.deleteEmbeddedEntity = async function (embeddedName, id, options = {}) {
    const item = this.items.find((o) => o._id === id);

    await ActorTokenHelpers_deleteEmbeddedEntity.call(this, embeddedName, id, options);

    // Remove token effects for deleted buff
    if (item) {
      let promises = [];
      if (item.type === "buff" && item.data.data.active) {
        const tokens = this.getActiveTokens();
        for (const token of tokens) {
          promises.push(token.toggleEffect(item.data.img));
        }
      }
      await Promise.all(promises);
    }

    // return ActorPF.prototype.update.call(this, {});
  };

  // Workaround for unlinked token in first initiative on reload problem. No core issue number at the moment.
  if (Actor.config.collection && Object.keys(Actor.collection.tokens).length > 0) {
    Object.keys(Actor.collection.tokens).forEach((tokenId) => {
      let actor = Actor.collection.tokens[tokenId];
      for (let m of ["update", "createEmbeddedEntity", "updateEmbeddedEntity", "deleteEmbeddedEntity"]) {
        actor[m] = ActorTokenHelpers.prototype[m].bind(actor);
      }
    });
  }

  // Add combat tracker context menu options
  {
    const origFunc = CombatTracker.prototype._getEntryContextOptions;
    CombatTracker.prototype._getEntryContextOptions = function () {
      let result = origFunc.call(this);
      addCombatTrackerContextOptions.call(this, result);
      return result;
    };
  }

  // Patch, patch, patch
  Combat.prototype._getInitiativeFormula = _getInitiativeFormula;
  Combat.prototype.rollInitiative = _rollInitiative;
  window.getTemplate = PF1_getTemplate;

  await import("./low-light-vision.js");
}

import { isMinimumCoreVersion } from "./lib.js";
import "./measure.js";
