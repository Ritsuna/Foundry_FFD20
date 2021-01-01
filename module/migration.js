import { ItemPF } from "./item/entity.js";
import { ExperienceConfig } from "./config/experience.js";
import { createTag } from "./lib.js";
import { ItemChange } from "./item/components/change.js";

/**
 * Perform a system migration for the entire World, applying migrations for Actors, Items, and Compendium packs
 * @return {Promise}      A Promise which resolves once the migration is completed
 */
export const migrateWorld = async function () {
  if (!game.user.isGM) {
    const msg = game.i18n.localize("PF1.ErrorUnauthorizedAction");
    console.error(msg);
    return ui.notifications.error(msg);
  }
  ui.notifications.info(`Applying PF1 System Migration for version ${game.system.data.version}. Please stand by.`);

  await _migrateWorldSettings();

  // Migrate World Actors
  for (let a of game.actors.entities) {
    try {
      const updateData = await migrateActorData(a);
      console.log(`Migrating Actor entity ${a.name}`);
      await a.update(updateData);
    } catch (err) {
      console.error(err);
    }
  }

  // Migrate World Items
  for (let i of game.items.entities) {
    try {
      const updateData = migrateItemData(i);
      console.log(`Migrating Item entity ${i.name}`);
      await i.update(updateData, { enforceTypes: false });
    } catch (err) {
      console.error(err);
    }
  }

  // Migrate Actor Override Tokens
  for (let s of game.scenes.entities) {
    try {
      const updateData = await migrateSceneData(s.data);
      console.log(`Migrating Scene entity ${s.name}`);
      await s.update(updateData);
    } catch (err) {
      console.error(err);
    }
  }

  // Migrate World Compendium Packs
  const packs = game.packs.filter((p) => {
    return (
      (["world", "pf1"].includes(p.metadata.package) || p.metadata.system === "pf1") &&
      ["Actor", "Item", "Scene"].includes(p.metadata.entity) &&
      !p.locked
    );
  });
  for (let p of packs) {
    await migrateCompendium(p);
  }

  // Set the migration as complete
  game.settings.set("pf1", "systemMigrationVersion", game.system.data.version);
  ui.notifications.info(`PF1 System Migration to version ${game.system.data.version} succeeded!`);
};

/* -------------------------------------------- */

/**
 * Apply migration rules to all Entities within a single Compendium pack
 * @param pack
 * @return {Promise}
 */
export const migrateCompendium = async function (pack) {
  const entity = pack.metadata.entity;
  if (!["Actor", "Item", "Scene"].includes(entity)) return;

  // Begin by requesting server-side data model migration and get the migrated content
  await pack.migrate();
  const content = await pack.getContent();

  // Iterate over compendium entries - applying fine-tuned migration functions
  for (let ent of content) {
    try {
      let updateData = null;
      if (entity === "Item") updateData = migrateItemData(ent);
      else if (entity === "Actor") updateData = await migrateActorData(ent);
      else if (entity === "Scene") updateData = await migrateSceneData(ent);
      expandObject(updateData);
      updateData["_id"] = ent._id;
      await pack.updateEntity(updateData);
      console.log(`Migrated ${entity} entity ${ent.name} in Compendium ${pack.collection}`);
    } catch (err) {
      console.error(err);
    }
  }
  console.log(`Migrated all ${entity} entities from Compendium ${pack.collection}`);
};

/**
 * Migrates world settings.
 */
const _migrateWorldSettings = async function () {
  const oldXPTrack = game.settings.get("pf1", "experienceRate");
  if (oldXPTrack !== "" && oldXPTrack != null) {
    // Set new config style
    const config = game.settings.get("pf1", "experienceConfig") || ExperienceConfig.defaultSettings;
    config.track = oldXPTrack;
    await game.settings.set("pf1", "experienceConfig", config);
    // Remove old config style
    await game.settings.set("pf1", "experienceRate", "");
  }
};

/* -------------------------------------------- */
/*  Entity Type Migration Helpers               */
/* -------------------------------------------- */

/**
 * Migrate a single Actor entity to incorporate latest data model changes
 * Return an Object of updateData to be applied
 * @param {Actor} actor   The actor to Update
 * @return {Object}       The updateData to apply
 */
