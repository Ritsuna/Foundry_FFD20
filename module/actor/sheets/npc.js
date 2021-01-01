import { ActorSheetPF } from "../sheets/base.js";
import { CR } from "../../lib.js";

/**
 * An Actor sheet for NPC type characters in the D&D5E system.
 * Extends the base ActorSheetPF class.
 * @type {ActorSheetPF}
 */
export class ActorSheetPFNPC extends ActorSheetPF {
  /**
   * Define default rendering options for the NPC sheet
   * @return {Object}
   */
  static get defaultOptions() {
    return mergeObject(super.defaultOptions, {
      classes: ["pf1", "sheet", "actor", "npc"],
      width: 800,
      height: 840,
    });
  }

  /* -------------------------------------------- */
  /*  Rendering                                   */
  /* -------------------------------------------- */

  /**
   * Get the correct HTML template path to use for rendering this particular sheet
   * @type {String}
   */
  get template() {
    if (!game.user.isGM && this.actor.limited) return "systems/pf1/templates/actors/limited-sheet.hbs";
    return "systems/pf1/templates/actors/npc-sheet.hbs";
  }

  // static get name() {
  //   return game.i18n.localize("PF1.ActorSheetPFNPC");
  // }

  /* -------------------------------------------- */

  /**
   * Add some extra data when rendering the sheet to reduce the amount of logic required within the template.
   */
  async getData() {
    const data = await super.getData();

    // Challenge Rating
    try {
      data.labels.cr = CR.fromNumber(getProperty(this.actor.data, "data.details.cr.total"));
    } catch (e) {
      try {
        data.labels.cr = CR.fromNumber(getProperty(this.actor.data, "data.details.cr"));
      } catch (e) {
        data.labels.cr = CR.fromNumber(1);
      }
    }
    return data;
  }

  /* -------------------------------------------- */
  /*  Object Updates                              */
  /* -------------------------------------------- */

  /* -------------------------------------------- */
  /*  Event Listeners and Handlers                */
  /* -------------------------------------------- */

  /**
   * Activate event listeners using the prepared sheet HTML
   * @param html {HTML}   The prepared HTML object ready to be rendered into the DOM
   */
  activateListeners(html) {
    super.activateListeners(html);

    // Rollable Health Formula
    html.find(".health .rollable").click(this._onRollHealthFormula.bind(this));

    // Adjust CR
    html.find("span.text-box.cr-input").on("click", (event) => {
      this._onSpanTextInput(event, this._adjustCR.bind(this));
    });
  }

  /* -------------------------------------------- */

  _adjustCR(event) {
    event.preventDefault();
    const el = event.currentTarget;

    const value = CR.fromString(el.tagName.toUpperCase() === "INPUT" ? el.value : el.innerText);
    const name = el.getAttribute("name");
    if (name) {
      this._pendingUpdates[name] = value;
    }

    // Update on lose focus
    if (event.originalEvent instanceof MouseEvent) {
      if (!this._submitQueued) {
        $(el).one("mouseleave", (event) => {
          this._onSubmit(event);
        });
      }
    } else this._onSubmit(event);
  }

  /**
   * Handle rolling NPC health values using the provided formula
   * @param {Event} event     The original click event
   * @private
   */
  _onRollHealthFormula(event) {
    event.preventDefault();
    const formula = this.actor.data.data.attributes.hp.formula;
    if (!formula) return;
    const hp = new Roll(formula).roll().total;
    AudioHelper.play({ src: CONFIG.sounds.dice });
    this.actor.update({ "data.attributes.hp.value": hp, "data.attributes.hp.max": hp });
  }
}
