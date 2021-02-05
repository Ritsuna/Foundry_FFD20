import { convertDistance } from "../lib.js";

export const registerHandlebarsHelpers = function () {
  Handlebars.registerHelper("concat", (a, b) => {
    if (typeof a === "number") a = a.toString();
    if (typeof b === "number") b = b.toString();
    return a + b;
  });

  /**
   * Render a MCE editor container with an optional toggle button
   */
  Handlebars.registerHelper("roll-editor", function (options) {
    // Find item and/or actor
    const _id = (getProperty(options, "data.root.entity") || getProperty(options, "data.root.actor") || {})._id;
    let actor = null,
      item = null;
    const actors = [...Array.from(game.actors.entities), ...Array.from(game.actors.tokens)];
    const items = [...Array.from(game.items.entities)];
    if (_id != null) {
      // Find actor or item on actor
      for (let a of actors) {
        if (a._id === _id) {
          actor = a;
        } else {
          if (item == null) item = a.items.find((o) => o._id === _id);
        }
      }
      // Find item
      if (item == null) {
        for (let i of items) {
          if (i._id === _id) item = i;
        }
      }
    }
    const rollData = item != null ? item.getRollData() : actor != null ? actor.getRollData() : {};

    // Create editor
    const target = options.hash["target"];
    if (!target) throw new Error("You must define the name of a target field.");

    // Enrich the content
    const owner = Boolean(options.hash["owner"]);
    const content = TextEditor.enrichHTML(options.hash["content"] || "", {
      secrets: owner,
      entities: true,
      rollData: rollData,
    });

    // Construct the HTML
    let editor = $(`<div class="editor"><div class="editor-content" data-edit="${target}">${content}</div></div>`);

    // Append edit button
    const button = Boolean(options.hash["button"]);
    const editable = Boolean(options.hash["editable"]);
    if (button && editable) editor.append($('<a class="editor-edit"><i class="fas fa-edit"></i></a>'));
    return new Handlebars.SafeString(editor[0].outerHTML);
  });

  Handlebars.registerHelper("convertDistance", (value) => (Number.isFinite(value) ? convertDistance(value)[0] : value));

  Handlebars.registerHelper("itemRange", (item, rollData) => {
    // Itemffd20lnrw.range is not accessible here and is thus largely duplicated here

    let range = getProperty(item, "data.range.value");
    const rangeType = getProperty(item, "data.range.units");

    if (rangeType == null) return null;

    const toFeet = () => {
      switch (rangeType) {
        case "melee":
        case "touch":
          return getProperty(rollData, "range.melee") || 0;
        case "reach":
          return getProperty(rollData, "range.reach") || 0;
        case "close":
          return new Roll("25 + floor(@cl / 2) * 5", item).roll().total;
        case "medium":
          return new Roll("100 + @cl * 10", rollData).roll().total;
        case "long":
          return new Roll("400 + @cl * 40", rollData).roll().total;
        case "mi":
          return range * 5280; // TODO: Should remain as miles for shortness
        case "ft":
          return new Roll(range, rollData)?.roll()?.total ?? range;
        default:
          return range;
      }
    };

    const ft = toFeet();
    if (ft) {
      const rv = convertDistance(ft);
      return `${rv[0]} ${rv[1]}`;
    }
    return null;
  });

  Handlebars.registerHelper("itemDamage", (item, rollData) => {
    if (!item.hasDamage) return null; // It was a mistake to call this

    try {
      // Get damage parts
      const parts = [...(item.data.damage.parts ?? []), ...(item.data.damage.nonCritParts ?? [])].map(
        (p) =>
          // `${p[0]})[${p[1]}]` // includes damage type
          p[0] // Discard damage type as it makes the output barely readable.
      );
      let hasMore = item.data.damage.critParts?.length > 0;

      const ablMod = getProperty(rollData, `abilities.${item.data.ability.damage}.mod`), // `
        ablMult = item.data.ability.damageMult;

      const rv = [],
        cutOff = 1;
      // TODO: Make this cut based on actual string length instead of part count. Or push adjustment to handlebars.
      //slice(0, cutOff)
      parts.forEach((r) => rv.push(new Roll(r, rollData).formula));
      const cutParts = []; // parts.length > cutOff ? parts.slice(cutOff - 1) : [];

      // Include ability score only if the string isn't too long yet
      if (ablMod != null && cutParts.length === 0)
        rv.push(new Roll("floor(@mod * @mult)", { mod: ablMod, mult: ablMult }).roll().total);

      // Include enhancement bonus
      const enhBonus = item.data.enh ?? 0;
      if (enhBonus && cutParts.length === 0) {
        rv.push(enhBonus);
      }

      if (hasMore) rv.push("…"); // Too much detail or too complicated for display

      const out = rv.join("+").replace(/\s+/g, ""); // Combine and remove whitespace
      return out;
    } catch {
      // ignore errors, they should be handled elsewhere
    }

    return null;
  });

  Handlebars.registerHelper("itemAttacks", (item) => 1 + item.data.attackParts.length);

  // Fetches ability mod value based on ability key.
  // Avoids contaminating rollData or item data with excess strings.
  Handlebars.registerHelper("abilityMod", (abl, rollData, multiplier) => {
    if (multiplier == null) multiplier = 1;
    return Math.floor(getProperty(rollData, `abilities.${abl}.mod`) * multiplier);
  });

  // Shorten string with ellipsis
  // Favor cutting off near specific symbol within margin of error
  Handlebars.registerHelper("ellipsis", (value, desiredLength, searchStartOffset = -4, searchEndOffset = 2) => {
    const delimiters = /(\s|\+|,)/g;
    // Process only if it's too long
    if (value?.length > desiredLength + searchEndOffset) {
      let cut = 0;

      const end = Math.min(value.length - 1, desiredLength + searchEndOffset),
        start = Math.max(0, desiredLength + searchStartOffset);

      // Find nice cutting position
      for (let i = end; i > start; i--) {
        if (value[i].match(delimiters)?.length > 0) {
          cut = i + 1;
          break;
        }
      }
      if (cut == 0) cut = desiredLength; // No better position found, just cut it.

      return value.substring(0, cut) + "…";
    }
    return value;
  });
};