export const migrateActorData = async function (actor) {
  const updateData = {};

  _migrateCharacterLevel(actor, updateData);
  _migrateActorEncumbrance(actor, updateData);
  _migrateActorDefenseNotes(actor, updateData);
  _migrateActorSpeed(actor, updateData);
  _migrateSpellDivineFocus(actor, updateData);
  _migrateActorSpellbookCL(actor, updateData);
  _migrateActorSpellbookSlots(actor, updateData);
  _migrateActorBaseStats(actor, updateData);
  _migrateActorCreatureType(actor, updateData);
  _migrateActorSpellbookDCFormula(actor, updateData);
  _migrateActorHPAbility(actor, updateData);
  _migrateActorCR(actor, updateData);
  _migrateCMBAbility(actor, updateData);
  _migrateActorTokenVision(actor, updateData);
  _migrateActorSpellbookUsage(actor, updateData);
  _migrateActorNullValues(actor, updateData);
  _migrateActorSpellbookDomainSlots(actor, updateData);
  _migrateActorStatures(actor, updateData);
  _migrateActorInitAbility(actor, updateData);

  if (!actor.items) return updateData;

  // Migrate Owned Items
  let items = [];
  const actorItems = Array.from(actor.items);
  for (let a = 0; a < actorItems.length; a++) {
    let i = actorItems[a];
    items[a] = i;
    let itemUpdate = migrateItemData(i);

    // Update the Owned Item
    items[a] = mergeObject(i, itemUpdate, { enforceTypes: false, inplace: false });
  }
  updateData.items = items;
  return updateData;
};

/* -------------------------------------------- */

/**
 * Migrate a single Item entity to incorporate latest data model changes
 * @param item
 */
export const migrateItemData = function (item) {
  const updateData = {};

  _migrateItemSpellUses(item, updateData);
  _migrateWeaponDamage(item, updateData);
  _migrateWeaponImprovised(item, updateData);
  _migrateSpellDescription(item, updateData);
  _migrateClassDynamics(item, updateData);
  _migrateClassType(item, updateData);
  _migrateWeaponCategories(item, updateData);
  _migrateEquipmentCategories(item, updateData);
  _migrateWeaponSize(item, updateData);
  _migrateAbilityTypes(item, updateData);
  _migrateClassLevels(item, updateData);
  _migrateSavingThrowTypes(item, updateData);
  _migrateCR(item, updateData);
  _migrateItemChanges(item, updateData);
  _migrateTemplateSize(item, updateData);
  _migrateEquipmentSize(item, updateData);
  _migrateTags(item, updateData);
  _migrateSpellCosts(item, updateData);
  _migrateLootEquip(item, updateData);
  _migrateUnchainedActionEconomy(item, updateData);
  _migrateItemRange(item, updateData);
  _migrateItemLinks(item, updateData);

  // Return the migrated update data
  return updateData;
};

/* -------------------------------------------- */

/**
 * Migrate a single Scene entity to incorporate changes to the data model of it's actor data overrides
 * Return an Object of updateData to be applied
 * @param {Object} scene  The Scene data to Update
 * @return {Object}       The updateData to apply
 */
export const migrateSceneData = async function (scene) {
  const result = { tokens: duplicate(scene.tokens) };
  for (let t of result.tokens) {
    const token = new Token(t);

    migrateTokenVision(token, t);

    if (!t.actorId || t.actorLink || !t.actorData.data) {
      t.actorData = {};
      continue;
    }
    if (!token.actor) {
      t.actorId = null;
      t.actordata = {};
    }
    const originalActor = game.actors.get(token.actor?.id);
    if (!originalActor) {
      t.actorId = null;
      t.actorData = {};
    } else {
      const updateData = await migrateActorData(token.data.actorData);
      t.actorData = mergeObject(token.data.actorData, updateData);
    }
  }
  return result;
};

/* -------------------------------------------- */
/*  Low level migration utilities
/* -------------------------------------------- */

/**
 * Migrate string format traits with a comma separator to an array of strings
 * @private
 */
const _migrateActorTraits = function (actor, updateData) {
  if (!actor.data.traits) return;
  const dt = invertObject(CONFIG.pf1.damageTypes);
  const map = {
    dr: dt,
    di: dt,
    dv: dt,
    ci: invertObject(CONFIG.pf1.conditionTypes),
    languages: invertObject(CONFIG.pf1.languages),
  };
  for (let [t, choices] of Object.entries(map)) {
    const trait = actor.data.traits[t];
    if (trait && typeof trait.value === "string") {
      updateData[`data.traits.${t}.value`] = trait.value
        .split(",")
        .map((t) => choices[t.trim()])
        .filter((t) => !!t);
    }
  }
};

/* -------------------------------------------- */

/**
 * Flatten several attributes which currently have an unnecessarily nested {value} object
 * @private
 */
const _migrateFlattenValues = function (ent, updateData, toFlatten) {
  for (let a of toFlatten) {
    const attr = getProperty(ent.data, a);
    if (attr instanceof Object && !Object.prototype.hasOwnProperty.call(updateData, "data." + a)) {
      updateData["data." + a] = Object.prototype.hasOwnProperty.call(attr, "value") ? attr.value : null;
    }
  }
};

const _migrateAddValues = function (ent, updateData, toAdd) {
  for (let [k, v] of Object.entries(toAdd)) {
    const attr = getProperty(ent.data, k);
    if (!attr && !Object.prototype.hasOwnProperty.call(updateData, k)) {
      updateData[k] = v;
    }
  }
};

/* -------------------------------------------- */

