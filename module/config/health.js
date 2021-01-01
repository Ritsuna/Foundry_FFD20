export class HealthConfig extends FormApplication {
  constructor(object, options) {
    super(object || HealthConfig.defaultSettings, options);
  }

  /** Collect data for the template. @override */
  async getData() {
    let settings = await game.settings.get("pf1", "healthConfig");
    settings = mergeObject(HealthConfig.defaultSettings, settings);
    return settings;
  }

  /** @override */
  static get defaultOptions() {
    return mergeObject(super.defaultOptions, {
      title: game.i18n.localize("SETTINGS.pf1HealthConfigName"),
      id: "health-config",
      template: "systems/pf1/templates/settings/health.hbs",
      width: 480,
      height: "auto",
      tabs: [
        {
          navSelector: ".tabs",
          contentSelector: ".tabbed",
          initial: "base",
        },
      ],
    });
  }

  static get defaultSettings() {
    return {
      hitdice: {
        PC: { auto: false, rate: 0.5, maximized: 1 },
        NPC: { auto: false, rate: 0.5, maximized: 0 },
        Racial: { auto: false, rate: 0.5, maximized: 0 },
      },
      hitdieOptions: ["Compute", "Rate", "Maximized"],
      rounding: "up",
      continuity: "discrete",
      variants: {
        pc: { useWoundsAndVigor: false },
        npc: { useWoundsAndVigor: false },
      },
    };
  }

  /**
   * Activate the default set of listeners for the Entity sheet These listeners handle basic stuff like form submission or updating images.
   * @override
   */
  activateListeners(html) {
    super.activateListeners(html);
    html.find('button[name="reset"]').click(this._onReset.bind(this));
    html.find('button[name="submit"]').click(this._onSubmit.bind(this));
  }

  /**
   * Handle button click to reset default settings
   * @param event {Event}   The initial button click event
   * @private
   */
  async _onReset(event) {
    event.preventDefault();
    await game.settings.set("pf1", "healthConfig", HealthConfig.defaultSettings);
    ui.notifications.info(`Reset Pathfinder health configuration.`);
    return this.render();
  }

  _onSubmit(event) {
    super._onSubmit(event);
  }

  /**
   * This method is called upon form submission after form data is validated.
   * @override
   */
  async _updateObject(event, formData) {
    const settings = expandObject(formData);
    // Some mild sanitation for the numeric values.
    for (const hd of Object.values(settings.hitdice)) {
      hd.rate = Math.max(0, Math.min(hd.rate, 100));
      hd.maximized = Math.max(0, Math.min(Math.floor(hd.maximized), 100));
    }
    await game.settings.set("pf1", "healthConfig", settings);
    ui.notifications.info("Updated Pathfinder health configuration.");
  }
}
