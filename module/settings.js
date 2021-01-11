import { HealthConfig } from "./config/health.js";
import { ExperienceConfig } from "./config/experience.js";
import { AccessibilityConfig } from "./config/accessibility.js";
import { CompendiumBrowser } from "./apps/compendium-browser.js";

export const registerSystemSettings = function () {
  /**
   * Track the system version upon which point a migration was last applied
   */
  game.settings.register("ffd20lnrw", "systemMigrationVersion", {
    name: "System Migration Version",
    scope: "world",
    config: false,
    type: String,
    default: "0.0.0",
  });
  /**
   * Track when the last changelog was shown
   */
  game.settings.register("ffd20lnrw", "changelogVersion", {
    name: "Changelog Version",
    scope: "client",
    config: false,
    type: String,
    default: "0.74.9",
  });
  game.settings.register("ffd20lnrw", "dontShowChangelog", {
    name: "Don't Automatically Show Changelog",
    scope: "client",
    config: false,
    type: Boolean,
    default: false,
  });

  // Health configuration
  game.settings.registerMenu("ffd20lnrw", "healthConfig", {
    name: "SETTINGS.ffd20lnrwHealthConfigName",
    label: "SETTINGS.ffd20lnrwHealthConfigLabel",
    hint: "SETTINGS.ffd20lnrwHealthConfigHint",
    icon: "fas fa-heartbeat",
    type: HealthConfig,
    restricted: true,
  });
  game.settings.register("ffd20lnrw", "healthConfig", {
    name: "SETTINGS.ffd20lnrwHealthConfigName",
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
  game.settings.registerMenu("ffd20lnrw", "experienceConfig", {
    name: "ffd20lnrw.ExperienceConfigName",
    label: "ffd20lnrw.ExperienceConfigLabel",
    hint: "ffd20lnrw.ExperienceConfigHint",
    icon: "fas fa-book",
    type: ExperienceConfig,
    restricted: true,
  });
  game.settings.register("ffd20lnrw", "experienceConfig", {
    name: "ffd20lnrw.ExperienceConfigName",
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
  game.settings.registerMenu("ffd20lnrw", "accessibilityConfig", {
    name: "ffd20lnrw.AccessibilityConfigName",
    label: "ffd20lnrw.AccessibilityConfigLabel",
    hint: "ffd20lnrw.AccessibilityConfigHint",
    restricted: false,
    icon: "fas fa-wheelchair",
    type: AccessibilityConfig,
  });
  game.settings.register("ffd20lnrw", "accessibilityConfig", {
    name: "ffd20lnrw.AccessibilityConfigName",
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
  game.settings.register("ffd20lnrw", "diagonalMovement", {
    name: "SETTINGS.ffd20lnrwDiagN",
    hint: "SETTINGS.ffd20lnrwDiagL",
    scope: "world",
    config: true,
    default: "5105",
    type: String,
    choices: {
      555: "SETTINGS.ffd20lnrwDiagPHB",
      5105: "SETTINGS.ffd20lnrwDiagDMG",
    },
    onChange: (rule) => (canvas.grid.diagonalRule = rule),
  });

  /**
   * Experience rate
   * @deprecated
   */
  game.settings.register("ffd20lnrw", "experienceRate", {
    name: "SETTINGS.ffd20lnrwExpRateN",
    hint: "SETTINGS.ffd20lnrwExpRateL",
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
  game.settings.register("ffd20lnrw", "units", {
    name: "SETTINGS.ffd20lnrwUnitsN",
    hint: "SETTINGS.ffd20lnrwUnitsL",
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
  game.settings.register("ffd20lnrw", "allowBackgroundSkills", {
    name: "SETTINGS.ffd20lnrwBackgroundSkillsN",
    hint: "SETTINGS.ffd20lnrwBackgroundSkillsH",
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
  game.settings.register("ffd20lnrw", "useFractionalBaseBonuses", {
    name: "SETTINGS.ffd20lnrwFractionalBaseBonusesN",
    hint: "SETTINGS.ffd20lnrwFractionalBaseBonusesH",
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
  game.settings.register("ffd20lnrw", "autoCollapseItemCards", {
    name: "SETTINGS.ffd20lnrwAutoCollapseCardN",
    hint: "SETTINGS.ffd20lnrwAutoCollapseCardL",
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
  game.settings.register("ffd20lnrw", "hideChatButtons", {
    name: "SETTINGS.ffd20lnrwHideChatButtonsN",
    hint: "SETTINGS.ffd20lnrwHideChatButtonsH",
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
  game.settings.register("ffd20lnrw", "measureStyle", {
    name: "SETTINGS.ffd20lnrwMeasureStyleN",
    hint: "SETTINGS.ffd20lnrwMeasureStyleL",
    scope: "world",
    config: true,
    default: true,
    type: Boolean,
  });

  /**
   * Low-light Vision Mode
   */
  game.settings.register("ffd20lnrw", "lowLightVisionMode", {
    name: "SETTINGS.ffd20lnrwLowLightVisionModeN",
    hint: "SETTINGS.ffd20lnrwLowLightVisionModeH",
    scope: "world",
    config: true,
    default: false,
    type: Boolean,
  });

  game.settings.register("ffd20lnrw", "sharedVisionMode", {
    name: "SETTINGS.ffd20lnrwSharedVisionModeN",
    hint: "SETTINGS.ffd20lnrwSharedVisionModeH",
    scope: "world",
    config: true,
    default: "0",
    type: String,
    choices: {
      0: "SETTINGS.ffd20lnrwSharedVisionWithoutSelection",
      1: "SETTINGS.ffd20lnrwSharedVisionWithSelection",
    },
    onChange: () => {
      game.socket.emit("system.ffd20lnrw", { eventType: "redrawCanvas" });
    },
  });

  /**
   * Set coin weight
   */
  game.settings.register("ffd20lnrw", "coinWeight", {
    name: "SETTINGS.ffd20lnrwCoinWeightN",
    hint: "SETTINGS.ffd20lnrwCoinWeightH",
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
  game.settings.register("ffd20lnrw", "hideTokenConditions", {
    name: "SETTINGS.ffd20lnrwHideTokenConditionsN",
    hint: "SETTINGS.ffd20lnrwHideTokenConditionsH",
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
  game.settings.register("ffd20lnrw", "skipActionDialogs", {
    name: "SETTINGS.ffd20lnrwSkipActionDialogsN",
    hint: "SETTINGS.ffd20lnrwSkipActionDialogsH",
    scope: "client",
    config: true,
    default: false,
    type: Boolean,
  });

  /*
   * When skipping an action dialog prompt still place the template if one is configured
   */
  game.settings.register("ffd20lnrw", "placeMeasureTemplateOnQuickRolls", {
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
  game.settings.register("ffd20lnrw", "attackChatCardTemplate", {
    name: "SETTINGS.ffd20lnrwAttackChatCardTemplateN",
    hint: "SETTINGS.ffd20lnrwAttackChatCardTemplateH",
    scope: "world",
    config: true,
    default: "systems/ffd20lnrw/templates/chat/attack-roll.hbs",
    type: String,
    choices: {
      "systems/ffd20lnrw/templates/chat/attack-roll.hbs": "ffd20lnrw.Primary",
      "systems/ffd20lnrw/templates/chat/attack-roll2.hbs": "ffd20lnrw.Alternate",
    },
  });

  /**
   * Unchained action economy
   */
  game.settings.register("ffd20lnrw", "unchainedActionEconomy", {
    name: "SETTINGS.ffd20lnrwUnchainedActionEconomyN",
    hint: "SETTINGS.ffd20lnrwUnchainedActionEconomyH",
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
  game.settings.register("ffd20lnrw", "invertSectionFilterShiftBehaviour", {
    name: "SETTINGS.ffd20lnrwInvertSectionFilterBehaviourN",
    hint: "SETTINGS.ffd20lnrwInvertSectionFilterBehaviourH",
    scope: "client",
    config: true,
    default: false,
    type: Boolean,
  });

  /**
   * Hide reach measurements
   */
  game.settings.register("ffd20lnrw", "hideReachMeasurements", {
    name: "SETTINGS.ffd20lnrwHideReachMeasurementsN",
    hint: "SETTINGS.ffd20lnrwHideReachMeasurementsH",
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
  game.settings.register("ffd20lnrw", "compendiumFilters", {
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
  game.settings.register("ffd20lnrw", "compendiumItems", {
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
  game.settings.register("ffd20lnrw", "compendiumSaveVersions", {
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
  game.settings.register("ffd20lnrw", "compendiumForceRefresh", {
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
    const template = game.settings.get("ffd20lnrw", "attackChatCardTemplate");
    if (template.endsWith(".html")) {
      const newTemplate = template.slice(0, template.length - "html".length) + "hbs";
      await game.settings.set("ffd20lnrw", "attackChatCardTemplate", newTemplate);
    }
  }
};

export const getSkipActionPrompt = function () {
  return (
    (game.settings.get("ffd20lnrw", "skipActionDialogs") && !game.keyboard.isDown("Shift")) ||
    (!game.settings.get("ffd20lnrw", "skipActionDialogs") && game.keyboard.isDown("Shift"))
  );
};
