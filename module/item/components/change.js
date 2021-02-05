import { getChangeFlat, getSourceInfo } from "../../actor/apply-changes.js";

export class ItemChange {
  static create(data, parent) {
    const result = new this();

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

  get source() {
    return this.data.source;
  }
  getSourceInfoTargets(actor) {
    switch (this.subTarget) {
      case "aac":
      case "sac":
      case "nac":
        return ["data.attributes.ac.normal.total", "data.attributes.ac.flatFooted.total"];
    }

    // Return default targets
    let flats = getChangeFlat.call(actor, this.subTarget, this.modifier);
    if (!(flats instanceof Array)) flats = [flats];
    return flats;
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

  applyChange(actor, targets = null, flags = {}) {
    // Prepare change targets
    if (!targets) {
      targets = getChangeFlat.call(actor, this.subTarget, this.modifier);
      if (!(targets instanceof Array)) targets = [targets];
    }
    const sourceInfoTargets = this.getSourceInfoTargets(actor);
    let addedSourceInfo = false;

    const rollData = this.parent ? this.parent.getRollData() : actor.getRollData();

    const overrides = actor.changeOverrides;
    for (let t of targets) {
      if (!t) continue;

      if (overrides[t]) {
        let operator = this.operator;
        if (operator === "+") operator = "add";
        if (operator === "=") operator = "set";

        let value = 0;
        if (operator === "script") {
          const fn = this.createFunction(this.formula, ["d"]);
          const result = fn(rollData);
          value = result.value;
          operator = result.operator;
        } else {
          try {
            value = new Roll(this.formula || "0", rollData).roll().total;
          } catch (err) {
            value = 0;
            console.error(err);
          }
        }

        const prior = overrides[t][operator][this.modifier];

        switch (operator) {
          case "add":
            if (CONFIG.ffd20lnrw.stackingBonusModifiers.indexOf(this.modifier) !== -1) {
              setProperty(actor.data, t, (getProperty(actor.data, t) ?? 0) + value);
              overrides[t][operator][this.modifier] = (prior ?? 0) + value;

              if (this.parent && !addedSourceInfo) {
                for (let si of sourceInfoTargets) {
                  getSourceInfo(actor.sourceInfo, si).positive.push({
                    value: value,
                    name: this.parent.name,
                    type: this.parent.type,
                  });
                }
                addedSourceInfo = true;
              }
            } else {
              const diff = !prior ? value : Math.max(0, value - (prior ?? 0));
              setProperty(actor.data, t, (getProperty(actor.data, t) ?? 0) + diff);
              overrides[t][operator][this.modifier] = Math.max(prior ?? 0, value);

              if (this.parent) {
                for (let si of sourceInfoTargets) {
                  const sInfo = getSourceInfo(actor.sourceInfo, si).positive;

                  let doAdd = true;
                  sInfo.forEach((o) => {
                    if (o.modifier === this.modifier) {
                      if (o.value < value) {
                        sInfo.splice(sInfo.indexOf(o), 1);
                      } else {
                        doAdd = false;
                      }
                    }
                  });

                  if (doAdd) {
                    sInfo.push({
                      value: value,
                      name: this.parent.name,
                      type: this.parent.type,
                      modifier: this.modifier,
                    });
                  }
                }
              }
            }
            break;

          case "set":
            setProperty(actor.data, t, value);
            overrides[t][operator][this.modifier] = value;

            if (this.parent && !addedSourceInfo) {
              for (let si of sourceInfoTargets) {
                getSourceInfo(actor.sourceInfo, si).positive.push({
                  value: value,
                  operator: "set",
                  name: this.parent.name,
                  type: this.parent.type,
                });
              }
              addedSourceInfo = true;
            }
            break;
        }

        // Reset ability modifiers
        if (t.startsWith("data.abilities")) {
          actor.refreshAbilityModifiers();
        }
      }
    }
  }

  createFunction(funcDef, funcArgs = []) {
    try {
      const preDef = `const result = { operator: "add", value: 0, };`;
      const postDef = `return result;`;
      const fullDef = `return function(${funcArgs.join(",")}) {${preDef}${funcDef}${postDef}};`;
      return new Function(fullDef)();
    } catch (e) {
      console.warn("Could not create change function with definition ", funcDef);
      return function () {
        return { operator: "add", value: 0 };
      };
    }
  }
}
