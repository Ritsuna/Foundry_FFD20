export class ActorRestDialog extends BaseEntitySheet {
  static get defaultOptions() {
    const options = super.defaultOptions;
    return mergeObject(options, {
      id: "actor-flags",
      classes: ["ffd20lnrw", "actor-rest"],
      template: "systems/ffd20lnrw/templates/apps/actor-rest.hbs",
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
    return `${game.i18n.localize("ffd20lnrw.Rest")}: ${this.object.name}`;
  }

  /* -------------------------------------------- */

  /**
   * Update the Actor using the configured options
   * Remove/unset any flags which are no longer configured
   */
  async _updateObject(event, formData) {
    const actor = this.object;
    const actorData = actor.data.data;

    const restOptions = {
      /**
       * add rest options
       * Natural healing(8 hours rest, once per 24 hours): Restore HP equal to level plus con  and MP equal to caster level plus primary casting stat
Complete rest(24 hours of rest, no combat or hard training): Double natural healing
Aided Healing(8 hours with someone trained in heal 5 ranks or more looking after you): double natural healing
Aided Complete Rest(24 hours with someone trained in heal 5 ranks or more looking after you): 5x natural healing
There are items that boost natural healing that can be found.
       */
      restoreHealth: formData["restoreHealth"],
      longTermCare: formData["longTermCare"],
      aidedcare: formData["aidedcare"],
      restoreDailyUses: formData["restoreDailyUses"],
      hours: formData["hours"],
    };

    const proceed = await Hooks.call("actorRest", actor, restOptions);
    if (proceed === false) return;

    const updateData = {};
    // Restore health and ability damage add mp
    if (restOptions["restoreHealth"] === true) {
      const hd = actorData.attributes.hd.total;
      // const cl = actorData.attributes.hd.total;
      let heal = {
        hp: hd,
        mp: cl,
        abl: 1,
        nonlethal: restOptions.hours * hd,
      };
      if (restOptions["longTermCare"] === true && restOptions["aidedcare"] === false) {
        heal.hp *= 2;
        heal.mp *= 2;
        heal.abl *= 2;
      }
      if (restOptions["aidedcare"] === true && restOptions["longTermCare"] === false ) {
        heal.hp *= 2;
        heal.mp *= 2;
        heal.abl *= 2;
      }
      if (restOptions["longTermCare"] === true && restOptions["aidedcare"] === true) {
        heal.hp *= 5;
        heal.mp *= 5;
        heal.abl *= 5;
      }

      updateData["data.attributes.hp.value"] = Math.min(
        actorData.attributes.hp.value + heal.hp,
        actorData.attributes.hp.max
      );
      updateData["data.attributes.mp.value"] = Math.min(
        actorData.attributes.mp.value + heal.mp,
        actorData.attributes.mp.max
      );
      updateData["data.attributes.hp.nonlethal"] = Math.max(
        0,
        (actorData.attributes.hp.nonlethal || 0) - heal.nonlethal
      );
      for (let [key, abl] of Object.entries(actorData.abilities)) {
        let dmg = Math.abs(abl.damage);
        updateData[`data.abilities.${key}.damage`] = Math.max(0, dmg - heal.abl);
      }
    }

    let itemPromises = [];
    let spellbookUses = {};
    // Restore daily uses of spells, feats, etc. add limitbreak
    if (restOptions["restoreDailyUses"] === true) {

      // Update charged items
      for (let item of actor.items) {
        const itemData = item.data.data;

        if (itemData.uses && itemData.uses.per === "day" && itemData.uses.value !== itemData.uses.max) {
          const itemUpdateData = {
            "data.uses.value": itemData.uses.max,
          };
          itemPromises.push(item.update(itemUpdateData));
        } else if (item.type === "spell") {
          const spellbook = getProperty(actorData, `attributes.spells.spellbooks.${itemData.spellbook}`),
            isSpontaneous = spellbook.spontaneous;
          if (!isSpontaneous) {
            if (itemData.preparation.preparedAmount < itemData.preparation.maxAmount) {
              const itemUpdateData = {
                "data.preparation.preparedAmount": itemData.preparation.maxAmount,
              };
              itemPromises.push(item.update(itemUpdateData));
            }
            if (!getProperty(item.data, "data.domain")) {
              let sbUses =
                updateData[
                  `data.attributes.spells.spellbooks.${itemData.spellbook}.spells.spell${itemData.level}.value`
                ] || 0;
              sbUses -= itemData.preparation.maxAmount;
              updateData[
                `data.attributes.spells.spellbooks.${itemData.spellbook}.spells.spell${itemData.level}.value`
              ] = sbUses;
            }
          }
        }
      }

      for (let [key, spellbook] of Object.entries(actorData.attributes.spells.spellbooks)) {
        // Restore spellbooks using spell points
        if (spellbook.spellPoints.useSystem) {
          // Try to roll restoreFormula, fall back to restoring max spell points
          let restorePoints = spellbook.spellPoints.max;
          if (spellbook.spellPoints.restoreFormula) {
            try {
              const restoreRoll = new Roll(spellbook.spellPoints.restoreFormula, actor.getRollData()).roll().total;
              restorePoints = Math.min(spellbook.spellPoints.value + restoreRoll, spellbook.spellPoints.max);
            } catch (e) {
              console.error(e, spellbook.spellPoints.restoreFormula);
            }
          }
          updateData[`data.attributes.spells.spellbooks.${key}.spellPoints.value`] = restorePoints;
        }
      }
    }

    await Promise.all(itemPromises);
    return actor.update(updateData);
  }
}
