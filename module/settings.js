import { HealthConfig } from "./config/health.js";
import { ExperienceConfig } from "./config/experience.js";
import { AccessibilityConfig } from "./config/accessibility.js";
import { CompendiumBrowser } from "./apps/compendium-browser.js";

export const registerSystemSettings = function () {
  /**
   * Track the system version upon which point a migration was last applied
   */
  game.settings.register("pf1", "systemMigrationVersion", {
    name: "System Migration Version",
    scope: "world",
    config: false,
    type: String,
    default: "0.0.0",
  });
  /**
   * Track when the last changelog was shown
   */
  game.settings.register("pf1", "changelogVersion", {
    name: "Changelog Version",
    scope: "client",
    config: false,
    type: String,
    default: "0.74.9",
  });
  game.settings.register("pf1", "dontShowChangelog", {
    name: "Don't Automatically Show Changelog",
    scope: "client",
    config: false,
    type: Boolean,
    default: false,
  });

  // Health configuration
  game.settings.registerMenu("pf1", "healthConfig", {
    name: "SETTINGS.pf1HealthConfigName",
    label: "SETTINGS.pf1HealthConfigLabel",
    hint: "SETTINGS.pf1HealthConfigHint",
    icon: "fas fa-heartbeat",
    type: HealthConfig,
    restricted: true,
  });
  game.settings.register("pf1", "healthConfig", {
    name: "SETTINGS.pf1HealthConfigName",
    scope: "world",
    default: HealthConfig.defaultSettings,
    type: Object,
    config: false,
    onChange: () => {
      game.actors.entities.forEach((o) => {
        o.update({});
      });
      Object.values(game.actors.tokens).forEach((o) => {
        o.update({});
      });
    },
  });

  // Experience configuration
  game.settings.registerMenu("pf1", "experienceConfig", {
    name: "PF1.ExperienceConfigName",
    label: "PF1.ExperienceConfigLabel",
    hint: "PF1.ExperienceConfigHint",
    icon: "fas fa-book",
    type: ExperienceConfig,
    restricted: true,
  });
  game.settings.register("pf1", "experienceConfig", {
    name: "PF1.ExperienceConfigName",
    scope: "world",
    default: ExperienceConfig.defaultSettings,
    type: Object,
    config: false,
    onChange: () => {
      game.actors.entities.forEach((o) => {
        o.update({});
      });
      Object.values(game.actors.tokens).forEach((o) => {
        o.update({});
      });
    },
  });

  // Accessibility configuration
  game.settings.registerMenu("pf1", "accessibilityConfig", {
    name: "PF1.AccessibilityConfigName",
    label: "PF1.AccessibilityConfigLabel",
    hint: "PF1.AccessibilityConfigHint",
    restricted: false,
    icon: "fas fa-wheelchair",
    type: AccessibilityConfig,
  });
  game.settings.register("pf1", "accessibilityConfig", {
    name: "PF1.AccessibilityConfigName",
    scope: "client",
    default: AccessibilityConfig.defaultSettings,
    type: Object,
    config: false,
    onChange: () => {
      window.location.reload();
    },
  });

  /**
   * Register diagonal movement rule setting
   */
  game.settings.register("pf1", "diagonalMovement", {
    name: "SETTINGS.pf1DiagN",
    hint: "SETTINGS.pf1DiagL",
    scope: "world",
    config: true,
    default: "5105",
    type: String,
    choices: {
      555: "SETTINGS.pf1DiagPHB",
      5105: "SETTINGS.pf1DiagDMG",
    },
    onChange: (rule) => (canvas.grid.diagonalRule = rule),
  });

  /**
   * Experience rate
   * @deprecated
   */
  game.settings.register("pf1", "experienceRate", {
    name: "SETTINGS.pf1ExpRateN",
    hint: "SETTINGS.pf1ExpRateL",
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
          o.update({});
          if (o.sheet != null && o.sheet._state > 0) o.sheet.render();
        });
    },
  });

  /**
   * System of Units
   */
  game.settings.register("pf1", "units", {
    name: "SETTINGS.pf1UnitsN",
    hint: "SETTINGS.pf1UnitsL",
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
          o.update({});
          if (o.sheet != null && o.sheet._state > 0) o.sheet.render();
        });
    },
  });

  /**
   * Option to allow the background skills optional ruleset.
   */
  game.settings.register("pf1", "allowBackgroundSkills", {
    name: "SETTINGS.pf1BackgroundSkillsN",
    hint: "SETTINGS.pf1BackgroundSkillsH",
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
  game.settings.register("pf1", "useFractionalBaseBonuses", {
    name: "SETTINGS.pf1FractionalBaseBonusesN",
    hint: "SETTINGS.pf1FractionalBaseBonusesH",
    scope: "world",
    config: true,
    default: false,
    type: Boolean,
    onChange: () => {
      game.actors.entities.forEach((o) => {
        o.update({});
      });
      Object.values(game.actors.tokens).forEach((o) => {
        o.update({});
      });
    },
  });

  /**
   * Option to automatically collapse Item Card descriptions
   */
  game.settings.register("pf1", "autoCollapseItemCards", {
    name: "SETTINGS.pf1AutoCollapseCardN",
    hint: "SETTINGS.pf1AutoCollapseCardL",
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
  game.settings.register("pf1", "hideChatButtons", {
    name: "SETTINGS.pf1HideChatButtonsN",
    hint: "SETTINGS.pf1HideChatButtonsH",
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
  game.settings.register("pf1", "measureStyle", {
    name: "SETTINGS.pf1MeasureStyleN",
    hint: "SETTINGS.pf1MeasureStyleL",
    scope: "world",
    config: true,
    default: true,
    type: Boolean,
  });

  /**
   * Low-light Vision Mode
   */
  game.settings.register("pf1", "lowLightVisionMode", {
    name: "SETTINGS.pf1LowLightVisionModeN",
    hint: "SETTINGS.pf1LowLightVisionModeH",
    scope: "world",
    config: true,
    default: false,
    type: Boolean,
  });

  game.settings.register("pf1", "sharedVisionMode", {
    name: "SETTINGS.pf1SharedVisionModeN",
    hint: "SETTINGS.pf1SharedVisionModeH",
    scope: "world",
    config: true,
    default: "0",
    type: String,
    choices: {
      0: "SETTINGS.pf1SharedVisionWithoutSelection",
      1: "SETTINGS.pf1SharedVisionWithSelection",
    },
    onChange: () => {
      game.socket.emit("system.pf1", { eventType: "redrawCanvas" });
    },
  });

  /**
   * Set coin weight
   */
  game.settings.register("pf1", "coinWeight", {
    name: "SETTINGS.pf1CoinWeightN",
    hint: "SETTINGS.pf1CoinWeightH",
    scope: "world",
    config: true,
    default: 50,
    type: Number,
    onChange: () => {
      game.actors.entities.forEach((o) => {
        o.update({});
      });
      Object.values(game.actors.tokens).forEach((o) => {
        o.update({});
      });
    },
  });

  /**
   * Hide token conditions
   */
  game.settings.register("pf1", "hideTokenConditions", {
    name: "SETTINGS.pf1HideTokenConditionsN",
    hint: "SETTINGS.pf1HideTokenConditionsH",
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
   * Skip action dialog prompts
   */
  game.settings.register("pf1", "skipActionDialogs", {
    name: "SETTINGS.pf1SkipActionDialogsN",
    hint: "SETTINGS.pf1SkipActionDialogsH",
    scope: "client",
    config: true,
    default: false,
    type: Boolean,
  });

  /*
   * When skipping an action dialog prompt still place the template if one is configured
   */
  game.settings.register("pf1", "placeMeasureTemplateOnQuickRolls", {
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
  game.settings.register("pf1", "attackChatCardTemplate", {
    name: "SETTINGS.pf1AttackChatCardTemplateN",
    hint: "SETTINGS.pf1AttackChatCardTemplateH",
    scope: "world",
    config: true,
    default: "systems/pf1/templates/chat/attack-roll.hbs",
    type: String,
    choices: {
      "systems/pf1/templates/chat/attack-roll.hbs": "PF1.Primary",
      "systems/pf1/templates/chat/attack-roll2.hbs": "PF1.Alternate",
    },
  });

  /**
   * Unchained action economy
   */
  game.settings.register("pf1", "unchainedActionEconomy", {
    name: "SETTINGS.pf1UnchainedActionEconomyN",
    hint: "SETTINGS.pf1UnchainedActionEconomyH",
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
  game.settings.register("pf1", "invertSectionFilterShiftBehaviour", {
    name: "SETTINGS.pf1InvertSectionFilterBehaviourN",
    hint: "SETTINGS.pf1InvertSectionFilterBehaviourH",
    scope: "client",
    config: true,
    default: false,
    type: Boolean,
  });

  /**
   * Hide reach measurements
   */
  game.settings.register("pf1", "hideReachMeasurements", {
    name: "SETTINGS.pf1HideReachMeasurementsN",
    hint: "SETTINGS.pf1HideReachMeasurementsH",
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
  game.settings.register("pf1", "compendiumFilters", {
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
  game.settings.register("pf1", "compendiumItems", {
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
  game.settings.register("pf1", "compendiumSaveVersions", {
    name: "Compendium Save Versions",
    hint: "Versions of compendium caches",
    scope: "client",
    config: false,
    default: {
      spells: "0.75.6",
      items: "0.75.6",
      bestiary: "0.75.6",
      feats: "0.75.6",
      classes: "0.75.6",
      races: "0.75.6",
    },
    type: Object,
  });

  /*
   * Compendium difference data
   */
  game.settings.register("pf1", "compendiumForceRefresh", {
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
    const template = game.settings.get("pf1", "attackChatCardTemplate");
    if (template.endsWith(".html")) {
      const newTemplate = template.slice(0, template.length - "html".length) + "hbs";
      await game.settings.set("pf1", "attackChatCardTemplate", newTemplate);
    }
  }
};

export const getSkipActionPrompt = function () {
  return (
    (game.settings.get("pf1", "skipActionDialogs") && !game.keyboard.isDown("Shift")) ||
    (!game.settings.get("pf1", "skipActionDialogs") && game.keyboard.isDown("Shift"))
  );
};