const _migrateCharacterLevel = function (ent, updateData) {
  const arr = ["details.level.value", "details.level.min", "details.level.max"];
  for (let k of arr) {
    const value = getProperty(ent.data.data, k);
    if (value == null) {
      updateData["data." + k] = 0;
    }
  }
};

const _migrateActorEncumbrance = function (ent, updateData) {
  const arr = [
    "attributes.encumbrance.level",
    "attributes.encumbrance.levels.light",
    "attributes.encumbrance.levels.medium",
    "attributes.encumbrance.levels.heavy",
    "attributes.encumbrance.levels.carry",
    "attributes.encumbrance.levels.drag",
    "attributes.encumbrance.carriedWeight",
  ];
  for (let k of arr) {
    const value = getProperty(ent.data.data, k);
    if (value == null) {
      updateData["data." + k] = 0;
    }
  }
};

const _migrateActorDefenseNotes = function (ent, updateData) {
  const arr = ["attributes.acNotes", "attributes.cmdNotes", "attributes.srNotes"];
  for (let k of arr) {
    const value = getProperty(ent.data.data, k);
    if (value == null) {
      updateData["data." + k] = "";
    }
  }
};

const _migrateActorSpeed = function (ent, updateData) {
  const arr = [
    "attributes.speed.land",
    "attributes.speed.climb",
    "attributes.speed.swim",
    "attributes.speed.fly",
    "attributes.speed.burrow",
  ];
  for (let k of arr) {
    let value = getProperty(ent.data.data, k);
    if (typeof value === "string") value = parseInt(value);
    if (typeof value === "number") {
      updateData[`data.${k}.base`] = value;
      updateData[`data.${k}.total`] = value;
    } else if (value == null) {
      updateData[`data.${k}.base`] = 0;
      updateData[`data.${k}.total`] = null;
    }

    // Add maneuverability
    if (k === "attributes.speed.fly" && getProperty(ent.data.data, `${k}.maneuverability`) === undefined) {
      updateData[`data.${k}.maneuverability`] = "average";
    }
  }
};

const _migrateActorSpellbookSlots = function (ent, updateData) {
  for (let spellbookSlot of Object.keys(getProperty(ent.data.data, "attributes.spells.spellbooks") || {})) {
    if (getProperty(ent.data.data, `attributes.spells.spellbooks.${spellbookSlot}.autoSpellLevels`) == null) {
      updateData[`data.attributes.spells.spellbooks.${spellbookSlot}.autoSpellLevels`] = true;
    }

    for (let a = 0; a < 10; a++) {
      const baseKey = `data.attributes.spells.spellbooks.${spellbookSlot}.spells.spell${a}.base`;
      const maxKey = `data.attributes.spells.spellbooks.${spellbookSlot}.spells.spell${a}.max`;
      const base = getProperty(ent.data, baseKey);
      const max = getProperty(ent.data, maxKey);
      if (base === undefined && typeof max === "number" && max > 0) {
        updateData[baseKey] = max.toString();
      } else if (base === undefined) {
        updateData[baseKey] = "";
      }
    }
  }
};

const _migrateActorBaseStats = function (ent, updateData) {
  const keys = [
    "attributes.hp.base",
    "attributes.hd.base",
    "attributes.savingThrows.fort.value",
    "attributes.savingThrows.ref.value",
    "attributes.savingThrows.will.value",
  ];
  for (let k of keys) {
    if (k === "attributes.hp.base" && !(getProperty(ent, "items") || []).filter((o) => o.type === "class").length)
      continue;
    if (getProperty(ent.data.data, k) != null) {
      let kList = k.split(".");
      kList[kList.length - 1] = `-=${kList[kList.length - 1]}`;
      updateData[`data.${kList.join(".")}`] = null;
    }
  }
};

const _migrateActorCreatureType = function (ent, updateData) {
  if (getProperty(ent.data, "data.attributes.creatureType") == null) {
    updateData["data.attributes.creatureType"] = "humanoid";
  }
};

const _migrateActorSpellbookDCFormula = function (ent, updateData) {
  const spellbooks = Object.keys(getProperty(ent.data, "data.attributes.spells.spellbooks") || {});

  for (let k of spellbooks) {
    const key = `data.attributes.spells.spellbooks.${k}.baseDCFormula`;
    const curFormula = getProperty(ent.data, key);
    if (curFormula == null) updateData[key] = "10 + @sl + @ablMod";
  }
};

const _migrateActorSpellbookCL = function (ent, updateData) {
  const spellbooks = Object.keys(getProperty(ent.data, "data.attributes.spells.spellbooks") || {});

  for (let k of spellbooks) {
    const key = `data.attributes.spells.spellbooks.${k}.cl`;
    const curBase = parseInt(getProperty(ent.data, key + ".base"));
    const curFormula = getProperty(ent.data, key + ".formula");
    if (curBase > 0) {
      if (curFormula.length > 0) updateData[`${key}.formula`] = curFormula + " + " + curBase;
      else updateData[`${key}.formula`] = curFormula + curBase;
      updateData[`${key}.base`] = 0;
    }
  }
};

