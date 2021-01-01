import { DicePF, formulaHasDice } from "../dice.js";
import { createCustomChatMessage } from "../chat.js";
import { createTag, linkData, convertDistance, convertWeight, convertWeightBack } from "../lib.js";
import { ActorPF } from "../actor/entity.js";
import { AbilityTemplate } from "../pixi/ability-template.js";
import { ChatAttack } from "../misc/chat-attack.js";
import { SemanticVersion } from "../semver.js";
import { ItemChange } from "./components/change.js";

/**
 * Override and extend the basic :class:`Item` implementation
 */
export class ItemPF extends Item {
  constructor(...args) {
    super(...args);

    /**
     * @property {Object} _prevData
     * When an item gets updated, certain data is stored here for use in _onUpdate.
     */
    this._prevData = {};

    /**
     * @property {Object} links
     * Links are stored here during runtime.
     */
    this.links = {};
  }

  static isInventoryItem(type) {
    return ["weapon", "equipment", "consumable", "loot", "container"].includes(type);
  }

  /* -------------------------------------------- */
  /*  Item Properties                             */
  /* -------------------------------------------- */

  get isOwned() {
    return super.isOwned || this.parentItem != null;
  }

  /**
   * Does the Item implement an attack roll as part of its usage
   * @type {boolean}
   */
  get hasAttack() {
    return ["mwak", "rwak", "msak", "rsak", "mcman", "rcman"].includes(this.data.data.actionType);
  }

  get hasMultiAttack() {
    return this.hasAttack && this.data.data.attackParts != null && this.data.data.attackParts.length > 0;
  }

  get hasTemplate() {
    const v = getProperty(this.data, "data.measureTemplate.type");
    const s = getProperty(this.data, "data.measureTemplate.size");
    return (
      typeof v === "string" && v !== "" && ((typeof s === "string" && s.length > 0) || (typeof s === "number" && s > 0))
    );
  }

  get hasSound() {
    return !!this.data.data.soundEffect;
  }

  get hasAction() {
    return this.hasAttack || this.hasDamage || this.hasEffect || this.hasSave || this.hasTemplate || this.hasSound;
  }

  get isSingleUse() {
    return getProperty(this.data, "data.uses.per") === "single" || !hasProperty(this.data, "data.uses.per");
  }

  get isCharged() {
    if (this.type === "spell" && this.maxCharges > 0 && this.chargeCost > 0) return true;
    if (this.type === "consumable" && getProperty(this.data, "data.uses.per") === "single") return true;
    return ["day", "week", "charges"].includes(getProperty(this.data, "data.uses.per"));
  }

  get autoDeductCharges() {
    return this.type === "spell"
      ? getProperty(this.data, "data.preparation.autoDeductCharges") === true
      : this.isCharged && getProperty(this.data, "data.uses.autoDeductCharges") === true;
  }

  get charges() {
    // No actor? No charges!
    if (!this.parentActor) return 0;

    // Get linked charges
    const link = getProperty(this, "links.charges");
    if (link) return link.charges;

    // Get own charges
    if (this.type === "spell") return this.getSpellUses();
    if (this.isSingleUse) return getProperty(this.data, "data.quantity");
    return getProperty(this.data, "data.uses.value") || 0;
  }

  get maxCharges() {
    // No actor? No charges!
    if (!this.parentActor) return 0;

    // Get linked charges
    const link = getProperty(this, "links.charges");
    if (link) return link.maxCharges;

    // Get own charges
    if (this.type === "spell") return this.getSpellUses(true);
    if (this.isSingleUse) return getProperty(this.data, "data.quantity");
    return getProperty(this.data, "data.uses.max") || 0;
  }

  get chargeCost() {
    if (this.type === "spell") {
      if (this.useSpellPoints()) return this.getSpellPointCost();
      if (this.spellLevel === 0) return 0;
      return 1;
    }

    const formula = getProperty(this.data, "data.uses.autoDeductChargesCost");
    if (!(typeof formula === "string" && formula.length > 0)) return 1;
    const cost = new Roll(formula, this.getRollData()).roll().total;
    return cost;
  }

  get spellbook() {
    if (this.type !== "spell") return null;
    if (this.parentActor == null) return null;

    const spellbookIndex = this.data.data.spellbook;
    return this.parentActor.data.data.attributes.spells.spellbooks[spellbookIndex];
  }

  get casterLevel() {
    const spellbook = this.spellbook;
    if (!spellbook) return null;

    return spellbook.cl.total + (this.data.data.clOffset || 0);
  }

  get spellLevel() {
    if (this.type !== "spell") return null;

    return this.data.data.level + (this.data.data.slOffset || 0);
  }

  get auraStrength() {
    const cl = getProperty(this.data, "data.cl") || 0;
    if (cl < 1) {
      return 0;
    } else if (cl < 6) {
      return 1;
    } else if (cl < 12) {
      return 2;
    } else if (cl < 21) {
      return 3;
    }
    return 4;
  }

  // Returns range (in feet)
  get range() {
    let range = getProperty(this.data, "data.range.value");
    const rangeType = getProperty(this.data, "data.range.units");

    if (rangeType == null) return null;

    switch (rangeType) {
      case "melee":
      case "touch":
        return convertDistance(getProperty(this.getRollData(), "range.melee") || 0)[0];
      case "reach":
        return convertDistance(getProperty(this.getRollData(), "range.reach") || 0)[0];
      case "close":
        return convertDistance(new Roll("25 + floor(@cl / 2) * 5", this.getRollData()).roll().total)[0];
      case "medium":
        return convertDistance(new Roll("100 + @cl * 10", this.getRollData()).roll().total)[0];
      case "long":
        return convertDistance(new Roll("400 + @cl * 40", this.getRollData()).roll().total)[0];
      case "mi":
        return convertDistance(range * 5280)[0];
      default:
        return convertDistance(range)[0];
    }
  }

  get parentActor() {
    if (this.actor) return this.actor;

    let actor = null;
    let p = this.parentItem;
    while (!actor && p) {
      actor = p.actor;
      p = p.parentItem;
    }
    return actor;
  }

  get limited() {
    if (this.parentItem) return this.parentItem.limited;
    return super.limited;
  }

  hasPerm(user, permission, exact = false) {
    // Return true if the object is contained by another object
    if (this.parentItem) return true;

    return super.hasPerm(user, permission, exact);
  }

  /**
   * @param {Object} [rollData] - Data to pass to the roll. If none is given, get new roll data.
   * @returns {Number} The Difficulty Class for this item.
   */
  getDC(rollData = null) {
    // No actor? No DC!
    if (!this.parentActor) return 0;

    if (!rollData) rollData = this.getRollData();
    const data = this.data.data;

    let result = 10;

    // Get conditional save DC bonus
    const dcBonus = rollData["dcBonus"] ?? 0;

    if (this.type === "spell") {
      const spellbook = this.spellbook;
      if (spellbook != null) {
        try {
          result =
            new Roll(spellbook.baseDCFormula, rollData).roll().total +
            new Roll(data.save.dc.length > 0 ? data.save.dc : "0", rollData).roll().total +
            dcBonus;
        } catch (e) {
          console.error(e);
        }
      }
      return result;
    }
    const dcFormula = getProperty(data, "save.dc")?.toString() || "0";
    try {
      result = new Roll(dcFormula, rollData).roll().total + dcBonus;
    } catch (e) {
      console.error(e);
    }
    return result;
  }

  /**
   * @param {String} type - The item type (such as "attack" or "equipment")
   * @param {Number} colorType - 0 for the primary color, 1 for the secondary color
   * @returns {String} A color hex, in the format "#RRGGBB"
   */
  static getTypeColor(type, colorType) {
    switch (colorType) {
      case 0:
        switch (type) {
          case "feat":
            return "#8900EA";
          case "spell":
            return "#5C37FF";
          case "class":
            return "#85B1D2";
          case "race":
            return "#00BD29";
          case "attack":
            return "#F21B1B";
          case "weapon":
          case "equipment":
          case "consumable":
          case "loot":
            return "#E5E5E5";
          case "buff":
            return "#FDF767";
          default:
            return "#FFFFFF";
        }
      case 1:
        switch (type) {
          case "feat":
            return "#5F00A3";
          case "spell":
            return "#4026B2";
          case "class":
            return "#6A8DA8";
          case "race":
            return "#00841C";
          case "attack":
            return "#A91212";
          case "weapon":
          case "equipment":
          case "consumable":
          case "loot":
            return "#B7B7B7";
          case "buff":
            return "#FDF203";
          default:
            return "#C1C1C1";
        }
    }

    return "#FFFFFF";
  }

  get typeColor() {
    return this.constructor.getTypeColor(this.type, 0);
  }

  get typeColor2() {
    return this.constructor.getTypeColor(this.type, 1);
  }

  static get defaultConditional() {
    return {
      default: false,
      name: "",
      modifiers: [],
    };
  }

  static get defaultConditionalModifier() {
    return {
      formula: "",
      target: "",
      subTarget: "",
      type: "",
      critical: "",
    };
  }

  static get defaultContextNote() {
    return {
      text: "",
      target: "",
      subTarget: "",
    };
  }

  /**
   * Generic charge addition (or subtraction) function that either adds charges
   * or quantity, based on item data.
   * @param {number} value       - The amount of charges to add.
   * @returns {Promise}
   */
  async addCharges(value) {
    // Add link charges
    const link = getProperty(this, "links.charges");
    if (link) return link.addCharges(value);

    // Add own charges
    if (getProperty(this.data, "data.uses.per") === "single" && getProperty(this.data, "data.quantity") == null) return;

    if (this.type === "spell") return this.addSpellUses(value);

    let prevValue = this.isSingleUse
      ? getProperty(this.data, "data.quantity")
      : getProperty(this.data, "data.uses.value");

    if (this.isSingleUse) await this.update({ "data.quantity": prevValue + value });
    else await this.update({ "data.uses.value": prevValue + value });
  }

  /* -------------------------------------------- */

  /**
   * Does the Item implement a damage roll as part of its usage
   * @type {boolean}
   */
  get hasDamage() {
    return !!(this.data.data.damage && this.data.data.damage.parts.length);
  }

  /* -------------------------------------------- */

  /**
   * Does the item provide an amount of healing instead of conventional damage?
   * @return {boolean}
   */
  get isHealing() {
    return this.data.data.actionType === "heal" && this.data.data.damage.parts.length;
  }

  get hasEffect() {
    return this.hasDamage || (this.data.data.effectNotes != null && this.data.data.effectNotes.length > 0);
  }

  /* -------------------------------------------- */

  /**
   * Does the Item implement a saving throw as part of its usage
   * @type {boolean}
   */
  get hasSave() {
    return !!this.data.data.save?.type;
  }

  /**
   * Should the item show unidentified data
   * @type {boolean}
   */
  get showUnidentifiedData() {
    return !game.user.isGM && getProperty(this.data, "data.identified") === false;
  }

  /* -------------------------------------------- */
  /*	Data Preparation														*/
  /* -------------------------------------------- */

  /**
   * Augment the basic Item data model with additional dynamic data.
   */
  prepareData() {
    let itemData = super.prepareData() || this.data;
    const data = itemData.data;
    const C = CONFIG.PF1;
    const labels = {};

    // Physical items
    if (hasProperty(itemData, "data.weight")) {
      // Sync name
      if (!hasProperty(this.data, "data.identifiedName")) setProperty(this.data, "data.identifiedName", this.name);
      // Prepare unidentified cost
      if (!hasProperty(this.data, "data.unidentified.price")) setProperty(this.data, "data.unidentified.price", 0);

      // Convert weight according metric system (lb vs kg)
      itemData.data.weightConverted = convertWeight(itemData.data.weight);
      itemData.data.weightUnits =
        game.settings.get("pf1", "units") === "metric" ? game.i18n.localize("PF1.Kgs") : game.i18n.localize("PF1.Lbs");
      itemData.data.priceUnits = game.i18n.localize("PF1.CurrencyGP").toLowerCase();

      // Set basic data
      itemData.data.hp = itemData.data.hp || { max: 10, value: 10 };
      itemData.data.hardness = itemData.data.hardness || 0;
      itemData.data.carried = itemData.data.carried == null ? true : itemData.data.carried;

      // Equipped label
      const checkYes = '<i class="fas fa-check"></i>';
      const checkNo = '<i class="fas fa-times"></i>';
      labels.equipped = "";
      if (itemData.data.equipped === true) labels.equipped = checkYes;
      else labels.equipped = checkNo;

      // Carried label
      labels.carried = "";
      if (itemData.data.carried === true) labels.carried = checkYes;
      else labels.carried = checkNo;

      // Identified label
      labels.identified = "";
      if (itemData.data.identified === true) labels.identified = checkYes;
      else labels.identified = checkNo;

      // Slot label
      if (itemData.data.slot) {
        // Add equipment slot
        const equipmentType = getProperty(this.data, "data.equipmentType") || null;
        if (equipmentType != null) {
          const equipmentSlot = getProperty(this.data, "data.slot") || null;
          labels.slot = equipmentSlot == null ? null : CONFIG.PF1.equipmentSlots[equipmentType][equipmentSlot];
        } else labels.slot = null;
      }
    }

    // Spell Level,  School, and Components
    if (itemData.type === "spell") {
      labels.level = C.spellLevels[data.level];
      labels.school = C.spellSchools[data.school];
      labels.components = this.getSpellComponents()
        .map((o) => o[0])
        .join(" ");
    }

    // Feat Items
    else if (itemData.type === "feat") {
      labels.featType = C.featTypes[data.featType];

      // Ability type
      if (data.abilityType && data.abilityType !== "none") {
        labels.abilityType = C.abilityTypes[data.abilityType].short;
      } else if (labels.abilityType) {
        delete labels.abilityType;
      }
    }

    // Buff Items
    else if (itemData.type === "buff") {
      labels.buffType = C.buffTypes[data.buffType];
    }

    // Weapon Items
    else if (itemData.type === "weapon") {
      // Type and subtype labels
      let wType = getProperty(this.data, "data.weaponType");
      let typeKeys = Object.keys(C.weaponTypes);
      if (!typeKeys.includes(wType)) wType = typeKeys[0];

      let wSubtype = getProperty(this.data, "data.weaponSubtype");
      let subtypeKeys = Object.keys(C.weaponTypes[wType]).filter((o) => !o.startsWith("_"));
      if (!subtypeKeys.includes(wSubtype)) wSubtype = subtypeKeys[0];

      labels.weaponType = C.weaponTypes[wType]._label;
      labels.weaponSubtype = C.weaponTypes[wType][wSubtype];
    }

    // Equipment Items
    else if (itemData.type === "equipment") {
      // Type and subtype labels
      let eType = getProperty(this.data, "data.equipmentType");
      let typeKeys = Object.keys(C.equipmentTypes);
      if (!typeKeys.includes(eType)) eType = typeKeys[0];

      let eSubtype = getProperty(this.data, "data.equipmentSubtype");
      let subtypeKeys = Object.keys(C.equipmentTypes[eType]).filter((o) => !o.startsWith("_"));
      if (!subtypeKeys.includes(eSubtype)) eSubtype = subtypeKeys[0];

      labels.equipmentType = C.equipmentTypes[eType]._label;
      labels.equipmentSubtype = C.equipmentTypes[eType][eSubtype];

      // AC labels
      const ac = (data.armor.value || 0) + (data.armor.enh || 0);
      labels.armor = ac > 0 ? `${ac} AC` : "";
      if (data.armor.dex === "") data.armor.dex = null;
      else if (typeof data.armor.dex === "string" && /\d+/.test(data.armor.dex)) {
        data.armor.dex = parseInt(data.armor.dex);
      }
      // Add enhancement bonus
      if (data.armor.enh == null) data.armor.enh = 0;
    }

    // Activated Items
    if (Object.prototype.hasOwnProperty.call(data, "activation")) {
      const activationTypes = game.settings.get("pf1", "unchainedActionEconomy")
        ? CONFIG.PF1.abilityActivationTypes_unchained
        : CONFIG.PF1.abilityActivationTypes;
      const activationTypesPlural = game.settings.get("pf1", "unchainedActionEconomy")
        ? CONFIG.PF1.abilityActivationTypesPlurals_unchained
        : CONFIG.PF1.abilityActivationTypesPlurals;

      // Ability Activation Label
      let act = game.settings.get("pf1", "unchainedActionEconomy")
        ? getProperty(data, "unchainedAction.activation") || {}
        : getProperty(data, "activation") || {};
      if (act && act.cost > 1 && activationTypesPlural[act.type] != null) {
        labels.activation = [act.cost.toString(), activationTypesPlural[act.type]].filterJoin(" ");
      } else if (act) {
        labels.activation = [
          ["minute", "hour", "action"].includes(act.type) && act.cost ? act.cost.toString() : "",
          activationTypes[act.type],
        ].filterJoin(" ");
      }

      // Target Label
      let tgt = data.target || {};
      if (["none", "touch", "personal"].includes(tgt.units)) tgt.value = null;
      if (["none", "personal"].includes(tgt.type)) {
        tgt.value = null;
        tgt.units = null;
      }
      labels.target = [tgt.value, C.distanceUnits[tgt.units], C.targetTypes[tgt.type]].filterJoin(" ");
      if (labels.target) labels.target = `Target: ${labels.target}`;

      // Range Label
      let rng = data.range || {};
      if (!["ft", "mi", "spec"].includes(rng.units)) {
        rng.value = null;
        rng.long = null;
      }
      labels.range = [rng.value, rng.long ? `/ ${rng.long}` : null, C.distanceUnits[rng.units]].filterJoin(" ");
      if (labels.range.length > 0) labels.range = ["Range:", labels.range].join(" ");

      // Duration Label
      let dur = data.duration || {};
      if (["inst", "perm", "spec"].includes(dur.units)) dur.value = null;
      labels.duration = [dur.value, C.timePeriods[dur.units]].filterJoin(" ");
    }

    // Item Actions
    if (Object.prototype.hasOwnProperty.call(data, "actionType")) {
      // Save DC
      let save = data.save || {};
      if (save.type) {
        labels.save = `DC ${this.getDC()}`;
      }

      // Damage
      let dam = data.damage || {};
      if (dam.parts) {
        labels.damage = dam.parts
          .map((d) => d[0])
          .join(" + ")
          .replace(/\+ -/g, "- ");
        labels.damageTypes = dam.parts.map((d) => d[1]).join(", ");
      }

      // Add attack parts
      if (!data.attack) data.attack = { parts: [] };
    }

    // Assign labels
    this.labels = labels;

    this.prepareLinks();

    // Update changes
    if (this.data.data.changes instanceof Array) {
      this.changes = this._prepareChanges(this.data.data.changes);
    }

    // Update contained items
    if (this.data.data.inventoryItems instanceof Array) {
      this.items = this._prepareInventory(this.data.data.inventoryItems);
    }

    return itemData;
  }

