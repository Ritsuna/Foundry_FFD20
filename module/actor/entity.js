import { DiceFFD20 } from "../dice.js";
import { ItemFFD20 } from "../item/entity.js";
import { createTag, linkData, convertDistance, convertWeight } from "../lib.js";
import { createCustomChatMessage } from "../chat.js";
import { _getInitiativeFormula } from "../combat.js";
import { LinkFunctions } from "../misc/links.js";
import { getSkipActionPrompt } from "../settings.js";
import { applyChanges, addDefaultChanges, getChangeFlat, getSourceInfo } from "./apply-changes.js";

/**
 * Extend the base Actor class to implement additional logic specialized for D&D5e.
 */
export class ActorFFD20 extends Actor {
  constructor(...args) {
    super(...args);

    /**
     * A list of all the active items with changes.
     * @property
     * @type {Array}
     */
    if (this.changeItems === undefined) this.changeItems = [];

    /**
     * Stores all ItemChanges from carried items.
     * @property
     * @public
     * @type {Object}
     */
    if (this.changes === undefined) this.changes = new Collection();

    /**
     * Stores cancellable tokens for pending update promises.
     * @property
     * @private
     * @type {Array.<Object>}
     */
    if (this._pendingUpdateTokens === undefined) this._pendingUpdateTokens = [];

    /**
     * @property {Object} _rollData
     * Cached roll data for this item.
     */
    if (this._rollData === undefined) this._rollData = null;

    /**
     * @property {Array.<String>} _runningFunctions
     * Keeps track of currently running async functions that shouldn't run multiple times simultaneously.
     */
    if (this._runningFunctions === undefined) this._runningFunctions = [];

    /**
     * @property {Object} _queuedItemUpdates
     * A dictionary of item IDs and the data to update. Will be called once this actor has been updated, and immediately cleared.
     */
    if (this._queuedItemUpdates === undefined) this._queuedItemUpdates = {};

    /**
     * @property {ItemFFD20[]} containerItems
     * All items this actor is holding in containers.
     */
    if (this.containerItems === undefined) this.containerItems = [];
  }

  /* -------------------------------------------- */

  static chatListeners(html) {
    html.on("click", "button[data-action], a[data-action]", this._onChatCardButtonAction.bind(this));
  }

  static async _onChatCardButtonAction(event) {
    event.preventDefault();

    // Extract card data
    const button = event.currentTarget;
    const card = button.closest(".chat-card");
    const action = button.dataset.action;

    // Roll saving throw
    if (action === "defense-save") {
      const actor = ItemFFD20._getChatCardActor(card);
      const saveId = button.dataset.save;
      if (actor) actor.rollSavingThrow(saveId, { event: event, skipPrompt: getSkipActionPrompt() });
    } else if (action === "save") {
      const actors = ActorFFD20.getSelectedActors();
      const saveId = button.dataset.type;
      let noSound = false;
      for (let a of actors) {
        a[0].rollSavingThrow(saveId, { event: event, noSound: noSound, skipPrompt: getSkipActionPrompt() });
        noSound = true;
      }
    }
    // Show compendium entry
    else if (action === "open-compendium-entry") {
      const entryKey = button.dataset.compendiumEntry;
      const parts = entryKey.split(".");
      const packKey = parts.slice(0, 2).join(".");
      const entryId = parts.slice(-1)[0];
      const pack = game.packs.get(packKey);
      const entry = await pack.getEntity(entryId);
      entry.sheet.render(true);
    }
  }

  static getActiveActor({ actorName = null, actorId = null } = {}) {
    const speaker = ChatMessage.getSpeaker();
    let actor = game.actors.entities.filter((o) => {
      if (!actorName && !actorId) return false;
      if (actorName && o.name !== actorName) return false;
      if (actorId && o._id !== actorId) return false;
      return true;
    })[0];
    if (speaker.token && !actor) actor = game.actors.tokens[speaker.token];
    if (!actor) actor = game.actors.get(speaker.actor);
    return actor;
  }

  /**
   * Returns an array of all selected tokens, along with their actors.
   * @returns {Array.<ActorFFD20, Token>[]}
   */
  static getSelectedActors() {
    let result = [];
    for (let t of canvas.tokens.controlled) {
      result.push([t.actor, t]);
    }
    return result;
  }

  /* -------------------------------------------- */

  get spellFailure() {
    return this.items
      .filter((o) => {
        return o.type === "equipment" && o.data.data.equipped === true;
      })
      .reduce((cur, o) => {
        if (typeof o.data.data.spellFailure === "number") return cur + o.data.data.spellFailure;
        return cur;
      }, 0);
  }

  get race() {
    if (this.items == null) return null;
    return this.items.filter((o) => o.type === "race")[0];
  }

  get typeColor() {
    return "#FDE600";
  }

  static _translateSourceInfo(type, subtype, name) {
    let result = "";
    if (type === "size") result = game.i18n.localize("FFD20.SourceInfoSize");
    if (type === "buff") {
      result = game.i18n.localize("FFD20.SourceInfoBuffs");
      if (subtype === "temp") result = game.i18n.localize("FFD20.SourceInfoTemporaryBuffs");
      if (subtype === "perm") result = game.i18n.localize("FFD20.SourceInfoPermanentBuffs");
      if (subtype === "item") result = game.i18n.localize("FFD20.SourceInfoItemBuffs");
      if (subtype === "misc") result = game.i18n.localize("FFD20.SourceInfoMiscBuffs");
    }
    if (type === "equipment") result = game.i18n.localize("FFD20.SourceInfoEquipment");
    if (type === "weapon") result = game.i18n.localize("FFD20.SourceInfoWeapons");
    if (type === "feat") {
      result = game.i18n.localize("FFD20.SourceInfoFeats");
      if (subtype === "classFeat") result = game.i18n.localize("FFD20.SourceInfoClassFeatures");
      if (subtype === "trait") result = game.i18n.localize("FFD20.SourceInfoTraits");
      if (subtype === "racial") result = game.i18n.localize("FFD20.SourceInfoRacialTraits");
      if (subtype === "misc") result = game.i18n.localize("FFD20.SourceInfoMiscFeatures");
      if (subtype === "template") result = game.i18n.localize("FFD20.SourceInfoTemplate");
    }
    if (type === "race") {
      result = game.i18n.localize("FFD20.SourceInfoRace");
    }

    if (!name || name.length === 0) return result;
    if (result === "") return name;
    return `${result} (${name})`;
  }

  static _getChangeItemSubtype(item) {
    if (item.type === "buff") return item.data.buffType;
    if (item.type === "feat") return item.data.featType;
    return "";
  }

  get _skillTargets() {
    let skills = [];
    let subSkills = [];
    for (let [sklKey, skl] of Object.entries(this.data.data.skills)) {
      if (skl == null) continue;
      if (skl.subSkills != null) {
        for (let subSklKey of Object.keys(skl.subSkills)) {
          subSkills.push(`skill.${sklKey}.subSkills.${subSklKey}`);
        }
      } else skills.push(`skill.${sklKey}`);
    }
    return [...skills, ...subSkills];
  }

  _dataIsPC(data) {
    if (data.permission != null) {
      const nonGM = game.users.entities.filter((u) => !u.isGM);
      return nonGM.some((u) => {
        if (data.permission["default"] >= CONST.ENTITY_PERMISSIONS["OWNER"]) return true;
        return data.permission[u._id] >= CONST.ENTITY_PERMISSIONS["OWNER"];
      });
    }
    const hasPlayerOwner = this.hasPlayerOwner;
    return hasPlayerOwner;
  }

  prepareEmbeddedEntities() {
    super.prepareEmbeddedEntities();
    this.containerItems = this._prepareContainerItems(this.items);
    this._prepareChanges();
  }

  _prepareContainerItems(items) {
    let collection = [];

    const getContainerContents = function (item) {
      if (item.type !== "container") return;

      item.items.forEach((i) => {
        collection.push(i);
        getContainerContents(i);
      });
    };

    items.forEach((item) => {
      getContainerContents(item);
    });

    return collection;
  }

  _prepareChanges() {
    this.changeItems = this.items
      .filter((obj) => {
        return (
          (obj.data.data.changes instanceof Array && obj.data.data.changes.length) ||
          (obj.data.data.changeFlags && Object.values(obj.data.data.changeFlags).filter((o) => o === true).length)
        );
      })
      .filter((obj) => {
        if (obj.type === "buff") return obj.data.data.active;
        if (obj.type === "equipment" || obj.type === "weapon") return obj.data.data.equipped;
        if (obj.type === "loot" && obj.data.data.subType === "gear") return obj.data.data.equipped;
        return true;
      });

    let changes = [];
    for (let i of this.changeItems) {
      changes.push(...i.changes);
    }
    addDefaultChanges.call(this, changes);

    const prior = this.changes;
    const c = new Collection();
    for (let e of changes) {
      c.set(e._id, e);
    }
    this.changes = c;
  }

  applyActiveEffects() {
    super.applyActiveEffects();

    applyChanges.call(this);
  }

  prepareData() {
    this._queuedUpdates = {};
    this._prevAttributes = {};
    for (const k of ["data.attributes.hp", "data.attributes.wounds", "data.attributes.vigor"]) {
      this._prevAttributes[k] = getProperty(this.data, `${k}.max`);
    }
    this.sourceInfo = {};
    this.flags = {};

    // Prepare data
    super.prepareData();

    // Send queued updates
    if (this._initialized && this.hasPerm(game.user, "OWNER")) {
      const diff = diffObject(duplicate(this._data), expandObject(this._queuedUpdates), { inner: true });
      if (!isObjectEmpty(diff)) {
        this.update(diff);
      }
    }
    this._initialized = true;
    this._setSourceDetails(this.sourceInfo);
  }

