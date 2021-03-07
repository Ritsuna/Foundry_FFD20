export class PointBuyCalculator extends BaseEntitySheet {
  constructor(...args) {
    super(...args);

    this.abilities = [];
    for (let [k, name] of Object.entries(CONFIG.FFD20.abilities)) {
      this.abilities.push({
        key: k,
        name: name,
        value: 10,
      });
    }
  }

  static get defaultOptions() {
    return mergeObject(super.defaultOptions, {
      classes: ["FFD20", "pointbuy-calculator"],
      title: "Point Buy Calculator",
      template: "systems/ffd20/templates/apps/pointbuy-calculator.hbs",
      width: 320,
      height: "auto",
      closeOnSubmit: false,
      submitOnClose: false,
    });
  }

  get title() {
    return `${this.options.title}: ${this.object.name}`;
  }

  get actor() {
    return this.entity;
  }

  getData() {
    const points = this.getSpentPoints();

    return {
      abilities: this.abilities,
      points: points,
    };
  }

  getSpentPoints() {
    let result = 0;

    for (let a of this.abilities) {
      result += CONFIG.FFD20.abilityCost[a.value];
    }
    return result;
  }

  activateListeners(html) {
    super.activateListeners(html);

    html.find(".ability-control").click(this._onAbilityControl.bind(this));
  }

  _onAbilityControl(event) {
    event.preventDefault();
    const a = event.currentTarget;
    const ablKey = a.closest(".item").dataset.ability;
    const abl = this.abilities.find((o) => o.key === ablKey);

    if (a.classList.contains("add")) {
      abl.value = Math.min(18, abl.value + 1);
    } else if (a.classList.contains("subtract")) {
      abl.value = Math.max(7, abl.value - 1);
    }
    this.render();
  }

  _updateObject() {
    const updateData = {};
    for (let a of this.abilities) {
      updateData[`data.abilities.${a.key}.value`] = a.value;
    }
    this.actor.update(updateData);

    this.close();
  }
}
