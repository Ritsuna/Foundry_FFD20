export class ItemChange {
  static create(data, parent) {
    const result = new this();

    if (!data._id) delete data._id;

    result.data = mergeObject(this.defaultData, data);
    result.parent = parent;
    result.updateTime = new Date();

    return result;
  }

  static get defaultData() {
    return {
      _id: randomID(8),
      formula: "",
      operator: "add",
      target: "",
      subTarget: "",
      modifier: "",
      priority: 0,
      value: 0,
    };
  }

  get _id() {
    return this.data._id;
  }
  get formula() {
    return this.data.formula;
  }
  get operator() {
    return this.data.operator;
  }
  get target() {
    return this.data.target;
  }
  get subTarget() {
    return this.data.subTarget;
  }
  get modifier() {
    return this.data.modifier;
  }
  get priority() {
    return this.data.priority;
  }
  get value() {
    return this.data.value;
  }

  prepareData() {}

  preUpdate(data) {
    // Make sure sub-target is valid
    {
      if (data["target"]) {
        const subTarget = data["subTarget"] || this.subTarget;
        const changeSubTargets = this.parent.getChangeSubTargets(data["target"]);
        if (changeSubTargets[subTarget] == null) {
          data["subTarget"] = Object.keys(changeSubTargets)[0];
        }
      }
    }

    return data;
  }

  async update(data, options = {}) {
    this.updateTime = new Date();

    if (this.parent != null) {
      data = this.preUpdate(data);

      const rawChange = this.parent.data.data.changes.find((o) => o._id === this._id);
      const idx = this.parent.data.data.changes.indexOf(rawChange);
      if (idx >= 0) {
        data = Object.entries(data).reduce((cur, o) => {
          cur[`data.changes.${idx}.${o[0]}`] = o[1];
          return cur;
        }, {});
        return this.parent.update(data, options);
      }
    }
  }
}