  prepareBaseData() {
    // Refresh roll data
    this.getRollData({ refresh: true });

    // Update item resource values
    this.data.items.forEach((item) => {
      this.updateItemResources(item);
    });

    Hooks.callAll("ffd20.prepareBaseActorData", this);
    super.prepareBaseData();
    this._resetInherentTotals();

    // Update total level and mythic tier
    const classes = this.data.items.filter((o) => o.type === "class");
    const level = classes.filter((o) => (o.data.classType !== "mythic" && o.data.countforexp === "exp")).reduce((cur, o) => cur + o.data.level, 0);
    setProperty(this.data, "data.details.level.value", level);

    const mythicTier = classes.filter((o) => o.data.classType === "mythic").reduce((cur, o) => cur + o.data.level, 0);
    setProperty(this.data, "data.details.mythicTier", mythicTier);

    // The following is not for NPCs
    if (this.data.type === "character") {
      const maxExp = this.getLevelExp(level);
      setProperty(this.data, "data.details.xp.max", maxExp);
    }

    {
      // Handle armor and weapon proficiencies for PCs
      // NPCs are considered proficient with their armor
      if (this.data.type === "character") {
        // Collect proficiencies from items, add them to actor's proficiency totals
        for (const prof of ["armorProf", "weaponProf", "languages"]) {
          // Custom proficiency baseline from actor
          const customProficiencies =
            this.data.data.traits[prof]?.custom.split(CONFIG.FFD20.re.traitSeparator).filter((item) => item.length > 0) ||
            [];

          // Iterate over all items to create one array of non-custom proficiencies
          const proficiencies = this.data.items.reduce(
            (profs, item) => {
              // Check only items able to grant proficiencies
              if (hasProperty(item, `data.${prof}`)) {
                // Get existing sourceInfo for item with this name, create sourceInfo if none is found
                // Remember whether sourceInfo can be modified or has to be pushed at the end
                let sInfo = getSourceInfo(this.sourceInfo, `data.traits.${prof}`).positive.find(
                    (o) => o.name === item.name
                  ),
                  hasInfo = !!sInfo;
                if (!sInfo) sInfo = { name: item.name, value: [] };
                else if (typeof sInfo.value === "string") sInfo.value = sInfo.value.split(", ");

                // Regular proficiencies
                for (const proficiency of item.data[prof].value) {
                  // Add localized source info if item's info does not have this proficiency already
                  if (!sInfo.value.includes(proficiency)) sInfo.value.push(CONFIG.FFD20[`${prof}`][proficiency]);
                  // Add raw proficiency key
                  if (!profs.includes(proficiency)) profs.push(proficiency);
                }

                // Collect trimmed but otherwise original proficiency strings, dedupe array for actor's total
                const customProfs =
                  item.data[prof].custom
                    ?.split(CONFIG.FFD20.re.traitSeparator)
                    .map((i) => i.trim())
                    .filter((el, i, arr) => el.length > 0 && arr.indexOf(el) === i) || [];
                // Add readable custom profs to sources and overall collection
                sInfo.value.push(...customProfs);
                customProficiencies.push(...customProfs);

                if (sInfo.value.length > 0) {
                  // Dedupe if adding to existing sourceInfo
                  if (hasInfo) sInfo.value = [...new Set(sInfo.value)];
                  // Transform arrays into presentable strings
                  sInfo.value = sInfo.value.join(", ");
                  // If sourceInfo was not a reference to existing info, push it now
                  if (!hasInfo) getSourceInfo(this.sourceInfo, `data.traits.${prof}`).positive.push(sInfo);
                }
              }
              return profs;
            },
            [...this.data.data.traits[prof].value] // Default proficiency baseline from actor
          );

          // Save collected proficiencies in actor's data
          setProperty(this.data, `data.traits.${prof}.total`, [...proficiencies]);
          setProperty(this.data, `data.traits.${prof}.customTotal`, customProficiencies.join(";"));
        }
      }
    }

    // Refresh ability scores
    {
      const abs = Object.keys(this.data.data.abilities);
      for (let ab of abs) {
        const value = getProperty(this.data, `data.abilities.${ab}.value`);
        if (value == null) {
          setProperty(this.data, `data.abilities.${ab}.total`, null);
        } else {
          setProperty(
            this.data,
            `data.abilities.${ab}.total`,
            value - getProperty(this.data, `data.abilities.${ab}.drain`)
          );
          setProperty(
            this.data,
            `data.abilities.${ab}.penalty`,
            (getProperty(this.data, `data.abilities.${ab}.penalty`) || 0) +
              (getProperty(this.data, `data.abilities.${ab}.userPenalty`) || 0)
          );
        }
      }
      this.refreshAbilityModifiers();
    }

    // Reset BAB
    {
      const useFractionalBaseBonuses = game.settings.get("ffd20", "useFractionalBaseBonuses") === true;
      const k = "data.attributes.bab.total";
      if (useFractionalBaseBonuses) {
        setProperty(
          this.data,
          k,
          Math.floor(
            classes.reduce((cur, obj) => {
              const babScale = getProperty(obj, "data.bab") || "";
              if (babScale === "high") return cur + obj.data.level;
              if (babScale === "med") return cur + obj.data.level * 0.75;
              if (babScale === "low") return cur + obj.data.level * 0.5;
              return cur;
            }, 0)
          )
        );

        const v = getProperty(this.data, k);
        if (v !== 0) {
          getSourceInfo(this.sourceInfo, k).positive.push({
            name: game.i18n.localize("FFD20.Base"),
            value: v,
          });
        }
      } else {
        setProperty(
          this.data,
          k,
          classes.reduce((cur, obj) => {
            const formula =
              CONFIG.FFD20.classBABFormulas[obj.data.bab] != null ? CONFIG.FFD20.classBABFormulas[obj.data.bab] : "0";
            const v = new Roll(formula, { level: obj.data.level }).roll().total;

            if (v !== 0) {
              getSourceInfo(this.sourceInfo, k).positive.push({
                name: getProperty(obj, "name"),
                value: v,
              });
            }

            return cur + v;
          }, 0)
        );
      }
    }

    // Prepare Character data
    if (this.data.type === "character") this._prepareCharacterData(this.data.data);
    else if (this.data.type === "npc") this._prepareNPCData(this.data.data);

    // Reset HD
    setProperty(this.data, "data.attributes.hd.total", getProperty(this.data, "data.details.level.value"));

  // recalulate limitbreaks
    setProperty(this.data, "data.attributes.limitbreak.max", (1 + Math.floor(getProperty(this.data, "data.details.level.value") / 4)));

    // Reset CR
    if (this.data.type === "npc") {
      setProperty(this.data, "data.details.cr.total", this.getCR(this.data.data));
    }

    // Armor Item type to proficiency maps
    const armorProficiencyMap = {
      lightArmor: "lgt",
      mediumArmor: "med",
      heavyArmor: "hvy",
    };
    const shieldProficiencyMap = {
      other: "shl", // buckler
      lightShield: "shl",
      heavyShield: "shl",
      towerShield: "twr",
    };
    // Custom proficiencies
    const customProficiencies =
      this.data.data.traits.armorProf?.customTotal
        ?.split(CONFIG.FFD20.re.traitSeparator)
        .map((item) => item.trim().toLowerCase())
        .filter((item) => item.length > 0) || [];

    // Check if there's any matching proficiency
    const hasArmorProficiency = (item, proficiencyName) => {
      // Assume NPCs to be proficient with their armor
      if (this.data.type === "npc") return true;

      const name = item.name.toLowerCase(),
        tag = item.data.tag;
      return (
        this.data.data.traits.armorProf.total.includes(proficiencyName) ||
        customProficiencies.find((prof) => prof.includes(name) || prof.includes(tag)) != undefined
      );
    };

    // Apply ACP and Max Dexterity Bonus
    {
      let armorACP = 0;
      let shieldACP = 0;
      let attackACPPenalty = 0; // ACP to attack penalty from lacking proficiency. Stacks infinitely.
      let armorMDexWorst = null;
      let shieldMDexWorst = null;

      this.data.items
        .filter((obj) => {
          return obj.type === "equipment" && obj.data.equipped;
        })
        .forEach((obj) => {
          let itemACP = Math.abs(obj.data.armor.acp);
          if (obj.data.masterwork === true && ["armor", "shield"].includes(obj.data.equipmentType)) {
            itemACP = Math.max(0, itemACP - 1);
          }

          switch (obj.data.equipmentType) {
            case "armor":
              itemACP = Math.max(0, itemACP + getProperty(this.data, "data.attributes.acp.armorBonus"));
              break;
            case "shield":
              itemACP = Math.max(0, itemACP + getProperty(this.data, "data.attributes.acp.shieldBonus"));
              break;
          }

          if (obj.data.broken) {
            itemACP *= 2;
          }

          if (itemACP) {
            const sInfo = getSourceInfo(this.sourceInfo, "data.attributes.acp.total").negative.find(
              (o) => o.name === obj.name
            );
            if (sInfo) sInfo.value = itemACP;
            else {
              getSourceInfo(this.sourceInfo, "data.attributes.acp.total").negative.push({
                name: obj.name,
                value: itemACP,
              });
            }
          }

          switch (obj.data.equipmentType) {
            case "armor":
              if (itemACP > armorACP) armorACP = itemACP;
              if (!hasArmorProficiency(obj, armorProficiencyMap[obj.data.equipmentSubtype]))
                attackACPPenalty += armorACP;
              break;
            case "shield":
              if (itemACP > shieldACP) shieldACP = itemACP;
              if (!hasArmorProficiency(obj, shieldProficiencyMap[obj.data.equipmentSubtype]))
                attackACPPenalty += shieldACP;
              break;
          }

          if (obj.data.armor.dex !== null) {
            const mDex = Number.parseInt(obj.data.armor.dex);
            switch (obj.data.equipmentType) {
              case "armor":
                if (Number.isInteger(mDex)) {
                  const armorMDex = mDex + getProperty(this.data, "data.attributes.mDex.armorBonus");
                  armorMDexWorst = Math.min(armorMDex, armorMDexWorst ?? Number.POSITIVE_INFINITY);

                  if (!Number.isNaN(armorMDex)) {
                    const sInfo = getSourceInfo(this.sourceInfo, "data.attributes.maxDexBonus").negative.find(
                      (o) => o.name === obj.name
                    );
                    if (sInfo) sInfo.value = armorMDex;
                    else {
                      getSourceInfo(this.sourceInfo, "data.attributes.maxDexBonus").negative.push({
                        name: obj.name,
                        value: armorMDex,
                      });
                    }
                  }
                }
                break;
              case "shield":
                if (Number.isInteger(mDex)) {
                  const shieldMDex = mDex + getProperty(this.data, "data.attributes.mDex.shieldBonus");
                  shieldMDexWorst = Math.min(shieldMDex, shieldMDexWorst ?? Number.POSITIVE_INFINITY);

                  if (!Number.isNaN(shieldMDex)) {
                    const sInfo = getSourceInfo(this.sourceInfo, "data.attributes.maxDexBonus").negative.find(
                      (o) => o.name === obj.name
                    );
                    if (sInfo) sInfo.value = shieldMDex;
                    else {
                      getSourceInfo(this.sourceInfo, "data.attributes.maxDexBonus").negative.push({
                        name: obj.name,
                        value: shieldMDex,
                      });
                    }
                  }
                }
                break;
            }
          }
        });

      // Update
      setProperty(this.data, "data.attributes.acp.gear", (armorACP ?? 0) + (shieldACP ?? 0));
      if (armorMDexWorst !== null || shieldMDexWorst !== null) {
        setProperty(
          this.data,
          "data.attributes.maxDexBonus",
          Math.min(armorMDexWorst ?? Number.POSITIVE_INFINITY, shieldMDexWorst ?? Number.POSITIVE_INFINITY)
        );
      }
      setProperty(this.data, "data.attributes.acp.total", getProperty(this.data, "data.attributes.acp.gear"));

      setProperty(this.data, "data.attributes.acp.attackPenalty", attackACPPenalty);
    }

    // Reset class skills
    for (let [k, s] of Object.entries(getProperty(this.data, "data.skills"))) {
      if (!s) continue;
      const isClassSkill = classes.reduce((cur, o) => {
        if ((getProperty(o, "data.classSkills") || {})[k] === true) return true;
        return cur;
      }, false);
      setProperty(this.data, `data.skills.${k}.cs`, isClassSkill);
      for (let k2 of Object.keys(getProperty(s, "subSkills") || {})) {
        setProperty(this.data, `data.skills.${k}.subSkills.${k2}.cs`, isClassSkill);
      }
    }

    // Add base initiative (for NPC Lite sheets)
    {
      setProperty(this.data, "data.attributes.init.total", getProperty(this.data, "data.attributes.init.value"));
    }
  }

  /**
   * Called just before the first change is applied, and after every change is applied.
   * Sets additional variables (such as spellbook range)
   */
  refreshDerivedData() {
    // Set spellbook info
    for (let spellbook of Object.values(getProperty(this.data, "data.attributes.spells.spellbooks"))) {
      const cl = spellbook.cl.total;
      spellbook.range = {
        close: convertDistance(25 + 5 * Math.floor(cl / 2))[0],
        medium: convertDistance(100 + 10 * cl)[0],
        long: convertDistance(400 + 40 * cl)[0],
      };
    }
  }

