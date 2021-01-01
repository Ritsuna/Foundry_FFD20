/**
 * Define a set of template paths to pre-load
 * Pre-loaded templates are compiled and cached for fast access when rendering
 * @return {Promise}
 */
export const preloadHandlebarsTemplates = async function () {
  // Define template paths to load
  const templatePaths = [
    // Actor Sheet Partials
    "systems/pf1/templates/actors/parts/actor-summary.hbs",
    "systems/pf1/templates/actors/parts/actor-traits.hbs",
    "systems/pf1/templates/actors/parts/actor-inventory.hbs",
    "systems/pf1/templates/actors/parts/actor-features.hbs",
    "systems/pf1/templates/actors/parts/actor-spellbook-front.hbs",
    "systems/pf1/templates/actors/parts/actor-spellbook.hbs",
    "systems/pf1/templates/actors/parts/actor-skills-front.hbs",
    "systems/pf1/templates/actors/parts/actor-skills.hbs",
    "systems/pf1/templates/actors/parts/actor-combat.hbs",
    "systems/pf1/templates/actors/parts/actor-defenses_tables.hbs",
    "systems/pf1/templates/actors/parts/actor-buffs.hbs",
    "systems/pf1/templates/actors/parts/actor-attributes.hbs",
    "systems/pf1/templates/actors/parts/actor-settings.hbs",

    // Item Sheet Partials
    "systems/pf1/templates/items/parts/item-action.hbs",
    "systems/pf1/templates/items/parts/item-activation.hbs",
    "systems/pf1/templates/items/parts/item-description.hbs",
    "systems/pf1/templates/items/parts/item-changes.hbs",
    "systems/pf1/templates/items/parts/item-notes.hbs",
    "systems/pf1/templates/items/parts/item-template.hbs",
    "systems/pf1/templates/items/parts/item-links.hbs",
    "systems/pf1/templates/items/parts/item-aura.hbs",
    "systems/pf1/templates/items/parts/item-conditionals.hbs",
    "systems/pf1/templates/items/parts/item-contents.hbs",
    "systems/pf1/templates/items/parts/item-tag.hbs",
    "systems/pf1/templates/items/parts/item-name.hbs",

    // Apps
    "systems/pf1/templates/apps/attack-roll-dialog.hbs",
    "systems/pf1/templates/apps/vision-permission.hbs",
    "systems/pf1/templates/apps/help-browser.hbs",

    // Chat
    "systems/pf1/templates/chat/roll-ext.hbs",
    "systems/pf1/templates/chat/defenses.hbs",

    // Internal Rendering Partials
    "systems/pf1/templates/internal/spell-description.hbs",
    "systems/pf1/templates/internal/consumable-description.hbs",
    "systems/pf1/templates/internal/damage-tooltip.hbs",
    "systems/pf1/templates/internal/token-config_vision.hbs",
  ];

  // Load the template parts
  return loadTemplates(templatePaths);
};