  prepareLinks() {
    if (!this.links) return;

    for (let [k, i] of Object.entries(this.links)) {
      switch (k) {
        case "charges": {
          const uses = i.data.data.uses;
          for (let [k, v] of Object.entries(uses)) {
            if (["autoDeductCharges", "autoDeductChargesCost"].includes(k)) continue;
            this.data.data.uses[k] = v;
          }
          break;
        }
      }
    }
  }

  _prepareChanges(changes) {
    const prior = this.changes;
    const collection = new Collection();
    for (let c of changes) {
      let change = null;
      if (prior && prior.has(c._id)) {
        change = prior.get(c._id);
        change.data = c;
        change.prepareData();
      } else change = ItemChange.create(c, this);
      collection.set(c._id || change.data._id, change);
    }
    return collection;
  }

  _prepareInventory(inventory) {
    const prior = this.items;
    const collection = new Collection();
    for (let o of inventory) {
      let item = null;
      if (prior && prior.has(o._id)) {
        item = prior.get(o._id);
        item._data = o;
        item.data = item._data;
        item.prepareData();
      } else {
        item = new CONFIG.Item.entityClass(o);
        item.parentItem = this;
      }

      collection.set(o._id || item.data._id, item);
    }
    return collection;
  }

  async update(data, options = {}) {
    const srcData = mergeObject(this.data, expandObject(data), { inplace: false });

    // Make sure changes remains an array
    if (Object.keys(data).filter((e) => e.startsWith("data.changes.")).length > 0) {
      let changeIndexes = [];
      let subData = Object.entries(data).filter((e) => e[0].startsWith("data.changes."));
      let arr = duplicate(this.data.data.changes || []);

      // Get pre update data for changes
      subData.forEach((entry) => {
        const i = entry[0].split(".").slice(2)[0];

        // Add change update data
        if (!changeIndexes.includes(i)) {
          changeIndexes.push(i);
          const changeID = this.data.data.changes[i]._id;
          const change = this.changes.get(changeID);
          if (change) {
            const changeDataPrefix = `data.changes.${i}.`;
            const thisChangeData = subData
              .filter((o) => o[0].startsWith(changeDataPrefix))
              .reduce((cur, o) => {
                const key = o[0].slice(changeDataPrefix.length);
                cur[key] = o[1];
                return cur;
              }, {});
            const preUpdateData = change.preUpdate(thisChangeData);

            // Apply pre-update data to the data to be parsed
            for (const [k, v] of Object.entries(preUpdateData)) {
              const dataKey = `data.changes.${i}.${k}`;
              data[dataKey] = v;
            }
          }
        }
      });
      // Refresh sub-data
      subData = Object.entries(data).filter((e) => e[0].startsWith("data.changes."));

      subData.forEach((entry) => {
        let subKey = entry[0].split(".").slice(2);
        let i = subKey[0];
        let subKey2 = subKey.slice(1).join(".");

        if (!arr[i]) arr[i] = {};

        // Remove property
        if (subKey[subKey.length - 1].startsWith("-=")) {
          const obj = flattenObject(arr[i]);
          subKey[subKey.length - 1] = subKey[subKey.length - 1].slice(2);
          const deleteKeys = Object.keys(obj).filter((o) => o.startsWith(subKey.slice(1).join(".")));
          for (let k of deleteKeys) {
            if (Object.prototype.hasOwnProperty.call(obj, k)) {
              delete obj[k];
            }
          }
          arr[i] = expandObject(obj);
        }
        // Add or change property
        else {
          arr[i] = mergeObject(arr[i], expandObject({ [subKey2]: entry[1] }));
        }

        delete data[entry[0]];
      });
      linkData(srcData, data, "data.changes", arr);
    }

    // Make sure inventory contents remains an array
    if (Object.keys(data).filter((e) => e.startsWith("data.inventoryItems.")).length > 0) {
      let subData = Object.entries(data).filter((e) => e[0].startsWith("data.inventoryItems."));
      let arr = duplicate(this.data.data.inventoryItems || []);
      subData.forEach((entry) => {
        let subKey = entry[0].split(".").slice(2);
        let i = subKey[0];
        let subKey2 = subKey.slice(1).join(".");
        if (!arr[i]) arr[i] = {};

        // Remove property
        if (subKey[subKey.length - 1].startsWith("-=")) {
          const obj = flattenObject(arr[i]);
          subKey[subKey.length - 1] = subKey[subKey.length - 1].slice(2);
          const deleteKeys = Object.keys(obj).filter((o) => o.startsWith(subKey.slice(1).join(".")));
          for (let k of deleteKeys) {
            if (Object.prototype.hasOwnProperty.call(obj, k)) {
              delete obj[k];
            }
          }
          arr[i] = expandObject(obj);
        }
        // Add or item property
        else {
          arr[i] = mergeObject(arr[i], expandObject({ [subKey2]: entry[1] }));
        }

        delete data[entry[0]];
      });
      linkData(srcData, data, "data.inventoryItems", arr);
    }

    // Update weight from base weight
    if (srcData.data.baseWeight !== undefined) {
      const baseWeight = srcData.data.baseWeight || 0;
      const weightReduction = Math.max(0, 1 - (srcData.data.weightReduction || 0) / 100);

      let contentsWeight = (srcData.data.inventoryItems || []).reduce((cur, i) => {
        return cur + (getProperty(i, "data.weight") || 0) * (getProperty(i, "data.quantity") || 0);
      }, 0);
      contentsWeight += this._calculateCoinWeight(srcData);
      contentsWeight = Math.round(contentsWeight * weightReduction * 10) / 10;

      linkData(srcData, data, "data.weight", baseWeight + contentsWeight);
    }
    // Update price from base price
    if (data["data.basePrice"] != null) {
      linkData(srcData, data, "data.price", getProperty(srcData, "data.basePrice") || 0);
    }
    if (data["data.unidentified.basePrice"] != null) {
      linkData(srcData, data, "data.unidentified.price", getProperty(srcData, "data.unidentified.basePrice") || 0);
    }

    // Update name
    if (data["data.identifiedName"]) linkData(srcData, data, "name", data["data.identifiedName"]);
    else if (data["name"]) linkData(srcData, data, "data.identifiedName", data["name"]);

    // Update description
    if (this.type === "spell") await this._updateSpellDescription(data, srcData);

    // Initialize tag for items that have tagged template
    const taggedTypes = game.system.template.Item.types.filter((t) =>
      game.system.template.Item[t].templates?.includes("tagged")
    );
    if (taggedTypes.includes(this.type) && !srcData.data.useCustomTag) {
      const name = srcData.name;
      linkData(srcData, data, "data.tag", createTag(name));
    }

    // Update weight according metric system (lb vs kg)
    if (data["data.weightConverted"] != null) {
      linkData(srcData, data, "data.weight", convertWeightBack(data["data.weightConverted"]));
    }

    // Set weapon subtype
    if (data["data.weaponType"] != null && data["data.weaponType"] !== getProperty(this.data, "data.weaponType")) {
      const type = data["data.weaponType"];
      const subtype = data["data.weaponSubtype"] || getProperty(this.data, "data.weaponSubtype") || "";
      const keys = Object.keys(CONFIG.PF1.weaponTypes[type]).filter((o) => !o.startsWith("_"));
      if (!subtype || !keys.includes(subtype)) {
        linkData(srcData, data, "data.weaponSubtype", keys[0]);
      }
    }

    // Set equipment subtype and slot
    if (
      data["data.equipmentType"] != null &&
      data["data.equipmentType"] !== getProperty(this.data, "data.equipmentType")
    ) {
      // Set subtype
      const type = data["data.equipmentType"];
      const subtype = data["data.equipmentSubtype"] || getProperty(this.data, "data.equipmentSubtype") || "";
      let keys = Object.keys(CONFIG.PF1.equipmentTypes[type]).filter((o) => !o.startsWith("_"));
      if (!subtype || !keys.includes(subtype)) {
        linkData(srcData, data, "data.equipmentSubtype", keys[0]);
      }

      // Set slot
      const slot = data["data.slot"] || getProperty(this.data, "data.slot") || "";
      keys = Object.keys(CONFIG.PF1.equipmentSlots[type]);
      if (!slot || !keys.includes(slot)) {
        linkData(srcData, data, "data.slot", keys[0]);
      }
    }

    // Set previous data
    this._prevData["level"] = getProperty(this.data, "data.level");

    // Update maximum uses
    this._updateMaxUses(data, { srcData: srcData });

    // Make sure charges doesn't exceed max charges, and vice versa
    {
      let charges = 0;
      let maxCharges = 0;
      let target = "value";

      if (this.type === "spell") {
        if (data["data.preparation.maxAmount"] != null) target = "max";
        charges = getProperty(srcData, "data.preparation.preparedAmount");
        maxCharges = getProperty(srcData, "data.preparation.maxAmount");
      } else {
        if (data["data.uses.max"] != null) target = "max";
        charges = getProperty(srcData, "data.uses.value") || 0;
        maxCharges = getProperty(srcData, "data.uses.max") || 0;
      }

      if (target === "value" && charges > maxCharges) maxCharges = charges;
      else if (target === "max" && maxCharges < charges) charges = maxCharges;

      if (this.type === "spell") {
        linkData(srcData, data, "data.preparation.preparedAmount", charges);
        linkData(srcData, data, "data.preparation.maxAmount", maxCharges);
      } else {
        linkData(srcData, data, "data.uses.value", charges);
        linkData(srcData, data, "data.uses.max", maxCharges);
      }
    }

    // Update charges for linked items
    if (data["data.uses.value"] != null) {
      const link = getProperty(this, "links.charges");
      if (link && getProperty(link, "links.charges") == null) {
        await link.update({ "data.uses.value": data["data.uses.value"] });
      }
    }

    let diff = diffObject(flattenObject(this.data), data);
    if (Object.keys(diff).length && !options.skipUpdate) {
      if (this.parentItem == null) {
        return super.update(diff, options);
      } else {
        // Determine item index to update in parent
        const parentInventory = this.parentItem.data.data.inventoryItems || [];
        const parentItem = parentInventory.find((o) => o._id === this._id);
        const idx = parentInventory.indexOf(parentItem);

        if (idx >= 0) {
          // Replace keys to suit parent item
          for (let [k, v] of Object.entries(diff)) {
            delete diff[k];
            diff[`data.inventoryItems.${idx}.${k}`] = v;
          }

          // Set parent weight
          const contentsWeight = parentInventory.reduce((cur, i) => {
            if (i._id === this._id)
              return cur + (getProperty(srcData, "data.weight") || 0) * (getProperty(srcData, "data.quantity") || 0);
            return cur + (getProperty(i, "data.weight") || 0) * (getProperty(i, "data.quantity") || 0);
          }, 0);
          diff["data.weight"] = (getProperty(this.parentItem.data, "data.baseWeight") || 0) + contentsWeight;

          // Update parent item
          await this.parentItem.update(diff);
          return this.render();
        }
      }
    } else if (options.skipUpdate) {
      diff["_id"] = this._id;
      return diff;
    }
    return false;
  }

  _updateContentsWeight(data, { srcData = null } = {}) {
    if (!srcData) srcData = duplicate(this.data);

    let result = getProperty(srcData, "data.baseWeight") || 0;

    result += this.items.reduce((cur, i) => {
      return cur + (getProperty(i, "data.weight") || 0);
    }, 0);

    linkData(srcData, data, "data.weight", result);
  }

  _updateMaxUses(data, { srcData = null } = {}) {
    // No actor? No charges!
    if (!this.parentActor) return;

    let doLinkData = true;
    if (srcData == null) {
      srcData = this.data;
      doLinkData = false;
    }
    const rollData = this.getRollData();

    if (hasProperty(srcData, "data.uses.maxFormula")) {
      const maxFormula = getProperty(srcData, "data.uses.maxFormula");
      if (maxFormula !== "" && !formulaHasDice(maxFormula)) {
        let roll = new Roll(maxFormula, rollData).roll();
        if (doLinkData) linkData(srcData, data, "data.uses.max", roll.total);
        else data["data.uses.max"] = roll.total;
      } else if (formulaHasDice(maxFormula)) {
        const msg = game.i18n
          .localize("PF1.WarningNoDiceAllowedInFormula")
          .format(game.i18n.localize("PF1.ChargePlural"), this.name);
        console.warn(msg);
        ui.notifications.warn(msg);
      }
    }
  }