const _migrateActorHPAbility = function (ent, updateData) {
  // Set HP ability
  if (getProperty(ent.data, "data.attributes.hpAbility") === undefined) {
    updateData["data.attributes.hpAbility"] = "con";
  }

  // Set Fortitude save ability
  if (getProperty(ent.data, "data.attributes.savingThrows.fort.ability") === undefined) {
    updateData["data.attributes.savingThrows.fort.ability"] = "con";
  }

  // Set Reflex save ability
  if (getProperty(ent.data, "data.attributes.savingThrows.ref.ability") === undefined) {
    updateData["data.attributes.savingThrows.ref.ability"] = "dex";
  }

  // Set Will save ability
  if (getProperty(ent.data, "data.attributes.savingThrows.will.ability") === undefined) {
    updateData["data.attributes.savingThrows.will.ability"] = "wis";
  }
};

const _migrateItemSpellUses = function (ent, updateData) {
  if (getProperty(ent.data.data, "preparation") === undefined) return;

  const value = getProperty(ent.data.data, "preparation.maxAmount");
  if (typeof value !== "number") updateData["data.preparation.maxAmount"] = 0;
};

const _migrateWeaponDamage = function (ent, updateData) {
  if (ent.type !== "weapon") return;

  const value = getProperty(ent.data.data, "weaponData");
  if (typeof value !== "object") {
    updateData["data.weaponData"] = {};
    updateData["data.weaponData.critRange"] = 20;
    updateData["data.weaponData.critMult"] = 2;
  }
};

const _migrateWeaponImprovised = function (ent, updateData) {
  if (ent.type !== "weapon") return;

  const value = getProperty(ent.data.data, "weaponType");
  if (value === "improv") {
    updateData["data.weaponType"] = "misc";
    updateData["data.properties.imp"] = true;
  }
};

const _migrateSpellDescription = function (ent, updateData) {
  if (ent.type !== "spell") return;

  const curValue = getProperty(ent.data.data, "shortDescription");
  if (curValue != null) return;

  const obj = getProperty(ent.data.data, "description.value");
  if (typeof obj !== "string") return;
  const html = $(`<div>${obj}</div>`);
  const elem = html.find("h2").next();
  if (elem.length === 1) updateData["data.shortDescription"] = elem.prop("outerHTML");
  else updateData["data.shortDescription"] = html.prop("innerHTML");
};

const _migrateSpellDivineFocus = function (ent, updateData) {
  if (ent.type !== "spell") return;

  const value = getProperty(ent.data.data, "components.divineFocus");
  if (typeof value === "boolean") updateData["data.components.divineFocus"] = value === true ? 1 : 0;
};

const _migrateClassDynamics = function (ent, updateData) {
  if (ent.type !== "class") return;

  const bab = getProperty(ent.data.data, "bab");
  if (typeof bab === "number") updateData["data.bab"] = "low";

  const stKeys = ["data.savingThrows.fort.value", "data.savingThrows.ref.value", "data.savingThrows.will.value"];
  for (let key of stKeys) {
    let value = getProperty(ent.data, key);
    if (typeof value === "number") updateData[key] = "low";
  }
};

const _migrateClassType = function (ent, updateData) {
  if (ent.type !== "class") return;

  if (getProperty(ent.data.data, "classType") == null) updateData["data.classType"] = "base";
};

const _migrateWeaponCategories = function (ent, updateData) {
  if (ent.type !== "weapon") return;

  // Change category
  const type = getProperty(ent.data.data, "weaponType");
  if (type === "misc") {
    updateData["data.weaponType"] = "misc";
    updateData["data.weaponSubtype"] = "other";
  } else if (type === "splash") {
    updateData["data.weaponType"] = "misc";
    updateData["data.weaponSubtype"] = "splash";
  }

  const changeProp = ["simple", "martial", "exotic"].includes(type);
  if (changeProp && getProperty(ent.data.data, "weaponSubtype") == null) {
    updateData["data.weaponSubtype"] = "1h";
  }

  // Change light property
  const lgt = getProperty(ent.data.data, "properties.lgt");
  if (lgt != null) {
    updateData["data.properties.-=lgt"] = null;
    if (lgt === true && changeProp) {
      updateData["data.weaponSubtype"] = "light";
    }
  }

  // Change two-handed property
  const two = getProperty(ent.data.data, "properties.two");
  if (two != null) {
    updateData["data.properties.-=two"] = null;
    if (two === true && changeProp) {
      updateData["data.weaponSubtype"] = "2h";
    }
  }

  // Change melee property
  const melee = getProperty(ent.data.data, "weaponData.isMelee");
  if (melee != null) {
    updateData["data.weaponData.-=isMelee"] = null;
    if (melee === false && changeProp) {
      updateData["data.weaponSubtype"] = "ranged";
    }
  }
};

