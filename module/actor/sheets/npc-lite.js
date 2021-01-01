import { ActorSheetPFNPC } from "./npc.js";

export class ActorSheetPFNPCLite extends ActorSheetPFNPC {
  /**
   * Define default rendering options for the NPC sheet
   * @return {Object}
   */
  static get defaultOptions() {
    return mergeObject(super.defaultOptions, {
      classes: ["pf1", "sheet", "actor", "npc", "lite"],
      width: 440,
      height: "auto",
    });
  }

  get template() {
    if (!game.user.isGM && this.actor.limited) return "systems/pf1/templates/actors/limited-sheet.hbs";
    return "systems/pf1/templates/actors/npc-sheet-lite.hbs";
  }

  // static get name() {
  //   return game.i18n.localize("PF1.ActorSheetPFNPCLite");
  // }

  _prepareItems(data) {
    const [attacks] = data.items.reduce(
      (arr, item) => {
        item.img = item.img || DEFAULT_TOKEN;
        item.hasUses = item.data.uses && item.data.uses.max > 0;
        item.isCharged = ["day", "week", "charges"].includes(getProperty(item, "data.uses.per"));

        const itemCharges = getProperty(item, "data.uses.value") != null ? getProperty(item, "data.uses.value") : 1;

        if (item.type === "attack") arr[0].push(item);
        return arr;
      },
      [[]]
    );

    const attackSections = {
      all: {
        label: game.i18n.localize("PF1.Attacks"),
        items: [],
        canCreate: true,
        initial: true,
        showTypes: true,
        dataset: { type: "attack", "attack-type": "weapon" },
      },
    };

    for (let a of attacks) {
      attackSections.all.items.push(a);
    }

    data.attacks = attackSections;
  }
}