  /* -------------------------------------------- */

  /**
   * Roll the item to Chat, creating a chat card which contains follow up attack or damage roll options
   * @return {Promise}
   */
  async roll(altChatData = {}, { addDC = true } = {}) {
    const actor = this.parentActor;
    if (actor && !actor.hasPerm(game.user, "OWNER")) {
      const msg = game.i18n.localize("PF1.ErrorNoActorPermissionAlt").format(actor.name);
      console.warn(msg);
      return ui.notifications.warn(msg);
    }

    // Basic template rendering data
    const token = this.parentActor.token;
    const saveType = getProperty(this.data, "data.save.type");
    const saveDC = this.getDC();
    const templateData = {
      actor: this.parentActor,
      tokenId: token ? `${token.scene._id}.${token.id}` : null,
      item: this.data,
      data: this.getChatData(),
      labels: this.labels,
      hasAttack: this.hasAttack,
      hasMultiAttack: this.hasMultiAttack,
      hasAction: this.hasAction || this.isCharged,
      isHealing: this.isHealing,
      hasDamage: this.hasDamage,
      hasEffect: this.hasEffect,
      isVersatile: this.isVersatile,
      hasSave: this.hasSave,
      isSpell: this.data.type === "spell",
      save: {
        hasSave: addDC === true && typeof saveType === "string" && saveType.length > 0,
        dc: saveDC,
        type: saveType,
        label: game.i18n
          .localize("PF1.SavingThrowButtonLabel")
          .format(CONFIG.PF1.savingThrows[saveType], saveDC.toString()),
      },
      hasExtraProperties: false,
      extraProperties: [],
    };

    // Add combat info
    if (game.combat) {
      let combatProps = [];
      // Add round info
      combatProps.push(game.i18n.localize("PF1.CombatInfo_Round").format(game.combat.round));

      if (combatProps.length > 0) {
        templateData.extraProperties.push({ header: game.i18n.localize("PF1.CombatInfo_Header"), value: combatProps });
        templateData.hasExtraProperties = true;
      }
    }

    // Roll spell failure chance
    if (templateData.isSpell && this.parentActor != null && this.parentActor.spellFailure > 0) {
      const spellbook = getProperty(
        this.parentActor.data,
        `data.attributes.spells.spellbooks.${this.data.data.spellbook}`
      );
      if (spellbook && spellbook.arcaneSpellFailure) {
        templateData.spellFailure = new Roll("1d100").roll().total;
        templateData.spellFailureSuccess = templateData.spellFailure > this.parentActor.spellFailure;
      }
    }

    // Render the chat card template
    const templateType = ["consumable"].includes(this.data.type) ? this.data.type : "item";
    const template = `systems/pf1/templates/chat/${templateType}-card.hbs`;

    // Determine metadata
    const metadata = {};
    metadata.item = this._id;

    // Basic chat message data
    const chatData = flattenObject(
      mergeObject(
        {
          user: game.user._id,
          type: CONST.CHAT_MESSAGE_TYPES.OTHER,
          speaker: ChatMessage.getSpeaker({ actor: this.parentActor }),
          flags: {
            core: {
              canPopout: true,
            },
            pf1: {
              metadata,
            },
          },
        },
        altChatData
      )
    );

    // Toggle default roll mode
    let rollMode = chatData.rollMode || game.settings.get("core", "rollMode");
    if (["gmroll", "blindroll"].includes(rollMode)) chatData["whisper"] = ChatMessage.getWhisperRecipients("GM");
    if (rollMode === "blindroll") chatData["blind"] = true;

    // Create the chat message
    return createCustomChatMessage(template, templateData, chatData);
  }

  /* -------------------------------------------- */
  /*  Chat Cards																	*/
  /* -------------------------------------------- */

  getChatData(htmlOptions, rollData = null) {
    const data = duplicate(this.data.data);
    const labels = this.labels;

    if (!rollData) rollData = this.getRollData();

    htmlOptions = mergeObject(htmlOptions || {}, rollData);

    // Rich text description
    if (this.showUnidentifiedData) {
      data.description.value = TextEditor.enrichHTML(data.description.unidentified, { rollData: htmlOptions });
    } else {
      data.description.value = TextEditor.enrichHTML(data.description.value, { rollData: htmlOptions });
    }

    // General equipment properties
    const props = [];
    if (Object.prototype.hasOwnProperty.call(data, "equipped") && ["weapon", "equipment"].includes(this.data.type)) {
      props.push(data.equipped ? game.i18n.localize("PF1.Equipped") : game.i18n.localize("PF1.NotEquipped"));
    }

    if (!this.showUnidentifiedData) {
      // Gather dynamic labels
      const dynamicLabels = {};
      dynamicLabels.range = labels.range || "";
      dynamicLabels.level = labels.sl || "";
      // Range
      if (data.range != null) {
        let rangeValue = [0, "ft"];
        switch (data.range.units) {
          case "close":
            rangeValue = convertDistance(25 + Math.floor(rollData.cl / 2) * 5);
            break;
          case "medium":
            rangeValue = convertDistance(100 + rollData.cl * 10);
            break;
          case "long":
            rangeValue = convertDistance(400 + rollData.cl * 40);
            break;
          case "ft":
          case "mi":
            rangeValue = convertDistance(
              new Roll(data.range.value.length > 0 ? data.range.value : "0", rollData).roll().total,
              data.range.units
            );
            break;
          case "spec":
            rangeValue = convertDistance(
              new Roll(data.range.value.length > 0 ? data.range.value : "0", rollData).roll().total
            );
            break;
        }
        dynamicLabels.range =
          rangeValue[0] > 0
            ? game.i18n.localize("PF1.RangeNote").format(`${rangeValue[0]} ${CONFIG.PF1.measureUnits[rangeValue[1]]}`)
            : null;
      }
      // Duration
      if (data.duration != null) {
        if (!["inst", "perm"].includes(data.duration.units) && typeof data.duration.value === "string") {
          let duration = new Roll(data.duration.value.length > 0 ? data.duration.value : "0", rollData).roll().total;
          dynamicLabels.duration = [duration, CONFIG.PF1.timePeriods[data.duration.units]].filterJoin(" ");
        }
      }

      // Item type specific properties
      const fn = this[`_${this.data.type}ChatData`];
      if (fn) fn.bind(this)(data, labels, props);

      // Ability activation properties
      if (Object.prototype.hasOwnProperty.call(data, "activation")) {
        props.push(labels.target, labels.activation, dynamicLabels.range, dynamicLabels.duration);
      }

      // Add save DC
      if (Object.prototype.hasOwnProperty.call(data, "actionType") && getProperty(data, "save.description")) {
        let saveDC = this.getDC(rollData);
        let saveDesc = data.save.description;
        if (saveDC > 0 && saveDesc) {
          props.push(`${game.i18n.localize("PF1.DC")} ${saveDC}`);
          props.push(saveDesc);
        }
      }
    }

    // Add SR reminder
    if (this.type === "spell") {
      if (data.sr) {
        props.push(game.i18n.localize("PF1.SpellResistance"));
      }
    }

    // Add ability type label
    if (this.type === "feat") {
      if (labels.abilityType) {
        props.push(labels.abilityType);
      }
    }

    // Add charges
    if (this.isCharged && !this.data.data.atWill) {
      if (this.type === "spell" && this.useSpellPoints()) {
        props.push(`${game.i18n.localize("PF1.SpellPoints")}: ${this.charges}/${this.maxCharges}`);
      } else {
        props.push(`${game.i18n.localize("PF1.ChargePlural")}: ${this.charges}/${this.maxCharges}`);
      }
    }

    // Filter properties and return
    data.properties = props.filter((p) => !!p);
    return data;
  }

  /* -------------------------------------------- */

  /**
   * Prepare chat card data for equipment type items
   * @private
   */
  _equipmentChatData(data, labels, props) {
    props.push(CONFIG.PF1.equipmentTypes[data.equipmentType][data.equipmentSubtype], labels.armor || null);
  }

  /* -------------------------------------------- */

  /**
   * Prepare chat card data for weapon type items
   * @private
   */
  _weaponChatData(data, labels, props) {
    props.push(
      CONFIG.PF1.weaponTypes[data.weaponType]._label,
      CONFIG.PF1.weaponTypes[data.weaponType][data.weaponSubtype]
    );
  }

  /* -------------------------------------------- */

  /**
   * Prepare chat card data for consumable type items
   * @private
   */
  _consumableChatData(data, labels, props) {
    props.push(CONFIG.PF1.consumableTypes[data.consumableType]);
    // if (["day", "week", "charges"].includes(data.uses.per)) {
    // props.push(data.uses.value + "/" + data.uses.max + " Charges");
    // }
    // else props.push(CONFIG.PF1.limitedUsePeriods[data.uses.per]);
    data.hasCharges = data.uses.value >= 0;
  }

  /* -------------------------------------------- */

  /**
   * Render a chat card for Spell type data
   * @return {Object}
   * @private
   */
  _spellChatData(data, labels, props) {
    const ad = this.parentActor.data.data;

    // Spell saving throw text
    // const abl = data.ability || ad.attributes.spellcasting || "int";
    // if ( this.hasSave && !data.save.dc ) data.save.dc = 8 + ad.abilities[abl].mod + ad.attributes.prof;
    // labels.save = `DC ${data.save.dc} ${CONFIG.PF1.abilities[data.save.ability]}`;

    // Spell properties
    props.push(labels.level, labels.components);
  }

  /* -------------------------------------------- */

  /**
   * Prepare chat card data for items of the "Feat" type
   */
  _featChatData(data, labels, props) {
    const ad = this.parentActor.data.data;

    // Spell saving throw text
    // const abl = data.ability || ad.attributes.spellcasting || "str";
    // if ( this.hasSave && !data.save.dc ) data.save.dc = 8 + ad.abilities[abl].mod + ad.attributes.prof;
    // labels.save = `DC ${data.save.dc} ${CONFIG.PF1.abilities[data.save.ability]}`;

    // Feat properties
    props.push(CONFIG.PF1.featTypes[data.featType]);
  }

  /* -------------------------------------------- */
  /*  Item Rolls - Attack, Damage, Saves, Checks  */
  /* -------------------------------------------- */

  async use({ ev = null, skipDialog = false }) {
    if (this.type === "spell") {
      return this.parentActor.useSpell(this, ev, { skipDialog: skipDialog });
    } else if (this.hasAction) {
      return this.useAttack({ ev: ev, skipDialog: skipDialog });
    }

    if (this.isCharged) {
      if (this.charges < this.chargeCost) {
        if (this.isSingleUse) {
          const msg = game.i18n.localize("PF1.ErrorNoQuantity");
          console.warn(msg);
          return ui.notifications.warn(msg);
        }
        const msg = game.i18n.localize("PF1.ErrorInsufficientCharges").format(this.name);
        console.warn(msg);
        return ui.notifications.warn(msg);
      }
      if (this.autoDeductCharges) {
        await this.addCharges(-this.chargeCost);
      }
    }
    const chatData = {};
    if (this.data.data.soundEffect) chatData.sound = this.data.data.soundEffect;
    this.roll();
  }

