export const registerHandlebarsHelpers = function () {
  Handlebars.registerHelper("concat", (a, b) => {
    if (typeof a === "number") a = a.toString();
    if (typeof b === "number") b = b.toString();
    return a + b;
  });

  /**
   * Render a MCE editor container with an optional toggle button
   */
  Handlebars.registerHelper("roll-editor", function (options) {
    // Find item and/or actor
    const _id = (getProperty(options, "data.root.entity") || getProperty(options, "data.root.actor") || {})._id;
    let actor = null,
      item = null;
    const actors = [...Array.from(game.actors.entities), ...Array.from(game.actors.tokens)];
    const items = [...Array.from(game.items.entities)];
    if (_id != null) {
      // Find actor or item on actor
      for (let a of actors) {
        if (a._id === _id) {
          actor = a;
        } else {
          if (item == null) item = a.items.find((o) => o._id === _id);
        }
      }
      // Find item
      if (item == null) {
        for (let i of items) {
          if (i._id === _id) item = i;
        }
      }
    }
    const rollData = item != null ? item.getRollData() : actor != null ? actor.getRollData() : {};

    // Create editor
    const target = options.hash["target"];
    if (!target) throw new Error("You must define the name of a target field.");

    // Enrich the content
    const owner = Boolean(options.hash["owner"]);
    const content = TextEditor.enrichHTML(options.hash["content"] || "", {
      secrets: owner,
      entities: true,
      rollData: rollData,
    });

    // Construct the HTML
    let editor = $(`<div class="editor"><div class="editor-content" data-edit="${target}">${content}</div></div>`);

    // Append edit button
    const button = Boolean(options.hash["button"]);
    const editable = Boolean(options.hash["editable"]);
    if (button && editable) editor.append($('<a class="editor-edit"><i class="fas fa-edit"></i></a>'));
    return new Handlebars.SafeString(editor[0].outerHTML);
  });
};