  /**
   * Augment the basic actor data with additional dynamic data.
   */
  prepareDerivedData() {
    Hooks.callAll("ffd20.prepareDerivedActorData", this);
    super.prepareDerivedData();

    const actorData = this.data;
    const data = actorData.data;
    const rollData = this.getRollData();

    // Round health
    const healthConfig = game.settings.get("ffd20", "healthConfig");
    const round = { up: Math.ceil, nearest: Math.round, down: Math.floor }[healthConfig.rounding];
    for (const k of ["data.attributes.hp.max", "data.attributes.vigor.max"]) {
      setProperty(this.data, `${k}`, round(getProperty(this.data, `${k}`)));
    }

    // Refresh HP
    if (!game.ffd20.isMigrating && this._initialized) {
      for (const k of ["data.attributes.hp", "data.attributes.wounds", "data.attributes.vigor"]) {
        const prevMax = this._prevAttributes[k] || 0;
        const newMax = getProperty(this.data, `${k}.max`) || 0;
        const prevValue = getProperty(this.data, `${k}.value`);
        const newValue = prevValue + (newMax - prevMax);
        this._queuedUpdates[`${k}.value`] = newValue;
      }
    }

    // Update wound threshold
    this.updateWoundThreshold();

    // Reset spell slots and spell points
    for (let spellbookKey of Object.keys(getProperty(this.data, "data.attributes.spells.spellbooks"))) {
      const spellbook = getProperty(this.data, `data.attributes.spells.spellbooks.${spellbookKey}`);
      const spellbookAbilityKey = spellbook.ability;
      let spellbookAbilityScore = getProperty(this.data, `data.abilities.${spellbookAbilityKey}.total`);

      // Add spell slots based on ability bonus slot formula
      {
        const formula = getProperty(spellbook, "spellSlotAbilityBonusFormula") || "0";
        spellbookAbilityScore += new Roll(formula, rollData).roll().total;
      }

      const spellbookAbilityMod = Math.floor((spellbookAbilityScore - 10) / 2);

      // Set CL
      {
        const key = `data.attributes.spells.spellbooks.${spellbookKey}.cl.total`;
        const formula = getProperty(spellbook, "cl.formula") || "0";
        let total = 0;

        // Add NPC base
        if (this.data.type === "npc") {
          const value = getProperty(spellbook, "cl.base") || 0;
          total += value;
          getSourceInfo(this.sourceInfo, key).positive.push({ name: game.i18n.localize("FFD20.Base"), value: value });
        }
        // Add HD
        if (spellbook.class === "_hd") {
          const value = getProperty(this.data, "data.attributes.hd.total");
          total += value;
          getSourceInfo(this.sourceInfo, key).positive.push({ name: game.i18n.localize("FFD20.HitDie"), value: value });
        }
        // Add class levels
        else if (spellbook.class && rollData.classes[spellbook.class]) {
          const value = rollData.classes[spellbook.class].level;
          total += value;
          getSourceInfo(this.sourceInfo, key).positive.push({
            name: rollData.classes[spellbook.class].name,
            value: value,
          });
        }
        // Add from bonus formula
        const clBonus = new Roll(formula, rollData).roll().total;
        total += clBonus;
        if (clBonus > 0) {
          getSourceInfo(this.sourceInfo, key).positive.push({
            name: game.i18n.localize("FFD20.CasterLevelBonusFormula"),
            value: clBonus,
          });
        } else if (clBonus < 0) {
          getSourceInfo(this.sourceInfo, key).negative.push({
            name: game.i18n.localize("FFD20.CasterLevelBonusFormula"),
            value: clBonus,
          });
        }

        if (getProperty(rollData, "attributes.woundThresholds.penalty") != null) {
          // Subtract Wound Thresholds penalty. Can't reduce below 1.
          if (rollData.attributes.woundThresholds.penalty > 0 && total > 1) {
            total = Math.max(1, total - rollData.attributes.woundThresholds.penalty);
            getSourceInfo(this.sourceInfo, key).negative.push({
              name: game.i18n.localize(CONFIG.FFD20.woundThresholdConditions[rollData.attributes.woundThresholds.level]),
              value: -rollData.attributes.woundThresholds.penalty,
            });
          }
        }

        // Subtract energy drain
        if (rollData.attributes.energyDrain) {
          total = Math.max(0, total - rollData.attributes.energyDrain);
          getSourceInfo(this.sourceInfo, key).negative.push({
            name: game.i18n.localize("FFD20.CondTypeEnergyDrain"),
            value: -Math.abs(rollData.attributes.energyDrain),
          });
        }

        setProperty(this.data, key, total);
      }

      // Spell slots
      for (let a = 0; a < 10; a++) {
        let base = parseInt(
          getProperty(this.data, `data.attributes.spells.spellbooks.${spellbookKey}.spells.spell${a}.base`)
        );
        if (Number.isNaN(base)) {
          setProperty(this.data, `data.attributes.spells.spellbooks.${spellbookKey}.spells.spell${a}.base`, null);
          setProperty(this.data, `data.attributes.spells.spellbooks.${spellbookKey}.spells.spell${a}.max`, 0);
        } else {
          if (getProperty(this.data, `data.attributes.spells.spellbooks.${spellbookKey}.autoSpellLevels`)) {
            const value =
              typeof spellbookAbilityMod === "number"
                ? base + ActorFFD20.getSpellSlotIncrease(spellbookAbilityMod, a)
                : base;
            setProperty(this.data, `data.attributes.spells.spellbooks.${spellbookKey}.spells.spell${a}.max`, value);
          } else {
            setProperty(this.data, `data.attributes.spells.spellbooks.${spellbookKey}.spells.spell${a}.max`, base);
          }
        }
      }

      // Update spellbook slots
      {
        const slots = {};
        for (let sbKey of Object.keys(getProperty(this.data, "data.attributes.spells.spellbooks"))) {
          for (let a = 0; a < 10; a++) {
            setProperty(
              slots,
              `${sbKey}.${a}.value`,
              getProperty(this.data, `data.attributes.spells.spellbooks.${sbKey}.spells.spell${a}.max`) || 0
            );
            setProperty(
              slots,
              `${sbKey}.${a}.domainSlots`,
              getProperty(this.data, `data.attributes.spells.spellbooks.${sbKey}.domainSlotValue`) || 0
            );
          }
        }

        const spells = this.items.filter((o) => o.type === "spell");
        for (let i of spells) {
          const sb = i.spellbook;
          if (!sb || (sb && sb.spontaneous)) continue;
          const sbKey = i.data.data.spellbook;
          const isDomain = getProperty(i.data, "data.domain") === true;
          const a = i.data.data.level;
          const slotCost = i.data.data.slotCost ?? 1;
          let dSlots = getProperty(slots, `${sbKey}.${a}.domainSlots`);
          let uses = getProperty(slots, `${sbKey}.${a}.value`);
          if (Number.isFinite(i.maxCharges)) {
            let subtract = { domain: 0, uses: 0 };
            if (isDomain) {
              subtract.domain = Math.min(i.maxCharges, dSlots);
              subtract.uses = (i.maxCharges - subtract.domain) * slotCost;
            } else {
              subtract.uses = i.maxCharges * slotCost;
            }
            dSlots -= subtract.domain;
            uses -= subtract.uses;
          }
          setProperty(slots, `${sbKey}.${a}.value`, uses);
          setProperty(slots, `${sbKey}.${a}.domainSlots`, dSlots);
          setProperty(this.data, `data.attributes.spells.spellbooks.${sbKey}.spells.spell${a}.value`, uses);
        }
      }

      // Spell points
      {
        const formula =
          getProperty(this.data, `data.attributes.spells.spellbooks.${spellbookKey}.spellPoints.maxFormula`) || "0";
        rollData.cl = getProperty(this.data, `data.attributes.spells.spellbooks.${spellbookKey}.cl.total`);
        rollData.ablMod = spellbookAbilityMod;
        const spellClass = getProperty(this.data, `data.attributes.spells.spellbooks.${spellbookKey}.class`) ?? "";
        rollData.classLevel =
          spellClass === "_hd"
            ? rollData.attributes.hd.total
            : spellClass?.length > 0
            ? getProperty(rollData, `classes.${spellClass}.level`) || 0 // `
            : 0;
        const roll = new Roll(formula, rollData).roll();
        setProperty(this.data, `data.attributes.spells.spellbooks.${spellbookKey}.spellPoints.max`, roll.total);
      }
    }

    // Shared attack bonuses
    {
      // Size
      const sizeMod = CONFIG.FFD20.sizeMods[this.data.data.traits.size];
      // Total
      const totalAtk =
        getProperty(this.data, "data.attributes.bab.total") -
        getProperty(this.data, "data.attributes.acp.attackPenalty") -
        getProperty(this.data, "data.attributes.energyDrain") +
        sizeMod;
      setProperty(this.data, "data.attributes.attack.shared", totalAtk);
    }

    // Create arbitrary skill slots
    for (let skillId of CONFIG.FFD20.arbitrarySkills) {
      if (data.skills[skillId] == null) continue;
      let skill = data.skills[skillId];
      skill.subSkills = skill.subSkills || {};
      for (let subSkillId of Object.keys(skill.subSkills)) {
        if (skill.subSkills[subSkillId] == null) delete skill.subSkills[subSkillId];
      }
    }

    // Delete removed skills
    for (let skillId of Object.keys(data.skills)) {
      let skl = data.skills[skillId];
      if (skl == null) {
        delete data.skills[skillId];
      }
    }

    // Compute encumbrance
    this._computeEncumbrance();
    switch (this.data.data.attributes.encumbrance.level) {
      case 0:
        setProperty(this.data, "data.attributes.acp.encumbrance", 0);
        break;
      case 1:
        setProperty(this.data, "data.attributes.acp.encumbrance", 3);
        setProperty(
          this.data,
          "data.attributes.maxDexBonus",
          Math.min(getProperty(this.data, "data.attributes.maxDexBonus") ?? Number.POSITIVE_INFINITY, 3)
        );
        getSourceInfo(this.sourceInfo, "data.attributes.acp.total").negative.push({
          name: game.i18n.localize("FFD20.Encumbrance"),
          value: 3,
        });
        getSourceInfo(this.sourceInfo, "data.attributes.maxDexBonus").negative.push({
          name: game.i18n.localize("FFD20.Encumbrance"),
          value: 3,
        });
        break;
      case 2:
        setProperty(this.data, "data.attributes.acp.encumbrance", 6);
        setProperty(
          this.data,
          "data.attributes.maxDexBonus",
          Math.min(getProperty(this.data, "data.attributes.maxDexBonus") ?? Number.POSITIVE_INFINITY, 1)
        );
        getSourceInfo(this.sourceInfo, "data.attributes.acp.total").negative.push({
          name: game.i18n.localize("FFD20.Encumbrance"),
          value: 6,
        });
        getSourceInfo(this.sourceInfo, "data.attributes.maxDexBonus").negative.push({
          name: game.i18n.localize("FFD20.Encumbrance"),
          value: 1,
        });
        break;
    }
    setProperty(
      this.data,
      "data.attributes.acp.total",
      Math.max(
        getProperty(this.data, "data.attributes.acp.gear"),
        getProperty(this.data, "data.attributes.acp.encumbrance")
      )
    );

    // Prepare modifier containers
    data.attributes.mods = data.attributes.mods || {};
    data.attributes.mods.skills = data.attributes.mods.skills || {};

    // Set labels
    this.labels = {};
    this.labels.race =
      this.race == null ? game.i18n.localize("FFD20.Race") : game.i18n.localize("FFD20.RaceTitle").format(this.race.name);
    this.labels.alignment = CONFIG.FFD20.alignments[this.data.data.details.alignment];

    // Set speed labels
    this.labels.speed = {};
    for (const [key, obj] of Object.entries(getProperty(this.data, "data.attributes.speed") || {})) {
      const dist = convertDistance(obj.total);
      this.labels.speed[key] = `${dist[0]} ${CONFIG.FFD20.measureUnitsShort[dist[1]]}`;
    }

    // Combine AC types
    for (const k of ["temp.ac.armor", "temp.ac.shield", "temp.ac.natural"]) {
      const v = getProperty(this.data, k);
      if (v) {
        for (const k2 of ["normal", "flatFooted"]) {
          setProperty(
            this.data,
            `data.attributes.ac.${k2}.total`,
            getProperty(this.data, `data.attributes.ac.${k2}.total`) + v
          );
        }
      }
    }

    // Add Dexterity to AC
    {
      let dex = this.data.data.abilities.dex.mod;
      if (this.flags["loseDexToAC"]) dex = Math.min(dex, 0);
      const maxDex = this.data.data.attributes.maxDexBonus;
      const ac = {
        normal: maxDex !== null ? Math.min(maxDex, dex) : dex,
        touch: maxDex !== null ? Math.min(maxDex, dex) : dex,
        flatFooted: Math.min(0, dex),
      };
      const cmd = {
        total: dex,
        flatFootedTotal: Math.min(0, dex),
      };
      for (const [k, v] of Object.entries(ac)) {
        setProperty(
          this.data,
          `data.attributes.ac.${k}.total`,
          getProperty(this.data, `data.attributes.ac.${k}.total`) + v
        );
        getSourceInfo(this.sourceInfo, `data.attributes.ac.${k}.total`).positive.push({
          value: v,
          name: CONFIG.FFD20.abilities["dex"],
        });
      }
      for (const [k, v] of Object.entries(cmd)) {
        setProperty(this.data, `data.attributes.cmd.${k}`, getProperty(this.data, `data.attributes.cmd.${k}`) + v);
        getSourceInfo(this.sourceInfo, `data.attributes.cmd.${k}`).positive.push({
          value: v,
          name: CONFIG.FFD20.abilities["dex"],
        });
      }
    }

    // Reduce final speed under certain circumstances
    {
      const armorItems = this.items.filter((o) => o.data.type === "equipment");
      let reducedSpeed = false;
      let sInfo = { name: "", value: game.i18n.localize("FFD20.ReducedMovementSpeed") };
      if (this.data.data.attributes.encumbrance.level >= 1 && !this.flags["noEncumbrance"]) {
        reducedSpeed = true;
        sInfo.name = game.i18n.localize("FFD20.Encumbrance");
      }
      if (
        armorItems.filter((o) => getProperty(o.data.data, "equipmentSubtype") === "mediumArmor" && o.data.data.equipped)
          .length &&
        !this.flags["mediumArmorFullSpeed"]
      ) {
        reducedSpeed = true;
        sInfo.name = game.i18n.localize("FFD20.EquipTypeMedium");
      }
      if (
        armorItems.filter((o) => getProperty(o.data.data, "equipmentSubtype") === "heavyArmor" && o.data.data.equipped)
          .length &&
        !this.flags["heavyArmorFullSpeed"]
      ) {
        reducedSpeed = true;
        sInfo.name = game.i18n.localize("FFD20.EquipTypeHeavy");
      }
      if (reducedSpeed) {
        for (const speedKey of Object.keys(this.data.data.attributes.speed)) {
          const key = `data.attributes.speed.${speedKey}.total`;
          let value = getProperty(this.data, key);
          setProperty(this.data, key, this.constructor.getReducedMovementSpeed(value));
          if (value > 0) {
            getSourceInfo(this.sourceInfo, key).negative.push(sInfo);
          }
        }
      }
    }

    this.refreshDerivedData();

    // Setup links
    this.prepareItemLinks();

    // Update item resources
    this.items.forEach((item) => {
      item.prepareDerivedData();
      this.updateItemResources(item.data);

      // Update tokens for resources
      const tokens = this.isToken ? [this.token] : this.getActiveTokens();
      tokens.forEach((t) => {
        try {
          t.drawBars();
        } catch (err) {
          // Drop the harmless error
        }
      });
    });
  }

  prepareItemLinks() {
    if (!this.items) return;

    for (let a of this.items) {
      if (a.data.data.links == null) continue;

      for (let l of Object.keys(a.data.data.links)) {
        if (LinkFunctions[l] != null) {
          LinkFunctions[l].call(this, a, a.data.data.links[l]);
        }
      }
    }
  }

  _setSourceDetails(extraData) {
    const actorData = this.data;
    let sourceDetails = {};
    // Get empty source arrays
    for (let obj of Object.values(CONFIG.FFD20.buffTargets)) {
      for (let b of Object.keys(obj)) {
        if (!b.startsWith("_")) {
          let buffTargets = getChangeFlat.call(this, b, null);
          if (!(buffTargets instanceof Array)) buffTargets = [buffTargets];
          for (let bt of buffTargets) {
            if (!sourceDetails[bt]) sourceDetails[bt] = [];
          }
        }
      }
    }
    // Add additional source arrays not covered by changes
    sourceDetails["data.attributes.bab.total"] = [];

    // Add base values to certain bonuses
    sourceDetails["data.attributes.ac.normal.total"].push({ name: game.i18n.localize("FFD20.Base"), value: 10 });
    sourceDetails["data.attributes.ac.touch.total"].push({ name: game.i18n.localize("FFD20.Base"), value: 10 });
    sourceDetails["data.attributes.ac.flatFooted.total"].push({ name: game.i18n.localize("FFD20.Base"), value: 10 });
    sourceDetails["data.attributes.cmd.total"].push({ name: game.i18n.localize("FFD20.Base"), value: 10 });
    sourceDetails["data.attributes.cmd.flatFootedTotal"].push({ name: game.i18n.localize("FFD20.Base"), value: 10 });
    for (let [a, abl] of Object.entries(actorData.data.abilities)) {
      sourceDetails[`data.abilities.${a}.total`].push({ name: game.i18n.localize("FFD20.Base"), value: abl.value });
      // Add ability penalty, damage and drain
      if (abl.damage != null && abl.damage !== 0) {
        sourceDetails[`data.abilities.${a}.total`].push({
          name: game.i18n.localize("FFD20.AbilityDamage"),
          value: `-${Math.floor(Math.abs(abl.damage) / 2)} (Mod only)`,
        });
      }
      if (abl.drain != null && abl.drain !== 0) {
        sourceDetails[`data.abilities.${a}.total`].push({
          name: game.i18n.localize("FFD20.AbilityDrain"),
          value: -Math.abs(abl.drain),
        });
      }
    }

    // Add wound threshold data
    {
      const hpconf = game.settings.get("ffd20", "healthConfig").variants;
      const wtUsage = this.data.type === "npc" ? hpconf.npc.useWoundThresholds : hpconf.pc.useWoundThresholds;
      if (wtUsage > 0) {
        const wtData = this.getWoundThresholdData(actorData);

        if (wtData.level > 0) {
          const changeFlatKeys = ["cmb", "cmd", "init", "allSavingThrows", "ac", "skills", "abilityChecks"];
          for (let fk of changeFlatKeys) {
            let flats = getChangeFlat.call(this, fk, "penalty", actorData.data);
            if (!(flats instanceof Array)) flats = [flats];
            for (let k of flats) {
              if (!k) continue;
              sourceDetails[k].push({
                name: game.i18n.localize(CONFIG.FFD20.woundThresholdConditions[wtData.level]),
                value: -wtData.penalty,
              });
            }
          }
        }
      }
    }

    // Add extra data
    const rollData = this.getRollData();
    for (let [changeTarget, changeGrp] of Object.entries(extraData)) {
      for (let grp of Object.values(changeGrp)) {
        if (grp.length > 0) {
          sourceDetails[changeTarget] = sourceDetails[changeTarget] || [];
          for (let src of grp) {
            if (!src.operator) src.operator = "add";
            let srcInfo = this.constructor._translateSourceInfo(src.type, src.subtype, src.name);
            let srcValue = 0;
            try {
              srcValue = src.value != null ? src.value : new Roll(src.formula || "0", rollData).roll().total;
            } catch (err) {
              console.error(err, changeTarget, src, this);
            }
            if (src.operator === "set") srcValue = game.i18n.localize("FFD20.SetTo").format(srcValue);
            if (!(src.operator === "add" && srcValue === 0)) {
              sourceDetails[changeTarget].push({
                name: srcInfo,
                value: srcValue,
              });
            }
          }
        }
      }
    }

    this.sourceDetails = sourceDetails;
  }

  _resetInherentTotals() {
    const keys = {
      "data.attributes.ac.normal.total": 10,
      "data.attributes.ac.touch.total": 10,
      "data.attributes.ac.flatFooted.total": 10,
      "data.attributes.cmd.total": 10,
      "data.attributes.cmd.flatFootedTotal": 10,
      "temp.ac.armor": 0,
      "temp.ac.shield": 0,
      "temp.ac.natural": 0,
      "data.attributes.sr.total": 0,
      "data.attributes.init.bonus": 0,
      "data.attributes.init.total": 0,
      "data.attributes.cmb.total": 0,
      "data.attributes.hp.max": getProperty(this.data, "data.attributes.hp.base") ?? 0,
      "data.attributes.vigor.max": getProperty(this.data, "data.attributes.vigor.base") ?? 0,
      "data.attributes.wounds.max": getProperty(this.data, "data.attributes.wounds.base") ?? 0,
      "data.attributes.mp.max": getProperty(this.data, "data.attributes.mp.base") ?? 0,
      "data.attributes.attack.general": 0,
      "data.attributes.attack.melee": 0,
      "data.attributes.attack.ranged": 0,
      "data.attributes.damage.general": 0,
      "data.attributes.damage.weapon": 0,
      "data.attributes.damage.spell": 0,
      "data.attributes.damage.shared": 0,
      "data.attributes.woundThresholds.level": 0,
      "data.attributes.woundThresholds.penaltyBase": 0,
      "data.attributes.woundThresholds.penalty": 0,
    };

    try {
      const skillKeys = getChangeFlat.call(this, "skills", "skills");
      for (let k of skillKeys) {
        keys[k] = 0;
      }
    } catch (err) {
      console.warn("Could not determine skills for an unknown actor in the creation process", this);
    }

    for (const [k, v] of Object.entries(keys)) {
      setProperty(this.data, k, v);
    }
  }

  async refresh() {
    if (this.hasPerm(game.user, "OWNER")) {
      return this.update({});
    }
  }

  /**
   * Prepare Character type specific data
   */
  _prepareCharacterData() {
    if (!hasProperty(this.data, "data.details.level.value")) return;

    // Experience bar
    let prior = this.getLevelExp(this.data.data.details.level.value - 1 || 0),
      max = this.getLevelExp(this.data.data.details.level.value || 1);

    this.data.data.details.xp.pct =
      ((Math.max(prior, Math.min(max, this.data.data.details.xp.value)) - prior) / (max - prior)) * 100 || 0;
  }