  async useAttack({ ev = null, skipDialog = false, dice = "1d20" } = {}) {
    if (ev && ev.originalEvent) ev = ev.originalEvent;
    const actor = this.parentActor;
    if (actor && !actor.hasPerm(game.user, "OWNER")) {
      const msg = game.i18n.localize("PF1.ErrorNoActorPermissionAlt").format(actor.name);
      console.warn(msg);
      return ui.notifications.warn(msg);
    }

    const itemQuantity = getProperty(this.data, "data.quantity");
    if (itemQuantity != null && itemQuantity <= 0) {
      const msg = game.i18n.localize("PF1.ErrorNoQuantity");
      console.warn(msg);
      return ui.notifications.warn(msg);
    }

    if (this.isCharged && this.charges < this.chargeCost) {
      const msg = game.i18n.localize("PF1.ErrorInsufficientCharges").format(this.name);
      console.warn(msg);
      return ui.notifications.warn(msg);
    }

    // Check ammunition links
    let ammoLinks = [],
      minAmmo;
    if (this.type === "attack") {
      ammoLinks = await this.getLinkedItems("ammunition", true);
      for (let l of ammoLinks) {
        if (minAmmo == null) minAmmo = l.item.charges;
        else minAmmo = Math.min(minAmmo, l.item.charges);

        if (l.item.charges <= 0) {
          const msg = game.i18n.localize("PF1.WarningInsufficientAmmunition").format(l.item.name);
          console.warn(msg);
          return ui.notifications.warn(msg);
        }
      }
    }

    const rollData = this.getRollData();
    rollData.d20 = dice !== "1d20" ? dice : "";

    let rolled = false;
    const _roll = async function (fullAttack, form) {
      let attackExtraParts = [],
        damageExtraParts = [],
        primaryAttack = true,
        useMeasureTemplate = this.hasTemplate && game.settings.get("pf1", "placeMeasureTemplateOnQuickRolls"),
        rollMode = game.settings.get("core", "rollMode"),
        conditionals;
      // Get form data
      if (form) {
        rollData.d20 = form.find('[name="d20"]').val();
        rollData.attackBonus = form.find('[name="attack-bonus"]').val();
        if (rollData.attackBonus) attackExtraParts.push("@attackBonus");
        rollData.damageBonus = form.find('[name="damage-bonus"]').val();
        if (rollData.damageBonus) damageExtraParts.push("@damageBonus");
        rollMode = form.find('[name="rollMode"]').val();

        // Point-Blank Shot
        if (form.find('[name="point-blank-shot"]').prop("checked")) {
          rollData.pointBlankBonus = 1;
          attackExtraParts.push("@pointBlankBonus");
          damageExtraParts.push("@pointBlankBonus");
        }

        // Rapid Shot
        if (form.find('[name="rapid-shot"]').prop("checked")) {
          rollData.rapidShotPenalty = -2;
          attackExtraParts.push("@rapidShotPenalty");
        }

        // Primary Attack (for natural attacks)
        let html = form.find('[name="primary-attack"]');
        if (typeof html.prop("checked") === "boolean") {
          primaryAttack = html.prop("checked");
        }
        // Use measure template
        html = form.find('[name="measure-template"]');
        if (typeof html.prop("checked") === "boolean") {
          useMeasureTemplate = html.prop("checked");
        }
        // Damage ability multiplier
        html = form.find('[name="damage-ability-multiplier"]');
        if (html.length > 0) {
          rollData.item.ability.damageMult = parseFloat(html.val());
        }

        // Held type
        html = form.find('[name="held"]');
        if (html.length > 0) {
          setProperty(rollData, "item.held", html.val());
        }

        // Power Attack
        if (form.find('[name="power-attack"]').prop("checked")) {
          rollData.powerAttackBonus = (1 + Math.floor(getProperty(rollData, "attributes.bab.total") / 4)) * 2;
          if (getProperty(this.data, "data.attackType") === "natural") {
            if (primaryAttack && rollData.item.ability.damageMult >= 1.5) rollData.powerAttackBonus *= 1.5;
            else if (!primaryAttack) rollData.powerAttackBonus *= 0.5;
          } else {
            if (getProperty(rollData, "item.held") === "2h") rollData.powerAttackBonus *= 1.5;
            else if (getProperty(rollData, "item.held") === "oh") rollData.powerAttackBonus *= 0.5;
          }
          damageExtraParts.push("@powerAttackBonus");
          rollData.powerAttackPenalty = -(1 + Math.floor(getProperty(rollData, "attributes.bab.total") / 4));
          attackExtraParts.push("@powerAttackPenalty");
        }

        // Conditionals
        html = form.find(".conditional");
        if (html.length > 0) {
          conditionals = html
            .map(function () {
              if ($(this).prop("checked")) return Number($(this).prop("name").split(".")[1]);
            })
            .get();
        }

        // Caster level offset
        html = form.find('[name="cl-offset"]');
        if (html.length > 0) {
          rollData.cl += parseInt(html.val());
        }
        // Spell level offset
        html = form.find('[name="sl-offset"]');
        if (html.length > 0) {
          rollData.sl += parseInt(html.val());
        }
      }

      // Prepare the chat message data
      let chatTemplateData = {
        name: this.name,
        type: CONST.CHAT_MESSAGE_TYPES.OTHER,
        rollMode: rollMode,
      };

      // Conditional defaults for fast-forwarding
      if (conditionals === undefined) {
        conditionals = this.data.data.conditionals?.reduce((arr, con, i) => {
          if (con.default) arr.push(i);
          return arr;
        }, []);
      }

      // Create attacks
      const attackName = this.data.data.attackName;
      const allAttacks = fullAttack
        ? this.data.data.attackParts.reduce(
            (cur, r) => {
              cur.push({ bonus: r[0], label: r[1] });
              return cur;
            },
            [{ bonus: "", label: attackName ? attackName : `${game.i18n.localize("PF1.Attack")}` }]
          )
        : [{ bonus: "", label: attackName ? attackName : `${game.i18n.localize("PF1.Attack")}` }];
      let attacks = [];

      const subtractAmmo = function (value) {
        if (!ammoLinks.length) return;
        if (value == null) value = -1;
        let promises = [];
        for (let l of ammoLinks) {
          promises.push(l.item.addCharges(value));
        }
        return Promise.all(promises);
      };
      let ammoCost = 0;

      // Create conditionalParts from all enabled conditional modifiers
      let conditionalPartsCommon = {};

      // Helper to get localized name from CONFIG.PF1 objects
      const localizeType = (target, type) => {
        let result = this.getConditionalModifierTypes(target);
        return game.i18n.localize(result[type]) || type;
      };

      if (conditionals) {
        let conditionalData = {};
        for (const i of conditionals) {
          const conditional = this.data.data.conditionals[i];
          const tag = createTag(conditional.name);
          for (const [i, modifier] of conditional.modifiers.entries()) {
            // Adds a formula's result to rollData to allow referencing it.
            // Due to being its own roll, this will only correctly work for static formulae.
            // In try-block to avoid stalling due to malformed modifier
            try {
              conditionalData[[tag, i].join(".")] = new Roll(modifier.formula, rollData).roll().total;
            } catch (e) {
              const msg = game.i18n.format("PF1.WarningConditionalRoll", { number: i + 1, name: conditional.name });
              console.warn(msg);
              ui.notifications.warn(msg);
              // Skip modifier to avoid multiple errors from one non-evaluating entry
              continue;
            }

            // Create a key string for the formula array
            const partString = `${modifier.target}.${modifier.subTarget}${
              modifier.critical ? "." + modifier.critical : ""
            }`;
            // Add formula in simple format
            if (["attack", "effect", "misc"].includes(modifier.target)) {
              conditionalPartsCommon[partString] = [...(conditionalPartsCommon[partString] ?? []), modifier.formula];
            }
            // Add formula as array for damage
            else if (modifier.target === "damage") {
              conditionalPartsCommon[partString] = [
                ...(conditionalPartsCommon[partString] ?? []),
                Object.values(CONFIG.PF1.bonusModifiers).includes(modifier.type)
                  ? [modifier.formula, modifier.type, true]
                  : [modifier.formula, localizeType(modifier.target, modifier.type), false],
              ];
            }
          }
        }
        // Expand data into rollData to enable referencing in formulae
        rollData.conditionals = expandObject(conditionalData, 5);

        // Add specific pre-rolled rollData entries
        for (const target of ["effect.cl", "effect.dc", "misc.charges"]) {
          if (conditionalPartsCommon[target] != null) {
            try {
              const roll = new Roll(conditionalPartsCommon[target].join("+"), rollData).roll().total;
              switch (target) {
                case "effect.cl":
                  rollData.cl += roll;
                  break;
                case "effect.dc":
                  rollData.dcBonus = roll;
                  break;
                case "misc.charges":
                  rollData.chargeCostBonus = roll;
                  break;
              }
            } catch (e) {
              console.error(e);
            }
          }
        }
      }

      if (this.hasAttack) {
        ammoCost = Math.min(minAmmo, allAttacks.length);
        for (
          let a = 0;
          (ammoLinks.length && a < Math.min(minAmmo, allAttacks.length)) ||
          (!ammoLinks.length && a < allAttacks.length);
          a++
        ) {
          let atk = allAttacks[a];

          // Combine conditional modifiers for attack a attack and damage
          const conditionalParts = {
            "attack.normal": [
              ...(conditionalPartsCommon[`attack.attack.${a}.normal`] ?? []),
              ...(conditionalPartsCommon["attack.allAttack.normal"] ?? []),
            ], //`
            "attack.crit": [
              ...(conditionalPartsCommon[`attack.attack.${a}.crit`] ?? []),
              ...(conditionalPartsCommon["attack.allAttack.crit"] ?? []),
            ], //`
            "damage.normal": [
              ...(conditionalPartsCommon[`damage.attack.${a}.normal`] ?? []),
              ...(conditionalPartsCommon["damage.allDamage.normal"] ?? []),
            ], //`
            "damage.crit": [
              ...(conditionalPartsCommon[`damage.attack.${a}.crit`] ?? []),
              ...(conditionalPartsCommon["damage.allDamage.crit"] ?? []),
            ], //`
            "damage.nonCrit": [
              ...(conditionalPartsCommon[`damage.attack.${a}.nonCrit`] ?? []),
              ...(conditionalPartsCommon["damage.allDamage.nonCrit"] ?? []),
            ], //`
          };

          // Create attack object
          let attack = new ChatAttack(this, { label: atk.label, rollData: rollData, primaryAttack: primaryAttack });

          // Add attack roll
          await attack.addAttack({ bonus: atk.bonus, extraParts: duplicate(attackExtraParts), conditionalParts });

          // Add damage
          if (this.hasDamage) {
            await attack.addDamage({ extraParts: duplicate(damageExtraParts), critical: false, conditionalParts });

            // Add critical hit damage
            if (attack.hasCritConfirm) {
              await attack.addDamage({ extraParts: duplicate(damageExtraParts), critical: true, conditionalParts });
            }
          }

          // Add attack notes
          if (a === 0) attack.addAttackNotes();

          // Add effect notes
          attack.addEffectNotes();

          // Add to list
          attacks.push(attack);

          // Create attack for Rapid Shot
          if (a === 0 && form && form.find('[name="rapid-shot"]').prop("checked")) {
            // Combine conditional modifiers for Rapid Shot attack and damage
            const conditionalParts = {
              "attack.normal": [
                ...(conditionalPartsCommon[`attack.rapidShotAttack.normal`] ?? []),
                ...(conditionalPartsCommon["attack.allAttack.normal"] ?? []),
              ], //`
              "attack.crit": [
                ...(conditionalPartsCommon[`attack.rapidShotAttack.crit`] ?? []),
                ...(conditionalPartsCommon["attack.allAttack.crit"] ?? []),
              ], //`
              "damage.normal": [
                ...(conditionalPartsCommon[`damage.rapidShotDamage.normal`] ?? []),
                ...(conditionalPartsCommon["damage.allDamage.normal"] ?? []),
              ], //`
              "damage.crit": [
                ...(conditionalPartsCommon[`damage.rapidShotDamage.crit`] ?? []),
                ...(conditionalPartsCommon["damage.allDamage.crit"] ?? []),
              ], //`
              "damage.nonCrit": [
                ...(conditionalPartsCommon[`damage.rapidShotDamage.nonCrit`] ?? []),
                ...(conditionalPartsCommon["damage.allDamage.nonCrit"] ?? []),
              ], //`
            }; //`

            // Create attack object, then add attack roll
            let rapidShotAttack = new ChatAttack(this, {
              label: game.i18n.localize("PF1.RapidShot"),
              rollData: rollData,
              primaryAttack: primaryAttack,
            });
            await rapidShotAttack.addAttack({
              bonus: atk.bonus,
              extraParts: duplicate(attackExtraParts),
              conditionalParts,
            });

            // Add damage
            if (this.hasDamage) {
              await rapidShotAttack.addDamage({
                extraParts: duplicate(damageExtraParts),
                critical: false,
                conditionalParts,
              });

              // Add critical hit damage
              if (rapidShotAttack.hasCritConfirm) {
                await rapidShotAttack.addDamage({
                  extraParts: duplicate(damageExtraParts),
                  critical: true,
                  conditionalParts,
                });
              }
            }

            // Add effect notes
            rapidShotAttack.addEffectNotes();

            attacks.push(rapidShotAttack);
          }
        }
      }
      // Add damage only
      else if (this.hasDamage) {
        ammoCost = 1;

        // Set conditional modifiers
        const conditionalParts = {
          "damage.normal": conditionalPartsCommon["damage.allDamage.normal"] ?? [],
        };

        let attack = new ChatAttack(this, { rollData: rollData, primaryAttack: primaryAttack });
        // Add damage
        await attack.addDamage({ extraParts: duplicate(damageExtraParts), critical: false, conditionalParts });

        // Add effect notes
        attack.addEffectNotes();

        // Add to list
        attacks.push(attack);
      }
      // Add effect notes only
      else if (this.hasEffect || this.hasSave) {
        let attack = new ChatAttack(this, { rollData: rollData, primaryAttack: primaryAttack });

        // Add effect notes
        attack.addEffectNotes();

        // Add to list
        attacks.push(attack);
      }
      if (ammoLinks.length) {
        attacks.forEach((atk) => atk.addAmmunitionCards());
      }
      chatTemplateData.attacks = attacks.map((o) => o.finalize());

      // Prompt measure template
      let template;
      if (useMeasureTemplate) {
        // Determine size
        let dist = getProperty(this.data, "data.measureTemplate.size");
        if (typeof dist === "string") {
          dist = new Roll(getProperty(this.data, "data.measureTemplate.size"), this.getRollData()).roll().total;
        }
        dist = convertDistance(dist)[0];

        // Create data object
        const templateOptions = {
          type: getProperty(this.data, "data.measureTemplate.type"),
          distance: dist,
        };
        if (getProperty(this.data, "data.measureTemplate.overrideColor")) {
          templateOptions.color = getProperty(this.data, "data.measureTemplate.customColor");
        }
        if (getProperty(this.data, "data.measureTemplate.overrideTexture")) {
          templateOptions.texture = getProperty(this.data, "data.measureTemplate.customTexture");
        }

        // Create template
        template = AbilityTemplate.fromData(templateOptions);
        if (template) {
          if (getProperty(this, "actor.sheet.rendered")) this.parentActor.sheet.minimize();
          template = await template.drawPreview(ev);
          if (!template) {
            if (getProperty(this, "actor.sheet.rendered")) this.parentActor.sheet.maximize();
            return;
          }
        }
      }

      // Deduct charge
      let cost;
      if (this.autoDeductCharges) {
        cost = this.chargeCost;
        let uses = this.charges;
        if (this.data.type === "spell" && this.useSpellPoints()) {
          cost = this.getSpellPointCost(rollData);
          uses = this.getSpellUses();
        }
        // Add charge cost from conditional modifiers
        cost += rollData["chargeCostBonus"] ?? 0;

        // Cancel usage on insufficient charges
        if (cost > uses) {
          const msg = game.i18n.localize("PF1.ErrorInsufficientCharges").format(this.name);
          console.warn(msg);
          ui.notifications.warn(msg);
          return;
        }
        await this.addCharges(-cost);
      }

      // Set chat data
      let chatData = {
        speaker: ChatMessage.getSpeaker({ actor: this.parentActor }),
        rollMode: rollMode,
        "flags.pf1.noRollRender": true,
      };

      // Set attack sound
      if (this.data.data.soundEffect) chatData.sound = this.data.data.soundEffect;
      // Set dice sound if neither attack sound nor Dice so Nice are available
      else if (game.dice3d == null || !game.dice3d.isEnabled()) chatData.sound = CONFIG.sounds.dice;

      // Dice So Nice integration
      if (game.dice3d != null && game.dice3d.isEnabled()) {
        // Use try to make sure a chat card is rendered even if DsN fails
        try {
          // Define common visibility options for whole attack
          let whisper,
            blind = false;
          switch (rollMode) {
            case "gmroll":
              whisper = game.users.entities.filter((u) => u.isGM).map((u) => u._id);
              break;
            case "selfroll":
              whisper = [game.user._id];
              break;
            case "blindroll":
              whisper = game.users.entities.filter((u) => u.isGM).map((u) => u._id);
              blind = true;
              break;
          }

          // Define showRoll to be version independent
          const showRoll = async (rollDice) => {
            // Check for DsN v3, which uses DicePool instead of [Roll]
            if (
              SemanticVersion.fromString(game.modules.get("dice-so-nice").data.version).isHigherThan(
                SemanticVersion.fromString("2.9.0")
              )
            ) {
              rollDice = new DicePool({ rolls: rollDice });
            }
            await game.dice3d.showForRoll(rollDice, game.user, true, whisper, blind);
          };

          // Iterate over every single attack
          for (let atk of attacks) {
            let rolls = [];
            if (atk.attack.roll) rolls.push(atk.attack.roll);
            for (let dmgRoll of atk.damage.rolls) {
              if (dmgRoll?.roll) rolls.push(dmgRoll.roll);
            }
            // Visually roll an attack's attack roll + its damage roll
            await showRoll(rolls);
            if (atk.hasCritConfirm) {
              rolls = [atk.critConfirm.roll];
              for (let critDmgRoll of atk.critDamage.rolls) {
                if (critDmgRoll?.roll) rolls.push(critDmgRoll.roll);
              }
              // Visually roll an attack's crit confirm + crit damage roll
              await showRoll(rolls);
            }
          }
        } catch (e) {
          console.error(e);
        }
      }

      // Post message
      if (this.hasAction) {
        // Get extra text and properties
        let props = [];
        let extraText = "";
        if (chatTemplateData.attacks.length > 0) extraText = chatTemplateData.attacks[0].attackNotesHTML;

        const itemChatData = this.getChatData(null, rollData);
        const properties = itemChatData.properties;

        // Add actual cost
        if (cost && !this.data.data.atWill) {
          if (this.data.type === "spell" && this.useSpellPoints()) {
            properties.push(`${game.i18n.localize("PF1.SpellPointsCost")}: ${cost}`);
          } else {
            properties.push(`${game.i18n.localize("PF1.ChargeCost")}: ${cost}`);
          }
        }

        // Add info for broken state
        if (this.data.data.broken) {
          properties.push(game.i18n.localize("PF1.Broken"));
        }

        // Nonlethal
        if (this.data.data.nonlethal) properties.push(game.i18n.localize("PF1.Nonlethal"));

        // Add info for Power Attack to melee, Deadly Aim to ranged attacks
        if (attackExtraParts.includes("@powerAttackPenalty")) {
          if (this.data.data.actionType === "rwak") properties.push(game.i18n.localize("PF1.DeadlyAim"));
          if (this.data.data.actionType === "mwak") properties.push(game.i18n.localize("PF1.PowerAttack"));
        }

        // Add info for Point-Blank shot
        if (attackExtraParts.includes("@pointBlankBonus")) properties.push(game.i18n.localize("PF1.PointBlankShot"));

        // Add info for Rapid Shot
        if (attackExtraParts.includes("@rapidShotPenalty")) properties.push(game.i18n.localize("PF1.RapidShot"));

        // Add Armor Check Penalty's application to attack rolls info
        if (this.hasAttack && rollData.attributes.acp.attackPenalty > 0)
          properties.push(game.i18n.localize("PF1.ArmorCheckPenalty"));

        // Add conditionals info
        if (conditionals?.length) {
          conditionals.forEach((c) => {
            properties.push(this.data.data.conditionals[c].name);
          });
        }
        if (properties.length > 0) props.push({ header: game.i18n.localize("PF1.InfoShort"), value: properties });

        // Add combat info
        if (game.combat) {
          let combatProps = [];
          // Add round info
          combatProps.push(game.i18n.localize("PF1.CombatInfo_Round").format(game.combat.round));

          if (combatProps.length > 0) {
            props.push({ header: game.i18n.localize("PF1.CombatInfo_Header"), value: combatProps });
          }
        }

        // Add CL notes
        if (this.data.type === "spell" && this.parentActor) {
          const clNotes = this.parentActor.getContextNotesParsed(`spell.cl.${this.data.data.spellbook}`);

          if (clNotes.length) {
            props.push({
              header: game.i18n.localize("PF1.CLNotes"),
              value: clNotes,
            });
          }
        }

        // Get saving throw data
        const save = getProperty(this.data, "data.save.type");
        const saveDC = this.getDC(rollData);

        const templateData = mergeObject(
          chatTemplateData,
          {
            extraText: extraText,
            data: itemChatData,
            hasExtraText: extraText.length > 0,
            properties: props,
            hasProperties: props.length > 0,
            item: this.data,
            actor: this.parentActor.data,
            save: {
              hasSave: typeof save === "string" && save.length > 0,
              dc: saveDC,
              type: save,
              label: game.i18n
                .localize("PF1.SavingThrowButtonLabel")
                .format(CONFIG.PF1.savingThrows[save], saveDC.toString()),
            },
          },
          { inplace: false }
        );

        // Range
        {
          const range = this.range;
          if (range != null) {
            templateData.range = range;
            if (typeof range === "string") {
              templateData.range = new Roll(range, rollData).roll().total;
              templateData.rangeFormula = range;
            }
            templateData.rangeLabel = `${templateData.range} ft.`;
            if (game.settings.get("pf1", "units") === "metric") {
              templateData.rangeLabel = `${templateData.range} m`;
            }

            const rangeUnits = getProperty(this.data, "data.range.units");
            if (["melee", "touch", "reach", "close", "medium", "long"].includes(rangeUnits)) {
              templateData.rangeLabel = CONFIG.PF1.distanceUnits[rangeUnits];
            }
          }
        }

        // Spell failure
        if (this.type === "spell" && this.parentActor != null && this.parentActor.spellFailure > 0) {
          const spellbook = getProperty(
            this.parentActor.data,
            `data.attributes.spells.spellbooks.${this.data.data.spellbook}`
          );
          if (spellbook && spellbook.arcaneSpellFailure) {
            templateData.spellFailure = new Roll("1d100").roll().total;
            templateData.spellFailureSuccess = templateData.spellFailure > this.parentActor.spellFailure;
          }
        }
        // Add metadata
        const metadata = {};
        metadata.item = this._id;
        metadata.template = template ? template._id : null;
        metadata.rolls = {
          attacks: {},
        };
        // Add attack rolls
        for (let a = 0; a < attacks.length; a++) {
          const atk = attacks[a];
          const attackRolls = { attack: null, damage: {}, critConfirm: null, critDamage: {} };
          // Add attack roll
          if (atk.attack.roll) attackRolls.attack = atk.attack.roll.toJSON();
          // Add damage rolls
          if (atk.damage.rolls.length) {
            for (let b = 0; b < atk.damage.rolls.length; b++) {
              const r = atk.damage.rolls[b];
              attackRolls.damage[b] = {
                damageType: r.damageType,
                roll: r.roll.toJSON(),
              };
            }
          }
          // Add critical confirmation roll
          if (atk.critConfirm.roll) attackRolls.critConfirm = atk.critConfirm.roll.toJSON();
          // Add critical damage rolls
          if (atk.critDamage.rolls.length) {
            for (let b = 0; b < atk.critDamage.rolls.length; b++) {
              const r = atk.critDamage.rolls[b];
              attackRolls.critDamage[b] = {
                damageType: r.damageType,
                roll: r.roll.toJSON(),
              };
            }
          }

          metadata.rolls.attacks[a] = attackRolls;
        }

        setProperty(chatData, "flags.pf1.metadata", metadata);
        setProperty(chatData, "flags.core.canPopout", true);
        // Create message
        const t = game.settings.get("pf1", "attackChatCardTemplate");
        await createCustomChatMessage(t, templateData, chatData);
      }
      // Post chat card even without action
      else {
        this.roll();
      }

      // Subtract ammunition
      await subtractAmmo(-ammoCost);
    };

    // Handle fast-forwarding
    if (skipDialog) return _roll.call(this, true);

    // Render modal dialog
    let template = "systems/pf1/templates/apps/attack-roll-dialog.hbs";
    let dialogData = {
      data: rollData,
      item: this.data.data,
      config: CONFIG.PF1,
      rollMode: game.settings.get("core", "rollMode"),
      rollModes: CONFIG.Dice.rollModes,
      hasAttack: this.hasAttack,
      hasDamage: this.hasDamage,
      hasDamageAbility: getProperty(this.data, "data.ability.damage") !== "",
      isNaturalAttack: getProperty(this.data, "data.attackType") === "natural",
      isWeaponAttack: getProperty(this.data, "data.attackType") === "weapon",
      isAttack: this.type === "attack",
      isSpell: this.type === "spell",
      hasTemplate: this.hasTemplate,
    };
    const html = await renderTemplate(template, dialogData);

    let roll;
    const buttons = {};
    if (this.hasAttack) {
      if (this.type !== "spell") {
        buttons.normal = {
          label: game.i18n.localize("PF1.SingleAttack"),
          callback: (html) => (roll = _roll.call(this, false, html)),
        };
      }
      if ((getProperty(this.data, "data.attackParts") || []).length || this.type === "spell") {
        buttons.multi = {
          label: this.type === "spell" ? game.i18n.localize("PF1.Cast") : game.i18n.localize("PF1.FullAttack"),
          callback: (html) => (roll = _roll.call(this, true, html)),
        };
      }
    } else {
      buttons.normal = {
        label: this.type === "spell" ? game.i18n.localize("PF1.Cast") : game.i18n.localize("PF1.Use"),
        callback: (html) => (roll = _roll.call(this, false, html)),
      };
    }
    return new Promise((resolve) => {
      new Dialog({
        title: `${game.i18n.localize("PF1.Use")}: ${this.name}`,
        content: html,
        buttons: buttons,
        default: buttons.multi != null ? "multi" : "normal",
        close: (html) => {
          resolve(rolled ? roll : false);
        },
      }).render(true);
    });
  }

