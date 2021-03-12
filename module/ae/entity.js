export class ActiveEffectFFD20 extends ActiveEffect {
  constructor(...args) {
    super(...args);
  }

  async update(data, options) {
    return super.update(data, options);
  }

  async create(options) {
    const statusId = this.data["flags.core.statusId"],
      origin = this.data.origin,
      updates = {};
    if (statusId && this.parent?.data.data.attributes.conditions[statusId] === false) {
      updates[`data.attributes.conditions.${statusId}`] = true;
      await this.parent.update(updates);
      let created = this.parent.effects.find((e) => e.getFlag("core", "statusId") === statusId);
      if (created) return created;
    }
    if (origin) {
      let buffItem = this.parent.items.get(origin.split(".")[3]);
      if (buffItem && !buffItem.data.data.active) await buffItem.update({ "data.active": true });
    }
    return super.create(options);
  }

  async delete(options) {
    const statusId = this.getFlag("core", "statusId"),
      origin = this.data.origin?.split(".")?.[3] ?? null,
      parentActor = this.parent,
      returnVal = await super.delete(options),
      updates = {};
    if (statusId && parentActor.data.data.attributes.conditions[statusId]) {
      updates[`data.attributes.conditions.${statusId}`] = false;
      parentActor.update(updates);
    } else if (origin && parentActor.items.get(origin)) parentActor.items.get(origin).update({ "data.active": false });
    return returnVal;
  }

  get isTemporary() {
    const duration = this.data.duration.seconds ?? (this.data.duration.rounds || this.data.duration.turns) ?? 0;
    return duration > 0 || this.getFlag("core", "statusId") || this.getFlag("ffd20", "show");
  }
}