  /* -------------------------------------------- */

  /**
   * Prepare NPC type specific data
   */
  _prepareNPCData() {
    setProperty(this.data, "data.details.cr.total", this.getCR());
    // Kill Experience
    try {
      const crTotal = getProperty(this.data, "data.details.cr.total") || 1;
      this.data.data.details.xp.value = this.getCRExp(crTotal);
    } catch (e) {
      this.data.data.details.xp.value = this.getCRExp(1);
    }
  }

  /**
   * Return reduced movement speed.
   * @param {Number} value - The non-reduced movement speed.
   * @returns {Number} The reduced movement speed.
   */
  static getReducedMovementSpeed(value) {
    const incr = 5;

    if (value <= 0) return value;
    if (value < 2 * incr) return incr;
    value = Math.floor(value / incr) * incr;

    let result = 0,
      counter = 2;
    for (let a = incr; a <= value; a += counter * incr) {
      result += incr;
      if (counter === 1) counter = 2;
      else counter = 1;
    }

    return result;
  }

  /**
   * Return increased amount of spell slots by ability score modifier. use this for bonus mp
   * @param {Number} mod - The associated ability modifier.
   * @param {Number} level - Spell level.
   * @returns {Number} Amount of spell levels to increase.
   */
  static getSpellSlotIncrease(mod, level) {
    if (level === 0) return 0;
    if (mod <= 0) return 0;
    return Math.max(0, Math.ceil((mod + 1 - level) / 4));
  }

  /**
   * Use this for Max MP
   * @param {} level 

  /**
   * Return the amount of experience required to gain a certain character level.
   * @param level {Number}  The desired level
   * @return {Number}       The XP required
   */
  getLevelExp(level) {
    const expConfig = game.settings.get("ffd20", "experienceConfig");
    const expTrack = expConfig.track;
    // Preset experience tracks
    if (["fast", "medium", "slow"].includes(expTrack)) {
      const levels = CONFIG.FFD20.CHARACTER_EXP_LEVELS[expTrack];
      return levels[Math.min(level, levels.length - 1)];
    }
    // Custom formula experience track
    let totalXP = 0;
    if (expConfig.custom.formula.length > 0) {
      for (let a = 0; a < level; a++) {
        const rollData = this.getRollData();
        rollData.level = a + 1;
        const roll = new Roll(expConfig.custom.formula, rollData).roll();
        totalXP += roll.total;
      }
    }
    return Math.max(1, totalXP);
  }

    /**
   * Return the amount of MP gained by a class
   * @param level {Number}  The desired level
   * @return {Number}       The XP required
   *
   *  getLevelMP(level) {
   *              const mpConfig = game.settings.get("FFD20", "experienceConfig"); change to looking at casting classes
   *              const MPTrack = mpConfig.track;
   *
   *    if (["low", "med", "high"].includes(MPTrack)) {
   *      const levels = CONFIG.FFD20.CHARACTER_MP_LEVELS[MPTrack];
   *      return levels[Math.min(level, levels.length - 1)];
   *    }
   *    // Custom formula experience track
   *    let totalMP = 0;
   *
   *    return Math.min(0, totalMP);
   *  }
  */

  /* -------------------------------------------- */

  /**
   * Return the amount of experience granted by killing a creature of a certain CR.
   * @param cr {Number}     The creature's challenge rating
   * @return {Number}       The amount of experience granted per kill
   */
  getCRExp(cr) {
    if (cr < 1.0) return Math.max(400 * cr, 10);
    return CONFIG.FFD20.CR_EXP_LEVELS[cr];
  }

  /* -------------------------------------------- */
  /*  Socket Listeners and Handlers
  /* -------------------------------------------- */

  async preUpdate(data) {
    const fullData = mergeObject(this.data, data, { inplace: false });
    data = flattenObject(data);

    // Apply settings
    // Set used spellbook flags
    {
      const re = new RegExp(/^spellbook-([a-zA-Z]+)-inuse$/);
      const sbData = Object.entries(data)
        .filter((o) => {
          const result = o[0].match(re);
          if (result) delete data[o[0]];
          return result;
        })
        .map((o) => {
          return { spellbook: o[0].replace(re, "$1"), inUse: o[1] };
        });

      let usedSpellbooks = [];
      if (data["data.attributes.spells.usedSpellbooks"])
        usedSpellbooks = duplicate(data["data.attributes.spells.usedSpellbooks"]);
      else if (hasProperty(this.data, "data.attributes.spells.usedSpellbooks"))
        usedSpellbooks = duplicate(getProperty(this.data, "data.attributes.spells.usedSpellbooks"));

      for (let o of sbData) {
        if (o.inUse === true && !usedSpellbooks.includes(o.spellbook)) usedSpellbooks.push(o.spellbook);
        else if (o.inUse === false && usedSpellbooks.includes(o.spellbook))
          usedSpellbooks.splice(usedSpellbooks.indexOf(o.spellbook), 1);
      }
      linkData(fullData, data, "data.attributes.spells.usedSpellbooks", usedSpellbooks);
    }

    // Make certain variables absolute
    const _absoluteKeys = Object.keys(this.data.data.abilities)
      .reduce((arr, abl) => {
        arr.push(`data.abilities.${abl}.userPenalty`, `data.abilities.${abl}.damage`, `data.abilities.${abl}.drain`);
        return arr;
      }, [])
      .concat("data.attributes.energyDrain")
      .filter((k) => {
        return data[k] != null;
      });
    for (const k of _absoluteKeys) {
      linkData(fullData, data, k, Math.abs(data[k]));
    }

    // Apply changes in Actor size to Token width/height
    if (data["data.traits.size"] && this.data.data.traits.size !== data["data.traits.size"]) {
      let size = CONFIG.FFD20.tokenSizes[data["data.traits.size"]];
      let tokens = this.isToken ? [this.token] : this.getActiveTokens();
      tokens = tokens.filter((o) => !getProperty(o.data, "flags.ffd20.staticSize"));
      tokens.forEach((o) => {
        o.update({ width: size.w, height: size.h, scale: size.scale });
      });
      if (!this.isToken) {
        linkData(fullData, data, "token.width", size.w);
        linkData(fullData, data, "token.height", size.h);
        linkData(fullData, data, "token.scale", size.scale);
      }
    }

    // Apply changes in resources
    for (let [k, v] of Object.entries(data)) {
      if (k.match(/^data\.resources\.([a-zA-Z0-9]+)\.value$/)) {
        const resKey = RegExp.$1;
        const itemId = getProperty(this.data, `data.resources.${resKey}._id`);
        if (itemId && itemId.length) {
          this._queuedItemUpdates[itemId] = mergeObject(this._queuedItemUpdates[itemId] ?? {}, {
            "data.uses.value": v,
          });
        }
      }
    }

    // Make only 1 fear condition active at most
    {
      const keys = ["shaken", "frightened", "panicked"];
      for (let k of keys) {
        k = `data.attributes.conditions.${k}`;
        if (data[k] === true) {
          for (let k2 of keys) {
            k2 = `data.attributes.conditions.${k2}`;
            if (k2 !== k) data[k2] = false;
          }
        }
      }
    }

    // Update experience
    this._updateExp(data, fullData);

    return data;
  }

  /**
   * Extend the default update method to enhance data before submission.
   * See the parent Entity.update method for full details.
   *
   * @param {Object} data     The data with which to update the Actor
   * @param {Object} options  Additional options which customize the update workflow
   * @return {Promise}        A Promise which resolves to the updated Entity
   */
  async update(data, options = {}) {
    this._pendingUpdateTokens.forEach((token) => {
      token.cancel();
    });
    this._pendingUpdateTokens = [];

    // Avoid regular update flow for explicitly non-recursive update calls
    if (options.recursive === false) {
      return super.update(data, options);
    }

    data = await this.preUpdate(data);

    // Update changes
    let diff = data;

    // Diff token data
    if (data.token != null) {
      diff.token = diffObject(this.data.token, data.token);
    }

    let result = diff;
    if (options.skipUpdate !== true) {
      const token = {};
      this._pendingUpdateTokens.push(token);
      if (Object.keys(diff).length) {
        result = new Promise((resolve) => {
          token.cancel = function () {
            resolve();
          };

          super.update(diff, mergeObject(options, { recursive: true })).then((...args) => {
            this._pendingUpdateTokens.splice(this._pendingUpdateTokens.indexOf(token), 1);
            let promises = [];
            let tokens = [];

            // Toggle condition status icons
            {
              const token = {};
              this._pendingUpdateTokens.push(token);
              tokens.push(token);
              const p = this.toggleConditionStatusIcons(token);
              promises.push(p);
            }
            // Refresh items
            {
              const token = {};
              this._pendingUpdateTokens.push(token);
              tokens.push(token);
              const p = this.refreshItems(token);
              promises.push(p);
            }

            Promise.all(promises).then(() => {
              for (let t of tokens) {
                this._pendingUpdateTokens.splice(this._pendingUpdateTokens.indexOf(t), 1);
              }

              // Update items
              let itemUpdates = Object.entries(this._queuedItemUpdates).reduce((cur, o) => {
                const obj = { _id: o[0] };
                for (let [k, v] of Object.entries(o[1])) {
                  obj[k] = v;
                }
                cur.push(obj);
                return cur;
              }, []);
              this.updateEmbeddedEntity("OwnedItem", itemUpdates).then(() => {
                this._queuedItemUpdates = {};
                resolve();
              });
            });
          });
        });
      }
    }
    return result;
  }

  refreshItems(token) {
    return new Promise((resolve) => {
      if (token) {
        token.cancel = function () {
          resolve();
        };
      }

      const items = Array.from(this.items);
      const updates = items.map((o) => o.update({}, { skipUpdate: true }));
      Promise.all(updates).then((results) => {
        const values = results.filter((o) => {
          return o != null ? Object.keys(o).length > 1 : false;
        });

        if (values.length > 0) {
          this.updateOwnedItem(values).then(() => {
            if (token) {
              this._pendingUpdateTokens.splice(this._pendingUpdateTokens.indexOf(token), 1);
            }
            resolve();
          });
        } else {
          if (token) {
            this._pendingUpdateTokens.splice(this._pendingUpdateTokens.indexOf(token), 1);
          }
          resolve();
        }
      });
    });
  }

  _onUpdate(data, options, userId, context) {
    for (let k of Object.keys(data)) {
      if (k.startsWith("data.attributes.vision")) {
        canvas.sight.initializeTokens();
      }
    }

    super._onUpdate(data, options, userId, context);
  }

  /**
   * Makes sure experience values are correct in update data.
   * @param {Object} data - The update data, as per ActorFFD20.update()
   */
  _updateExp(updateData, fullData) {
    // Get total level
    const classes = fullData.items.filter((o) => o.type === "class" && o.data.countforexp === "exp");
    const level = classes.filter((o) => o.data.classType !== "mythic").reduce((cur, o) => cur + o.data.level, 0);

    // The following is not for NPCs
    if (this.data.type !== "character") return;

    if (updateData["data.details.xp.value"] == null) return;

    // Translate update exp value to number
    let newExp = updateData["data.details.xp.value"],
      resetExp = false;
    if (typeof newExp === "string") {
      const curExp =
        typeof this.data.data.details.xp.value === "number"
          ? this.data.data.details.xp.value
          : parseInt(this.data.data.details.xp.value);
      if (newExp.match(/^\+([0-9]+)$/)) {
        newExp = curExp + parseInt(RegExp.$1);
      } else if (newExp.match(/^-([0-9]+)$/)) {
        newExp = curExp - parseInt(RegExp.$1);
      } else if (newExp === "") {
        resetExp = true;
      } else if (newExp.match(/^([0-9]+)$/)) {
        newExp = parseInt(newExp);
      } else {
        newExp = curExp;
      }

      updateData["data.details.xp.value"] = newExp;
    }
    const maxExp = this.getLevelExp(level);
    updateData["data.details.xp.max"] = maxExp;

    if (resetExp) {
      const minExp = level > 0 ? this.getLevelExp(level - 1) : 0;
      updateData["data.details.xp.value"] = minExp;
    }
  }

  async _onCreate(data, options, userId, context) {
    if (data.type === "character") this.update({ "token.actorLink": true }, { updateChanges: false });

    super._onCreate(data, options, userId, context);
  }

  updateItemResources(itemData) {
    if (!this.hasPerm(game.user, "OWNER")) return;

    const activationType = game.settings.get("ffd20", "unchainedActionEconomy")
      ? itemData.data.unchainedAction?.activation?.type
      : itemData.data.activation?.type;
    if (itemData.data.uses?.per && activationType) {
      const itemTag = !itemData.data.useCustomTag ? createTag(itemData.name) : itemData.data.tag;
      const resKey = `data.resources.${itemTag}`;
      let curUses = itemData.data.uses;

      const res = { value: 0, max: 0, _id: null };
      setProperty(this.data, resKey, res);
      res.value = curUses.value;
      res.max = curUses.max;
      res._id = itemData._id;
      return true;
    }

    return false;
  }

  /* -------------------------------------------- */

  /**
   * See the base Actor class for API documentation of this method
   */
  async createOwnedItem(itemData, options) {
    let t = itemData.type;
    let initial = {};
    // Assume NPCs are always proficient with weapons and always have spells prepared
    const hasPlayerOwner = this.hasPlayerOwner;
    if (!hasPlayerOwner) {
      if (t === "weapon") initial["data.proficient"] = true;
      if (["weapon", "equipment"].includes(t)) initial["data.equipped"] = true;
    }
    if (t === "spell") {
      if (this.sheet != null && this.sheet._spellbookTab != null) {
        initial["data.spellbook"] = this.sheet._spellbookTab;
      }
    }

    // Alter change ids
    for (const c of getProperty(itemData, "data.changes") || []) {
      c._id = randomID(8);
    }

    mergeObject(itemData, initial);
    return super.createOwnedItem(itemData, options);
  }

  /* -------------------------------------------- */
  /*  Rolls                                       */
  /* -------------------------------------------- */

  /**
   * Cast a Spell, consuming a spell slot of a certain level
   * @param {ItemFFD20} item   The spell being cast by the actor
   * @param {MouseEvent} ev The click event
   */
  async useSpell(item, ev, { skipDialog = false } = {}) {
    if (!this.hasPerm(game.user, "OWNER")) {
      const msg = game.i18n.localize("FFD20.ErrorNoActorPermissionAlt").format(this.name);
      console.warn(msg);
      return ui.notifications.warn(msg);
    }
    if (item.data.type !== "spell") throw new Error("Wrong Item type");

    if (
      getProperty(item.data, "data.preparation.mode") !== "atwill" &&
      item.getSpellUses() < item.chargeCost &&
      item.autoDeductCharges
    ) {
      const msg = game.i18n.localize("FFD20.ErrorNoSpellsLeft");
      console.warn(msg);
      return ui.notifications.warn(msg);
    }

    // Invoke the Item roll
    return item.useAttack({ ev: ev, skipDialog: skipDialog });
  }