const _migrateEquipmentCategories = function (ent, updateData) {
  if (ent.type !== "equipment") return;

  const oldType = getProperty(ent.data.data, "armor.type");
  if (oldType == null) return;

  if (oldType === "clothing") {
    updateData["data.equipmentType"] = "misc";
    updateData["data.equipmentSubtype"] = "clothing";
  } else if (oldType === "shield") {
    updateData["data.equipmentType"] = "shield";
    updateData["data.equipmentSubtype"] = "lightShield";
    updateData["data.slot"] = "shield";
  } else if (oldType === "misc") {
    updateData["data.equipmentType"] = "misc";
    updateData["data.equipmentSubtype"] = "wondrous";
  } else if (["light", "medium", "heavy"].includes(oldType)) {
    updateData["data.equipmentType"] = "armor";
    updateData["data.equipmentSubtype"] = `${oldType}Armor`;
  }

  updateData["data.armor.-=type"] = null;
};

const _migrateWeaponSize = function (ent, updateData) {
  if (ent.type !== "weapon") return;

  if (!getProperty(ent.data, "data.weaponData.size")) {
    updateData["data.weaponData.size"] = "med";
  }
};

const _migrateAbilityTypes = function (ent, updateData) {
  if (ent.type !== "feat") return;

  if (getProperty(ent.data, "data.abilityType") == null) {
    updateData["data.abilityType"] = "none";
  }
  // Fix buggy value
  if (getProperty(ent.data, "data.abilityType") === "n/a") {
    updateData["data.abilityType"] = "none";
  }
};

const _migrateClassLevels = function (ent, updateData) {
  const level = getProperty(ent.data, "data.levels");
  if (typeof level === "number" && getProperty(ent.data, "data.level") == null) {
    updateData["data.level"] = level;
    updateData["data.-=levels"] = null;
  }
};

const _migrateSavingThrowTypes = function (ent, updateData) {
  if (
    getProperty(ent.data, "data.save.type") == null &&
    typeof getProperty(ent.data, "data.save.description") === "string"
  ) {
    const desc = getProperty(ent.data, "data.save.description");
    if (desc.match(/REF/i)) updateData["data.save.type"] = "ref";
    else if (desc.match(/FORT/i)) updateData["data.save.type"] = "fort";
    else if (desc.match(/WILL/i)) updateData["data.save.type"] = "will";
  }
};

const _migrateCR = function (ent, updateData) {
  // Migrate CR offset
  const crOffset = getProperty(ent.data, "data.crOffset");
  if (typeof crOffset === "number") {
    updateData["data.crOffset"] = crOffset.toString();
  }
};

const _migrateItemChanges = function (ent, updateData) {
  // Migrate changes
  const changes = getProperty(ent.data, "data.changes");
  if (changes != null && changes instanceof Array) {
    let newChanges = [];
    for (let c of changes) {
      if (c instanceof Array) {
        const nc = ItemChange.create(
          {
            formula: c[0],
            target: c[1],
            subTarget: c[2],
            modifier: c[3],
            value: c[4],
          },
          null
        );
        newChanges.push(nc.data);
      } else {
        const nc = ItemChange.create(c, null);
        newChanges.push(nc.data);
      }
    }
    updateData["data.changes"] = newChanges;
  }

  // Migrate context notes
  const notes = getProperty(ent.data, "data.contextNotes");
  if (notes != null && notes instanceof Array) {
    let newNotes = [];
    for (let n of notes) {
      if (n instanceof Array) {
        newNotes.push(
          mergeObject(ItemPF.defaultChange, { text: n[0], target: n[1], subTarget: n[2] }, { inplace: false })
        );
      } else {
        newNotes.push(n);
      }
    }
    updateData["data.contextNotes"] = newNotes;
  }
};

const _migrateTemplateSize = function (ent, updateData) {
  const measureSize = getProperty(ent.data, "data.measureTemplate.size");
  if (typeof measureSize === "number") {
    updateData["data.measureTemplate.size"] = measureSize.toString();
  }
};

const _migrateEquipmentSize = function (ent, updateData) {
  if (ent.type !== "equipment") return;

  const size = getProperty(ent.data, "data.size");
  if (!size) {
    updateData["data.size"] = "med";
  }
};

const _migrateTags = function (ent, updateData) {
  if (!["class"].includes(ent.type)) return;

  const tag = getProperty(ent.data, "data.tag");
  if (!tag && ent.data.name) {
    updateData["data.tag"] = createTag(ent.data.name);
  }
};

const _migrateSpellCosts = function (ent, updateData) {
  if (ent.type !== "spell") return;

  const spellPointCost = getProperty(ent.data, "data.spellPoints.cost");
  if (spellPointCost == null) {
    updateData["data.spellPoints.cost"] = "1 + @sl";
  }

  const slotCost = getProperty(ent.data, "data.slotCost");
  if (slotCost == null) {
    updateData["data.slotCost"] = 1;
  }
};

