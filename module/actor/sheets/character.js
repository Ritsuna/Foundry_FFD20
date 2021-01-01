import { ActorSheetPF } from "./base.js";

/**
 * An Actor sheet for player character type actors in the PF system.
 * Extends the base ActorSheetPF class.
 * @type {ActorSheetPF}
 */
export class ActorSheetPFCharacter extends ActorSheetPF {
  /**
   * Define default rendering options for the NPC sheet
   * @return {Object}
   */
  static get defaultOptions() {
    return mergeObject(super.defaultOptions, {
      classes: ["pf1", "sheet", "actor", "character"],
      width: 800,
      height: 840,
    });
  }

  // static get name() {
  //   return game.i18n.localize("PF1.ActorSheetPFCharacter");
  // }

  /* -------------------------------------------- */
  /*  Rendering                                   */
  /* -------------------------------------------- */

  /**
   * Get the correct HTML template path to use for rendering this particular sheet
   * @type {String}
   */
  get template() {
    if (!game.user.isGM && this.actor.limited) return "systems/pf1/templates/actors/limited-sheet.hbs";
    return "systems/pf1/templates/actors/character-sheet.hbs";
  }

  /* -------------------------------------------- */

  /**
   * Add some extra data when rendering the sheet to reduce the amount of logic required within the template.
   */
  async getData() {
    const data = await super.getData();
    const xpSettings = game.settings.get("pf1", "experienceConfig");

    // Experience Tracking
    data["disableExperience"] = xpSettings.disableExperienceTracking;

    data.hasClasses = this.actor.items.filter((o) => o.type === "class").length > 0;

    // Return data for rendering
    return data;
  }

  /* -------------------------------------------- */
  /*  Event Listeners and Handlers
  /* -------------------------------------------- */

  /**
   * Activate event listeners using the prepared sheet HTML
   * @param html {HTML}   The prepared HTML object ready to be rendered into the DOM
   */
  activateListeners(html) {
    super.activateListeners(html);
    if (!this.options.editable) return;

    // Inventory Functions
    html.find(".currency-convert").click(this._onConvertCurrency.bind(this));

    // Spell Preparation
    html.find(".toggle-prepared").click(this._onPrepareItem.bind(this));
  }

  /* -------------------------------------------- */

  /**
   * Handle toggling the prepared status of an Owned Item within the Actor
   * @param {Event} event   The triggering click event
   * @private
   */
  _onPrepareItem(event) {
    event.preventDefault();
    const itemId = event.currentTarget.closest(".item").dataset.itemId;
    const item = this.actor.getOwnedItem(itemId);
    return item.update({ "data.preparation.prepared": !item.data.data.preparation.prepared });
  }

  /* -------------------------------------------- */

  async _onConvertCurrency(event) {
    event.preventDefault();
    const curr = duplicate(this.actor.data.data.currency);
    const convert = {
      cp: { into: "sp", each: 10 },
      sp: { into: "gp", each: 10 },
      gp: { into: "pp", each: 10 },
    };
    for (let [c, t] of Object.entries(convert)) {
      let change = Math.floor(curr[c] / t.each);
      curr[c] -= change * t.each;
      curr[t.into] += change;
    }
    return this.actor.update({ "data.currency": curr });
  }
}