  async createAttackFromWeapon(item) {
    if (!this.hasPerm(game.user, "OWNER")) {
      const msg = game.i18n.localize("FFD20.ErrorNoActorPermissionAlt").format(this.name);
      console.warn(msg);
      return ui.notifications.warn(msg);
    }

    if (item.data.type !== "weapon") throw new Error("Wrong Item type");

    // Get attack template
    let attackData = { data: {} };
    for (const template of game.data.system.template.Item.attack.templates) {
      mergeObject(attackData.data, game.data.system.template.Item.templates[template]);
    }
    mergeObject(attackData.data, duplicate(game.data.system.template.Item.attack));
    attackData = flattenObject(attackData);

    // Add ability modifiers
    const isMelee = getProperty(item.data, "data.weaponSubtype") !== "ranged";

    if (isMelee)
      attackData["data.ability.attack"] = getProperty(this.data, "data.attributes.attack.meleeAbility") || "str";
    else attackData["data.ability.attack"] = getProperty(this.data, "data.attributes.attack.rangedAbility") || "dex";

    if (isMelee) {
      attackData["data.ability.damage"] = "str";
      if (item.data.data.weaponSubtype === "2h" && isMelee) {
        attackData["data.ability.damageMult"] = 1.5;
        attackData["data.held"] = "2h";
      }
    }

    // Add misc things
    attackData["type"] = "attack";
    attackData["name"] = item.data.name;
    attackData["data.masterwork"] = item.data.data.masterwork;
    attackData["data.nonlethal"] = item.data.data.nonlethal;
    attackData["data.attackType"] = "weapon";
    attackData["data.enh"] = item.data.data.enh;
    attackData["data.ability.critRange"] = item.data.data.weaponData.critRange || 20;
    attackData["data.ability.critMult"] = item.data.data.weaponData.critMult || 2;
    attackData["data.actionType"] = isMelee ? "mwak" : "rwak";
    attackData["data.activation.type"] = "attack";
    attackData["data.duration.units"] = "inst";
    attackData["data.range.units"] = "melee";
    attackData["data.broken"] = item.data.data.broken;
    attackData["data.range.maxIncrements"] = item.data.data.weaponData.maxRangeIncrements;
    attackData["img"] = item.data.img;

    // Add additional attacks
    let extraAttacks = [];
    for (let a = 5; a < this.data.data.attributes.bab.total; a += 5) {
      extraAttacks = extraAttacks.concat([[`-${a}`, `${game.i18n.localize("FFD20.Attack")} ${Math.floor((a + 5) / 5)}`]]);
    }
    if (extraAttacks.length > 0) attackData["data.attackParts"] = extraAttacks;

    // Add damage formula
    if (item.data.data.weaponData.damageRoll) {
      const die = item.data.data.weaponData.damageRoll || "1d4";
      let part = die;
      let dieCount = 1,
        dieSides = 4;
      if (die.match(/^([0-9]+)d([0-9]+)$/)) {
        dieCount = parseInt(RegExp.$1);
        dieSides = parseInt(RegExp.$2);
        // const weaponSize = Object.keys(CONFIG.FFD20.sizeChart).indexOf(item.data.data.weaponData.size) - 4;
        part = `sizeRoll(${dieCount}, ${dieSides}, @size)`;
      }
      const bonusFormula = getProperty(item.data, "data.weaponData.damageFormula");
      if (bonusFormula != null && bonusFormula.length) part = `${part} + ${bonusFormula}`;
      attackData["data.damage.parts"] = [[part, item.data.data.weaponData.damageType || ""]];
    }

    // Add attack bonus formula
    {
      const bonusFormula = getProperty(item.data, "data.weaponData.attackFormula");
      if (bonusFormula != null && bonusFormula.length) attackData["data.attackBonus"] = bonusFormula;
    }

    // Set reach
    if (isMelee && getProperty(item.data, "data.properties.rch") === true) {
      attackData["data.range.units"] = "reach";
    }

    // Add range
    if (!isMelee && getProperty(item.data, "data.weaponData.range") != null) {
      attackData["data.range.units"] = "ft";
      attackData["data.range.value"] = getProperty(item.data, "data.weaponData.range").toString();
    }

    // Create attack
    if (hasProperty(attackData, "data.templates")) delete attackData["data.templates"];
    const itemData = await this.createOwnedItem(expandObject(attackData));

    // Create link
    if (itemData.type === "attack") {
      // check for correct itemData, Foundry #3419
      const newItem = this.items.find((o) => o._id === itemData._id);
      if (newItem) {
        await item.createItemLink("children", "data", newItem, itemData._id);
      }
    }

    ui.notifications.info(game.i18n.localize("FFD20.NotificationCreatedAttack").format(item.data.name));
  }

  /* -------------------------------------------- */

  getSkillInfo(skillId) {
    let skl,
      sklName,
      parentSkill,
      isCustom = false;
    const skillParts = skillId.split("."),
      isSubSkill = skillParts[1] === "subSkills" && skillParts.length === 3;
    if (isSubSkill) {
      skillId = skillParts[0];
      if (!this.data.data.skills[skillId].subSkills[skillParts[2]]) return null;
      skl = this.data.data.skills[skillId].subSkills[skillParts[2]];
      sklName = `${CONFIG.FFD20.skills[skillId]} (${skl.name})`;
      parentSkill = this.getSkillInfo(skillId);
    } else {
      skl = this.data.data.skills[skillId];
      if (!skl) return null;
      if (skl.name != null) {
        sklName = skl.name;
        isCustom = true;
      } else sklName = CONFIG.FFD20.skills[skillId];
    }

    const result = {
      id: skillId,
      name: sklName,
      isCustom: isCustom,
      rt: skl.rt,
      rank: skl.rank,
      bonus: skl.mod,
    };

    if (parentSkill) {
      result.parentSkill = parentSkill;
    }

    return result;
  }

  /**
   * Roll a Skill Check
   * Prompt the user for input regarding Advantage/Disadvantage and any Situational Bonus
   * @param {string} skillId      The skill id (e.g. "ins")
   * @param {Object} options      Options which configure how the skill check is rolled
   */
  rollSkill(skillId, options = { event: null, skipDialog: false, staticRoll: null, noSound: false, dice: "1d20" }) {
    if (!this.hasPerm(game.user, "OWNER")) {
      const msg = game.i18n.localize("FFD20.ErrorNoActorPermissionAlt").format(this.name);
      console.warn(msg);
      return ui.notifications.warn(msg);
    }

    const allowed = Hooks.call("actorRoll", this, "skill", skillId, options);
    if (allowed === false) return;

    let skl, sklName;
    const data = this.data.data,
      skillParts = skillId.split("."),
      isSubSkill = skillParts[1] === "subSkills" && skillParts.length === 3;
    if (isSubSkill) {
      skillId = skillParts[0];
      skl = data.skills[skillId].subSkills[skillParts[2]];
      sklName = `${CONFIG.FFD20.skills[skillId]} (${skl.name})`;
    } else {
      skl = data.skills[skillId];
      if (skl.name != null) sklName = skl.name;
      else sklName = CONFIG.FFD20.skills[skillId];
    }

    // Add contextual attack string
    let notes = [];
    let rollData = this.getRollData();
    const noteObjects = this.getContextNotes(`skill.${isSubSkill ? skillParts[2] : skillId}`);
    for (let noteObj of noteObjects) {
      rollData.item = {};
      if (noteObj.item != null) rollData = noteObj.item.getRollData();

      for (let note of noteObj.notes) {
        notes.push(...note.split(/[\n\r]+/).map((o) => TextEditor.enrichHTML(o, { rollData: rollData })));
      }
    }
    // Add untrained note
    if (skl.rt && skl.rank === 0) {
      notes.push(game.i18n.localize("FFD20.Untrained"));
    }

    // Build base modifiers, but don't include all if they're zeroed.
    let mods = [skl.mod];

    let props = [];
    if (notes.length > 0) props.push({ header: "Notes", value: notes });
    return DiceFFD20.d20Roll({
      event: options.event,
      fastForward: options.skipDialog === true,
      staticRoll: options.staticRoll,
      parts: mods.filter((m) => !!m),
      dice: options.dice,
      data: {},
      title: game.i18n.localize("FFD20.SkillCheck").format(sklName),
      speaker: ChatMessage.getSpeaker({ actor: this }),
      chatTemplate: "systems/ffd20/templates/chat/roll-ext.hbs",
      chatTemplateData: { hasProperties: props.length > 0, properties: props },
      noSound: options.noSound,
      compendiumEntry: CONFIG.FFD20.skillCompendiumEntries[skillId],
    });
  }

  /* -------------------------------------------- */

  /**
   * Roll a generic ability test or saving throw.
   * Prompt the user for input on which variety of roll they want to do.
   * @param {String} abilityId     The ability id (e.g. "str")
   * @param {Object} options      Options which configure how ability tests or saving throws are rolled
   */
  rollAbility(abilityId, options = { noSound: false, dice: "1d20" }) {
    this.rollAbilityTest(abilityId, options);
  }

  rollBAB(options = { noSound: false, dice: "1d20" }) {
    if (!this.hasPerm(game.user, "OWNER")) {
      const msg = game.i18n.localize("FFD20.ErrorNoActorPermissionAlt").format(this.name);
      console.warn(msg);
      return ui.notifications.warn(msg);
    }

    const allowed = Hooks.call("actorRoll", this, "bab", null, options);
    if (allowed === false) return;

    return DiceFFD20.d20Roll({
      event: options.event,
      parts: ["@mod"],
      dice: options.dice,
      data: { mod: this.data.data.attributes.bab.total },
      title: game.i18n.localize("FFD20.BAB"),
      speaker: ChatMessage.getSpeaker({ actor: this }),
      takeTwenty: false,
      noSound: options.noSound,
    });
  }

  rollCMB(options = { noSound: false, dice: "1d20" }) {
    if (!this.hasPerm(game.user, "OWNER")) {
      const msg = game.i18n.localize("FFD20.ErrorNoActorPermissionAlt").format(this.name);
      console.warn(msg);
      return ui.notifications.warn(msg);
    }

    const allowed = Hooks.call("actorRoll", this, "cmb", null, options);
    if (allowed === false) return;

    // Add contextual notes
    let notes = [];
    let rollData = this.getRollData();
    const noteObjects = this.getContextNotes("misc.cmb");
    for (let noteObj of noteObjects) {
      rollData.item = {};
      if (noteObj.item != null) rollData = noteObj.item.getRollData();

      for (let note of noteObj.notes) {
        notes.push(...note.split(/[\n\r]+/).map((o) => TextEditor.enrichHTML(o, { rollData: rollData })));
      }
    }
    // Add grapple note
    if (this.data.data.attributes.conditions.grappled) {
      notes.push("+2 to Grapple");
    }

    let props = [];
    if (notes.length > 0) props.push({ header: game.i18n.localize("FFD20.Notes"), value: notes });
    return DiceFFD20.d20Roll({
      event: options.event,
      parts: ["@mod"],
      dice: options.dice,
      data: { mod: this.data.data.attributes.cmb.total },
      title: game.i18n.localize("FFD20.CMB"),
      speaker: ChatMessage.getSpeaker({ actor: this }),
      takeTwenty: false,
      chatTemplate: "systems/ffd20/templates/chat/roll-ext.hbs",
      chatTemplateData: { hasProperties: props.length > 0, properties: props },
      noSound: options.noSound,
    });
  }

  rollAttack(options = { melee: true, noSound: false, dice: "1d20" }) {
    if (!this.hasPerm(game.user, "OWNER")) {
      const msg = game.i18n.localize("FFD20.ErrorNoActorPermissionAlt").format(this.name);
      console.warn(msg);
      return ui.notifications.warn(msg);
    }

    const sources = [
      ...this.sourceDetails["data.attributes.attack.shared"],
      // ...this.sourceDetails["data.attributes.attack.general"],
      // ...this.sourceDetails[`data.attributes.attack.${options.melee ? "melee" : "ranged"}`],
    ];

    // Add contextual notes
    let notes = [];
    let rollData = this.getRollData();
    const noteObjects = [...this.getContextNotes("attacks.effect"), ...this.getContextNotes("attacks.attack")];
    for (let noteObj of noteObjects) {
      rollData.item = {};
      if (noteObj.item != null) rollData = noteObj.item.getRollData();

      for (let note of noteObj.notes) {
        notes.push(...note.split(/[\n\r]+/).map((o) => TextEditor.enrichHTML(o, { rollData: rollData })));
      }
    }
    rollData.item = {};

    let changes = sources.map((item) => item.value).filter((item) => Number.isInteger(item));

    // Add attack bonuses from changes
    const attackTargets = ["attack"].concat(options.melee ? ["mattack"] : ["rattack"]);
    const attackChanges = this.changes.filter((c) => {
      return attackTargets.includes(c.subTarget);
    });
    changes.push(
      ...attackChanges.map((c) => {
        c.applyChange(this);
        return c.value;
      })
    );

    // Add ability modifier
    const atkAbl = getProperty(this.data, `data.attributes.attack.${options.melee ? "melee" : "ranged"}Ability`);
    changes.push(getProperty(this.data, `data.abilities.${atkAbl}.mod`));

    let props = [];
    if (notes.length > 0) props.push({ header: game.i18n.localize("FFD20.Notes"), value: notes });
    return DiceFFD20.d20Roll({
      event: options.event,
      parts: changes,
      dice: options.dice,
      data: rollData,
      title: game.i18n.localize(`FFD20.${options.melee ? "Melee" : "Ranged"}`),
      speaker: ChatMessage.getSpeaker({ actor: this }),
      takeTwenty: false,
      chatTemplate: "systems/ffd20/templates/chat/roll-ext.hbs",
      chatTemplateData: { hasProperties: props.length > 0, properties: props },
      noSound: options.noSound,
    });
  }

  rollCL(spellbookKey, options = { noSound: false, dice: "1d20" }) {
    const spellbook = this.data.data.attributes.spells.spellbooks[spellbookKey];
    const rollData = duplicate(this.getRollData());
    rollData.cl = spellbook.cl.total;

    const allowed = Hooks.call("actorRoll", this, "cl", spellbookKey, options);
    if (allowed === false) return;

    // Add contextual caster level string
    const notes = this.getContextNotesParsed(`spell.cl.${spellbookKey}`);

    // Wound Threshold penalty
    const wT = this.getWoundThresholdData();
    if (wT.valid) notes.push(game.i18n.localize(CONFIG.FFD20.woundThresholdConditions[wT.level]));

    let props = [];
    if (notes.length > 0) props.push({ header: game.i18n.localize("FFD20.Notes"), value: notes });
    return DiceFFD20.d20Roll({
      event: event,
      parts: [`@cl`],
      data: rollData,
      title: game.i18n.localize("FFD20.CasterLevelCheck"),
      speaker: ChatMessage.getSpeaker({ actor: this }),
      takeTwenty: false,
      chatTemplate: "systems/ffd20/templates/chat/roll-ext.hbs",
      chatTemplateData: { hasProperties: props.length > 0, properties: props },
      noSound: options.noSound,
    });
  }

