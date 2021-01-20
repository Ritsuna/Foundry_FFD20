import { ActorSheetFFd20NPC } from "./npc.js";
import { createTabs } from "../../lib.js";

export class ActorSheetFFd20NPCLoot extends ActorSheetFFd20NPC {
  /**
   * Define default rendering options for the NPC sheet
   * @return {Object}
   */
  static get defaultOptions() {
    return mergeObject(super.defaultOptions, {
      classes: ["ffd20lnrw", "sheet", "actor", "npc", "loot"],
      width: 620,
      height: 420,
    });
  }

  get template() {
    return "systems/ffd20lnrw/templates/actors/npc-sheet-loot.hbs";
  }

  get currentPrimaryTab() {
    return "inventory";
  }

  async getData() {
    const data = await super.getData();

    data.isLootSheet = true;
    data.sellMultiplier = this.actor.getFlag("ffd20lnrw", "sellMultiplier");

    // Get total value
    const gilValue = this.calculateTotalItemValue() + this.actor.mergeCurrency();
    const sellValue = this.calculateSellItemValue();
    data.totalValue = {
      gil: Math.max(0, Math.floor(gilValue)),
    };
    data.sellValue = {
      gil: Math.max(0, Math.floor(sellValue)),
    };

    // Set labels
    if (!data.labels) data.labels = {};
    data.labels.totalValue = game.i18n
      .localize("ffd20lnrw.ItemContainerTotalValue")
      .format(data.totalValue.gp, data.totalValue.sp, data.totalValue.cp);
    data.labels.sellValue = game.i18n
      .localize("ffd20lnrw.ItemContainerSellValue")
      .format(data.sellValue.gp, data.sellValue.sp, data.sellValue.cp);

    // Alter inventory columns
    for (let inv of Object.values(data.inventory)) {
      inv.hasActions = false;
      inv.canEquip = false;
      inv.showValue = true;
    }

    return data;
  }

  createTabs(html) {
    const tabGroups = {
      primary: {
        inventory: {},
      },
    };
    this._tabsAlt = createTabs.call(this, html, tabGroups, this._tabsAlt);
  }
}
