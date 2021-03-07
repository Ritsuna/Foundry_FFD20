import { HealthConfig } from "./config/health.js";
import { ExperienceConfig } from "./config/experience.js";
import { AccessibilityConfig } from "./config/accessibility.js";
import { TooltipConfig } from "./config/tooltip.js";
import { TooltipWorldConfig } from "./config/tooltip_world.js";
import { CompendiumBrowser } from "./apps/compendium-browser.js";

export const registerSystemSettings = function () {
  /**
   * Track the system version upon which point a migration was last applied
   */
  game.settings.register("FFD20", "systemMigrationVersion", {
    name: "System Migration Version",
    scope: "world",
    config: false,
    type: String,
    default: "0.0.0",
  });
  /**
   * Track when the last changelog was shown
   */
  game.settings.register("FFD20", "changelogVersion", {
    name: "Changelog Version",
    scope: "client",
    config: false,
    type: String,
    default: "0.1.0",
  });
  game.settings.register("FFD20", "dontShowChangelog", {
    name: "Don't Automatically Show Changelog",
    scope: "client",
    config: false,
    type: Boolean,
    default: false,
  });

  // Health configuration
  game.settings.registerMenu("FFD20", "healthConfig", {
    name: "SETTINGS.FFD20HealthConfigName",
    label: "SETTINGS.FFD20HealthConfigLabel",
    hint: "SETTINGS.FFD20HealthConfigHint",
    icon: "fas fa-heartbeat",
    type: HealthConfig,
    restricted: true,
  });
  game.settings.register("FFD20", "healthConfig", {
    name: "SETTINGS.FFD20HealthConfigName",
    scope: "world",
    default: HealthConfig.defaultSettings,
    type: Object,
    config: false,
    onChange: () => {
      game.actors.entities.forEach((o) => {
        o.prepareData();
        if (o.sheet != null && o.sheet._state > 0) o.sheet.render();
      });
      Object.values(game.actors.tokens).forEach((o) => {
        o.prepareData();
        if (o.sheet != null && o.sheet._state > 0) o.sheet.render();
      });
    },
  });

  // Experience configuration
  game.settings.registerMenu("FFD20", "experienceConfig", {
    name: "FFD20.ExperienceConfigName",
    label: "FFD20.ExperienceConfigLabel",
    hint: "FFD20.ExperienceConfigHint",
    icon: "fas fa-book",
    type: ExperienceConfig,
    restricted: true,
  });
  game.settings.register("FFD20", "experienceConfig", {
    name: "FFD20.ExperienceConfigName",
    scope: "world",
    default: ExperienceConfig.defaultSettings,
    type: Object,
    config: false,
    onChange: () => {
      game.actors.entities.forEach((o) => {
        o.prepareData();
        if (o.sheet != null && o.sheet._state > 0) o.sheet.render();
      });
      Object.values(game.actors.tokens).forEach((o) => {
        o.prepareData();
        if (o.sheet != null && o.sheet._state > 0) o.sheet.render();
      });
    },
  });

  // Accessibility configuration
  game.settings.registerMenu("FFD20", "accessibilityConfig", {
    name: "FFD20.AccessibilityConfigName",
    label: "FFD20.AccessibilityConfigLabel",
    hint: "FFD20.AccessibilityConfigHint",
    restricted: false,
    icon: "fas fa-wheelchair",
    type: AccessibilityConfig,
  });
  game.settings.register("FFD20", "accessibilityConfig", {
    name: "FFD20.AccessibilityConfigName",
    scope: "client",
    default: AccessibilityConfig.defaultSettings,
    type: Object,
    config: false,
    onChange: () => {
      window.location.reload();
    },
  });

  // Tooltip configuration
  game.settings.registerMenu("FFD20", "tooltipConfig", {
    name: "FFD20.TooltipConfigName",
    label: "FFD20.TooltipConfigLabel",
    hint: "FFD20.TooltipConfigHint",
    restricted: false,
    icon: "fas fa-window-maximize",
    type: TooltipConfig,
  });
  game.settings.register("FFD20", "tooltipConfig", {
    name: "FFD20.TooltipConfigName",
    scope: "client",
    default: TooltipConfig.defaultSettings,
    type: Object,
    config: false,
    onChange: () => {
      game.FFD20.tooltip?.setPosition();
    },
  });

  // Tooltip World configuration
  /* game.settings.registerMenu("FFD20", "tooltipWorldConfig", {
    name: "FFD20.TooltipWorldConfigName",
    label: "FFD20.TooltipWorldConfigLabel",
    hint: "FFD20.TooltipWorldConfigHint",
    restricted: true,
    icon: "fas fa-window-maximize",
    type: TooltipWorldConfig,
  }); */
  game.settings.register("FFD20", "tooltipWorldConfig", {
    name: "FFD20.TooltipWorldConfigName",
    scope: "world",
    default: TooltipWorldConfig.defaultSettings,
    type: Object,
    config: false,
    onChange: () => {
      game.FFD20.tooltip?.setPosition();
    },
  });

  /**
   * Register diagonal movement rule setting
   */
  game.settings.register("FFD20", "diagonalMovement", {
    name: "SETTINGS.FFD20DiagN",
    hint: "SETTINGS.FFD20DiagL",
    scope: "world",
    config: true,
    default: "5105",
    type: String,
    choices: {
      555: "SETTINGS.FFD20DiagPHB",
      5105: "SETTINGS.FFD20DiagDMG",
    },
    onChange: (rule) => (canvas.grid.diagonalRule = rule),
  });

  /**
   * Experience rate
   * @deprecated
   */
  game.settings.register("FFD20", "experienceRate", {
    name: "SETTINGS.FFD20ExpRateN",
    hint: "SETTINGS.FFD20ExpRateL",
    scope: "world",
    config: false,
    default: "",
    type: String,
    onChange: () => {
      [...game.actors.entities, ...Object.values(game.actors.tokens)]
        .filter((o) => {
          return o.data.type === "character";
        })
        .forEach((o) => {
          o.prepareData();
          if (o.sheet != null && o.sheet._state > 0) o.sheet.render();
        });
    },
  });

  /**
   * System of Units
   */
  game.settings.register("FFD20", "units", {
    name: "SETTINGS.FFD20UnitsN",
    hint: "SETTINGS.FFD20UnitsL",
    scope: "world",
    config: true,
    default: "imperial",
    type: String,
    choices: {
      imperial: "Imperial (feet, lbs)",
      metric: "Metric (meters, kg)",
    },
    onChange: () => {
      [...game.actors.entities, ...Object.values(game.actors.tokens)]
        .filter((o) => {
          return o.data.type === "character";
        })
        .forEach((o) => {
          o.prepareData();
          if (o.sheet != null && o.sheet._state > 0) o.sheet.render();
        });
    },
  });

  /**
   * Option to allow the background skills optional ruleset.
   */
  game.settings.register("FFD20", "allowBackgroundSkills", {
    name: "SETTINGS.FFD20BackgroundSkillsN",
    hint: "SETTINGS.FFD20BackgroundSkillsH",
    scope: "world",
    config: true,
    default: false,
    type: Boolean,
    onChange: () => {
      game.actors.entities.forEach((o) => {
        if (o.sheet && o.sheet.rendered) o.sheet.render(true);
      });
      Object.values(game.actors.tokens).forEach((o) => {
        if (o.sheet && o.sheet.rendered) o.sheet.render(true);
      });
    },
  });

  /**
   * Option to use the Fractional Base Bonuses optional ruleset.
   */
  game.settings.register("FFD20", "useFractionalBaseBonuses", {
    name: "SETTINGS.FFD20FractionalBaseBonusesN",
    hint: "SETTINGS.FFD20FractionalBaseBonusesH",
    scope: "world",
    config: true,
    default: false,
    type: Boolean,
    onChange: () => {
      game.actors.entities.forEach((o) => {
        o.prepareData();
      });
      Object.values(game.actors.tokens).forEach((o) => {
        o.prepareData();
      });
    },
  });

  /**
   * Option to automatically collapse Item Card descriptions
   */
  game.settings.register("FFD20", "autoCollapseItemCards", {
    name: "SETTINGS.FFD20AutoCollapseCardN",
    hint: "SETTINGS.FFD20AutoCollapseCardL",
    scope: "client",
    config: true,
    default: false,
    type: Boolean,
    onChange: () => {
      ui.chat.render();
    },
  });

  /**
   * Option to hide chat buttons
   */
  game.settings.register("FFD20", "hideChatButtons", {
    name: "SETTINGS.FFD20HideChatButtonsN",
    hint: "SETTINGS.FFD20HideChatButtonsH",
    scope: "client",
    config: true,
    default: false,
    type: Boolean,
    onChange: () => {
      ui.chat.render();
    },
  });

  /**
   * Option to change measure style
   */
  game.settings.register("FFD20", "measureStyle", {
    name: "SETTINGS.FFD20MeasureStyleN",
    hint: "SETTINGS.FFD20MeasureStyleL",
    scope: "world",
    config: true,
    default: true,
    type: Boolean,
  });

  /**
   * Low-light Vision Mode
   */
  game.settings.register("FFD20", "lowLightVisionMode", {
    name: "SETTINGS.FFD20LowLightVisionModeN",
    hint: "SETTINGS.FFD20LowLightVisionModeH",
    scope: "world",
    config: true,
    default: false,
    type: Boolean,
  });

  game.settings.register("FFD20", "sharedVisionMode", {
    name: "SETTINGS.FFD20SharedVisionModeN",
    hint: "SETTINGS.FFD20SharedVisionModeH",
    scope: "world",
    config: true,
    default: "0",
    type: String,
    choices: {
      0: "SETTINGS.FFD20SharedVisionWithoutSelection",
      1: "SETTINGS.FFD20SharedVisionWithSelection",
    },
    onChange: () => {
      game.socket.emit("system.FFD20", { eventType: "redrawCanvas" });
    },
  });

  /**
   * Set coin weight
   */
  game.settings.register("FFD20", "coinWeight", {
    name: "SETTINGS.FFD20CoinWeightN",
    hint: "SETTINGS.FFD20CoinWeightH",
    scope: "world",
    config: true,
    default: 50,
    type: Number,
    onChange: () => {
      game.actors.entities.forEach((o) => {
        o.prepareData();
      });
      Object.values(game.actors.tokens).forEach((o) => {
        o.prepareData();
      });
    },
  });

  /**
   * Hide token conditions
   */
  game.settings.register("FFD20", "hideTokenConditions", {
    name: "SETTINGS.FFD20HideTokenConditionsN",
    hint: "SETTINGS.FFD20HideTokenConditionsH",
    scope: "world",
    config: true,
    default: false,
    type: Boolean,
    onChange: () => {
      let promises = [];
      const actors = [
        ...Array.from(game.actors.entities.filter((o) => getProperty(o.data, "token.actorLink"))),
        ...Object.values(game.actors.tokens),
      ];
      for (let actor of actors) {
        promises.push(actor.toggleConditionStatusIcons());
      }
      return Promise.all(promises);
    },
  });

  /**
   * Display default token conditions alongside system ones
   */
  game.settings.register("FFD20", "coreEffects", {
    name: "SETTINGS.FFD20CoreEffectsN",
    hint: "SETTINGS.FFD20CoreEffectsH",
    scope: "world",
    config: true,
    default: false,
    type: Boolean,
    onChange: () => {
      window.location.reload();
    },
  });

  /**
   * Skip action dialog prompts
   */
  game.settings.register("FFD20", "skipActionDialogs", {
    name: "SETTINGS.FFD20SkipActionDialogsN",
    hint: "SETTINGS.FFD20SkipActionDialogsH",
    scope: "client",
    config: true,
    default: false,
    type: Boolean,
  });

  /*
   * When skipping an action dialog prompt still place the template if one is configured
   */
  game.settings.register("FFD20", "placeMeasureTemplateOnQuickRolls", {
    name: "SETTINGS.placeMeasureTemplateOnQuickRollsN",
    hint: "SETTINGS.placeMeasureTemplateOnQuickRollsH",
    scope: "client",
    config: true,
    default: true,
    type: Boolean,
  });

  /**
   * Attack chat card template
   */
  game.settings.register("FFD20", "attackChatCardTemplate", {
    name: "SETTINGS.FFD20AttackChatCardTemplateN",
    hint: "SETTINGS.FFD20AttackChatCardTemplateH",
    scope: "world",
    config: true,
    default: "systems/ffd20/templates/chat/attack-roll.hbs",
    type: String,
    choices: {
      "systems/ffd20/templates/chat/attack-roll.hbs": "FFD20.Primary",
      "systems/ffd20/templates/chat/attack-roll2.hbs": "FFD20.Alternate",
    },
  });

  /**
   * Unchained action economy
   */
  game.settings.register("FFD20", "unchainedActionEconomy", {
    name: "SETTINGS.FFD20UnchainedActionEconomyN",
    hint: "SETTINGS.FFD20UnchainedActionEconomyH",
    scope: "world",
    config: true,
    default: false,
    type: Boolean,
    onChange: () => {
      let promises = [];
      const actors = [
        ...Array.from(game.actors.entities.filter((o) => getProperty(o.data, "token.actorLink"))),
        ...Object.values(game.actors.tokens),
      ];
      for (let actor of actors) {
        promises.push(actor.toggleConditionStatusIcons());
      }
      return Promise.all(promises);
    },
  });

  /**
   * Invert filter Shift-clicking
   */
  game.settings.register("FFD20", "invertSectionFilterShiftBehaviour", {
    name: "SETTINGS.FFD20InvertSectionFilterBehaviourN",
    hint: "SETTINGS.FFD20InvertSectionFilterBehaviourH",
    scope: "client",
    config: true,
    default: false,
    type: Boolean,
  });

  /**
   * Hide reach measurements
   */
  game.settings.register("FFD20", "hideReachMeasurements", {
    name: "SETTINGS.FFD20HideReachMeasurementsN",
    hint: "SETTINGS.FFD20HideReachMeasurementsH",
    scope: "client",
    config: true,
    default: false,
    type: Boolean,
  });

  /**
   * Display BAB iteratives instead of simply total
   */
  game.settings.register("FFD20", "displayIteratives", {
    name: "SETTINGS.FFD20DisplayIterativesN",
    hint: "SETTINGS.FFD20DisplayIterativesH",
    scope: "client",
    config: true,
    default: false,
    type: Boolean,
  });
};