  rollConcentration(spellbookKey, options = { noSound: false, dice: "1d20" }) {
    const spellbook = this.data.data.attributes.spells.spellbooks[spellbookKey];
    const rollData = duplicate(this.getRollData());
    rollData.cl = spellbook.cl.total;
    rollData.mod = this.data.data.abilities[spellbook.ability].mod;
    rollData.concentrationBonus = spellbook.concentration;

    const allowed = Hooks.call("actorRoll", this, "concentration", spellbookKey, options);
    if (allowed === false) return;

    // Add contextual concentration string
    const notes = this.getContextNotesParsed(`spell.concentration.${spellbookKey}`);

    // Wound Threshold penalty
    const wT = this.getWoundThresholdData();
    if (wT.valid) notes.push(game.i18n.localize(CONFIG.FFD20.woundThresholdConditions[wT.level]));
    // TODO: Make the penalty show separate of the CL.total.

    let props = [];
    if (notes.length > 0) props.push({ header: game.i18n.localize("FFD20.Notes"), value: notes });

    let formulaRoll = 0;
    if (spellbook.concentrationFormula.length)
      formulaRoll = new Roll(spellbook.concentrationFormula, rollData).roll().total;
    rollData.formulaBonus = formulaRoll;

    return DiceFFD20.d20Roll({
      event: event,
      parts: ["@cl + @mod + @concentrationBonus + @formulaBonus"],
      dice: options.dice,
      data: rollData,
      title: game.i18n.localize("FFD20.ConcentrationCheck"),
      speaker: ChatMessage.getSpeaker({ actor: this }),
      takeTwenty: false,
      chatTemplate: "systems/ffd20/templates/chat/roll-ext.hbs",
      chatTemplateData: { hasProperties: props.length > 0, properties: props },
      noSound: options.noSound,
    });
  }

  getDefenseHeaders() {
    const data = this.data.data;
    const headers = [];

    const reSplit = CONFIG.FFD20.re.traitSeparator;
    let misc = [];

    // Damage reduction
    if (data.traits.dr.length) {
      headers.push({ header: game.i18n.localize("FFD20.DamRed"), value: data.traits.dr.split(reSplit) });
    }
    // Energy resistance
    if (data.traits.eres.length) {
      headers.push({ header: game.i18n.localize("FFD20.EnRes"), value: data.traits.eres.split(reSplit) });
    }
    // Damage vulnerabilities
    if (data.traits.dv.value.length || data.traits.dv.custom.length) {
      const value = [].concat(
        data.traits.dv.value.map((obj) => {
          return CONFIG.FFD20.damageTypes[obj];
        }),
        data.traits.dv.custom.length > 0 ? data.traits.dv.custom.split(";") : []
      );
      headers.push({ header: game.i18n.localize("FFD20.DamVuln"), value: value });
    }
    // Condition resistance
    if (data.traits.cres.length) {
      headers.push({ header: game.i18n.localize("FFD20.ConRes"), value: data.traits.cres.split(reSplit) });
    }
    // Immunities
    if (
      data.traits.di.value.length ||
      data.traits.di.custom.length ||
      data.traits.ci.value.length ||
      data.traits.ci.custom.length
    ) {
      const value = [].concat(
        data.traits.di.value.map((obj) => {
          return CONFIG.FFD20.damageTypes[obj];
        }),
        data.traits.di.custom.length > 0 ? data.traits.di.custom.split(";") : [],
        data.traits.ci.value.map((obj) => {
          return CONFIG.FFD20.conditionTypes[obj];
        }),
        data.traits.ci.custom.length > 0 ? data.traits.ci.custom.split(";") : []
      );
      headers.push({ header: game.i18n.localize("FFD20.ImmunityPlural"), value: value });
    }
    // Spell Resistance
    if (data.attributes.sr.total > 0) {
      misc.push(game.i18n.localize("FFD20.SpellResistanceNote").format(data.attributes.sr.total));
    }

    if (misc.length > 0) {
      headers.push({ header: game.i18n.localize("FFD20.MiscShort"), value: misc });
    }

    return headers;
  }

  getInitiativeContextNotes() {
    let notes = this.getContextNotes("misc.init").reduce((arr, o) => {
      for (let n of o.notes) arr.push(...n.split(/[\n\r]+/));
      return arr;
    }, []);

    let notesHTML;
    if (notes.length > 0) {
      // Format notes if they're present
      let notesHTMLParts = [];
      notes.forEach((note) => notesHTMLParts.push(`<span class="tag">${note}</span>`));
      notesHTML =
        '<div class="flexcol property-group gm-sensitive"><label>' +
        game.i18n.localize("FFD20.Notes") +
        '</label> <div class="flexrow">' +
        notesHTMLParts.join("") +
        "</div></div>";
    }

    return [notes, notesHTML];
  }

  async rollInitiative({ createCombatants = false, rerollInitiative = false, initiativeOptions = {} } = {}) {
    // Obtain (or create) a combat encounter
    let combat = game.combat;
    if (!combat) {
      if (game.user.isGM && canvas.scene) {
        combat = await game.combats.object.create({ scene: canvas.scene._id, active: true });
      } else {
        ui.notifications.warn(game.i18n.localize("COMBAT.NoneActive"));
        return null;
      }
    }

    // Create new combatants
    if (createCombatants) {
      const tokens = this.isToken ? [this.token] : this.getActiveTokens();
      const createData = tokens.reduce((arr, t) => {
        if (t.inCombat) return arr;
        arr.push({ tokenId: t.id, hidden: t.data.hidden });
        return arr;
      }, []);
      await combat.createEmbeddedEntity("Combatant", createData);
    }

    // Iterate over combatants to roll for
    const combatantIds = combat.combatants.reduce((arr, c) => {
      if (c.actor.id !== this.id || (this.isToken && c.tokenId !== this.token.id)) return arr;
      if (c.initiative && !rerollInitiative) return arr;
      arr.push(c._id);
      return arr;
    }, []);
    return combatantIds.length ? combat.rollInitiative(combatantIds, initiativeOptions) : combat;
  }

  rollSavingThrow(savingThrowId, options = { event: null, noSound: false, skipPrompt: true, dice: "1d20" }) {
    if (!this.hasPerm(game.user, "OWNER")) {
      const msg = game.i18n.localize("FFD20.ErrorNoActorPermissionAlt").format(this.name);
      console.warn(msg);
      return ui.notifications.warn(msg);
    }

    const allowed = Hooks.call("actorRoll", this, "save", savingThrowId, options);
    if (allowed === false) return;

    // Add contextual notes
    let notes = [];
    let rollData = this.getRollData();
    const noteObjects = this.getContextNotes(`savingThrow.${savingThrowId}`);
    for (let noteObj of noteObjects) {
      rollData.item = {};
      if (noteObj.item != null) rollData = noteObj.item.getRollData();

      for (let note of noteObj.notes) {
        notes.push(...note.split(/[\n\r]+/).map((o) => TextEditor.enrichHTML(o, { rollData: rollData })));
      }
    }

    const changes = this.sourceDetails[`data.attributes.savingThrows.${savingThrowId}.total`];
    const abl = getProperty(this.data, `data.attributes.savingThrows.${savingThrowId}.ability`);
    const ablMod = getProperty(this.data, `data.abilities.${abl}.mod`);
    let mods = changes.map((item) => item.value);
    if (ablMod === 0) mods.unshift(0); // Include missing 0 ability modifier in front

    // Wound Threshold penalty
    if (rollData.attributes.woundThresholds.penalty > 0)
      notes.push(game.i18n.localize(CONFIG.FFD20.woundThresholdConditions[rollData.attributes.woundThresholds.level]));

    // Roll saving throw
    let props = this.getDefenseHeaders();
    if (notes.length > 0) props.push({ header: game.i18n.localize("FFD20.Notes"), value: notes });
    const label = CONFIG.FFD20.savingThrows[savingThrowId];
    const savingThrow = this.data.data.attributes.savingThrows[savingThrowId];
    return DiceFFD20.d20Roll({
      event: options.event,
      parts: mods,
      dice: options.dice,
      situational: true,
      data: {},
      title: game.i18n.localize("FFD20.SavingThrowRoll").format(label),
      speaker: ChatMessage.getSpeaker({ actor: this }),
      takeTwenty: false,
      fastForward: options.skipPrompt !== false ? true : false,
      chatTemplate: "systems/ffd20/templates/chat/roll-ext.hbs",
      chatTemplateData: { hasProperties: props.length > 0, properties: props },
      noSound: options.noSound,
    });
  }

  /* -------------------------------------------- */

  /**
   * Roll an Ability Test
   * Prompt the user for input regarding Advantage/Disadvantage and any Situational Bonus
   * @param {String} abilityId    The ability ID (e.g. "str")
   * @param {Object} options      Options which configure how ability tests are rolled
   */
  rollAbilityTest(abilityId, options = { noSound: false, dice: "1d20" }) {
    if (!this.hasPerm(game.user, "OWNER")) {
      const msg = game.i18n.localize("FFD20.ErrorNoActorPermissionAlt").format(this.name);
      console.warn(msg);
      return ui.notifications.warn(msg);
    }

    const allowed = Hooks.call("actorRoll", this, "ability", abilityId, options);
    if (allowed === false) return;

    // Add contextual notes
    let notes = [];
    let rollData = this.getRollData();
    const noteObjects = this.getContextNotes(`abilityChecks.${abilityId}`);
    for (let noteObj of noteObjects) {
      rollData.item = {};
      if (noteObj.item != null) rollData = noteObj.item.getRollData();

      for (let note of noteObj.notes) {
        notes.push(...note.split(/[\n\r]+/).map((o) => TextEditor.enrichHTML(o, { rollData: rollData })));
      }
    }

    const label = CONFIG.FFD20.abilities[abilityId];
    const abl = this.data.data.abilities[abilityId];

    let formula = `@abilities.${abilityId}.mod`;
    if (abl.checkMod) {
      formula += ` + @abilities.${abilityId}.checkMod`;
    }
    if (this.data.data.attributes.energyDrain) {
      formula += " - @attributes.energyDrain";
    }

    // Wound Threshold penalty
    if (rollData.attributes.woundThresholds.penalty > 0)
      notes.push(game.i18n.localize(CONFIG.FFD20.woundThresholdConditions[rollData.attributes.woundThresholds.level]));

    let props = this.getDefenseHeaders();
    if (notes.length > 0) props.push({ header: "Notes", value: notes });

    return DiceFFD20.d20Roll({
      event: options.event,
      parts: [formula],
      dice: options.dice,
      data: rollData,
      title: game.i18n.localize("FFD20.AbilityTest").format(label),
      speaker: ChatMessage.getSpeaker({ actor: this }),
      chatTemplate: "systems/ffd20/templates/chat/roll-ext.hbs",
      chatTemplateData: { hasProperties: props.length > 0, properties: props },
      noSound: options.noSound,
    });
  }

  /**
   * Show defenses in chat
   */
  async rollDefenses() {
    if (!this.hasPerm(game.user, "OWNER")) {
      const msg = game.i18n.localize("FFD20.ErrorNoActorPermissionAlt").format(this.name);
      console.warn(msg);
      return ui.notifications.warn(msg);
    }
    let rollData = this.getRollData();

    // Add contextual AC notes
    let acNotes = [];
    if (this.data.data.attributes.acNotes.length > 0) acNotes = this.data.data.attributes.acNotes.split(/[\n\r]+/);
    const acNoteObjects = this.getContextNotes("misc.ac");
    for (let noteObj of acNoteObjects) {
      rollData.item = {};
      if (noteObj.item != null) rollData = noteObj.item.getRollData();

      for (let note of noteObj.notes) {
        acNotes.push(...note.split(/[\n\r]+/).map((o) => TextEditor.enrichHTML(o, { rollData: rollData })));
      }
    }

    // Add contextual CMD notes
    let cmdNotes = [];
    if (this.data.data.attributes.cmdNotes.length > 0) cmdNotes = this.data.data.attributes.cmdNotes.split(/[\n\r]+/);
    const cmdNoteObjects = this.getContextNotes("misc.cmd");
    for (let noteObj of cmdNoteObjects) {
      rollData.item = {};
      if (noteObj.item != null) rollData = noteObj.item.getRollData();

      for (let note of noteObj.notes) {
        cmdNotes.push(...note.split(/[\n\r]+/).map((o) => TextEditor.enrichHTML(o, { rollData: rollData })));
      }
    }

    // Add contextual SR notes
    let srNotes = [];
    if (this.data.data.attributes.srNotes.length > 0) srNotes = this.data.data.attributes.srNotes.split(/[\n\r]+/);
    const srNoteObjects = this.getContextNotes("misc.sr");
    for (let noteObj of srNoteObjects) {
      rollData.item = {};
      if (noteObj.item != null) rollData = noteObj.item.getRollData();

      for (let note of noteObj.notes) {
        srNotes.push(...note.split(/[\n\r]+/).map((o) => TextEditor.enrichHTML(o, { rollData: rollData })));
      }
    }

    // Add misc data
    const reSplit = CONFIG.FFD20.re.traitSeparator;
    // Damage Reduction
    let drNotes = [];
    if (this.data.data.traits.dr.length) {
      drNotes = this.data.data.traits.dr.split(reSplit);
    }
    // Energy Resistance
    let energyResistance = [];
    if (this.data.data.traits.eres.length) {
      energyResistance.push(...this.data.data.traits.eres.split(reSplit));
    }
    // Damage Immunity
    if (this.data.data.traits.di.value.length || this.data.data.traits.di.custom.length) {
      const values = [
        ...this.data.data.traits.di.value.map((obj) => {
          return CONFIG.FFD20.damageTypes[obj];
        }),
        ...(this.data.data.traits.di.custom.length > 0 ? this.data.data.traits.di.custom.split(reSplit) : []),
      ];
      energyResistance.push(...values.map((o) => game.i18n.localize("FFD20.ImmuneTo").format(o)));
    }
    // Damage Vulnerability
    if (this.data.data.traits.dv.value.length || this.data.data.traits.dv.custom.length) {
      const values = [
        ...this.data.data.traits.dv.value.map((obj) => {
          return CONFIG.FFD20.damageTypes[obj];
        }),
        ...(this.data.data.traits.dv.custom.length > 0 ? this.data.data.traits.dv.custom.split(reSplit) : []),
      ];
      energyResistance.push(...values.map((o) => game.i18n.localize("FFD20.VulnerableTo").format(o)));
    }

    // Wound Threshold penalty
    const wT = this.getWoundThresholdData();
    if (wT.valid) {
      const wTlabel = game.i18n.localize(CONFIG.FFD20.woundThresholdConditions[wT.level]);
      acNotes.push(wTlabel);
      cmdNotes.push(wTlabel);
    }

    // Create message
    const d = this.data.data;
    const data = {
      actor: this,
      name: this.name,
      tokenId: this.token ? `${this.token.scene._id}.${this.token.id}` : null,
      ac: {
        normal: d.attributes.ac.normal.total,
        touch: d.attributes.ac.touch.total,
        flatFooted: d.attributes.ac.flatFooted.total,
        notes: acNotes,
      },
      cmd: {
        normal: d.attributes.cmd.total,
        flatFooted: d.attributes.cmd.flatFootedTotal,
        notes: cmdNotes,
      },
      misc: {
        sr: d.attributes.sr.total,
        srNotes: srNotes,
        drNotes: drNotes,
        energyResistance: energyResistance,
      },
    };
    // Add regeneration and fast healing
    if ((getProperty(d, "traits.fastHealing") || "").length || (getProperty(d, "traits.regen") || "").length) {
      data.regen = {
        regen: d.traits.regen,
        fastHealing: d.traits.fastHealing,
      };
    }
    const msg = await createCustomChatMessage("systems/ffd20/templates/chat/defenses.hbs", data, {
      speaker: ChatMessage.getSpeaker({ actor: this }),
    });
  }

