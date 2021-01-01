import { DicePF } from "../dice.js";
import { ItemPF } from "../item/entity.js";
import { createTag, linkData, isMinimumCoreVersion, convertDistance, convertWeight } from "../lib.js";
import { createCustomChatMessage } from "../chat.js";
import { _getInitiativeFormula } from "../combat.js";
import { LinkFunctions } from "../misc/links.js";
import { getSkipActionPrompt } from "../settings.js";
import { updateChanges, getChangeFlat } from "./update-changes.js";

/**
 * Extend the base Actor class to implement additional logic specialized for D&D5e.
 */
export class ActorPF extends Actor {
  constructor(...args) {
    super(...args);

    /**
     * A list of all the active items with changes.
     * @property
     * @type {Array}
     */
    this.changeItems = [];

    /**
     * Change functions, as determined by changes' script formulas
     * @property
     * @private
     * @type {Object}
     */
    this._changeFunctions = {};
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
      const actor = ItemPF._getChatCardActor(card);
      const saveId = button.dataset.save;
      if (actor) actor.rollSavingThrow(saveId, { event: event, skipPrompt: getSkipActionPrompt() });
    } else if (action === "save") {
      const actors = ActorPF.getSelectedActors();
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
   * @returns {Array.<ActorPF, Token>[]}
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
    if (type === "size") result = game.i18n.localize("PF1.SourceInfoSize");
    if (type === "buff") {
      result = game.i18n.localize("PF1.SourceInfoBuffs");
      if (subtype === "temp") result = game.i18n.localize("PF1.SourceInfoTemporaryBuffs");
      if (subtype === "perm") result = game.i18n.localize("PF1.SourceInfoPermanentBuffs");
      if (subtype === "item") result = game.i18n.localize("PF1.SourceInfoItemBuffs");
      if (subtype === "misc") result = game.i18n.localize("PF1.SourceInfoMiscBuffs");
    }
    if (type === "equipment") result = game.i18n.localize("PF1.SourceInfoEquipment");
    if (type === "weapon") result = game.i18n.localize("PF1.SourceInfoWeapons");
    if (type === "feat") {
      result = game.i18n.localize("PF1.SourceInfoFeats");
      if (subtype === "classFeat") result = game.i18n.localize("PF1.SourceInfoClassFeatures");
      if (subtype === "trait") result = game.i18n.localize("PF1.SourceInfoTraits");
      if (subtype === "racial") result = game.i18n.localize("PF1.SourceInfoRacialTraits");
      if (subtype === "misc") result = game.i18n.localize("PF1.SourceInfoMiscFeatures");
    }
    if (type === "race") {
      result = game.i18n.localize("PF1.SourceInfoRace");
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
    const hasPlayerOwner = isMinimumCoreVersion("0.7.2") ? this.hasPlayerOwner : this.isPC;
    return hasPlayerOwner;
  }

  /**
   * Augment the basic actor data with additional dynamic data.
   */
  prepareData() {
    super.prepareData();

    const actorData = this.data;
    const data = actorData.data;

    // Prepare Character data
    if (actorData.type === "character") this._prepareCharacterData(actorData);
    else if (actorData.type === "npc") this._prepareNPCData(data);

    // Create arbitrary skill slots
    for (let skillId of CONFIG.PF1.arbitrarySkills) {
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

    // Prepare modifier containers
    data.attributes.mods = data.attributes.mods || {};
    data.attributes.mods.skills = data.attributes.mods.skills || {};

    // Set labels
    this.labels = {};
    this.labels.race =
      this.race == null ? game.i18n.localize("PF1.Race") : game.i18n.localize("PF1.RaceTitle").format(this.race.name);
    this.labels.alignment = CONFIG.PF1.alignments[this.data.data.details.alignment];

    // Set speed labels
    this.labels.speed = {};
    for (let [key, obj] of Object.entries(getProperty(this.data, "data.attributes.speed") || {})) {
      const dist = convertDistance(obj.total);
      this.labels.speed[key] = `${dist[0]} ${CONFIG.PF1.measureUnitsShort[dist[1]]}`;
    }

    // Setup links
    this.prepareItemLinks();
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

  _setSourceDetails(actorData, extraData, flags) {
    if (flags == null) flags = {};
    let sourceDetails = {};
    // Get empty source arrays
    for (let obj of Object.values(CONFIG.PF1.buffTargets)) {
      for (let b of Object.keys(obj)) {
        if (!b.startsWith("_")) {
          let buffTargets = getChangeFlat.call(this, b, null, actorData.data);
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
    sourceDetails["data.attributes.ac.normal.total"].push({ name: game.i18n.localize("PF1.Base"), value: 10 });
    sourceDetails["data.attributes.ac.touch.total"].push({ name: game.i18n.localize("PF1.Base"), value: 10 });
    sourceDetails["data.attributes.ac.flatFooted.total"].push({ name: game.i18n.localize("PF1.Base"), value: 10 });
    sourceDetails["data.attributes.cmd.total"].push({ name: game.i18n.localize("PF1.Base"), value: 10 });
    sourceDetails["data.attributes.cmd.flatFootedTotal"].push({ name: game.i18n.localize("PF1.Base"), value: 10 });
    for (let [a, abl] of Object.entries(actorData.data.abilities)) {
      sourceDetails[`data.abilities.${a}.total`].push({ name: game.i18n.localize("PF1.Base"), value: abl.value });
      // Add ability penalty, damage and drain
      if (abl.damage != null && abl.damage !== 0) {
        sourceDetails[`data.abilities.${a}.total`].push({
          name: game.i18n.localize("PF1.AbilityDamage"),
          value: `-${Math.floor(Math.abs(abl.damage) / 2)} (Mod only)`,
        });
      }
      if (abl.drain != null && abl.drain !== 0) {
        sourceDetails[`data.abilities.${a}.total`].push({
          name: game.i18n.localize("PF1.AbilityDrain"),
          value: -Math.abs(abl.drain),
        });
      }
    }

    // Add AC and CMD details
    {
      const dex = actorData.data.abilities.dex.mod;
      const maxDex = actorData.data.attributes.maxDexBonus;
      const ac = {
        normal: maxDex != null ? Math.min(maxDex, dex) : dex,
        touch: maxDex != null ? Math.min(maxDex, dex) : dex,
        ff: Math.min(0, dex),
      };
      const cmd = {
        normal: maxDex != null ? Math.min(maxDex, dex) : dex,
        ff: Math.min(0, dex),
      };
      if (ac.normal !== 0)
        sourceDetails["data.attributes.ac.normal.total"].push({
          name: game.i18n.localize("PF1.AbilityDex"),
          value: ac.normal,
        });
      if (ac.touch !== 0)
        sourceDetails["data.attributes.ac.touch.total"].push({
          name: game.i18n.localize("PF1.AbilityDex"),
          value: ac.touch,
        });
      if (ac.ff !== 0)
        sourceDetails["data.attributes.ac.flatFooted.total"].push({
          name: game.i18n.localize("PF1.AbilityDex"),
          value: ac.ff,
        });
      if (cmd.normal !== 0)
        sourceDetails["data.attributes.cmd.total"].push({
          name: game.i18n.localize("PF1.AbilityDex"),
          value: cmd.normal,
        });
      if (cmd.ff !== 0)
        sourceDetails["data.attributes.cmd.flatFootedTotal"].push({
          name: game.i18n.localize("PF1.AbilityDex"),
          value: cmd.ff,
        });
    }

    // Add extra data
    for (let [changeTarget, changeGrp] of Object.entries(extraData)) {
      for (let grp of Object.values(changeGrp)) {
        if (grp.length > 0) {
          sourceDetails[changeTarget] = sourceDetails[changeTarget] || [];
          for (let src of grp) {
            let srcInfo = this.constructor._translateSourceInfo(src.type, src.subtype, src.name);
            let srcValue = src.value;
            if (src.operator === "set") srcValue = game.i18n.localize("PF1.SetTo").format(srcValue);
            sourceDetails[changeTarget].push({
              name: srcInfo,
              value: srcValue,
            });
          }
        }
      }
    }

    this.sourceDetails = sourceDetails;
  }

  async refresh() {
    if (this.hasPerm(game.user, "OWNER")) {
      return this.update({});
    }
  }

  /**
   * Prepare Character type specific data
   */
  _prepareCharacterData(actorData) {
    if (!hasProperty(actorData, "data.details.level.value")) return;
    const data = actorData.data;

    // Experience bar
    let prior = this.getLevelExp(data.details.level.value - 1 || 0),
      max = this.getLevelExp(data.details.level.value || 1);

    data.details.xp.pct = ((Math.max(prior, Math.min(max, data.details.xp.value)) - prior) / (max - prior)) * 100 || 0;
  }

  /* -------------------------------------------- */

  /**
   * Prepare NPC type specific data
   */
  _prepareNPCData(data) {
    // Kill Experience
    try {
      const crTotal = getProperty(this.data, "data.details.cr.total") || 1;
      data.details.xp.value = this.getCRExp(crTotal);
    } catch (e) {
      data.details.xp.value = this.getCRExp(1);
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
   * Return increased amount of spell slots by ability score modifier.
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
   * Return the amount of experience required to gain a certain character level.
   * @param level {Number}  The desired level
   * @return {Number}       The XP required
   */
  getLevelExp(level) {
    const expConfig = game.settings.get("pf1", "experienceConfig");
    const expTrack = expConfig.track;
    // Preset experience tracks
    if (["fast", "medium", "slow"].includes(expTrack)) {
      const levels = CONFIG.PF1.CHARACTER_EXP_LEVELS[expTrack];
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

  /* -------------------------------------------- */

  /**
   * Return the amount of experience granted by killing a creature of a certain CR.
   * @param cr {Number}     The creature's challenge rating
   * @return {Number}       The amount of experience granted per kill
   */
  getCRExp(cr) {
    if (cr < 1.0) return Math.max(400 * cr, 10);
    return CONFIG.PF1.CR_EXP_LEVELS[cr];
  }

  /* -------------------------------------------- */
  /*  Socket Listeners and Handlers
  /* -------------------------------------------- */

  preUpdate(data) {
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
      data["data.attributes.spells.usedSpellbooks"] = usedSpellbooks;
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
      data[k] = Math.abs(data[k]);
    }

    // Apply changes in Actor size to Token width/height
    if (data["data.traits.size"] && this.data.data.traits.size !== data["data.traits.size"]) {
      let size = CONFIG.PF1.tokenSizes[data["data.traits.size"]];
      let tokens = this.isToken ? [this.token] : [];
      if (this.data.token.actorLink) {
        tokens = this.getActiveTokens();
      }
      tokens = tokens.filter((o) => !getProperty(o.data, "flags.pf1.staticSize"));
      tokens.forEach((o) => {
        o.update({ width: size.w, height: size.h, scale: size.scale });
      });
      if (!this.isToken) {
        data["token.width"] = size.w;
        data["token.height"] = size.h;
        data["token.scale"] = size.scale;
      }
    }

    // Send resource updates to item
    let updatedResources = [];
    for (let key of Object.keys(data)) {
      if (key.match(/^data\.resources\.([a-zA-Z0-9]+)/)) {
        const resourceTag = RegExp.$1;
        if (updatedResources.includes(resourceTag)) continue;
        updatedResources.push(resourceTag);

        const resource = this.data.data.resources[resourceTag];
        if (resource != null) {
          const itemId = resource._id;
          const item = this.getOwnedItem(itemId);
          if (item == null) continue;

          const itemUpdateData = {};
          let key = `data.resources.${resourceTag}.value`;
          if (data[key] != null && data[key] !== item.data.data.uses.value) {
            itemUpdateData["data.uses.value"] = data[key];
          }
          key = `data.resources.${resourceTag}.max`;
          if (data[key] != null && data[key] !== item.data.data.uses.max) {
            itemUpdateData["data.uses.max"] = data[key];
          }
          if (Object.keys(itemUpdateData).length > 0) item.update(itemUpdateData);
        }
      }
    }

    // Clean up old item resources
    for (let [tag, res] of Object.entries(getProperty(this.data, "data.resources") || {})) {
      if (!res) continue;
      if (!res._id) continue;
      const itemId = res._id;
      const item = this.getOwnedItem(itemId);
      // Remove resource from token bars
      if (item == null) {
        const tokens = this.getActiveTokens();
        tokens.forEach((token) => {
          ["bar1", "bar2"].forEach((b) => {
            const barAttr = token.getBarAttribute(b);
            if (barAttr == null) {
              return;
            }
            if (barAttr.attribute === `resources.${tag}`) {
              const tokenUpdateData = {};
              tokenUpdateData[`${b}.attribute`] = null;
              token.update(token.scene._id, tokenUpdateData);
            }
          });
        });
      }
      // Remove resource
      if (item == null || (item.data.data.useCustomTag ? item.data.tag : createTag(item.name)) !== tag) {
        data[`data.resources.-=${tag}`] = null;
      }
    }

    this._updateExp(data);

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
    // Avoid regular update flow for explicitly non-recursive update calls
    if (options.recursive === false) {
      return super.update(data, options);
    }

    data = expandObject(this.preUpdate(data));
    this.updateChangeEvals();

    // Update changes
    let diff = data;
    if (options.updateChanges !== false) {
      const updateObj = await updateChanges.call(this, { data: data });
      if (updateObj.diff.items) delete updateObj.diff.items;
      diff = mergeObject(diff, updateObj.diff);
    }
    // Diff token data
    if (data.token != null) {
      diff.token = diffObject(this.data.token, data.token);
    }

    if (options.skipUpdate !== true) {
      if (Object.keys(diff).length) {
        await super.update(diff, mergeObject(options, { recursive: true }));
      }
      await this.toggleConditionStatusIcons();
      await this.refreshItems();
    }
    return diff;
  }

  async refreshItems() {
    const items = Array.from(this.items);
    const updates = items.map((o) => o.update({}, { skipUpdate: true }));
    const values = (await Promise.all(updates)).filter((o) => Object.keys(o).length > 1);

    if (values.length > 0) {
      return this.updateOwnedItem(values);
    }
  }

  _onUpdate(data, options, userId, context) {
    for (let k of Object.keys(data)) {
      if (k.startsWith("data.attributes.vision")) {
        canvas.sight.initializeTokens();
      }
    }

    for (let i of this.items.values()) {
      let itemUpdateData = {};

      i._updateMaxUses(itemUpdateData, { actorData: data });

      const itemDiff = diffObject(flattenObject(i.data), itemUpdateData);
      if (Object.keys(itemDiff).length > 0 && i.hasPerm(game.user, "OWNER")) i.update(itemDiff);
    }

    return super._onUpdate(data, options, userId, context);
  }

  /**
   * Makes sure experience values are correct in update data.
   * @param {Object} data - The update data, as per ActorPF.update()
   */
  _updateExp(data) {
    const classes = this.items.filter((o) => o.type === "class" && o.data.data.classType !== "mythic");
    const level = classes.reduce((cur, o) => {
      return cur + o.data.data.level;
    }, 0);
    if (getProperty(this.data, "data.details.level.value") !== level) {
      data["data.details.level.value"] = level;
    }

    // The following is not for NPCs
    if (this.data.type !== "character") return;

    // Translate update exp value to number
    let newExp = data["data.details.xp.value"],
      resetExp = false;
    if (typeof newExp === "string") {
      if (newExp.match(/^\+([0-9]+)$/)) {
        newExp = this.data.data.details.xp.value + parseInt(RegExp.$1);
      } else if (newExp.match(/^-([0-9]+)$/)) {
        newExp = this.data.data.details.xp.value - parseInt(RegExp.$1);
      } else if (newExp === "") {
        resetExp = true;
      } else {
        newExp = parseInt(newExp);
        if (Number.isNaN(newExp)) newExp = this.data.data.details.xp.value;
      }

      if (typeof newExp === "number" && newExp !== getProperty(this.data, "data.details.xp.value")) {
        data["data.details.xp.value"] = newExp;
      }
    }
    const maxExp = this.getLevelExp(level);
    if (maxExp !== getProperty(this.data, "data.details.xp.max")) {
      data["data.details.xp.max"] = maxExp;
    }

    const minExp = level > 0 ? this.getLevelExp(level - 1) : 0;
    if (resetExp) data["data.details.xp.value"] = minExp;

    // Make sure experience ends as a number
    if (typeof data["data.details.xp.value"] === "string") {
      const xpValue = parseInt(data["data.details.xp.value"]);
      if (!Number.isNaN(xpValue)) data["data.details.xp.value"] = xpValue;
    }
  }

  async _onCreate(data, options, userId, context) {
    if (data.type === "character") this.update({ "token.actorLink": true }, { updateChanges: false });

    if (userId === game.user._id) {
      await updateChanges.call(this);
    }

    super._onCreate(data, options, userId, context);
  }

  async updateItemResources(item) {
    if (!(item instanceof Item)) return;
    if (!this.hasPerm(game.user, "OWNER")) return;

    const activationType = game.settings.get("pf1", "unchainedActionEconomy")
      ? item.data.data.unchainedAction?.activation?.type
      : item.data.data.activation?.type;
    if (item.data.data.uses?.per && activationType) {
      const itemTag = !item.data.data.useCustomTag ? createTag(item.data.name) : item.data.data.tag;
      let curUses = item.data.data.uses;

      const res = getProperty(this.data, `data.resources.${itemTag}`);
      if (!res || (res && !res._id)) {
        const updateData = {
          [`data.resources.${itemTag}.value`]: curUses.value,
          [`data.resources.${itemTag}.max`]: curUses.max,
          [`data.resources.${itemTag}._id`]: item._id,
        };
        return this.update(updateData);
      } else if (res._id === item._id) {
        const updateData = {};
        if (this.data.data.resources[itemTag].value !== curUses.value) {
          updateData[`data.resources.${itemTag}.value`] = curUses.value;
        }
        if (this.data.data.resources[itemTag].max !== curUses.max) {
          updateData[`data.resources.${itemTag}.max`] = curUses.max;
        }
        if (Object.keys(updateData).length > 0) return this.update(updateData);
      }
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
    const hasPlayerOwner = isMinimumCoreVersion("0.7.2") ? this.hasPlayerOwner : this.isPC;
    if (!hasPlayerOwner) {
      if (t === "weapon") initial["data.proficient"] = true;
      if (["weapon", "equipment"].includes(t)) initial["data.equipped"] = true;
    }
    if (t === "spell") {
      if (this.sheet != null && this.sheet._spellbookTab != null) {
        initial["data.spellbook"] = this.sheet._spellbookTab;
      }
    }

    mergeObject(itemData, initial);
    return super.createOwnedItem(itemData, options);
  }

  /* -------------------------------------------- */
  /*  Rolls                                       */
  /* -------------------------------------------- */

  /**
   * Cast a Spell, consuming a spell slot of a certain level
   * @param {ItemPF} item   The spell being cast by the actor
   * @param {MouseEvent} ev The click event
   */
  async useSpell(item, ev, { skipDialog = false } = {}) {
    if (!this.hasPerm(game.user, "OWNER")) {
      const msg = game.i18n.localize("PF1.ErrorNoActorPermissionAlt").format(this.name);
      console.warn(msg);
      return ui.notifications.warn(msg);
    }
    if (item.data.type !== "spell") throw new Error("Wrong Item type");

    if (getProperty(item.data, "data.preparation.mode") !== "atwill" && item.getSpellUses() < item.chargeCost) {
      const msg = game.i18n.localize("PF1.ErrorNoSpellsLeft");
      console.warn(msg);
      return ui.notifications.warn(msg);
    }

    // Invoke the Item roll
    return item.useAttack({ ev: ev, skipDialog: skipDialog });
  }

  async createAttackFromWeapon(item) {
    if (!this.hasPerm(game.user, "OWNER")) {
      const msg = game.i18n.localize("PF1.ErrorNoActorPermissionAlt").format(this.name);
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
    if (isMelee) attackData["data.ability.attack"] = "str";
    else attackData["data.ability.attack"] = "dex";
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
      extraAttacks = extraAttacks.concat([[`-${a}`, `${game.i18n.localize("PF1.Attack")} ${Math.floor((a + 5) / 5)}`]]);
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
        // const weaponSize = Object.keys(CONFIG.PF1.sizeChart).indexOf(item.data.data.weaponData.size) - 4;
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

    ui.notifications.info(game.i18n.localize("PF1.NotificationCreatedAttack").format(item.data.name));
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
      sklName = `${CONFIG.PF1.skills[skillId]} (${skl.name})`;
      parentSkill = this.getSkillInfo(skillId);
    } else {
      skl = this.data.data.skills[skillId];
      if (!skl) return null;
      if (skl.name != null) {
        sklName = skl.name;
        isCustom = true;
      } else sklName = CONFIG.PF1.skills[skillId];
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
      const msg = game.i18n.localize("PF1.ErrorNoActorPermissionAlt").format(this.name);
      console.warn(msg);
      return ui.notifications.warn(msg);
    }

    let skl, sklName;
    const data = this.data.data,
      skillParts = skillId.split("."),
      isSubSkill = skillParts[1] === "subSkills" && skillParts.length === 3;
    let sources = [];
    if (isSubSkill) {
      skillId = skillParts[0];
      skl = data.skills[skillId].subSkills[skillParts[2]];
      sklName = `${CONFIG.PF1.skills[skillId]} (${skl.name})`;
      sources = this.sourceDetails[`data.skills.${skillId}.subSkills.${skillParts[2]}.changeBonus`];
    } else {
      skl = data.skills[skillId];
      if (skl.name != null) sklName = skl.name;
      else sklName = CONFIG.PF1.skills[skillId];
      sources = this.sourceDetails[`data.skills.${skillId}.changeBonus`];
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
      notes.push(game.i18n.localize("PF1.Untrained"));
    }

    // Build base modifiers, but don't include all if they're zeroed.
    let mods = [skl.rank];
    if (skl.cs && skl.rank > 0) mods.push(3);
    mods.push(data.abilities[skl.ability].mod);
    const acp = data.attributes.acp.total;
    if (skl.acp && acp > 0) mods.push(-acp);
    const energyDrain = Math.abs(data.attributes.energyDrain);
    if (energyDrain > 0) mods.push(-energyDrain);

    let changes = sources.map((item) => item.value).filter((item) => Number.isInteger(item));

    let props = [];
    if (notes.length > 0) props.push({ header: "Notes", value: notes });
    return DicePF.d20Roll({
      event: options.event,
      fastForward: options.skipDialog === true,
      staticRoll: options.staticRoll,
      parts: [...mods, ...changes],
      dice: options.dice,
      data: {},
      title: game.i18n.localize("PF1.SkillCheck").format(sklName),
      speaker: ChatMessage.getSpeaker({ actor: this }),
      chatTemplate: "systems/pf1/templates/chat/roll-ext.hbs",
      chatTemplateData: { hasProperties: props.length > 0, properties: props },
      noSound: options.noSound,
      compendiumEntry: CONFIG.PF1.skillCompendiumEntries[skillId],
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
      const msg = game.i18n.localize("PF1.ErrorNoActorPermissionAlt").format(this.name);
      console.warn(msg);
      return ui.notifications.warn(msg);
    }

    return DicePF.d20Roll({
      event: options.event,
      parts: ["@mod"],
      dice: options.dice,
      data: { mod: this.data.data.attributes.bab.total },
      title: game.i18n.localize("PF1.BAB"),
      speaker: ChatMessage.getSpeaker({ actor: this }),
      takeTwenty: false,
      noSound: options.noSound,
    });
  }

  rollCMB(options = { noSound: false, dice: "1d20" }) {
    if (!this.hasPerm(game.user, "OWNER")) {
      const msg = game.i18n.localize("PF1.ErrorNoActorPermissionAlt").format(this.name);
      console.warn(msg);
      return ui.notifications.warn(msg);
    }

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
    if (notes.length > 0) props.push({ header: game.i18n.localize("PF1.Notes"), value: notes });
    return DicePF.d20Roll({
      event: options.event,
      parts: ["@mod"],
      dice: options.dice,
      data: { mod: this.data.data.attributes.cmb.total },
      title: game.i18n.localize("PF1.CMB"),
      speaker: ChatMessage.getSpeaker({ actor: this }),
      takeTwenty: false,
      chatTemplate: "systems/pf1/templates/chat/roll-ext.hbs",
      chatTemplateData: { hasProperties: props.length > 0, properties: props },
      noSound: options.noSound,
    });
  }

  rollCL(spellbookKey, options = { noSound: false, dice: "1d20" }) {
    const spellbook = this.data.data.attributes.spells.spellbooks[spellbookKey];
    const rollData = this.getRollData();
    rollData.cl = spellbook.cl.total;

    // Add contextual caster level string
    const notes = this.getContextNotesParsed(`spell.cl.${spellbookKey}`);

    let props = [];
    if (notes.length > 0) props.push({ header: game.i18n.localize("PF1.Notes"), value: notes });
    return DicePF.d20Roll({
      event: event,
      parts: [`@cl`],
      data: rollData,
      title: game.i18n.localize("PF1.CasterLevelCheck"),
      speaker: ChatMessage.getSpeaker({ actor: this }),
      takeTwenty: false,
      chatTemplate: "systems/pf1/templates/chat/roll-ext.hbs",
      chatTemplateData: { hasProperties: props.length > 0, properties: props },
      noSound: options.noSound,
    });
  }

  rollConcentration(spellbookKey, options = { noSound: false, dice: "1d20" }) {
    const spellbook = this.data.data.attributes.spells.spellbooks[spellbookKey];
    const rollData = this.getRollData();
    rollData.cl = spellbook.cl.total;
    rollData.mod = this.data.data.abilities[spellbook.ability].mod;
    rollData.concentrationBonus = spellbook.concentration;

    // Add contextual concentration string
    const notes = this.getContextNotesParsed(`spell.concentration.${spellbookKey}`);

    let props = [];
    if (notes.length > 0) props.push({ header: game.i18n.localize("PF1.Notes"), value: notes });

    let formulaRoll = 0;
    if (spellbook.concentrationFormula.length)
      formulaRoll = new Roll(spellbook.concentrationFormula, rollData).roll().total;
    rollData.formulaBonus = formulaRoll;

    return DicePF.d20Roll({
      event: event,
      parts: ["@cl + @mod + @concentrationBonus + @formulaBonus"],
      dice: options.dice,
      data: rollData,
      title: game.i18n.localize("PF1.ConcentrationCheck"),
      speaker: ChatMessage.getSpeaker({ actor: this }),
      takeTwenty: false,
      chatTemplate: "systems/pf1/templates/chat/roll-ext.hbs",
      chatTemplateData: { hasProperties: props.length > 0, properties: props },
      noSound: options.noSound,
    });
  }

  getDefenseHeaders() {
    const data = this.data.data;
    const headers = [];

    const reSplit = CONFIG.PF1.re.traitSeparator;
    let misc = [];

    // Damage reduction
    if (data.traits.dr.length) {
      headers.push({ header: game.i18n.localize("PF1.DamRed"), value: data.traits.dr.split(reSplit) });
    }
    // Energy resistance
    if (data.traits.eres.length) {
      headers.push({ header: game.i18n.localize("PF1.EnRes"), value: data.traits.eres.split(reSplit) });
    }
    // Damage vulnerabilities
    if (data.traits.dv.value.length || data.traits.dv.custom.length) {
      const value = [].concat(
        data.traits.dv.value.map((obj) => {
          return CONFIG.PF1.damageTypes[obj];
        }),
        data.traits.dv.custom.length > 0 ? data.traits.dv.custom.split(";") : []
      );
      headers.push({ header: game.i18n.localize("PF1.DamVuln"), value: value });
    }
    // Condition resistance
    if (data.traits.cres.length) {
      headers.push({ header: game.i18n.localize("PF1.ConRes"), value: data.traits.cres.split(reSplit) });
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
          return CONFIG.PF1.damageTypes[obj];
        }),
        data.traits.di.custom.length > 0 ? data.traits.di.custom.split(";") : [],
        data.traits.ci.value.map((obj) => {
          return CONFIG.PF1.conditionTypes[obj];
        }),
        data.traits.ci.custom.length > 0 ? data.traits.ci.custom.split(";") : []
      );
      headers.push({ header: game.i18n.localize("PF1.ImmunityPlural"), value: value });
    }
    // Spell Resistance
    if (data.attributes.sr.total > 0) {
      misc.push(game.i18n.localize("PF1.SpellResistanceNote").format(data.attributes.sr.total));
    }

    if (misc.length > 0) {
      headers.push({ header: game.i18n.localize("PF1.MiscShort"), value: misc });
    }

    return headers;
  }

  async rollInitiative() {
    if (!this.hasPerm(game.user, "OWNER")) {
      const msg = game.i18n.localize("PF1.ErrorNoActorPermissionAlt").format(this.name);
      console.warn(msg);
      return ui.notifications.warn(msg);
    }

    let formula = _getInitiativeFormula(this);
    let overrideRollMode = null,
      bonus = "",
      stop = false;
    if (keyboard.isDown("Shift")) {
      const dialogData = await Combat.showInitiativeDialog(formula);
      overrideRollMode = dialogData.rollMode;
      bonus = dialogData.bonus || "";
      stop = dialogData.stop || false;
    }

    if (stop) return;

    const actorData = this.getRollData();
    // Add bonus
    actorData.bonus = bonus;
    if (bonus.length > 0) formula += " + @bonus";

    // Roll initiative
    const rollMode = overrideRollMode;
    const roll = new Roll(formula, actorData).roll();

    // Construct chat message data
    let messageData = {
      speaker: {
        scene: canvas.scene._id,
        actor: this._id,
        token: this.token ? this.token._id : null,
        alias: this.token ? this.token.name : null,
      },
      flavor: game.i18n.localize("PF1.RollsForInitiative").format(this.token ? this.token.name : this.name),
    };
    roll.toMessage(messageData, { rollMode });
  }

  rollSavingThrow(savingThrowId, options = { event: null, noSound: false, skipPrompt: true, dice: "1d20" }) {
    if (!this.hasPerm(game.user, "OWNER")) {
      const msg = game.i18n.localize("PF1.ErrorNoActorPermissionAlt").format(this.name);
      console.warn(msg);
      return ui.notifications.warn(msg);
    }

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

    // Roll saving throw
    let props = this.getDefenseHeaders();
    if (notes.length > 0) props.push({ header: game.i18n.localize("PF1.Notes"), value: notes });
    const label = CONFIG.PF1.savingThrows[savingThrowId];
    const savingThrow = this.data.data.attributes.savingThrows[savingThrowId];
    return DicePF.d20Roll({
      event: options.event,
      parts: mods,
      dice: options.dice,
      situational: true,
      data: {},
      title: game.i18n.localize("PF1.SavingThrowRoll").format(label),
      speaker: ChatMessage.getSpeaker({ actor: this }),
      takeTwenty: false,
      fastForward: options.skipPrompt !== false ? true : false,
      chatTemplate: "systems/pf1/templates/chat/roll-ext.hbs",
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
      const msg = game.i18n.localize("PF1.ErrorNoActorPermissionAlt").format(this.name);
      console.warn(msg);
      return ui.notifications.warn(msg);
    }

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

    let props = this.getDefenseHeaders();
    if (notes.length > 0) props.push({ header: "Notes", value: notes });
    const label = CONFIG.PF1.abilities[abilityId];
    const abl = this.data.data.abilities[abilityId];

    let formula = `@abilities.${abilityId}.mod`;
    if (abl.checkMod) {
      formula += ` + @abilities.${abilityId}.checkMod`;
    }
    if (this.data.data.attributes.energyDrain) {
      formula += " - @attributes.energyDrain";
    }

    return DicePF.d20Roll({
      event: options.event,
      parts: [formula],
      dice: options.dice,
      data: rollData,
      title: game.i18n.localize("PF1.AbilityTest").format(label),
      speaker: ChatMessage.getSpeaker({ actor: this }),
      chatTemplate: "systems/pf1/templates/chat/roll-ext.hbs",
      chatTemplateData: { hasProperties: props.length > 0, properties: props },
      noSound: options.noSound,
    });
  }

  /**
   * Show defenses in chat
   */
  async rollDefenses() {
    if (!this.hasPerm(game.user, "OWNER")) {
      const msg = game.i18n.localize("PF1.ErrorNoActorPermissionAlt").format(this.name);
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
    const reSplit = CONFIG.PF1.re.traitSeparator;
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
          return CONFIG.PF1.damageTypes[obj];
        }),
        ...(this.data.data.traits.di.custom.length > 0 ? this.data.data.traits.di.custom.split(reSplit) : []),
      ];
      energyResistance.push(...values.map((o) => game.i18n.localize("PF1.ImmuneTo").format(o)));
    }
    // Damage Vulnerability
    if (this.data.data.traits.dv.value.length || this.data.data.traits.dv.custom.length) {
      const values = [
        ...this.data.data.traits.dv.value.map((obj) => {
          return CONFIG.PF1.damageTypes[obj];
        }),
        ...(this.data.data.traits.dv.custom.length > 0 ? this.data.data.traits.dv.custom.split(reSplit) : []),
      ];
      energyResistance.push(...values.map((o) => game.i18n.localize("PF1.VulnerableTo").format(o)));
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
    const msg = await createCustomChatMessage("systems/pf1/templates/chat/defenses.hbs", data, {
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
          const msg = game.i18n.localize("PF1.ErrorNoActorPermissionAlt").format(this.name);
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
      let template = "systems/pf1/templates/apps/damage-dialog.hbs";
      let dialogData = {
        damage: value,
        healing: healingInvert == -1 ? true : false,
        damageReduction: reductionDefault,
        tokens: tokens,
        nonlethal: asNonlethal,
      };
      const html = await renderTemplate(template, dialogData);

      const buttons = {};
      buttons.normal = {
        label: game.i18n.localize("PF1.Apply"),
        callback: (html) => _submit.call(this, html, 1 * healingInvert),
      };
      buttons.half = {
        label: game.i18n.localize("PF1.ApplyHalf"),
        callback: (html) => _submit.call(this, html, 0.5 * healingInvert),
      };
      return new Promise((resolve) => {
        var d = new Dialog({
          title: healingInvert > 0 ? game.i18n.localize("PF1.ApplyDamage") : game.i18n.localize("PF1.ApplyHealing"),
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
            inp.on("click", 'a[name="swap-selected"]', swapSelected);
            inp.on("click", 'a[name="clear-reduction"], p.notes a', setReduction);
          },
        });
        d.render(true);
      });
    } else _submit();
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

  _computeEncumbrance(updateData, srcData) {
    const carry = this.getCarryCapacity(srcData);
    linkData(srcData, updateData, "data.attributes.encumbrance.levels.light", carry.light);
    linkData(srcData, updateData, "data.attributes.encumbrance.levels.medium", carry.medium);
    linkData(srcData, updateData, "data.attributes.encumbrance.levels.heavy", carry.heavy);
    linkData(srcData, updateData, "data.attributes.encumbrance.levels.carry", carry.heavy * 2);
    linkData(srcData, updateData, "data.attributes.encumbrance.levels.drag", carry.heavy * 5);

    const carriedWeight = Math.max(0, this.getCarriedWeight(srcData));
    linkData(srcData, updateData, "data.attributes.encumbrance.carriedWeight", Math.round(carriedWeight * 10) / 10);

    // Determine load level
    let encLevel = 0;
    if (carriedWeight > 0) {
      if (carriedWeight >= srcData.data.attributes.encumbrance.levels.light) encLevel++;
      if (carriedWeight >= srcData.data.attributes.encumbrance.levels.medium) encLevel++;
    }
    linkData(srcData, updateData, "data.attributes.encumbrance.level", encLevel);
  }

  _calculateCoinWeight(data) {
    const coinWeightDivisor = game.settings.get("pf1", "coinWeight");
    return (
      Object.values(data.data.currency).reduce((cur, amount) => {
        return cur + amount;
      }, 0) / coinWeightDivisor
    );
  }

  getCarryCapacity(srcData) {
    // Determine carrying capacity
    const carryStr = srcData.data.abilities.str.total + srcData.data.abilities.str.carryBonus;
    let carryMultiplier = srcData.data.abilities.str.carryMultiplier;
    const size = srcData.data.traits.size;
    if (srcData.data.attributes.quadruped) carryMultiplier *= CONFIG.PF1.encumbranceMultipliers.quadruped[size];
    else carryMultiplier *= CONFIG.PF1.encumbranceMultipliers.normal[size];
    const table = CONFIG.PF1.encumbranceLoads;

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

  getCarriedWeight(srcData) {
    // Determine carried weight
    const physicalItems = srcData.items.filter((o) => {
      return o.data.weight != null;
    });
    const weight = physicalItems.reduce((cur, o) => {
      if (!o.data.carried) return cur;
      return cur + o.data.weight * o.data.quantity;
    }, this._calculateCoinWeight(srcData));

    return convertWeight(weight);
  }

  /**
   * @returns {number} The total amount of currency this actor has, in gold pieces
   */
  mergeCurrency() {
    return this.getTotalCurrency("currency") + this.getTotalCurrency("altCurrency");
  }

  getTotalCurrency(category = "currency") {
    const currencies = getProperty(this.data.data, category);
    return (currencies.pp * 1000 + currencies.gp * 100 + currencies.sp * 10 + currencies.cp) / 100;
  }

  /**
   * Converts currencies of the given category to the given currency type
   * @param {string} category - Either 'currency' or 'altCurrency'.
   * @param {string} type - Either 'pp', 'gp', 'sp' or 'cp'. Converts as much currency as possible to this type.
   */
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
  }

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

  getRollData(data = null) {
    if (data == null) data = this.data.data;
    let result = duplicate(data);

    // Set size index
    result.size = Object.keys(CONFIG.PF1.sizeChart).indexOf(getProperty(data, "traits.size")) - 4;

    // Set class data
    result.classes = {};
    this.data.items
      .filter((obj) => {
        return obj.type === "class";
      })
      .forEach((cls) => {
        const tag = cls.data.tag;
        if (!tag) return;

        let healthConfig = game.settings.get("pf1", "healthConfig");
        const hasPlayerOwner = isMinimumCoreVersion("0.7.2") ? this.hasPlayerOwner : this.isPC;
        healthConfig =
          cls.data.classType === "racial"
            ? healthConfig.hitdice.Racial
            : hasPlayerOwner
            ? healthConfig.hitdice.PC
            : healthConfig.hitdice.NPC;
        const classType = cls.data.classType || "base";
        result.classes[tag] = {
          level: cls.data.level,
          name: cls.name,
          hd: cls.data.hd,
          bab: cls.data.bab,
          hp: healthConfig.auto,
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
          let formula = CONFIG.PF1.classSavingThrowFormulas[classType][cls.data.savingThrows[k].value];
          if (formula == null) formula = "0";
          result.classes[tag].savingThrows[k] = new Roll(formula, { level: cls.data.level }).roll().total;
        }
      });

    // Add more info for formulas
    if (this.items) {
      result.armor = { type: 0 };
      result.shield = { type: 0 };

      // Determine equipped armor type
      const armor = this.items.filter(
        (o) => o.type === "equipment" && o.data.data.equipmentType === "armor" && o.data.data.equipped
      );
      for (let o of armor) {
        const subtype = o.data.data.equipmentSubtype;
        if (subtype === "lightArmor" && result.armor.type < 1) result.armor.type = 1;
        else if (subtype === "mediumArmor" && result.armor.type < 2) result.armor.type = 2;
        else if (subtype === "heavyArmor" && result.armor.type < 3) result.armor.type = 3;
      }

      // Determine equipped shield type
      const shields = this.items.filter(
        (o) => o.type === "equipment" && o.data.data.equipmentType === "shield" && o.data.data.equipped
      );
      for (let o of shields) {
        const subtype = o.data.data.equipmentSubtype;
        if (subtype === "other" && result.shield.type < 1) result.shield.type = 1;
        else if (subtype === "lightShield" && result.shield.type < 2) result.shield.type = 2;
        else if (subtype === "heavyShield" && result.shield.type < 3) result.shield.type = 3;
        else if (subtype === "towerShield" && result.shield.type < 4) result.shield.type = 4;
      }
    }

    // Add spellbook info
    for (let [k, spellbook] of Object.entries(getProperty(result, "attributes.spells.spellbooks"))) {
      setProperty(result, `spells.${k}`, spellbook);
      const cl = spellbook.cl.total;
      spellbook.range = {
        close: convertDistance(25 + 5 * Math.floor(cl / 2))[0],
        medium: convertDistance(100 + 10 * cl)[0],
        long: convertDistance(400 + 40 * cl)[0],
      };
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

    return result;
  }

  getCR(data = null) {
    if (this.data.type !== "npc") return 0;
    if (data == null) data = this.data.data;

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
          color1: ItemPF.getTypeColor(o.type, 0),
          color2: ItemPF.getTypeColor(o.type, 1),
        };
      });
  }

  async toggleConditionStatusIcons() {
    const isLinkedToken = getProperty(this.data, "token.actorLink");
    const tokens = isLinkedToken ? this.getActiveTokens() : [this.token].filter((o) => o != null);

    if (!tokens.length) return;

    // Determine buff textures
    const buffs = this.items.filter((o) => o.type === "buff");
    let buffTextures = buffs.reduce((cur, o) => {
      const img = o.data.img;
      if (o.data.data.active && !o.data.data.hideFromToken && !game.settings.get("pf1", "hideTokenConditions"))
        cur[img] = true;
      else if (cur[img] == null) cur[img] = false;
      return cur;
    }, {});

    // Determine condition textures
    let conditionTextures = Object.entries(CONFIG.PF1.conditionTextures).reduce((cur, o) => {
      if (this.data.data.attributes.conditions[o[0]]) cur[o[1]] = true;
      else if (!this.data.data.attributes.conditions[o[0]] && cur[o[1]] == null) cur[o[1]] = false;
      return cur;
    }, {});
    for (let [k, v] of Object.entries(conditionTextures)) {
      if (v === true) {
        if (!buffTextures[k] && !game.settings.get("pf1", "hideTokenConditions")) buffTextures[k] = v;
      } else if (v === false) {
        if (buffTextures[k] == null) buffTextures[k] = v;
      }
    }

    // Update token(s)
    let promises = [];
    for (let token of tokens) {
      const fx = token.data.effects;
      for (let [img, active] of Object.entries(buffTextures)) {
        const idx = fx.findIndex((e) => e === img);
        if (idx === -1 && active === true) {
          fx.push(img);
        } else if (idx !== -1 && active === false) {
          fx.splice(idx, 1);
        }
      }
      promises.push(token.update({ effects: fx }, { diff: false }));
    }

    return Promise.all(promises);
  }

  updateChangeEvals() {
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

    // Gather changes
    const changes = this.changeItems.reduce((cur, o) => {
      cur.push(
        ...o.changes.filter((c) => {
          return c.operator === "script";
        })
      );
      return cur;
    }, []);

    const createFunction = function (funcDef, funcArgs = []) {
      try {
        const preDef = `const result = { operator: "add", value: 0, };`;
        const postDef = `return result;`;
        const fullDef = `return function(${funcArgs.join(",")}) {${preDef}${funcDef}${postDef}};`;
        return new Function(fullDef)();
      } catch (e) {
        console.warn("Could not create change function with definition ", funcDef);
        return function () {
          return 0;
        };
      }
    };

    // Create functions
    let removeIDs = Object.keys(this._changeFunctions);
    for (let c of changes) {
      if (this._changeFunctions[c._id] && c.updateTime < this._changeFunctions[c._id].time) continue;

      if (removeIDs.includes(c._id)) removeIDs.splice(removeIDs.indexOf(c._id), 1);

      const obj = {
        time: new Date(),
      };

      // Create function
      const funcDef = c.formula;
      obj.func = createFunction(funcDef, ["d"]);
      this._changeFunctions[c._id] = obj;
    }

    // Remove old functions
    for (let id of removeIDs) {
      delete this._changeFunctions[id];
    }
  }
}