export const registerClientSettings = function () {
  /**
   * Compendium filters
   */
  game.settings.register("FFD20", "compendiumFilters", {
    name: "Compendium Filters",
    hint: "Stores compendium filters",
    scope: "client",
    config: false,
    default: {},
    type: Object,
  });

  /**
   * Compendium items
   */
  game.settings.register("FFD20", "compendiumItems", {
    name: "Compendium Items",
    hint: "Cache compendium entries",
    scope: "client",
    config: false,
    default: {},
    type: Object,
  });

  /**
   * Compendium save versions
   */
  game.settings.register("FFD20", "compendiumSaveVersions", {
    name: "Compendium Save Versions",
    hint: "Versions of compendium caches",
    scope: "client",
    config: false,
    default: {
      spells: "0.0.9",
      items: "0.0.9",
      bestiary: "0.0.9",
      feats: "0.0.9",
      classes: "0.0.9",
      races: "0.0.9",
    },
    type: Object,
  });

  /*
   * Compendium difference data
   */
  game.settings.register("FFD20", "compendiumForceRefresh", {
    name: "Compendium Force Refresh Data",
    hint: "Data needed to determine whether to force refresh compendiums",
    scope: "client",
    config: false,
    default: {
      diff: {
        items: [],
        spells: [],
        classes: [],
        races: [],
        feats: [],
        bestiary: [],
      },
    },
    type: Object,
  });
};

export const migrateSystemSettings = async function () {
  if (!game.user.isGM) return;

  // Migrate attack template
  {
    const template = game.settings.get("FFD20", "attackChatCardTemplate");
    if (template.endsWith(".html")) {
      const newTemplate = template.slice(0, template.length - "html".length) + "hbs";
      await game.settings.set("FFD20", "attackChatCardTemplate", newTemplate);
    }
  }
};

export const getSkipActionPrompt = function () {
  return (
    (game.settings.get("FFD20", "skipActionDialogs") && !game.keyboard.isDown("Shift")) ||
    (!game.settings.get("FFD20", "skipActionDialogs") && game.keyboard.isDown("Shift"))
  );
};