  /**
   * Place an attack roll using an item (weapon, feat, spell, or equipment)
   * Rely upon the DicePF.d20Roll logic for the core implementation
   */
  rollAttack({ data = null, extraParts = [], bonus = null, primaryAttack = true } = {}) {
    const itemData = this.data.data;
    const rollData = mergeObject(this.getRollData(), data || {});

    // Determine size bonus
    rollData.sizeBonus = CONFIG.PF1.sizeMods[rollData.traits.size];
    // Add misc bonuses/penalties
    rollData.item.proficiencyPenalty = -4;

    // Determine ability score modifier
    let abl = itemData.ability.attack;

    // Define Roll parts
    let parts = [];
    // Add ability modifier
    if (abl != "" && rollData.abilities[abl] != null && rollData.abilities[abl].mod !== 0) {
      parts.push(`@abilities.${abl}.mod`);
    }
    // Add bonus parts
    parts = parts.concat(extraParts);
    // Add attack bonus
    if (itemData.attackBonus !== "") {
      let attackBonus = new Roll(itemData.attackBonus, rollData).roll().total;
      rollData.item.attackBonus = attackBonus;
      parts.push("@item.attackBonus");
    }

    // Special handling for combat maneuvers
    if (["mcman", "rcman"].includes(itemData.actionType)) {
      // Add CMB without general ability
      // This already includes BAB, size, energy drain
      rollData.attributes.cmb.total -= rollData.abilities[rollData.attributes.cmbAbility]?.mod ?? 0;
      if (rollData.attributes.cmb.total) parts.push("@attributes.cmb.total");
    } else {
      // Handle regular attacks

      // Add size bonus
      if (rollData.sizeBonus !== 0) parts.push("@sizeBonus");
      // Add BAB
      if (rollData.attributes.bab.total !== 0 && rollData.attributes.bab.total != null) {
        parts.push("@attributes.bab.total");
      }
      // Subtract energy drain
      if (rollData.attributes.energyDrain != null && rollData.attributes.energyDrain !== 0) {
        parts.push("- max(0, abs(@attributes.energyDrain))");
      }
    }
    // Add certain attack bonuses
    if (rollData.attributes.attack.general !== 0) {
      parts.push("@attributes.attack.general");
    }
    if (["mwak", "msak", "mcman"].includes(itemData.actionType) && rollData.attributes.attack.melee !== 0) {
      parts.push("@attributes.attack.melee");
    } else if (["rwak", "rsak", "rcman"].includes(itemData.actionType) && rollData.attributes.attack.ranged !== 0) {
      parts.push("@attributes.attack.ranged");
    }

    // Add item's enhancement bonus
    if (rollData.item.enh !== 0 && rollData.item.enh != null) {
      parts.push("@item.enh");
    }
    // Add proficiency penalty
    if (this.data.type === "attack" && !itemData.proficient) {
      parts.push("@item.proficiencyPenalty");
    }
    // Add masterwork bonus
    if (this.data.type === "attack" && itemData.masterwork === true && itemData.enh < 1) {
      rollData.item.masterworkBonus = 1;
      parts.push("@item.masterworkBonus");
    }
    // Add secondary natural attack penalty
    if (primaryAttack === false) parts.push("-5");
    // Add bonus
    if (bonus) {
      rollData.bonus = new Roll(bonus, rollData).roll().total;
      parts.push("@bonus");
    }

    // Add penalties for lacking shield and armor proficiencies. Push only if non-zero.
    if (rollData.attributes.acp.attackPenalty > 0) parts.push("-@attributes.acp.attackPenalty");

    if ((rollData.d20 ?? "") === "") rollData.d20 = "1d20";

    let roll = new Roll([rollData.d20, ...parts].join("+"), rollData).roll();
    return roll;
  }

  /* -------------------------------------------- */

  /**
   * Only roll the item's effect.
   */
  rollEffect({ critical = false, primaryAttack = true } = {}) {
    const rollData = this.getRollData();

    if (!this.hasEffect) {
      throw new Error("You may not make an Effect Roll with this Item.");
    }

    // Determine critical multiplier
    rollData.critMult = 1;
    if (critical) rollData.critMult = this.data.data.ability.critMult;
    // Determine ability multiplier
    if (this.data.data.ability.damageMult != null) rollData.ablMult = this.data.data.ability.damageMult;
    if (primaryAttack === false && rollData.ablMult > 0) rollData.ablMult = 0.5;

    // Create effect string
    let effectNotes = this.parentActor.getContextNotes("attacks.effect").reduce((cur, o) => {
      o.notes
        .reduce((cur2, n) => {
          cur2.push(...n.split(/[\n\r]+/));
          return cur2;
        }, [])
        .forEach((n) => {
          cur.push(n);
        });
      return cur;
    }, []);
    effectNotes.push(...(this.data.data.effectNotes || "").split(/[\n\r]+/));
    let effectContent = "";
    for (let fx of effectNotes) {
      if (fx.length > 0) {
        effectContent += `<span class="tag">${fx}</span>`;
      }
    }

    if (effectContent.length === 0) return "";

    const inner = TextEditor.enrichHTML(effectContent, { rollData: rollData });
    return `<div class="flexcol property-group"><label>${game.i18n.localize(
      "PF1.EffectNotes"
    )}</label><div class="flexrow">${inner}</div></div>`;
  }

  /**
   * Place an attack roll using an item (weapon, feat, spell, or equipment)
   * Rely upon the DicePF.d20Roll logic for the core implementation
   */
  async rollFormula(options = {}) {
    const itemData = this.data.data;
    if (!itemData.formula) {
      throw new Error(game.i18n.localize("PF1.ErrorNoFormula").format(this.name));
    }

    // Define Roll Data
    const rollData = this.parentActor.getRollData();
    rollData.item = itemData;
    const title = `${this.name} - ${game.i18n.localize("PF1.OtherFormula")}`;

    const roll = new Roll(itemData.formula, rollData).roll();
    return roll.toMessage({
      speaker: ChatMessage.getSpeaker({ actor: this.parentActor }),
      flavor: itemData.chatFlavor || title,
      rollMode: game.settings.get("core", "rollMode"),
    });
  }

