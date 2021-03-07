export class ExperienceConfig extends FormApplication {
  constructor(object, options) {
    super(object || ExperienceConfig.defaultSettings, options);

    this._init = false;
  }

  /** Collect data for the template. @override */
  async getData() {
    const data = {};

    if (!this._init) {
      const settings = await game.settings.get("FFD20", "experienceConfig");
      this._settings = mergeObject(this.constructor.defaultSettings, settings);
      this._init = true;
    }
    data.settings = this._settings;

    // Custom experience track booleans
    data.hasCustomFormula = data.settings.track === "customFormula";

    return data;
  }

  /** @override */
  static get defaultOptions() {
    return mergeObject(super.defaultOptions, {
      title: game.i18n.localize("FFD20.ExperienceConfigName"),
      id: "experience-config",
      template: "systems/ffd20/templates/settings/experience.hbs",
      width: 560,
      height: "auto",
    });
  }

  static get defaultSettings() {
    return {
      track: "medium",
      disableExperienceTracking: false,
      custom: {
        formula: "",
      },
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

  _onChangeInput(event) {
    super._onChangeInput(event);

    this._updateApplicationSettings();
  }

  _updateApplicationSettings() {
    // Update settings and re-render
    this._settings = mergeObject(this._settings, expandObject(this._getSubmitData()));
    this.render();
  }

  /**
   * This method is called upon form submission after form data is validated.
   * @override
   */
  async _updateObject(event, formData) {
    const settings = expandObject(formData);
    // Some mild sanitation for the numeric values.
    await game.settings.set("FFD20", "experienceConfig", settings);
    ui.notifications.info("Updated Pathfinder experience configuration.");
  }
}
