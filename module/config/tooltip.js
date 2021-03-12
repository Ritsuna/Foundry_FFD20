import { TooltipWorldConfig } from "./tooltip_world.js";

export class TooltipConfig extends FormApplication {
  constructor(object, options) {
    super(object || TooltipConfig.defaultSettings, options);

    this._cachedData = null;
  }

  getData() {
    if (this._cachedData) return this._cachedData;

    const canvasRect = canvas.app.view.getBoundingClientRect();
    const result = {
      screen: {
        width: canvasRect.width,
        height: canvasRect.height,
        halfWidth: Math.floor(canvasRect.width / 2),
        halfHeight: Math.floor(canvasRect.height / 2),
      },
      isGM: game.user.isGM,
    };

    // Prepare preview data
    {
      const p = {
        width: 320,
        height: 320,
        tooltip: {
          width: 80,
          height: 48,
        },
      };

      const r1 = result.screen.width / result.screen.height;
      const r2 = result.screen.height / result.screen.width;

      if (r1 > r2) {
        p.height = Math.ceil(p.height * r2);
      } else if (r2 > r1) {
        p.width = Math.ceil(p.width * r1);
      }

      result.preview = p;
    }

    // Get settings
    let settings = game.settings.get("ffd20", "tooltipConfig");
    settings = mergeObject(this.constructor.defaultSettings, settings);
    result.data = settings;

    // Get hide key
    result.hideKey = game.i18n.localize("FFD20.Key_Control");

    this._cachedData = result;
    return result;
  }

  static get defaultOptions() {
    return mergeObject(super.defaultOptions, {
      title: game.i18n.localize("FFD20.TooltipConfigName"),
      id: "tooltip-config",
      template: "systems/ffd20/templates/settings/tooltip.hbs",
      width: 720,
      height: "auto",
    });
  }

  static get defaultSettings() {
    return {
      disable: false,
      anchor: {
        x: 1,
        y: 1,
      },
      offset: {
        x: 0,
        y: 0,
      },
      onMouse: false,
      portrait: {
        hide: false,
        maxSize: {
          width: 280,
          height: 280,
        },
      },
      hideWithoutKey: false,
    };
  }

  activateListeners(html) {
    html.find(".immediate-change").change(this._handleImmediateChange.bind(this));

    html.find("button.world-settings").click(this._openWorldSettings.bind(this));

    html.find('button[name="submit"]').click(this._onSubmit.bind(this));
    html.find('button[name="reset"]').click(this._onReset.bind(this));
  }

  _handleImmediateChange(event) {
    const el = event.currentTarget;
    const key = el.name;
    if (!key) return;

    let value;
    if (el.tagName.toUpperCase() === "INPUT") {
      value = el.value;
      if (el.type === "checkbox") value = el.checked === true ? true : false;
    } else {
      value = el.innerHTML;
    }
    if (el.dataset?.dtype === "Boolean") value = Boolean(value);
    else if (el.dataset?.dtype === "Number") value = parseFloat(value);

    setProperty(this._cachedData, `data.${key}`, value);
    this.render();
  }

  _openWorldSettings(event) {
    if (!game.user.isGM) {
      ui.notifications.error("FFD20.ErrorGenericPermission");
      return;
    }

    new TooltipWorldConfig().render(true);
  }

  async _onReset(event) {
    event.preventDefault();
    await game.settings.set("ffd20", "tooltipConfig", this.constructor.defaultSettings);
    this._cachedData = null;
    ui.notifications.info(game.i18n.localize("FFD20.TooltipConfigResetInfo"));
    return this.render();
  }

  async _updateObject(event, formData) {
    const settings = expandObject(formData);

    await game.settings.set("ffd20", "tooltipConfig", settings);
    ui.notifications.info(game.i18n.localize("FFD20.TooltipConfigUpdateInfo"));
  }
}
