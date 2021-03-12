export class TooltipWorldConfig extends FormApplication {
  constructor(object, options) {
    super(object || TooltipWorldConfig.defaultSettings, options);

    this._cachedData = null;
  }

  getData() {
    const result = {};

    // Get settings
    let settings = game.settings.get("ffd20", "tooltipWorldConfig");
    settings = mergeObject(this.constructor.defaultSettings, settings);
    result.data = settings;

    return result;
  }

  static get defaultOptions() {
    return mergeObject(super.defaultOptions, {
      title: game.i18n.localize("FFD20.TooltipWorldConfigName"),
      id: "tooltip-world-config",
      template: "systems/ffd20/templates/settings/tooltip_world.hbs",
      width: 720,
      height: "auto",
    });
  }

  static get defaultSettings() {
    return {
      disable: false,
      portrait: {
        hide: false,
      },
      hideHeld: true,
      hideArmor: true,
      hideBuffs: true,
      hideConditions: false,
      hideClothing: true,
      hideActorName: true,
      hideActorNameReplacement: "???",
    };
  }

  activateListeners(html) {
    html.find('button[name="submit"]').click(this._onSubmit.bind(this));
    html.find('button[name="reset"]').click(this._onReset.bind(this));
  }

  async _onReset(event) {
    event.preventDefault();
    await game.settings.set("ffd20", "tooltipWorldConfig", this.constructor.defaultSettings);
    ui.notifications.info(game.i18n.localize("FFD20.TooltipConfigResetInfo"));
    return this.render();
  }

  async _updateObject(event, formData) {
    const settings = expandObject(formData);

    await game.settings.set("ffd20", "tooltipWorldConfig", settings);
    ui.notifications.info(game.i18n.localize("FFD20.TooltipConfigUpdateInfo"));
  }
}