  /* -------------------------------------------- */

  /**
   * Apply rolled dice damage to the token or tokens which are currently controlled.
   * This allows for damage to be scaled by a multiplier to account for healing, critical hits, or resistance
   * If Shift is held, will prompt for adjustments based on damage reduction and energy resistances
   *
   * @param {Number} value   The amount of damage to deal.
   * @param {Object} {}      Object containing default settings for overriding
   * @return {Promise}
   */
  static async applyDamage(value, { forceDialog = false, reductionDefault = "", asNonlethal = false } = {}) {
    const promises = [];
    var controlled = canvas.tokens.controlled,
      healingInvert = 1,
      numReg = /(\d+)/g,
      sliceReg = /[^,;\n]*(\d+)[^,;\n]*/g;

    //if (!controlled) return;

    const _submit = async function (form, multiplier) {
      if (form) {
        value = form.find('[name="damage"]').val();
        let dR = form.find('[name="damage-reduction"]').val();
        value = value.length ? new Roll(value).roll().total : 0;
        dR = dR.length ? new Roll(dR).roll().total : 0;
        if (multiplier < 0) {
          value = Math.ceil(value * multiplier);
          value = Math.min(value - dR, 0);
        } else {
          value = Math.floor(value * (multiplier ?? 1));
          value = Math.max(value - dR, 0);
        }
        let checked = [...form.find(".tokenAffected:checked")].map((tok) => tok.name.replace("affect.", ""));
        controlled = controlled.filter((con) => checked.includes(con.id));
      }
      for (let t of controlled) {
        let a = t.actor,
          hp = a.data.data.attributes.hp,
          tmp = parseInt(hp.temp) || 0;

        // Handle nonlethal damage
        let nld = 0;
        if (asNonlethal && value > 0) {
          nld = Math.min(hp.max - hp.nonlethal, value);
          value -= nld;
        }

        // Temp HP adjustment
        let dt = value > 0 ? Math.min(tmp, value) : 0;

        if (!a.hasPerm(game.user, "OWNER")) {
          const msg = game.i18n.localize("FFD20.ErrorNoActorPermissionAlt").format(this.name);
          console.warn(msg);
          ui.notifications.warn(msg);
          continue;
        }
        promises.push(
          t.actor.update({
            "data.attributes.hp.nonlethal": hp.nonlethal + nld,
            "data.attributes.hp.temp": tmp - dt,
            "data.attributes.hp.value": Math.clamped(hp.value - (value - dt), -100, hp.max),
          })
        );
      }
      return Promise.all(promises);
    };

    if (game.keyboard.isDown("Shift") ? !forceDialog : forceDialog) {
      if (value < 0) {
        healingInvert = -1;
        value = -1 * value;
      }
      let tokens = controlled.map((tok) => {
        return {
          _id: tok.id,
          name: tok.name,
          dr: tok.actor.data.data.traits.dr.match(sliceReg),
          eres: tok.actor.data.data.traits.eres.match(sliceReg),
          checked: true,
        };
      });

      reductionDefault = reductionDefault ?? "";

      // Dialog configuration and callbacks
      let template = "systems/ffd20/templates/apps/damage-dialog.hbs";
      let dialogData = {
        damage: value,
        healing: healingInvert == -1 ? true : false,
        damageReduction: reductionDefault,
        tokens: tokens,
        nonlethal: asNonlethal,
      };
      const html = await renderTemplate(template, dialogData);

      return new Promise((resolve) => {
        const buttons = {};
        buttons.normal = {
          label: game.i18n.localize("FFD20.Apply"),
          callback: (html) => resolve(_submit.call(this, html, 1 * healingInvert)),
        };
        buttons.half = {
          label: game.i18n.localize("FFD20.ApplyHalf"),
          callback: (html) => resolve(_submit.call(this, html, 0.5 * healingInvert)),
        };

        var d = new Dialog({
          title: healingInvert > 0 ? game.i18n.localize("FFD20.ApplyDamage") : game.i18n.localize("FFD20.ApplyHealing"),
          content: html,
          buttons: buttons,
          default: "normal",
          close: (html) => {
            resolve(false);
          },
          render: (inp) => {
            function swapSelected() {
              let checked = [...inp[0].querySelectorAll('.selected-tokens input[type="checkbox"]')];
              checked.forEach((chk) => (chk.checked = !chk.checked));
            }
            function setReduction(e) {
              inp[0].querySelector('input[name="damage-reduction"]').value =
                e.currentTarget.innerText.match(numReg) ?? "";
            }
            function mouseWheelAdd(event) {
              const el = event.currentTarget;

              //Digits with optional sign only
              if (/[^\d+-]|(?:\d[+-])/.test(el.value.trim())) return;

              const value = parseFloat(el.value) || 0;
              const increase = -Math.sign(event.originalEvent.deltaY);

              el.value = (value + increase).toString();
            }

            inp.on("click", 'a[name="swap-selected"]', swapSelected);
            inp.on("click", 'a[name="clear-reduction"], p.notes a', setReduction);
            inp.on("wheel", "input", mouseWheelAdd);
          },
        });
        d.render(true);
      });
    } else return _submit();
  }

  /**
   * Returns effective Wound Threshold multiplier with rules and overrides applied.
   */
  getWoundThresholdMultiplier(data = null) {
    data = data ?? this.data;

    const hpconf = game.settings.get("ffd20", "healthConfig").variants;
    const conf = this.data.type === "npc" ? hpconf.npc : hpconf.pc;
    const override = getProperty(data, "data.attributes.woundThresholds.override") ?? -1;
    return override >= 0 && conf.allowWoundThresholdOverride ? override : conf.useWoundThresholds;
  }

  /**
   * Returns Wound Threshold relevant data.
   *
   * @param {*} rollData Provided valid rollData
   */
  getWoundThresholdData(data = null) {
    data = data ?? this.data;

    const woundMult = this.getWoundThresholdMultiplier(data),
      woundLevel = getProperty(data, "data.attributes.woundThresholds.level") ?? 0,
      woundPenalty = woundLevel * woundMult + (getProperty(data, "data.attributes.woundThresholds.mod") ?? 0);
    return {
      level: woundLevel,
      penalty: woundPenalty,
      multiplier: woundMult,
      valid: woundLevel > 0 && woundMult > 0,
    };
  }

  /**
   * Updates attributes.woundThresholds.level variable.
   */
  updateWoundThreshold() {
    const hpconf = game.settings.get("ffd20", "healthConfig").variants;
    const usage = this.data.type === "npc" ? hpconf.npc.useWoundThresholds : hpconf.pc.useWoundThresholds;
    if (!usage) {
      setProperty(this.data, "data.attributes.woundThresholds.level", 0);
      setProperty(this.data, "data.attributes.woundThresholds.penaltyBase", 0);
      setProperty(this.data, "data.attributes.woundThresholds.penalty", 0);
      return;
    }
    const curHP = getProperty(this.data, "data.attributes.hp.value"),
      maxHP = getProperty(this.data, "data.attributes.hp.max");

    let level = usage > 0 ? Math.min(3, 4 - Math.ceil((curHP / maxHP) * 4)) : 0;
    if (Number.isNaN(level)) level = 0; // BUG: This shouldn't happen, but it does.
    level = Math.max(0, level);

    const wtMult = this.getWoundThresholdMultiplier();
    const wtMod = getProperty(this.data, "data.attributes.woundThresholds.mod") ?? 0;

    setProperty(this.data, "data.attributes.woundThresholds.level", level);
    setProperty(this.data, "data.attributes.woundThresholds.penaltyBase", level * wtMult); // To aid relevant formulas
    setProperty(this.data, "data.attributes.woundThresholds.penalty", level * wtMult + wtMod);

    const penalty = getProperty(this.data, "data.attributes.woundThresholds.penalty");
    const changeFlatKeys = ["cmb", "cmd", "init", "allSavingThrows", "ac", "skills", "allChecks"];
    for (let fk of changeFlatKeys) {
      let flats = getChangeFlat.call(this, fk, "penalty", this.data.data);
      if (!(flats instanceof Array)) flats = [flats];
      for (let k of flats) {
        if (!k) continue;
        const curValue = getProperty(this.data, k);
        setProperty(this.data, k, curValue - penalty);
      }
    }
  }

  getSkill(key) {
    for (let [k, s] of Object.entries(this.data.data.skills)) {
      if (k === key) return s;
      if (s.subSkills != null) {
        for (let [k2, s2] of Object.entries(s.subSkills)) {
          if (k2 === key) return s2;
        }
      }
    }
    return null;
  }

  get allNotes() {
    let result = [];

    const noteItems = this.items.filter((o) => {
      return o.data.data.contextNotes != null;
    });

    for (let o of noteItems) {
      if (o.type === "buff" && !o.data.data.active) continue;
      if ((o.type === "equipment" || o.type === "weapon") && !o.data.data.equipped) continue;
      if (!o.data.data.contextNotes || o.data.data.contextNotes.length === 0) continue;
      result.push({ notes: o.data.data.contextNotes, item: o });
    }

    return result;
  }

  /**
   * Generates an array with all the active context-sensitive notes for the given context on this actor.
   * @param {String} context - The context to draw from.
   */
  getContextNotes(context) {
    let result = this.allNotes;

    // Attacks
    if (context.match(/^attacks\.(.+)/)) {
      const key = RegExp.$1;
      for (let note of result) {
        note.notes = note.notes
          .filter((o) => {
            return o.target === "attacks" && o.subTarget === key;
          })
          .map((o) => {
            return o.text;
          });
      }

      return result;
    }

    // Skill
    if (context.match(/^skill\.(.+)/)) {
      const skillKey = RegExp.$1;
      const skill = this.getSkill(skillKey);
      const ability = skill.ability;
      for (let note of result) {
        note.notes = note.notes
          .filter((o) => {
            return (
              (o.target === "skill" &&
                // Check for skill.context or skill.xyz.subSkills.context
                (o.subTarget === context || o.subTarget.split(".")?.[3] === context.split(".")?.[1])) ||
              (o.target === "skills" && (o.subTarget === `${ability}Skills` || o.subTarget === "skills"))
            );
          })
          .map((o) => {
            return o.text;
          });
      }

      return result;
    }

    // Saving throws
    if (context.match(/^savingThrow\.(.+)/)) {
      const saveKey = RegExp.$1;
      for (let note of result) {
        note.notes = note.notes
          .filter((o) => {
            return o.target === "savingThrows" && (o.subTarget === saveKey || o.subTarget === "allSavingThrows");
          })
          .map((o) => {
            return o.text;
          });
      }

      if (this.data.data.attributes.saveNotes != null && this.data.data.attributes.saveNotes !== "") {
        result.push({ notes: [this.data.data.attributes.saveNotes], item: null });
      }

      return result;
    }

    // Ability checks
    if (context.match(/^abilityChecks\.(.+)/)) {
      const ablKey = RegExp.$1;
      for (let note of result) {
        note.notes = note.notes
          .filter((o) => {
            return o.target === "abilityChecks" && (o.subTarget === `${ablKey}Checks` || o.subTarget === "allChecks");
          })
          .map((o) => {
            return o.text;
          });
      }

      return result;
    }

    // Misc
    if (context.match(/^misc\.(.+)/)) {
      const miscKey = RegExp.$1;
      for (let note of result) {
        note.notes = note.notes
          .filter((o) => {
            return o.target === "misc" && o.subTarget === miscKey;
          })
          .map((o) => {
            return o.text;
          });
      }

      return result;
    }

    if (context.match(/^spell\.concentration\.([a-z]+)$/)) {
      const spellbookKey = RegExp.$1;
      for (let note of result) {
        note.notes = note.notes
          .filter((o) => {
            return o.target === "spell" && o.subTarget === "concentration";
          })
          .map((o) => {
            return o.text;
          });
      }

      const spellbookNotes = getProperty(
        this.data,
        `data.attributes.spells.spellbooks.${spellbookKey}.concentrationNotes`
      );
      if (spellbookNotes.length) {
        result.push({ notes: spellbookNotes.split(/[\n\r]+/), item: null });
      }

      return result;
    }

    if (context.match(/^spell\.cl\.([a-z]+)$/)) {
      const spellbookKey = RegExp.$1;
      for (let note of result) {
        note.notes = note.notes
          .filter((o) => {
            return o.target === "spell" && o.subTarget === "cl";
          })
          .map((o) => {
            return o.text;
          });
      }

      const spellbookNotes = getProperty(this.data, `data.attributes.spells.spellbooks.${spellbookKey}.clNotes`);
      if (spellbookNotes.length) {
        result.push({ notes: spellbookNotes.split(/[\n\r]+/), item: null });
      }

      return result;
    }

    if (context.match(/^spell\.effect$/)) {
      for (let note of result) {
        note.notes = note.notes.filter((o) => o.target === "spell" && o.subTarget === "effect").map((o) => o.text);
      }

      return result;
    }

    return [];
  }

  /**
   * Returns a list of already parsed context notes.
   * @param {string} context - The context to draw notes from.
   * @returns {string[]} The resulting notes, already parsed.
   */
  getContextNotesParsed(context) {
    const noteObjects = this.getContextNotes(context);

    return noteObjects.reduce((cur, o) => {
      for (let note of o.notes) {
        cur.push(TextEditor.enrichHTML(note, { rollData: o.item != null ? o.item.getRollData() : this.getRollData() }));
      }

      return cur;
    }, []);
  }

  async createEmbeddedEntity(embeddedName, createData, options = {}) {
    let noArray = false;
    if (!(createData instanceof Array)) {
      createData = [createData];
      noArray = true;
    }

    for (let obj of createData) {
      // Don't auto-equip transferred items
      if (obj._id != null && ["weapon", "equipment"].includes(obj.type)) {
        obj.data.equipped = false;
      }
    }

    return super.createEmbeddedEntity(embeddedName, noArray ? createData[0] : createData, options);
  }

  _computeEncumbrance() {
    const carry = this.getCarryCapacity();
    setProperty(this.data, "data.attributes.encumbrance.levels.light", carry.light);
    setProperty(this.data, "data.attributes.encumbrance.levels.medium", carry.medium);
    setProperty(this.data, "data.attributes.encumbrance.levels.heavy", carry.heavy);
    setProperty(this.data, "data.attributes.encumbrance.levels.carry", carry.heavy * 2);
    setProperty(this.data, "data.attributes.encumbrance.levels.drag", carry.heavy * 5);

    const carriedWeight = Math.max(0, this.getCarriedWeight());
    setProperty(this.data, "data.attributes.encumbrance.carriedWeight", Math.round(carriedWeight * 10) / 10);

    // Determine load level
    let encLevel = 0;
    if (carriedWeight > 0) {
      if (carriedWeight > this.data.data.attributes.encumbrance.levels.light) encLevel++;
      if (carriedWeight > this.data.data.attributes.encumbrance.levels.medium) encLevel++;
    }
    setProperty(this.data, "data.attributes.encumbrance.level", encLevel);
  }

