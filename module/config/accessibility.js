export class AccessibilityConfig extends FormApplication {
  constructor(object, options) {
    super(object || AccessibilityConfig.defaultSettings, options);

    this._init = false;
  }

  /** Collect data for the template. @override */
  async getData() {
    const data = {};

    if (!this._init) {
      const settings = await game.settings.get("pf1", "accessibilityConfig");
      this._settings = mergeObject(this.constructor.defaultSettings, settings);
      this._init = true;
    }
    data.settings = this._settings;

    return data;
  }

  /** @override */
  static get defaultOptions() {
    return mergeObject(super.defaultOptions, {
      title: game.i18n.localize("PF1.AccessibilityConfigName"),
      id: "accessibility-config",
      template: "systems/pf1/templates/settings/accessibility.hbs",
      width: 560,
      height: "auto",
    });
  }

  static get defaultSettings() {
    return {
      fontSize: 0,
    };
  }

  /**
   * Activate the default set of listeners for the Entity sheet These listeners handle basic stuff like form submission or updating images.
   * @override
   */
  activateListeners(html) {
    super.activateListeners(html);
    html.find('button[type="submit"]').click(this._onButtonSubmit.bind(this));
  }

  _onButtonSubmit(event) {
    this._onSubmit(event);
  }

  /**
   * This method is called upon form submission after form data is validated.
   * @override
   */
  async _updateObject(event, formData) {
    const settings = expandObject(formData);
    // Some mild sanitation for the numeric values.
    await game.settings.set("pf1", "accessibilityConfig", settings);
    ui.notifications.info("Updated Pathfinder accessibility configuration.");
  }
}