  /**
   * Place a damage roll using an item (weapon, feat, spell, or equipment)
   * Rely upon the DicePF.damageRoll logic for the core implementation
   */
  rollDamage({ data = null, critical = false, extraParts = [], conditionalParts = {} } = {}) {
    const rollData = mergeObject(this.getRollData(), data || {});

    if (!this.hasDamage) {
      throw new Error("You may not make a Damage Roll with this Item.");
    }

    // Define Roll parts
    let parts = this.data.data.damage.parts.map((p) => {
      return { base: p[0], extra: [], damageType: p[1], type: "normal" };
    });
    // Add conditionals damage
    conditionalParts["damage.normal"]?.forEach((p) => {
      const [base, damageType, isExtra] = p;
      isExtra ? parts[0].extra.push(base) : parts.push({ base, extra: [], damageType, type: "normal" });
    });
    // Add critical damage parts
    if (critical === true) {
      if (getProperty(this.data, "data.damage.critParts") != null) {
        parts = parts.concat(
          this.data.data.damage.critParts.map((p) => {
            return { base: p[0], extra: [], damageType: p[1], type: "crit" };
          })
        );
      }
      // Add conditional critical damage parts
      conditionalParts["damage.crit"]?.forEach((p) => {
        const [base, damageType, isExtra] = p;
        isExtra ? parts[0].extra.push(base) : parts.push({ base, extra: [], damageType, type: "crit" });
      });
    }
    // Add non-critical damage parts
    if (critical === false) {
      if (getProperty(this.data, "data.damage.nonCritParts") != null) {
        parts = parts.concat(
          this.data.data.damage.nonCritParts.map((p) => {
            return { base: p[0], extra: [], damageType: p[1], type: "nonCrit" };
          })
        );
      }
      // Add conditional non-critical damage parts
      conditionalParts["damage.nonCrit"]?.forEach((p) => {
        const [base, damageType, isExtra] = p;
        isExtra ? parts[0].extra.push(base) : parts.push({ base, extra: [], damageType, type: "nonCrit" });
      });
    }

    // Add broken penalty
    if (this.data.data.broken) {
      parts[0].extra.push("-2");
    }

    // Determine ability score modifier
    let abl = this.data.data.ability.damage;
    if (typeof abl === "string" && abl !== "") {
      rollData.ablDamage = Math.floor(rollData.abilities[abl].mod * rollData.ablMult);
      if (rollData.abilities[abl].mod < 0) rollData.ablDamage = rollData.abilities[abl].mod;
      if (rollData.ablDamage < 0) parts[0].extra.push("@ablDamage");
      else if (critical === true) parts[0].extra.push("@ablDamage");
      else if (rollData.ablDamage !== 0) parts[0].extra.push("@ablDamage");
    }
    // Add enhancement bonus
    if (rollData.item.enh != null && rollData.item.enh !== 0 && rollData.item.enh != null) {
      if (critical === true) parts[0].extra.push("@item.enh");
      else parts[0].extra.push("@item.enh");
    }

    // Add general damage
    if (rollData.attributes.damage.general !== 0) {
      if (critical === true) parts[0].extra.push("@attributes.damage.general");
      else parts[0].extra.push("@attributes.damage.general");
    }
    // Add melee or spell damage
    if (rollData.attributes.damage.weapon !== 0 && ["mwak", "rwak"].includes(this.data.data.actionType)) {
      if (critical === true) parts[0].extra.push("@attributes.damage.weapon");
      else parts[0].extra.push("@attributes.damage.weapon");
    } else if (
      rollData.attributes.damage.spell !== 0 &&
      ["msak", "rsak", "spellsave"].includes(this.data.data.actionType)
    ) {
      if (critical === true) parts[0].extra.push("@attributes.damage.spell");
      else parts[0].extra.push("@attributes.damage.spell");
    }

    // Create roll
    let rolls = [];
    for (let a = 0; a < parts.length; a++) {
      const part = parts[a];
      let rollParts = [];
      if (a === 0) rollParts = [...part.extra, ...extraParts];
      const roll = {
        roll: new Roll([part.base, ...rollParts].join("+"), rollData).roll(),
        damageType: part.damageType,
        type: part.type,
      };
      rolls.push(roll);
    }

    return rolls;
  }

  /* -------------------------------------------- */

  /**
   * Use a consumable item
   */
  async useConsumable(options = {}) {
    let itemData = this.data.data;
    let parts = itemData.damage.parts;
    const data = this.getRollData();

    // Add effect string
    let effectStr = "";
    if (typeof itemData.effectNotes === "string" && itemData.effectNotes.length) {
      effectStr = DicePF.messageRoll({
        data: data,
        msgStr: itemData.effectNotes,
      });
    }

    parts = parts.map((obj) => {
      return obj[0];
    });
    // Submit the roll to chat
    if (effectStr === "") {
      new Roll(parts.join("+")).toMessage({
        speaker: ChatMessage.getSpeaker({ actor: this.parentActor }),
        flavor: game.i18n.localize("PF1.UsesItem").format(this.name),
      });
    } else {
      const chatTemplate = "systems/pf1/templates/chat/roll-ext.hbs";
      const chatTemplateData = { hasExtraText: true, extraText: effectStr };
      // Execute the roll
      let roll = new Roll(parts.join("+"), data).roll();

      // Create roll template data
      const rollData = mergeObject(
        {
          user: game.user._id,
          formula: roll.formula,
          tooltip: await roll.getTooltip(),
          total: roll.total,
        },
        chatTemplateData || {}
      );

      // Create chat data
      let chatData = {
        user: game.user._id,
        type: CONST.CHAT_MESSAGE_TYPES.CHAT,
        rollMode: game.settings.get("core", "rollMode"),
        sound: CONFIG.sounds.dice,
        speaker: ChatMessage.getSpeaker({ actor: this.parentActor }),
        flavor: game.i18n.localize("PF1.UsesItem").format(this.name),
        roll: roll,
        content: await renderTemplate(chatTemplate, rollData),
      };
      // Handle different roll modes
      switch (chatData.rollMode) {
        case "gmroll":
          chatData["whisper"] = game.users.entities.filter((u) => u.isGM).map((u) => u._id);
          break;
        case "selfroll":
          chatData["whisper"] = [game.user._id];
          break;
        case "blindroll":
          chatData["whisper"] = game.users.entities.filter((u) => u.isGM).map((u) => u._id);
          chatData["blind"] = true;
      }

      // Send message
      ChatMessage.create(chatData);
    }
  }

  /* -------------------------------------------- */

  /**
   * @returns {Object} An object with data to be used in rolls in relation to this item.
   */
  getRollData() {
    const result = this.parentActor != null ? this.parentActor.getRollData() : {};
    result.item = duplicate(this.data.data);

    if (this.type === "spell" && this.parentActor != null) {
      const spellbook = this.spellbook;
      const spellAbility = spellbook.ability;
      let ablMod = "";
      if (spellAbility !== "") ablMod = getProperty(this.parentActor.data, `data.abilities.${spellAbility}.mod`);

      result.cl = this.casterLevel || 0;
      result.sl = this.spellLevel || 0;
      result.ablMod = ablMod;
    }
    if (this.type === "buff") result.item.level = this.data.data.level;

    // Get aura strength
    {
      const aura = getProperty(this.data, "data.aura.school");
      if (typeof aura === "string" && aura.length > 0) {
        result.item.auraStrength = this.auraStrength;
      }
    }

    return result;
  }

  /* -------------------------------------------- */

  static chatListeners(html) {
    html.on("click", ".card-buttons button", this._onChatCardButton.bind(this));
    html.on("click", ".item-name", this._onChatCardToggleContent.bind(this));
  }

  /* -------------------------------------------- */

  static async _onChatCardButton(event) {
    event.preventDefault();

    // Extract card data
    const button = event.currentTarget;
    button.disabled = true;
    const card = button.closest(".chat-card");
    const messageId = card.closest(".message").dataset.messageId;
    const message = game.messages.get(messageId);
    const action = button.dataset.action;

    // Validate permission to proceed with the roll
    let isTargetted = ["save", "applyDamage"].includes(action);
    if (!(isTargetted || game.user.isGM || message.isAuthor)) return;

    // Get the Actor from a synthetic Token
    const actor = this._getChatCardActor(card);
    if (!actor) return;

    // Get the Item
    const item = actor.getOwnedItem(card.dataset.itemId);

    // Perform action
    if (!(await this._onChatCardAction(action, { button: button, item: item }))) {
      button.disabled = false;
    }
  }

  static async _onChatCardAction(action, { button = null, item = null } = {}) {
    // Get card targets
    // const targets = isTargetted ? this._getChatCardTargets(card) : [];

    // Consumable usage
    if (action === "consume") await item.useConsumable({ event });
    // Apply damage
    else if (action === "applyDamage") {
      let asNonlethal = [...button.closest(".chat-message")?.querySelectorAll(".tag")]
        .map((o) => o.innerText)
        .includes(game.i18n.localize("PF1.Nonlethal"));
      if (button.dataset.tags?.split(" ").includes("nonlethal")) asNonlethal = true;

      const value = button.dataset.value;
      if (!isNaN(parseInt(value))) ActorPF.applyDamage(parseInt(value), { asNonlethal });
    }
    // Recover ammunition
    else if (["recoverAmmo", "forceRecoverAmmo"].includes(action)) {
      if (!item) return;

      const ammoLinks = await item.getLinkedItems("ammunition", true);
      let recovered = false;
      let failed = false;
      let promises = [];

      for (let l of ammoLinks) {
        let chance = 100;
        if (action === "recoverAmmo") {
          chance = l.linkData.recoverChance;
        }

        if (chance >= Math.random() * 100) {
          recovered = true;
          promises.push(l.item.addCharges(1));
        } else {
          failed = true;
        }
      }

      // Disable button
      if (button) {
        button.disabled = true;
        if (recovered && !failed) {
          button.style.backgroundColor = "#00AA00";
        } else if (!recovered && failed) {
          button.style.backgroundColor = "#AA0000";
        } else if (recovered && failed) {
          button.style.backgroundColor = "#0000AA";
        }
      }

      await Promise.all(promises);

      return true;
    }

    return false;
  }

  /* -------------------------------------------- */

  /**
   * Handle toggling the visibility of chat card content when the name is clicked
   * @param {Event} event   The originating click event
   * @private
   */
  static _onChatCardToggleContent(event) {
    event.preventDefault();
    const header = event.currentTarget;
    const card = header.closest(".chat-card");
    const content = card.querySelector(".card-content");
    content.style.display = content.style.display === "none" ? "block" : "none";

    // Update chat popout size
    const popout = header.closest(".chat-popout");
    if (popout) {
      popout.style.height = "auto";
    }
  }

  /**
   * Get the Actor which is the author of a chat card
   * @param {HTMLElement} card    The chat card being used
   * @return {Actor|null}         The Actor entity or null
   * @private
   */
  static _getChatCardActor(card) {
    // Case 1 - a synthetic actor from a Token
    const tokenKey = card.dataset.tokenId;
    if (tokenKey) {
      const [sceneId, tokenId] = tokenKey.split(".");
      const scene = game.scenes.get(sceneId);
      if (!scene) return null;
      const tokenData = scene.getEmbeddedEntity("Token", tokenId);
      if (!tokenData) return null;
      const token = new Token(tokenData);
      return token.actor;
    }

    // Case 2 - use Actor ID directory
    const actorId = card.dataset.actorId;
    return game.actors.get(actorId) || null;
  }

  /**
   * Updates the spell's description.
   */

  async _updateSpellDescription(updateData, srcData) {
    const reSplit = CONFIG.PF1.re.traitSeparator;

    const label = {
      school: (CONFIG.PF1.spellSchools[getProperty(srcData, "data.school")] || "").toLowerCase(),
      subschool: getProperty(srcData, "data.subschool") || "",
      types: "",
    };
    const data = {
      data: mergeObject(this.data.data, srcData.data, { inplace: false }),
      label: label,
    };

    // Set subschool and types label
    const types = getProperty(srcData, "data.types");
    if (typeof types === "string" && types.length > 0) {
      label.types = types.split(reSplit).join(", ");
    }
    // Set information about when the spell is learned
    data.learnedAt = {};
    data.learnedAt.class = (getProperty(srcData, "data.learnedAt.class") || [])
      .map((o) => {
        return `${o[0]} ${o[1]}`;
      })
      .sort()
      .join(", ");
    data.learnedAt.domain = (getProperty(srcData, "data.learnedAt.domain") || [])
      .map((o) => {
        return `${o[0]} ${o[1]}`;
      })
      .sort()
      .join(", ");
    data.learnedAt.subDomain = (getProperty(srcData, "data.learnedAt.subDomain") || [])
      .map((o) => {
        return `${o[0]} ${o[1]}`;
      })
      .sort()
      .join(", ");
    data.learnedAt.elementalSchool = (getProperty(srcData, "data.learnedAt.elementalSchool") || [])
      .map((o) => {
        return `${o[0]} ${o[1]}`;
      })
      .sort()
      .join(", ");
    data.learnedAt.bloodline = (getProperty(srcData, "data.learnedAt.bloodline") || [])
      .map((o) => {
        return `${o[0]} ${o[1]}`;
      })
      .sort()
      .join(", ");

    // Set casting time label
    const act = game.settings.get("pf1", "unchainedActionEconomy")
      ? getProperty(srcData, "data.unchainedAction.activation")
      : getProperty(srcData, "data.activation");
    if (act != null) {
      const activationCost = act.cost;
      const activationType = act.type;
      const activationTypes = game.settings.get("pf1", "unchainedActionEconomy")
        ? CONFIG.PF1.abilityActivationTypes_unchained
        : CONFIG.PF1.abilityActivationTypes;
      const activationTypesPlurals = game.settings.get("pf1", "unchainedActionEconomy")
        ? CONFIG.PF1.abilityActivationTypesPlurals_unchained
        : CONFIG.PF1.abilityActivationTypesPlurals;

      if (activationType) {
        if (activationTypesPlurals[activationType] != null) {
          if (activationCost === 1) label.castingTime = `${activationTypes[activationType]}`;
          else label.castingTime = `${activationTypesPlurals[activationType]}`;
        } else label.castingTime = `${activationTypes[activationType]}`;
      }
      if (!Number.isNaN(activationCost) && label.castingTime != null)
        label.castingTime = `${activationCost} ${label.castingTime}`;
      if (label.castingTime) label.castingTime = label.castingTime.toLowerCase();
    }

    // Set components label
    label.components = this.getSpellComponents(srcData).join(", ");

    // Set duration label
    {
      const duration = getProperty(srcData, "data.spellDuration");
      if (duration) label.duration = duration;
    }
    // Set effect label
    {
      const effect = getProperty(srcData, "data.spellEffect");
      if (effect) label.effect = effect;
    }
    // Set targets label
    {
      const targets = getProperty(srcData, "data.target.value");
      if (targets) label.targets = targets;
    }
    // Set range label
    {
      const rangeUnit = getProperty(srcData, "data.range.units");
      const rangeValue = getProperty(srcData, "data.range.value");

      if (rangeUnit != null && rangeUnit !== "none") {
        label.range = (CONFIG.PF1.distanceUnits[rangeUnit] || "").toLowerCase();
        const units = game.settings.get("pf1", "units");
        if (rangeUnit === "close")
          label.range = `${label.range} ${game.i18n.localize(
            units == "metric" ? "PF1.SpellRangeShortMetric" : "PF1.SpellRangeShort"
          )}`;
        else if (rangeUnit === "medium")
          label.range = `${label.range} ${game.i18n.localize(
            units == "metric" ? "PF1.SpellRangeMediumMetric" : "PF1.SpellRangeMedium"
          )}`;
        else if (rangeUnit === "long")
          label.range = `${label.range} ${game.i18n.localize(
            units == "metric" ? "PF1.SpellRangeLongMetric" : "PF1.SpellRangeLong"
          )}`;
        else if (["ft", "mi"].includes(rangeUnit)) {
          if (!rangeValue) label.range = "";
          else label.range = `${rangeValue} ${label.range}`;
        }
      }
    }
    // Set area label
    {
      const area = getProperty(srcData, "data.spellArea");

      if (area) label.area = area;
    }

    // Set DC and SR
    {
      const savingThrowDescription = getProperty(srcData, "data.save.description");
      if (savingThrowDescription) label.savingThrow = savingThrowDescription;
      else label.savingThrow = "none";

      const sr = getProperty(srcData, "data.sr");
      label.sr = (sr === true ? game.i18n.localize("PF1.Yes") : game.i18n.localize("PF1.No")).toLowerCase();

      if (getProperty(srcData, "data.range.units") !== "personal") data.useDCandSR = true;
    }

    linkData(
      srcData,
      updateData,
      "data.description.value",
      await renderTemplate("systems/pf1/templates/internal/spell-description.hbs", data)
    );
  }

