import { CompendiumBrowser } from "../apps/compendium-browser.js";

export class CompendiumDirectoryFFD20 extends CompendiumDirectory {
  static get defaultOptions() {
    return mergeObject(super.defaultOptions, {
      template: "systems/ffd20/templates/sidebar/compendium.hbs",
    });
  }

  activateListeners(html) {
    super.activateListeners(html);

    html.find(".compendium-footer .compendium.spells").click((e) => this._onBrowseCompendium(e, "spells"));
    html.find(".compendium-footer .compendium.items").click((e) => this._onBrowseCompendium(e, "items"));
    html.find(".compendium-footer .compendium.bestiary").click((e) => this._onBrowseCompendium(e, "bestiary"));
    html.find(".compendium-footer .compendium.feats").click((e) => this._onBrowseCompendium(e, "feats"));
    html.find(".compendium-footer .compendium.classes").click((e) => this._onBrowseCompendium(e, "classes"));
    html.find(".compendium-footer .compendium.races").click((e) => this._onBrowseCompendium(e, "races"));
  }

  _onBrowseCompendium(event, type) {
    event.preventDefault();

    if (game.FFD20.isMigrating) return ui.notifications.warn(game.i18n.localize("FFD20.Migration.Ongoing"));

    game.FFD20.compendiums[type]._render(true);
  }
}