const _migrateLootEquip = function (ent, updateData) {
  if (ent.type === "loot" && !hasProperty(ent.data, "equipped")) {
    updateData["data.equipped"] = false;
  }
};

const _migrateUnchainedActionEconomy = function (ent, updateData) {
  // Determine existing data
  const curAction = getProperty(ent.data, "data.activation");
  const unchainedAction = getProperty(ent.data, "data.unchainedAction.activation");
  if (!curAction || (curAction && !curAction.type)) return;
  if (unchainedAction && unchainedAction.type) return;

  // Create unchained action economy data
  if (CONFIG.PF1.abilityActivationTypes_unchained[curAction.type] != null) {
    updateData["data.unchainedAction.activation.cost"] = curAction.cost;
    updateData["data.unchainedAction.activation.type"] = curAction.type;
  }
  if (["swift", "attack"].includes(curAction.type)) {
    updateData["data.unchainedAction.activation.cost"] = 1;
    updateData["data.unchainedAction.activation.type"] = "action";
  }
  if (curAction.type === "standard") {
    updateData["data.unchainedAction.activation.cost"] = 2;
    updateData["data.unchainedAction.activation.type"] = "action";
  }
  if (curAction.type === "full" || curAction.type === "round") {
    updateData["data.unchainedAction.activation.cost"] = 3 * (curAction.cost || 1);
    updateData["data.unchainedAction.activation.type"] = "action";
  }
  if (curAction.type === "immediate") {
    updateData["data.unchainedAction.activation.type"] = "reaction";
    updateData["data.unchainedAction.activation.cost"] = 1;
  }
};

const _migrateItemRange = function (ent, updateData) {
  // Set max range increment
  if (getProperty(ent.data, "data.range.maxIncrements") === undefined) {
    setProperty(ent.data, "data.range.maxIncrements", 1);
  }

  if (ent.type === "weapon" && getProperty(ent.data, "data.weaponData.maxRangeIncrements") === undefined) {
    setProperty(ent.data, "data.weaponData.maxRangeIncrements", 1);
  }
};

const _migrateItemLinks = function (ent, updateData) {
  if (["attack", "consumable"].includes(ent.type) && !hasProperty(ent.data, "data.links.charges")) {
    updateData["data.links.charges"] = [];
  }
};

const _migrateActorCR = function (ent, updateData) {
  // Migrate base CR
  const cr = getProperty(ent.data, "data.details.cr");
  if (typeof cr === "number") {
    updateData["data.details.cr.base"] = cr;
    updateData["data.details.cr.total"] = cr;
  } else if (cr == null) {
    updateData["data.details.cr.base"] = 1;
    updateData["data.details.cr.total"] = 1;
  }
};

const _migrateCMBAbility = function (ent, updateData) {
  const cmbAbl = getProperty(ent.data, "data.attributes.cmbAbility");
  if (cmbAbl == null) {
    updateData["data.attributes.cmbAbility"] = "str";
  }
};

const _migrateActorTokenVision = function (ent, updateData) {
  const vision = getProperty(ent.data, "data.attributes.vision");
  if (!vision) return;

  updateData["data.attributes.-=vision"] = null;
  updateData["token.flags.pf1.lowLightVision"] = vision.lowLight;
  if (!getProperty(ent.data, "token.brightSight")) updateData["token.brightSight"] = vision.darkvision;
};

const _migrateActorSpellbookUsage = function (ent, updateData) {
  const spellbookUsage = getProperty(ent.data, "data.attributes.spells.usedSpellbooks");

  if (spellbookUsage == null) {
    let usedSpellbooks = [];
    if (!ent.items) return;
    const spells = ent.items.filter((o) => o.type === "spell");
    for (let o of spells) {
      const sb = o.data.data.spellbook;
      if (sb && !usedSpellbooks.includes(sb)) {
        usedSpellbooks.push(sb);
      }
    }
    updateData["data.attributes.spells.usedSpellbooks"] = usedSpellbooks;
  }
};

const _migrateActorNullValues = function (ent, updateData) {
  // Prepare test data
  const entries = { "data.attributes.energyDrain": getProperty(ent.data, "data.attributes.energyDrain") };
  for (let [k, a] of Object.entries(getProperty(ent.data, "data.abilities") || {})) {
    entries[`data.abilities.${k}.damage`] = a.damage;
    entries[`data.abilities.${k}.drain`] = a.drain;
    entries[`data.abilities.${k}.penalty`] = a.penalty;
  }

  // Set null values to 0
  for (let [k, v] of Object.entries(entries)) {
    if (v === null) {
      updateData[k] = 0;
    }
  }
};