  getSpellComponents(srcData) {
    if (!srcData) srcData = duplicate(this.data);
    const reSplit = CONFIG.PF1.re.traitSeparator;

    let components = [];
    for (let [key, value] of Object.entries(getProperty(srcData, "data.components"))) {
      if (key === "value" && value.length > 0) components.push(...value.split(reSplit));
      else if (key === "verbal" && value) components.push("V");
      else if (key === "somatic" && value) components.push("S");
      else if (key === "material" && value) components.push("M");
      else if (key === "focus" && value) components.push("F");
    }
    if (getProperty(srcData, "data.components.divineFocus") === 1) components.push("DF");
    const df = getProperty(srcData, "data.components.divineFocus");
    // Sort components
    const componentsOrder = ["V", "S", "M", "F", "DF"];
    components.sort((a, b) => {
      let index = [componentsOrder.indexOf(a), components.indexOf(b)];
      if (index[0] === -1 && index[1] === -1) return 0;
      if (index[0] === -1 && index[1] >= 0) return 1;
      if (index[0] >= 0 && index[1] === -1) return -1;
      return index[0] - index[1];
    });
    components = components.map((o) => {
      if (o === "M") {
        if (df === 2) o = "M/DF";
        if (getProperty(srcData, "data.materials.value")) o = `${o} (${getProperty(srcData, "data.materials.value")})`;
      }
      if (o === "F") {
        if (df === 3) o = "F/DF";
        if (getProperty(srcData, "data.materials.focus")) o = `${o} (${getProperty(srcData, "data.materials.focus")})`;
      }
      return o;
    });
    return components;
  }

  /* -------------------------------------------- */

  /**
   * Get the Actor which is the author of a chat card
   * @param {HTMLElement} card    The chat card being used
   * @return {Array.<Actor>}      The Actor entity or null
   * @private
   */
  static _getChatCardTargets(card) {
    const character = game.user.character;
    const controlled = canvas.tokens.controlled;
    const targets = controlled.reduce((arr, t) => (t.actor ? arr.concat([t.actor]) : arr), []);
    if (character && controlled.length === 0) targets.push(character);
    if (!targets.length) throw new Error(`You must designate a specific Token as the roll target`);
    return targets;
  }

  useSpellPoints() {
    if (!this.parentActor) return false;
    if (this.data.type !== "spell") return false;

    const spellbookKey = this.data.data.spellbook;
    const spellbook = getProperty(this.parentActor.data, `data.attributes.spells.spellbooks.${spellbookKey}`);
    return getProperty(spellbook, "spellPoints.useSystem") || false;
  }

  getSpellPointCost(rollData = null) {
    if (!rollData) rollData = this.getRollData();

    const roll = new Roll(getProperty(this.data, "data.spellPoints.cost") || "0", rollData).roll();
    return roll.total;
  }

  async addSpellUses(value, data = null) {
    if (!this.parentActor) return;
    if (this.data.data.atWill) return;

    const spellbook = getProperty(
        this.parentActor.data,
        `data.attributes.spells.spellbooks.${this.data.data.spellbook}`
      ),
      isSpontaneous = spellbook.spontaneous,
      spellbookKey = getProperty(this.data, "data.spellbook") || "primary",
      spellLevel = getProperty(this.data, "data.level");

    if (this.useSpellPoints()) {
      const curUses = this.getSpellUses();
      const updateData = {};
      updateData[`data.attributes.spells.spellbooks.${spellbookKey}.spellPoints.value`] = curUses + value;
      return this.parentActor.update(updateData);
    } else {
      if (this.data.data.level === 0) return;
      const newCharges = isSpontaneous
        ? Math.max(0, (getProperty(spellbook, `spells.spell${spellLevel}.value`) || 0) + value)
        : Math.max(0, (getProperty(this.data, "data.preparation.preparedAmount") || 0) + value);

      if (!isSpontaneous) {
        const key = "data.preparation.preparedAmount";
        if (data == null) {
          data = {};
          data[key] = newCharges;
          return this.update(data);
        } else {
          data[key] = newCharges;
        }
      } else {
        const key = `data.attributes.spells.spellbooks.${spellbookKey}.spells.spell${spellLevel}.value`;
        const actorUpdateData = {};
        actorUpdateData[key] = newCharges;
        return this.parentActor.update(actorUpdateData);
      }
    }

    return null;
  }

  getSpellUses(max = false) {
    if (!this.parentActor) return 0;
    if (this.data.data.atWill) return Number.POSITIVE_INFINITY;

    const spellbook = getProperty(
        this.parentActor.data,
        `data.attributes.spells.spellbooks.${this.data.data.spellbook}`
      ),
      isSpontaneous = spellbook.spontaneous,
      spellLevel = getProperty(this.data, "data.level");

    if (this.useSpellPoints()) {
      if (max) return getProperty(spellbook, "spellPoints.max");
      return getProperty(spellbook, "spellPoints.value");
    } else {
      if (isSpontaneous) {
        if (getProperty(this.data, "data.preparation.spontaneousPrepared") === true) {
          if (max) return getProperty(spellbook, `spells.spell${spellLevel}.max`) || 0;
          return getProperty(spellbook, `spells.spell${spellLevel}.value`) || 0;
        }
      } else {
        if (max) return getProperty(this.data, "data.preparation.maxAmount") || 0;
        return getProperty(this.data, "data.preparation.preparedAmount") || 0;
      }
    }

    return 0;
  }

  static async toConsumable(origData, type) {
    let data = duplicate(game.system.template.Item.consumable);
    for (let t of data.templates) {
      mergeObject(data, duplicate(game.system.template.Item.templates[t]));
    }
    delete data.templates;
    data = {
      type: "consumable",
      name: origData.name,
      data: data,
    };

    const slcl = this.getMinimumCasterLevelBySpellData(origData.data);
    const materialPrice = getProperty(origData, "data.materials.gpValue") || 0;

    // Set consumable type
    data.data.consumableType = type;

    // Set range
    data.data.range.units = origData.data.range.units;
    data.data.range.value = origData.data.range.value;
    switch (data.data.range.units) {
      case "close":
        data.data.range.value = new Roll("25 + floor(@cl / 2) * 5", { cl: slcl[1] }).roll().total.toString();
        data.data.range.units = "ft";
        break;
      case "medium":
        data.data.range.value = new Roll("100 + @cl * 10", { cl: slcl[1] }).roll().total.toString();
        data.data.range.units = "ft";
        break;
      case "long":
        data.data.range.value = new Roll("400 + @cl * 40", { cl: slcl[1] }).roll().total.toString();
        data.data.range.units = "ft";
        break;
    }

    // Set name
    if (type === "wand") {
      data.name = game.i18n.localize("PF1.CreateItemWandOf").format(origData.name);
      data.img = "systems/pf1/icons/items/inventory/wand-star.jpg";
      data.data.price = Math.max(0.5, slcl[0]) * slcl[1] * 750 + materialPrice * 50;
      data.data.hardness = 5;
      data.data.hp.max = 5;
      data.data.hp.value = 5;
    } else if (type === "potion") {
      data.name = game.i18n.localize("PF1.CreateItemPotionOf").format(origData.name);
      data.img = "systems/pf1/icons/items/potions/minor-blue.jpg";
      data.data.price = Math.max(0.5, slcl[0]) * slcl[1] * 50 + materialPrice;
      data.data.hardness = 1;
      data.data.hp.max = 1;
      data.data.hp.value = 1;
      data.data.range.value = 0;
      data.data.range.units = "personal";
    } else if (type === "scroll") {
      data.name = game.i18n.localize("PF1.CreateItemScrollOf").format(origData.name);
      data.img = "systems/pf1/icons/items/inventory/scroll-magic.jpg";
      data.data.price = Math.max(0.5, slcl[0]) * slcl[1] * 25 + materialPrice;
      data.data.hardness = 0;
      data.data.hp.max = 1;
      data.data.hp.value = 1;
    }

    // Set charges
    if (type === "wand") {
      data.data.uses.maxFormula = "50";
      data.data.uses.value = 50;
      data.data.uses.max = 50;
      data.data.uses.per = "charges";
    } else {
      data.data.uses.per = "single";
    }

    // Set activation method
    data.data.activation.type = "standard";

    // Set measure template
    if (type !== "potion") {
      data.data.measureTemplate = getProperty(origData, "data.measureTemplate");
    }

    // Set damage formula
    data.data.actionType = origData.data.actionType;
    for (let d of getProperty(origData, "data.damage.parts")) {
      d[0] = d[0].replace(/@sl/g, slcl[0]);
      d[0] = d[0].replace(/@cl/g, "@item.cl");
      data.data.damage.parts.push(d);
    }

    // Set saves
    data.data.save.description = origData.data.save.description;
    data.data.save.dc = 10 + slcl[0] + Math.floor(slcl[0] / 2) + "";

    // Copy variables
    data.data.attackNotes = origData.data.attackNotes;
    data.data.effectNotes = origData.data.effectNotes;
    data.data.attackBonus = origData.data.attackBonus;
    data.data.critConfirmBonus = origData.data.critConfirmBonus;
    data.data.aura.school = origData.data.school;

    // Set Caster Level
    data.data.cl = slcl[1];

    // Set description
    data.data.description.value = await renderTemplate("systems/pf1/templates/internal/consumable-description.hbs", {
      origData: origData,
      data: data,
      isWand: type === "wand",
      isPotion: type === "potion",
      isScroll: type === "scroll",
      sl: slcl[0],
      cl: slcl[1],
      config: CONFIG.PF1,
    });

    return data;
  }

  /**
   * @param {object} itemData - A spell item's data.
   * @returns {number[]} An array containing the spell level and caster level.
   */
  static getMinimumCasterLevelBySpellData(itemData) {
    const learnedAt = getProperty(itemData, "learnedAt.class").reduce((cur, o) => {
      const classes = o[0].split("/");
      for (let cls of classes) cur.push([cls, o[1]]);
      return cur;
    }, []);
    let result = [9, 20];
    for (let o of learnedAt) {
      result[0] = Math.min(result[0], o[1]);

      const tc = CONFIG.PF1.classCasterType[o[0]] || "high";
      if (tc === "high") {
        result[1] = Math.min(result[1], 1 + Math.max(0, o[1] - 1) * 2);
      } else if (tc === "med") {
        result[1] = Math.min(result[1], 1 + Math.max(0, o[1] - 1) * 3);
      } else if (tc === "low") {
        result[1] = Math.min(result[1], 4 + Math.max(0, o[1] - 1) * 3);
      }
    }

    return result;
  }

  async _onLevelChange(curLevel, newLevel) {
    if (!this.parentActor) return;

    // Add items associated to this class
    if (newLevel > curLevel) {
      const classAssociations = (getProperty(this.data, "data.links.classAssociations") || []).filter((o, index) => {
        o.__index = index;
        return o.level > curLevel && o.level <= newLevel;
      });

      for (let co of classAssociations) {
        const collection = co.id.split(".").slice(0, 2).join(".");
        const itemId = co.id.split(".")[2];
        const pack = game.packs.get(collection);
        const item = await pack.getEntity(itemId);

        const itemData = duplicate(item.data);
        delete itemData._id;
        const newItemData = await this.parentActor.createOwnedItem(itemData);
        const newItem = this.parentActor.items.find((o) => o._id === newItemData._id);

        await this.setFlag("pf1", `links.classAssociations.${newItemData._id}`, co.level);
        await this.createItemLink("children", "data", newItem, newItem._id);
      }
    }

    // Remove items associated to this class
    if (newLevel < curLevel) {
      let associations = duplicate(this.getFlag("pf1", "links.classAssociations") || {});
      for (let [id, level] of Object.entries(associations)) {
        const item = this.parentActor.items.find((o) => o._id === id);
        if (!item) {
          delete associations[id];
          continue;
        }

        if (level > newLevel) {
          await this.parentActor.deleteOwnedItem(id);
          delete associations[id];
        }
      }
      await this.setFlag("pf1", "links.classAssociations", associations);
    }
  }

  /**
   * @param {string} linkType - The type of link.
   * @param {string} dataType - Either "compendium", "data" or "world".
   * @param {Object} targetItem - The target item to link to.
   * @param {string} itemLink - The link identifier for the item.
   * @returns {boolean} Whether a link to the item is possible here.
   */
  canCreateItemLink(linkType, dataType, targetItem, itemLink) {
    const actor = this.parentActor;
    const sameActor = actor && targetItem.actor && targetItem.actor._id === actor._id;

    // Don't create link to self
    const itemId = itemLink.split(".").slice(-1)[0];
    if (itemId === this._id) return false;

    // Don't create existing links
    const links = getProperty(this.data, `data.links.${linkType}`) || [];
    if (links.filter((o) => o.id === itemLink).length) return false;

    const targetLinks = getProperty(targetItem.data, `data.links.${linkType}`);
    if (["children", "charges", "ammunition"].includes(linkType) && sameActor) {
      if (linkType === "charges") {
        // Try to limit charge pool linking to a depth of 1
        if (targetLinks.length > 0) {
          ui.notifications.warn(
            game.i18n.localize("PF1.WarningCannotCreateChargeLink").format(this.name, targetItem.name)
          );
          return false;
        } else if (targetItem.links.charges != null) {
          // Prevent the linking of one item to multiple resource pools
          ui.notifications.warn(
            game.i18n
              .localize("PF1.WarningCannotCreateChargeLink2")
              .format(this.name, targetItem.name, targetItem.links.charges.name)
          );
          return false;
        }
      }
      return true;
    }

    if (linkType === "classAssociations" && dataType === "compendium") return true;

    return false;
  }

  /**
   * @param {string} linkType - The type of link.
   * @param {string} dataType - Either "compendium", "data" or "world".
   * @param {Object} targetItem - The target item to link to.
   * @param {string} itemLink - The link identifier for the item.
   * @returns {Array} An array to insert into this item's link data.
   */
  generateInitialLinkData(linkType, dataType, targetItem, itemLink) {
    const result = {
      id: itemLink,
      dataType: dataType,
      name: targetItem.name,
      img: targetItem.data.img,
      hiddenLinks: {},
    };

    if (linkType === "classAssociations") {
      result.level = 1;
    }

    if (linkType === "ammunition") {
      result.recoverChance = 50;
    }

    return result;
  }

  /**
   * Creates a link to another item.
   * @param {string} linkType - The type of link.
   * e.g. "children", "charges", "classAssociations" or "ammunition".
   * @param {string} dataType - Either "compendium", "data" or "world".
   * @param {Object} targetItem - The target item to link to.
   * @param {string} itemLink - The link identifier for the item.
   * e.g. "world.NExqvEMCMbDuDxv5" (world item), "pf1.feats.NExqvEMCMbDuDxv5" (compendium item) or
   * "NExqvEMCMbDuDxv5" (item on same actor)
   * @returns {Boolean} Whether a link was created.
   */
  async createItemLink(linkType, dataType, targetItem, itemLink) {
    if (this.canCreateItemLink(linkType, dataType, targetItem, itemLink)) {
      const updateData = {};
      let _links = duplicate(getProperty(this.data, `data.links.${linkType}`) || []);
      const link = this.generateInitialLinkData(linkType, dataType, targetItem, itemLink);
      _links.push(link);
      updateData[`data.links.${linkType}`] = _links;

      // Call link creation hook
      await this.update(updateData);
      Hooks.call("createItemLink", this, link, linkType);

      /**
       * @TODO This is a really shitty way of re-rendering the actor sheet, so I should change this method at some point,
       * but the premise is that the actor sheet should show data for newly linked items, and it won't do it immediately for some reason
       */
      window.setTimeout(() => {
        if (this.parentActor) this.parentActor.sheet.render();
      }, 50);

      return true;
    } else if (linkType === "children" && dataType !== "data") {
      const itemData = duplicate(targetItem.data);
      delete itemData._id;

      // Default to spell-like tab until a selector is designed in the Links tab or elsewhere
      if (getProperty(itemData, "type") === "spell") setProperty(itemData, "data.spellbook", "spelllike");

      const newItemData = await this.parentActor.createOwnedItem(itemData);
      const newItem = this.parentActor.items.get(newItemData._id);

      await this.createItemLink("children", "data", newItem, newItem._id);
    }

    return false;
  }

