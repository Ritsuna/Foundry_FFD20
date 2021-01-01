import { CompendiumBrowser } from "../apps/compendium-browser.js";

export class CompendiumDirectoryPF extends CompendiumDirectory {
  static get defaultOptions() {
    return mergeObject(super.defaultOptions, {
      template: "systems/pf1/templates/sidebar/compendium.hbs",
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

    game.pf1.compendiums[type]._render(true);
  }
}
