/**
 * Define a set of template paths to pre-load
 * Pre-loaded templates are compiled and cached for fast access when rendering
 * @return {Promise}
 */
export const preloadHandlebarsTemplates = async function () {
  // Define template paths to load
  const templatePaths = [
    // Actor Sheet Partials
    "systems/ffd20/templates/actors/parts/actor-summary.hbs",
    "systems/ffd20/templates/actors/parts/actor-traits.hbs",
    "systems/ffd20/templates/actors/parts/actor-inventory.hbs",
    "systems/ffd20/templates/actors/parts/actor-features.hbs",
    "systems/ffd20/templates/actors/parts/actor-spellbook-front.hbs",
    "systems/ffd20/templates/actors/parts/actor-spellbook.hbs",
    "systems/ffd20/templates/actors/parts/actor-skills-front.hbs",
    "systems/ffd20/templates/actors/parts/actor-skills.hbs",
    "systems/ffd20/templates/actors/parts/actor-combat.hbs",
    "systems/ffd20/templates/actors/parts/actor-defenses_tables.hbs",
    "systems/ffd20/templates/actors/parts/actor-buffs.hbs",
    "systems/ffd20/templates/actors/parts/actor-attributes.hbs",
    "systems/ffd20/templates/actors/parts/actor-settings.hbs",

    // Item Sheet Partials
    "systems/ffd20/templates/items/parts/item-action.hbs",
    "systems/ffd20/templates/items/parts/item-activation.hbs",
    "systems/ffd20/templates/items/parts/item-description.hbs",
    "systems/ffd20/templates/items/parts/item-changes.hbs",
    "systems/ffd20/templates/items/parts/item-notes.hbs",
    "systems/ffd20/templates/items/parts/item-template.hbs",
    "systems/ffd20/templates/items/parts/item-links.hbs",
    "systems/ffd20/templates/items/parts/item-aura.hbs",
    "systems/ffd20/templates/items/parts/item-conditionals.hbs",
    "systems/ffd20/templates/items/parts/item-contents.hbs",
    "systems/ffd20/templates/items/parts/item-tag.hbs",
    "systems/ffd20/templates/items/parts/item-name.hbs",

    // Apps
    "systems/ffd20/templates/apps/attack-roll-dialog.hbs",
    "systems/ffd20/templates/apps/vision-permission.hbs",
    "systems/ffd20/templates/apps/help-browser.hbs",

    // Chat
    "systems/ffd20/templates/chat/roll-ext.hbs",
    "systems/ffd20/templates/chat/defenses.hbs",

    // Internal Rendering Partials
    "systems/ffd20/templates/internal/spell-description.hbs",
    "systems/ffd20/templates/internal/consumable-description.hbs",
    "systems/ffd20/templates/internal/damage-tooltip.hbs",
    "systems/ffd20/templates/internal/token-config_vision.hbs",

    // Tooltip
    "systems/ffd20/templates/hud/tooltip.hbs",
    "systems/ffd20/templates/hud/tooltip_actor.hbs",
  ];

  // Load the template parts
  return loadTemplates(templatePaths);
};