const _migrateActorSpellbookDomainSlots = function (ent, updateData) {
  const spellbooks = getProperty(ent.data, "data.attributes.spells.spellbooks") || {};

  for (let [k, b] of Object.entries(spellbooks)) {
    if (b.domainSlotValue !== undefined) continue;
    const key = `data.attributes.spells.spellbooks.${k}.domainSlotValue`;
    updateData[key] = 1;
  }
};

const _migrateActorStatures = function (ent, updateData) {
  const stature = getProperty(ent.data, "data.traits.stature");

  if (stature === undefined) {
    updateData["data.traits.stature"] = "tall";
  }
};

const _migrateActorInitAbility = function (ent, updateData) {
  const abl = getProperty(ent.data, "data.attributes.init.ability");

  if (abl === undefined) {
    updateData["data.attributes.init.ability"] = "dex";
  }
};

/* -------------------------------------------- */

const migrateTokenVision = function (token, updateData) {
  if (!token.actor) return;

  setProperty(updateData, "flags.pf1.lowLightVision", getProperty(token.actor.data, "token.flags.pf1.lowLightVision"));
  setProperty(updateData, "brightSight", getProperty(token.actor.data, "token.brightSight"));
};

/* -------------------------------------------- */

/**
 * Migrate from a string spell casting time like "1 Bonus Action" to separate fields for activation type and numeric cost
 * @private
 */
const _migrateCastTime = function (item, updateData) {
  const value = getProperty(item.data, "time.value");
  if (!value) return;
  const ATS = invertObject(CONFIG.pf1.abilityActivationTypes);
  let match = value.match(/([\d]+\s)?([\w\s]+)/);
  if (!match) return;
  let type = ATS[match[2]] || "none";
  let cost = match[1] ? Number(match[1]) : 0;
  if (type === "none") cost = 0;
  updateData["data.activation"] = { type, cost };
};

/* -------------------------------------------- */
/*  General Migrations                          */
/* -------------------------------------------- */

/**
 * Migrate from a string based damage formula like "2d6 + 4 + 1d4" and a single string damage type like "slash" to
 * separated damage parts with associated damage type per part.
 * @private
 */
const _migrateDamage = function (item, updateData) {
  // Regular Damage
  let damage = item.data.damage;
  if (damage && damage.value) {
    let type = item.data.damageType ? item.data.damageType.value : "";
    const parts = damage.value
      .split("+")
      .map((s) => s.trim())
      .map((p) => [p, type || null]);
    if (item.type === "weapon" && parts.length) parts[0][0] += " + @mod";
    updateData["data.damage.parts"] = parts;
    updateData["data.damage.-=value"] = null;
  }
};

/* -------------------------------------------- */

/**
 * Migrate from a string duration field like "1 Minute" to separate fields for duration units and numeric value
 * @private
 */
const _migrateDuration = function (item, updateData) {
  const TIME = invertObject(CONFIG.pf1.timePeriods);
  const dur = item.data.duration;
  if (dur && dur.value && !dur.units) {
    let match = dur.value.match(/([\d]+\s)?([\w\s]+)/);
    if (!match) return;
    let units = TIME[match[2]] || "inst";
    let value = units === "inst" ? "" : Number(match[1]) || "";
    updateData["data.duration"] = { units, value };
  }
};

/* -------------------------------------------- */

/**
 * Migrate from a string range field like "150 ft." to separate fields for units and numeric distance value
 * @private
 */
const _migrateRange = function (item, updateData) {
  if (updateData["data.range"]) return;
  const range = item.data.range;
  if (range && range.value && !range.units) {
    let match = range.value.match(/([\d/]+)?(?:[\s]+)?([\w\s]+)?/);
    if (!match) return;
    let units = "none";
    if (/ft/i.test(match[2])) units = "ft";
    else if (/mi/i.test(match[2])) units = "mi";
    else if (/touch/i.test(match[2])) units = "touch";
    updateData["data.range.units"] = units;

    // Range value
    if (match[1]) {
      let value = match[1].split("/").map(Number);
      updateData["data.range.value"] = value[0];
      if (value[1]) updateData["data.range.long"] = value[1];
    }
  }
};

/* -------------------------------------------- */

const _migrateRarity = function (item, updateData) {
  const rar = item.data.rarity;
  if (rar instanceof Object && !rar.value) updateData["data.rarity"] = "Common";
  else if (typeof rar === "string" && rar === "") updateData["data.rarity"] = "Common";
};

/* -------------------------------------------- */

/**
 * A general migration to remove all fields from the data model which are flagged with a _deprecated tag
 * @private
 */
