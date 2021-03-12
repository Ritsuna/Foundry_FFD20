export class ActorSheetFlags extends BaseEntitySheet {
  static get defaultOptions() {
    const options = super.defaultOptions;
    return mergeObject(options, {
      id: "actor-flags",
      classes: ["ffd20"],
      template: "systems/ffd20/templates/apps/actor-flags.hbs",
      width: 500,
      closeOnSubmit: true,
    });
  }

  /* -------------------------------------------- */

  /**
   * Configure the title of the special traits selection window to include the Actor name
   * @type {String}
   */
  get title() {
    return `${game.i18n.localize("FFD20.FlagsTitle")}: ${this.object.name}`;
  }

  /* -------------------------------------------- */

  /**
   * Prepare data used to render the special Actor traits selection UI
   * @return {Object}
   */
  getData() {
    const data = super.getData();
    data.flags = this._getFlags();
    return data;
  }

  /* -------------------------------------------- */

  /**
   * Prepare an object of flags data which groups flags by section
   * Add some additional data for rendering
   * @return {Object}
   */
  _getFlags() {
    const flags = {};
    for (let [k, v] of Object.entries(CONFIG.FFD20.characterFlags)) {
      if (!Object.prototype.hasOwnProperty.call(flags, v.section)) flags[v.section] = {};
      let flag = duplicate(v);
      flag.type = v.type.name;
      flag.isCheckbox = v.type === Boolean;
      flag.isSelect = Object.prototype.hasOwnProperty.call(v, "choices");
      flag.value = this.entity.getFlag("FFD20", k);
      flags[v.section][k] = flag;
    }
    return flags;
  }

  /* -------------------------------------------- */

  /**
   * Update the Actor using the configured flags
   * Remove/unset any flags which are no longer configured
   */
  _updateObject(event, formData) {
    const actor = this.object;

    // Iterate over the flags which may be configured
    const updateData = {};
    for (let [k, v] of Object.entries(CONFIG.ffd20.characterFlags)) {
      if ([undefined, null, "", false].includes(formData[k])) updateData[`-=${k}`] = null;
      else if (v.type === Number && formData[k] === 0) updateData[`-=${k}`] = null;
      else updateData[k] = formData[k];
    }

    // Set the new flags in bulk
    actor.update({ "flags.ffd20": updateData });
  }
}