  async getLinkedItems(type, extraData = false) {
    const items = getProperty(this.data, `data.links.${type}`);
    if (!items) return [];

    let result = [];
    for (let l of items) {
      let item = await this.getLinkItem(l, extraData);
      if (item) result.push(item);
    }

    return result;
  }

  async getAllLinkedItems() {
    let result = [];

    for (let items of Object.values(getProperty(this.data, "data.links"))) {
      for (let l of items) {
        let item = await this.getLinkItem(l);
        if (item) result.push(item);
      }
    }

    return result;
  }

  /**
   * Removes all link references to an item.
   * @param {String} id - The id of the item to remove links to.
   */
  async removeItemLink(id) {
    const updateData = {};
    for (let [k, linkItems] of Object.entries(getProperty(this.data, "data.links") || {})) {
      let items = duplicate(linkItems);
      for (let a = 0; a < items.length; a++) {
        let item = items[a];
        if (item.id === id) {
          items.splice(a, 1);
          a--;
        }
      }

      if (linkItems.length > items.length) {
        updateData[`data.links.${k}`] = items;
      }
    }

    if (Object.keys(updateData).length) {
      return this.update(updateData);
    }
  }

  async getLinkItem(l, extraData = false) {
    const id = l.id.split(".");
    let item;

    // Compendium entry
    if (l.dataType === "compendium") {
      const pack = game.packs.get(id.slice(0, 2).join("."));
      item = await pack.getEntity(id[2]);
    }
    // World entry
    else if (l.dataType === "world") {
      item = game.items.get(id[1]);
    }
    // Same actor's item
    else if (this.parentActor != null && this.parentActor.items != null) {
      item = this.parentActor.items.find((o) => o._id === id[0]);
    }

    // Package extra data
    if (extraData) {
      item = { item: item, linkData: l };
    }

    return item;
  }

  async updateLinkItems() {
    // Update link items
    const linkGroups = getProperty(this.data, "data.links") || {};
    for (let links of Object.values(linkGroups)) {
      for (let l of links) {
        const i = await this.getLinkItem(l);
        if (i == null) continue;
        l.name = i.name;
        l.img = i.img;
      }
    }
  }

  _cleanLink(oldLink, linkType) {
    if (!this.parentActor) return;

    const otherItem = this.parentActor.items.find((o) => o._id === oldLink.id);
    if (linkType === "charges" && otherItem && hasProperty(otherItem, "links.charges")) {
      delete otherItem.links.charges;
    }
  }

  /**
   * Generates lists of change subtargets this item can have.
   * @param {string} target - The target key, as defined in CONFIG.PF1.buffTargets.
   * @returns {Object.<string, string>} A list of changes
   */
  getChangeSubTargets(target) {
    let result = {};
    // Add specific skills
    if (target === "skill") {
      if (this.parentActor == null) {
        for (let [s, skl] of Object.entries(CONFIG.PF1.skills)) {
          result[`skill.${s}`] = skl;
        }
      } else {
        const actorSkills = this.parentActor.data.data.skills;
        for (let [s, skl] of Object.entries(actorSkills)) {
          if (!skl.subSkills) {
            if (skl.custom) result[`skill.${s}`] = skl.name;
            else result[`skill.${s}`] = CONFIG.PF1.skills[s];
          } else {
            for (let [s2, skl2] of Object.entries(skl.subSkills)) {
              result[`skill.${s}.subSkills.${s2}`] = `${CONFIG.PF1.skills[s]} (${skl2.name})`;
            }
          }
        }
      }
    }
    // Add static subtargets
    else if (hasProperty(CONFIG.PF1.buffTargets, target)) {
      for (let [k, v] of Object.entries(CONFIG.PF1.buffTargets[target])) {
        if (!k.startsWith("_")) result[k] = v;
      }
    }

    return result;
  }

  /**
   * Generates a list of targets this modifier can have.
   * @param {ItemPF} item - The item for which the modifier is to be created.
   * @returns {Object.<string, string>} A list of targets
   */
  getConditionalTargets() {
    let result = {};
    if (this.hasAttack) result["attack"] = game.i18n.localize(CONFIG.PF1.conditionalTargets.attack._label);
    if (this.hasDamage) result["damage"] = game.i18n.localize(CONFIG.PF1.conditionalTargets.damage._label);
    if (this.type === "spell" || this.hasSave)
      result["effect"] = game.i18n.localize(CONFIG.PF1.conditionalTargets.effect._label);
    // Only add Misc target if subTargets are available
    if (Object.keys(this.getConditionalSubTargets("misc")).length > 0) {
      result["misc"] = game.i18n.localize(CONFIG.PF1.conditionalTargets.misc._label);
    }
    return result;
  }

  /**
   * Generates lists of conditional subtargets this attack can have.
   * @param {string} target - The target key, as defined in CONFIG.PF1.conditionTargets.
   * @returns {Object.<string, string>} A list of conditionals
   */
  getConditionalSubTargets(target) {
    let result = {};
    // Add static targets
    if (hasProperty(CONFIG.PF1.conditionalTargets, target)) {
      for (let [k, v] of Object.entries(CONFIG.PF1.conditionalTargets[target])) {
        if (!k.startsWith("_")) result[k] = v;
      }
    }
    // Add subtargets depending on attacks
    if (["attack", "damage"].includes(target)) {
      // Add specific attacks
      if (this.hasAttack) {
        result["attack.0"] = `${game.i18n.localize("PF1.Attack")} 1`;
      } else {
        delete result["rapidShotDamage"];
      }
      if (this.hasMultiAttack) {
        for (let [k, v] of Object.entries(this.data.data.attackParts)) {
          result[`attack.${Number(k) + 1}`] = v[1];
        }
      }
    }
    // Add subtargets affecting effects
    if (target === "effect") {
      if (this.data.type === "spell") result["cl"] = game.i18n.localize("PF1.CasterLevel");
      if (this.hasSave) result["dc"] = game.i18n.localize("PF1.DC");
    }
    // Add misc subtargets
    if (target === "misc") {
      // Add charges subTarget with specific label
      if (this.type === "spell" && this.useSpellPoints()) result["charges"] = game.i18n.localize("PF1.SpellPointsCost");
      else if (this.isCharged && this.type !== "spell") result["charges"] = game.i18n.localize("PF1.ChargeCost");
    }
    return result;
  }

  /* Generates lists of conditional modifier bonus types applicable to a formula.
   * @param {string} target - The target key as defined in CONFIG.PF1.conditionTargets.
   * @returns {Object.<string, string>} A list of bonus types.
   * */
  getConditionalModifierTypes(target) {
    let result = {};
    if (target === "attack" || target === "damage") {
      // Add bonusModifiers from CONFIG.PF1.bonusModifiers
      for (let [k, v] of Object.entries(CONFIG.PF1.bonusModifiers)) {
        result[k] = v;
      }
    }
    if (target === "damage") {
      for (let [k, v] of Object.entries(CONFIG.PF1.damageTypes)) {
        result[k] = v;
      }
    }
    return result;
  }

  /* Generates a list of critical applications for a given formula target.
   * @param {string} target - The target key as defined in CONFIG.PF1.conditionalTargets.
   * @returns {Object.<string, string>} A list of critical applications.
   * */
  getConditionalCritical(target) {
    let result = {};
    // Attack bonuses can only apply as critical confirm bonus
    if (target === "attack") {
      result = { ...result, normal: "PF1.Normal", crit: "PF1.CriticalConfirmBonus" };
    }
    // Damage bonuses can be multiplied or not
    if (target === "damage") {
      result = { ...result, normal: "PF1.Normal" };
      if (this.hasAttack) {
        result = { ...result, crit: "PF1.CritDamageBonusFormula", nonCrit: "PF1.NonCritDamageBonusFormula" };
      }
    }
    return result;
  }

  /**
   * Generates lists of context note subtargets this item can have.
   * @param {string} target - The target key, as defined in CONFIG.PF1.buffTargets.
   * @returns {Object.<string, string>} A list of changes
   */
  getContextNoteSubTargets(target) {
    let result = {};
    // Add specific skills
    if (target === "skill") {
      if (this.parentActor == null) {
        for (let [s, skl] of Object.entries(CONFIG.PF1.skills)) {
          result[`skill.${s}`] = skl;
        }
      } else {
        const actorSkills = this.parentActor.data.data.skills;
        for (let [s, skl] of Object.entries(actorSkills)) {
          if (!skl.subSkills) {
            if (skl.custom) result[`skill.${s}`] = skl.name;
            else result[`skill.${s}`] = CONFIG.PF1.skills[s];
          } else {
            for (let [s2, skl2] of Object.entries(skl.subSkills)) {
              result[`skill.${s}.subSkills.${s2}`] = `${CONFIG.PF1.skills[s]} (${skl2.name})`;
            }
          }
        }
      }
    }
    // Add static subtargets
    else if (hasProperty(CONFIG.PF1.contextNoteTargets, target)) {
      for (let [k, v] of Object.entries(CONFIG.PF1.contextNoteTargets[target])) {
        if (!k.startsWith("_")) result[k] = v;
      }
    }

    return result;
  }

  async addChange() {
    const change = new ItemChange();
    this.changes.push(change);
  }

  async createContainerContent(data, options = { raw: false }) {
    let embeddedName = "ContainerContent";
    const user = game.user;
    const itemOptions = { temporary: false, renderSheet: false };

    // Iterate over data to create
    data = data instanceof Array ? data : [data];
    if (!(itemOptions.temporary || itemOptions.noHook)) {
      for (let d of data) {
        const allowed = Hooks.call(`preCreate${embeddedName}`, this, d, itemOptions, user._id);
        if (allowed === false) {
          console.debug(`${vtt} | ${embeddedName} creation prevented by preCreate hook`);
          return null;
        }
      }
    }

    // Trigger the Socket workflow
    let inventory = duplicate(getProperty(this.data, "data.inventoryItems") || []);
    const items = data.map((o) => {
      if (!options.raw) {
        let template = duplicate(game.system.template.Item[o.type]);
        if (template.templates instanceof Array) {
          template.templates.forEach((t) => {
            template = mergeObject(template, game.system.template.Item.templates[t]);
          });
        }
        delete template.templates;

        o.data = mergeObject(template, o.data || {});
      }

      if (!o._id) o._id = randomID(16);
      return o;
    });
    inventory.push(...items);

    // Filter items with duplicate _id
    {
      let ids = [];
      inventory = inventory.filter((i) => {
        if (ids.includes(i._id)) return false;
        ids.push(i._id);
        return true;
      });
    }

    await this.update({ "data.inventoryItems": inventory });
  }

  getContainerContent(itemId) {
    return this.items.get(itemId);
  }

  async deleteContainerContent(data) {
    let embeddedName = "ContainerContent";
    const user = game.user;
    const options = { noHook: false };

    // Iterate over data to create
    data = data instanceof Array ? data : [data];
    const ids = new Set(data);

    // Iterate over elements of the collection
    const inventory = duplicate(getProperty(this.data, "data.inventoryItems") || []).filter((d) => {
      if (!ids.has(d._id)) return true;

      // Call pre-update hooks to ensure the update is allowed to proceed
      if (!options.noHook) {
        const allowed = Hooks.call(`preDelete${embeddedName}`, this, d, options, user._id);
        if (allowed === false) {
          console.debug(`${vtt} | ${embeddedName} update prevented by preUpdate hook`);
          return true;
        }
      }

      // Remove entity from collection
      return false;
    }, []);

    // Trigger the Socket workflow
    await this.update({ "data.inventoryItems": inventory });
  }

  async updateContainerContents(data) {
    let embeddedName = "ContainerContent";
    const user = game.user;
    const options = { diff: true };

    // Structure the update data
    const pending = new Map();
    data = data instanceof Array ? data : [data];
    for (let d of data) {
      if (!d._id) throw new Error("You must provide an id for every Embedded Entity in an update operation");
      pending.set(d._id, d);
    }

    // Difference each update against existing data
    const updates = this.items.reduce((arr, d) => {
      if (!pending.has(d._id)) return arr;
      let update = pending.get(d._id);

      // Diff the update against current data
      if (options.diff) {
        update = diffObject(d, expandObject(update));
        if (isObjectEmpty(update)) return arr;
        update["_id"] = d._id;
      }

      // Call pre-update hooks to ensure the update is allowed to proceed
      if (!options.noHook) {
        const allowed = Hooks.call(`preUpdate${embeddedName}`, this, d, update, options, user._id);
        if (allowed === false) {
          console.debug(`${vtt} | ${embeddedName} update prevented by preUpdate hook`);
          return arr;
        }
      }

      // Stage the update
      arr.push(update);
      return arr;
    }, []);
    if (!updates.length) return [];
    let inventory = duplicate(this.data.data.inventoryItems).map((o) => {
      for (let u of updates) {
        if (u._id === o._id) return mergeObject(o, u);
      }
      return o;
    });

    // Filter items with duplicate _id
    {
      let ids = [];
      inventory = inventory.filter((i) => {
        if (ids.includes(i._id)) return false;
        ids.push(i._id);
        return true;
      });
    }

    await this.update({ "data.inventoryItems": inventory });
  }

  /**
   * @returns {number} The total amount of currency this item contains, in gold pieces
   */
  getTotalCurrency() {
    const currencies = getProperty(this.data, "data.currency");
    if (!currencies) return 0;
    return (currencies.pp * 1000 + currencies.gp * 100 + currencies.sp * 10 + currencies.cp) / 100;
  }

  getValue({ recursive = true, sellValue = 0.5 } = {}) {
    // Add item's contained currencies
    let result = this.getTotalCurrency();

    // Add item's price
    if (this.showUnidentifiedData)
      result +=
        (getProperty(this.data, "data.unidentified.price") || 0) * (getProperty(this.data, "data.quantity") || 0);
    else result += (getProperty(this.data, "data.price") || 0) * (getProperty(this.data, "data.quantity") || 0);

    // Modify sell value
    if (!(this.data.type === "loot" && this.data.data.subType === "tradeGoods")) result *= sellValue;

    if (!this.items || !recursive) return result;

    // Add item's content items' values
    this.items.forEach((i) => {
      result += i.getValue({ recursive: recursive, sellValue: sellValue });
    });

    return result;
  }

  /**
   * Converts currencies of the given category to the given currency type
   * @param {string} type - Either 'pp', 'gp', 'sp' or 'cp'. Converts as much currency as possible to this type.
   */
  convertCurrency(type = "pp") {
    const totalValue = this.getTotalCurrency();
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
    updateData[`data.currency.pp`] = values[0];
    updateData[`data.currency.gp`] = values[1];
    updateData[`data.currency.sp`] = values[2];
    updateData[`data.currency.cp`] = values[3];
    return this.update(updateData);
  }

  _calculateCoinWeight(data) {
    const coinWeightDivisor = game.settings.get("pf1", "coinWeight");
    if (!coinWeightDivisor) return 0;
    return (
      Object.values(getProperty(data, "data.currency") || {}).reduce((cur, amount) => {
        return cur + amount;
      }, 0) / coinWeightDivisor
    );
  }
}
