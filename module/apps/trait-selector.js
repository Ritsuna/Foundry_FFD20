/**
 * A specialized form used to select damage or condition types which apply to an Actor
 * @type {BaseEntitySheet}
 */
export class ActorTraitSelector extends BaseEntitySheet {
  static get defaultOptions() {
    const options = super.defaultOptions;
    options.classes = ["ffd20", "trait-selector"];
    options.title = "Actor Trait Selection";
    options.template = "systems/ffd20/templates/apps/trait-selector.hbs";
    options.width = 320;
    options.height = "auto";
    return options;
  }

  /* -------------------------------------------- */

  /**
   * Return a reference to the target attribute
   * @type {String}
   */
  get attribute() {
    return this.options.name;
  }

  /* -------------------------------------------- */

  /**
   * Provide data to the HTML template for rendering
   * @type {Object}
   */
  getData() {
    // Get current values
    let attr = getProperty(this.object.data, this.attribute);

    // Populate choices
    const choices = duplicate(this.options.choices);
    for (let [k, v] of Object.entries(choices)) {
      choices[k] = {
        label: v,
        chosen: attr.value.includes(k),
      };
    }

    // Object type
    const updateButton = this.object instanceof Actor ? "FFD20.UpdateActor" : "FFD20.UpdateItem";

    // Return data
    return {
      choices: choices,
      custom: attr.custom,
      updateButton,
    };
  }

  /* -------------------------------------------- */

  /**
   * Update the Actor object with new trait data processed from the form
   * @private
   */
  _updateObject(event, formData) {
    const choices = [];
    for (let [k, v] of Object.entries(formData)) {
      if (k !== "custom" && v) choices.push(k);
    }
    this.object.update({
      [`${this.attribute}.value`]: choices,
      [`${this.attribute}.custom`]: formData.custom,
    });
  }
}