  _calculateCoinWeight() {
    const coinWeightDivisor = game.settings.get("ffd20", "coinWeight");
    if (!coinWeightDivisor) return 0;
    return (
      Object.values(this.data.data.currency).reduce((cur, amount) => {
        return cur + amount;
      }, 0) / coinWeightDivisor
    );
  }

  getCarryCapacity() {
    // Determine carrying capacity
    const carryStr = this.data.data.abilities.str.total + this.data.data.abilities.str.carryBonus;
    let carryMultiplier = this.data.data.abilities.str.carryMultiplier;
    const size = this.data.data.traits.size;
    if (this.data.data.attributes.quadruped) carryMultiplier *= CONFIG.FFD20.encumbranceMultipliers.quadruped[size];
    else carryMultiplier *= CONFIG.FFD20.encumbranceMultipliers.normal[size];
    const table = CONFIG.FFD20.encumbranceLoads;

    let heavy = Math.floor(table[carryStr] * carryMultiplier);
    if (carryStr >= table.length) {
      heavy = Math.floor(table[table.length - 1] * (1 + 0.3 * (carryStr - (table.length - 1))));
    }
    // Convert to world unit system
    heavy = convertWeight(heavy);

    return {
      light: Math.floor(heavy / 3),
      medium: Math.floor((heavy / 3) * 2),
      heavy: heavy,
    };
  }

  getCarriedWeight() {
    // Determine carried weight
    const physicalItems = this.data.items.filter((o) => {
      return o.data.weight != null;
    });
    const weight = physicalItems.reduce((cur, o) => {
      if (!o.data.carried) return cur;
      return cur + o.data.weight * o.data.quantity;
    }, this._calculateCoinWeight());

    return convertWeight(weight);
  }

  /**
   * @returns {number} The total amount of currency this actor has, in gold pieces

  mergeCurrency() {
    return this.getTotalCurrency("currency") + this.getTotalCurrency("altCurrency");
  }

  getTotalCurrency(category = "currency") {
    const currencies = getProperty(this.data.data, category);
    return (currencies.pp * 1000 + currencies.gp * 100 + currencies.sp * 10 + currencies.cp) / 100;
  }   */

  /**
   * Converts currencies of the given category to the given currency type
   * @param {string} category - Either 'currency' or 'altCurrency'.
   * @param {string} type - Either 'pp', 'gp', 'sp' or 'cp'. Converts as much currency as possible to this type.

  convertCurrency(category = "currency", type = "pp") {
    const totalValue =
      category === "currency" ? this.getTotalCurrency("currency") : this.getTotalCurrency("altCurrency");
    let values = [0, 0, 0, 0];
    switch (type) {
      case "pp":
        values[0] = Math.floor(totalValue / 10);
        values[1] = Math.max(0, Math.floor(totalValue) - values[0] * 10);
        values[2] = Math.max(0, Math.floor(totalValue * 10) - values[0] * 100 - values[1] * 10);
        values[3] = Math.max(0, Math.floor(totalValue * 100) - values[0] * 1000 - values[1] * 100 - values[2] * 10);
        break;
      case "gp":
        values[1] = Math.floor(totalValue);
        values[2] = Math.max(0, Math.floor(totalValue * 10) - values[1] * 10);
        values[3] = Math.max(0, Math.floor(totalValue * 100) - values[1] * 100 - values[2] * 10);
        break;
      case "sp":
        values[2] = Math.floor(totalValue * 10);
        values[3] = Math.max(0, Math.floor(totalValue * 100) - values[2] * 10);
        break;
      case "cp":
        values[3] = Math.floor(totalValue * 100);
        break;
    }

    const updateData = {};
    updateData[`data.${category}.pp`] = values[0];
    updateData[`data.${category}.gp`] = values[1];
    updateData[`data.${category}.sp`] = values[2];
    updateData[`data.${category}.cp`] = values[3];
    return this.update(updateData);
  }   */

  /**
   * Import a new owned Item from a compendium collection
   * The imported Item is then added to the Actor as an owned item.
   *
   * @param collection {String}     The name of the pack from which to import
   * @param entryId {String}        The ID of the compendium entry to import
   */
  importItemFromCollection(collection, entryId) {
    const pack = game.packs.find((p) => p.collection === collection);
    if (pack.metadata.entity !== "Item") return;

    return pack.getEntity(entryId).then((ent) => {
      console.log(`${vtt} | Importing Item ${ent.name} from ${collection}`);

      let data = duplicate(ent.data);
      if (this.sheet != null && this.sheet.rendered) {
        data = mergeObject(data, this.sheet.getDropData(data));
      }
      delete data._id;
      return this.createOwnedItem(data);
    });
  }

  getRollData(options = { refresh: false }) {
    if (!options.refresh && this._rollData) {
      let result = this._rollData;

      // Clear certain fields
      const clearFields = CONFIG.FFD20.temporaryRollDataFields.actor;
      for (let k of clearFields) {
        setProperty(result, k, undefined);
      }

      return result;
    }

    let result = this.data.data;

    // Set size index
    {
      const sizeChart = Object.keys(CONFIG.FFD20.sizeChart);
      result.size = sizeChart.indexOf(getProperty(result, "traits.size"));
    }

    // Set class data
    result.classes = {};
    this.data.items
      .filter((obj) => {
        return obj.type === "class";
      })
      .forEach((cls) => {
        const tag = cls.data.tag;
        if (!tag) return;

        let healthConfig = game.settings.get("ffd20", "healthConfig");
        const hasPlayerOwner = this.hasPlayerOwner;
        healthConfig =
          cls.data.classType === "racial"
            ? healthConfig.hitdice.Racial
            : hasPlayerOwner
            ? healthConfig.hitdice.PC
            : healthConfig.hitdice.NPC;
        const classType = cls.data.classType || "base";
        result.classes[tag] = {
          level: cls.data.countforexp === "exp" ? cls.data.level : 0,
          name: cls.name,
          hd: cls.data.countforexp === "exp" ? cls.data.hd : 0,
           // account for nonexp
          bab: cls.data.countforexp === "exp" ? cls.data.bab : 0,
          hp: cls.data.countforexp === "exp" ? healthConfig.auto : 0,
          mp: cls.data.mp,
          savingThrows: {
            fort: 0,
            ref: 0,
            will: 0,
          },
          fc: {
            hp: classType === "base" ? cls.data.fc.hp.value : 0,
            skill: classType === "base" ? cls.data.fc.skill.value : 0,
            alt: classType === "base" ? cls.data.fc.alt.value : 0,
          },
        };

        for (let k of Object.keys(result.classes[tag].savingThrows)) {
          let formula = CONFIG.FFD20.classSavingThrowFormulas[classType][cls.data.savingThrows[k].value];
          if (formula == null) formula = "0";
          result.classes[tag].savingThrows[k] = new Roll(formula, { level: cls.data.level }).roll().total;
        }
      });

    // Add more info for formulas
    if (this.data.items) {
      result.armor = { type: 0 };
      result.shield = { type: 0 };

      // Determine equipped armor type
      const armor = this.data.items.filter(
        (o) => o.type === "equipment" && o.data.equipmentType === "armor" && o.data.equipped
      );
      for (let o of armor) {
        const subtype = o.data.equipmentSubtype;
        if (subtype === "lightArmor" && result.armor.type < 1) result.armor.type = 1;
        else if (subtype === "mediumArmor" && result.armor.type < 2) result.armor.type = 2;
        else if (subtype === "heavyArmor" && result.armor.type < 3) result.armor.type = 3;
      }

      // Determine equipped shield type
      const shields = this.data.items.filter(
        (o) => o.type === "equipment" && o.data.equipmentType === "shield" && o.data.equipped
      );
      for (let o of shields) {
        const subtype = o.data.equipmentSubtype;
        if (subtype === "other" && result.shield.type < 1) result.shield.type = 1;
        else if (subtype === "lightShield" && result.shield.type < 2) result.shield.type = 2;
        else if (subtype === "heavyShield" && result.shield.type < 3) result.shield.type = 3;
        else if (subtype === "towerShield" && result.shield.type < 4) result.shield.type = 4;
      }
    }

    // Add spellbook info
    for (let [k, spellbook] of Object.entries(getProperty(result, "attributes.spells.spellbooks"))) {
      setProperty(result, `spells.${k}`, spellbook);
    }

    // Add range info
    result.range = {
      melee: 5,
      reach: 10,
    };
    switch (result.traits.size) {
      case "fine":
      case "dim":
        result.range.melee = 0;
        result.range.reach = 0;
        break;
      case "tiny":
        result.range.melee = 0;
        result.range.reach = 5;
        break;
      case "lg":
        if (result.traits.stature === "tall") {
          result.range.melee = 10;
          result.range.reach = 20;
        }
        break;
      case "huge":
        if (result.traits.stature === "tall") {
          result.range.melee = 15;
          result.range.reach = 30;
        } else {
          result.range.melee = 10;
          result.range.reach = 20;
        }
        break;
      case "grg":
        if (result.traits.stature === "tall") {
          result.range.melee = 20;
          result.range.reach = 40;
        } else {
          result.range.melee = 15;
          result.range.reach = 30;
        }
        break;
      case "col":
        if (result.traits.stature === "tall") {
          result.range.melee = 30;
          result.range.reach = 60;
        } else {
          result.range.melee = 20;
          result.range.reach = 40;
        }
        break;
    }

    // Add combat round, if in combat
    if (game.combats?.viewed) {
      result.combat = {
        round: game.combat.round || 0,
      };
    }

    this._rollData = result;
    return result;
  }

  getCR() {
    if (this.data.type !== "npc") return 0;
    const data = this.data.data;

    const base = data.details.cr.base;
    if (this.items == null) return base;

    // Gather CR from templates
    const templates = this.items.filter((o) => o.type === "feat" && o.data.data.featType === "template");
    return templates.reduce((cur, o) => {
      const crOffset = o.data.data.crOffset;
      if (typeof crOffset === "string" && crOffset.length)
        cur += new Roll(crOffset, this.getRollData(data)).roll().total;
      return cur;
    }, base);
  }

  async deleteEmbeddedEntity(embeddedName, data, options = {}) {
    if (embeddedName === "OwnedItem") {
      if (!(data instanceof Array)) data = [data];

      // Add children to list of items to be deleted
      const _addChildren = async function (id) {
        const item = this.items.find((o) => o._id === id);
        const children = await item.getLinkedItems("children");
        for (let child of children) {
          if (!data.includes(child._id)) {
            data.push(child._id);
            await _addChildren.call(this, child._id);
          }
        }
      };
      for (let id of data) {
        await _addChildren.call(this, id);
      }

      // Remove links to this item (and child items)
      for (const id of data) {
        for (const i of this.items) {
          await i.removeItemLink(id);
        }
      }
    }

    super.deleteEmbeddedEntity(embeddedName, data, options);
  }

  getQuickActions() {
    return this.data.items
      .filter(
        (o) =>
          (o.type === "attack" || o.type === "spell" || o.type === "feat") &&
          getProperty(o, "data.showInQuickbar") === true
      )
      .sort((a, b) => {
        return a.data.sort - b.data.sort;
      })
      .map((o) => {
        return {
          item: o,
          color1: ItemFFD20.getTypeColor(o.type, 0),
          color2: ItemFFD20.getTypeColor(o.type, 1),
        };
      });
  }

  toggleConditionStatusIcons(token) {
    if (this._runningFunctions.indexOf("toggleConditionStatusIcons") !== -1) return;

    return new Promise((resolve) => {
      this._runningFunctions.push("toggleConditionStatusIcons");
      if (token) {
        token.cancel = function () {
          resolve();
        };
      }

      (async () => {
        const isLinkedToken = getProperty(this.data, "token.actorLink");
        const tokens = isLinkedToken ? this.getActiveTokens() : [this.token].filter((o) => o != null);
        const buffTextures = this._calcBuffTextures();

        let promises = [];
        const fx = [...this.effects];

        for (let [id, obj] of Object.entries(buffTextures)) {
          if (obj.active) await obj.item.toEffect();
          else await fx.find((f) => f.data.origin === id)?.delete();
        }

        for (let ae of fx) {
          let item = this.items.get(ae.data.origin?.split(".")[3]);
          if (!item && ae.data.origin) await ae.delete();
        }

        let token = tokens[0];
        if (!token) return;
        for (let con of CONFIG.statusEffects) {
          // Don't toggle non-condition effects
          if (CONFIG.FFD20.conditions[con.id] == null) continue;

          const idx = fx.findIndex((e) => e.getFlag("core", "statusId") === con.id);
          const hasCondition = this.data.data.attributes.conditions[con.id] === true;
          const hasEffectIcon = idx >= 0;

          if (hasCondition !== hasEffectIcon) {
            promises.push(
              token.toggleEffect(con, {
                midUpdate: true,
              })
            );
          }
        }
        await Promise.all(promises);
      })().then(() => {
        if (token) {
          this._pendingUpdateTokens.splice(this._pendingUpdateTokens.indexOf(token), 1);
        }
        this._runningFunctions.splice(this._runningFunctions.indexOf("toggleConditionStatusIcons"), 1);
        resolve();
      });
    });
  }

  // @Object { id: { title: String, type: buff/string, img: imgPath, active: true/false }, ... }
  _calcBuffTextures() {
    const buffs = this.items.filter((o) => o.type === "buff");
    return buffs.reduce((acc, cur) => {
      const id = cur.uuid;
      if (cur.data.data.hideFromToken) return acc;

      if (!acc[id]) acc[id] = { id: cur.id, label: cur.name, icon: cur.data.img, item: cur };
      if (cur.data.data.active) acc[id].active = true;
      else acc[id].active = false;
      return acc;
    }, {});
  }

  refreshAbilityModifiers() {
    for (let k of Object.keys(this.data.data.abilities)) {
      const total = getProperty(this.data, `data.abilities.${k}.total`);
      if (total == null) {
        setProperty(this.data, `data.abilities.${k}.mod`, 0);
      } else {
        const penalty = Math.abs(getProperty(this.data, `data.abilities.${k}.penalty`) || 0);
        const damage = getProperty(this.data, `data.abilities.${k}.damage`);
        const result = Math.max(-5, Math.floor((total - 10) / 2) - Math.floor(penalty / 2) - Math.floor(damage / 2));
        setProperty(this.data, `data.abilities.${k}.mod`, result);
      }
    }
  }

  importFromJSON(json) {
    // Set _initialized flag to prevent faults (such as HP changing incorrectly)
    this._initialized = false;

    // Import from JSON
    const data = JSON.parse(json);
    delete data._id;
    data.effects = [];
    return this.update(data);
  }
}