const _migrateRemoveDeprecated = function (ent, updateData, toFlatten) {
  const flat = flattenObject(ent.data);

  // Deprecate entire objects
  const toDeprecate = Object.entries(flat)
    .filter((e) => e[0].endsWith("_deprecated") && e[1] === true)
    .map((e) => {
      let parent = e[0].split(".");
      parent.pop();
      return parent.join(".");
    });
  for (let k of toDeprecate) {
    let parts = k.split(".");
    parts[parts.length - 1] = "-=" + parts[parts.length - 1];
    updateData[`data.${parts.join(".")}`] = null;
  }

  // Deprecate types and labels
  for (let [k, v] of Object.entries(flat)) {
    let parts = k.split(".");
    parts.pop();

    // Skip any fields which have already been touched by other migrations
    if (toDeprecate.some((f) => k.startsWith(f))) continue;
    if (toFlatten.some((f) => k.startsWith(f))) continue;
    if (Object.prototype.hasOwnProperty.call(updateData, `data.${k}`)) continue;

    // Remove the data type field
    const dtypes = ["Number", "String", "Boolean", "Array", "Object"];
    if (k.endsWith("type") && dtypes.includes(v)) {
      updateData[`data.${k.replace(".type", ".-=type")}`] = null;
    }

    // Remove string label
    else if (k.endsWith("label")) {
      updateData[`data.${k.replace(".label", ".-=label")}`] = null;
    }
  }
};

/* -------------------------------------------- */

/**
 * Migrate from a target string like "15 ft. Radius" to a more explicit data model with a value, units, and type
 * @private
 */
const _migrateTarget = function (item, updateData) {
  const target = item.data.target;
  if (target.value && !Number.isNumeric(target.value)) {
    // Target Type
    let type = null;
    for (let t of Object.keys(CONFIG.pf1.targetTypes)) {
      let rgx = new RegExp(t, "i");
      if (rgx.test(target.value)) {
        type = t;
        continue;
      }
    }

    // Target Units
    let units = null;
    if (/ft/i.test(target.value)) units = "ft";
    else if (/mi/i.test(target.value)) units = "mi";
    else if (/touch/i.test(target.value)) units = "touch";

    // Target Value
    let value = null;
    let match = target.value.match(/([\d]+)([\w\s]+)?/);
    if (match) value = Number(match[1]);
    else if (/one/i.test(target.value)) value = 1;
    updateData["data.target"] = { type, units, value };
  }
};

/* -------------------------------------------- */

/**
 * Migrate from string based components like "V,S,M" to boolean flags for each component
 * Move concentration and ritual flags into the components object
 * @private
 */
const _migrateSpellComponents = function (item, updateData) {
  const components = item.data.components;
  if (!components.value) return;
  let comps = components.value.toUpperCase().replace(/\s/g, "").split(",");
  updateData["data.components"] = {
    value: "",
    verbal: comps.includes("V"),
    somatic: comps.includes("M"),
    material: comps.includes("S"),
    concentration: item.data.concentration.value === true,
    ritual: item.data.ritual.value === true,
  };
};

/* -------------------------------------------- */

/**
 * Migrate from a simple object with save.value to an expanded object where the DC is also configured
 * @private
 */
const _migrateSpellAction = function (item, updateData) {
  // Set default action type for spells
  if (item.data.spellType) {
    updateData["data.actionType"] =
      {
        attack: "rsak",
        save: "save",
        heal: "heal",
        utility: "util",
      }[item.data.spellType.value] || "util";
  }

  // Spell saving throw
  const save = item.data.save;
  if (!save.value) return;
  updateData["data.save"] = {
    ability: save.value,
    dc: null,
  };
  updateData["data.save.-=value"] = null;
};

/* -------------------------------------------- */

/**
 * Migrate spell preparation data to the new preparation object
 * @private
 */
const _migrateSpellPreparation = function (item, updateData) {
  const prep = item.data.preparation;
  if (prep && !prep.mode) {
    updateData["data.preparation.mode"] = "prepared";
    updateData["data.preparation.prepared"] = item.data.prepared ? Boolean(item.data.prepared.value) : false;
  }
};

/* -------------------------------------------- */

/**
 * Migrate from a string based weapon properties like "Heavy, Two-Handed" to an object of boolean flags
 * @private
 */
const _migrateWeaponProperties = function (item, updateData) {
  // Set default activation mode for weapons
  updateData["data.activation"] = { type: "action", cost: 1 };

  // Set default action type for weapons
  updateData["data.actionType"] =
    {
      simpleM: "mwak",
      simpleR: "rwak",
      martialM: "mwak",
      martialR: "rwak",
      natural: "mwak",
      improv: "mwak",
      ammo: "rwak",
    }[item.data.weaponType.value] || "mwak";

  // Set default melee weapon range
  if (updateData["data.actionType"] === "mwak") {
    updateData["data.range"] = {
      value: updateData["data.properties.rch"] ? 10 : 5,
      units: "ft",
    };
  }

  // Map weapon property strings to boolean flags
  const props = item.data.properties;
  if (props.value) {
    const labels = invertObject(CONFIG.pf1.weaponProperties);
    for (let k of props.value.split(",").map((p) => p.trim())) {
      if (labels[k]) updateData[`data.properties.${labels[k]}`] = true;
    }
    updateData["data.properties.-=value"] = null;
  }
};
