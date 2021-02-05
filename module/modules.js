/**************************************************************/
/* Module: Drag Ruler                                         */
/**************************************************************/
{
  Hooks.once("dragRuler.ready", () => {
    dragRuler.registerSystem("ffd20lnrw", speedProvider);
  });

  const speedProvider = function (token, playerColor) {
    const baseSpeed = token.actor.data.data.attributes.speed.land.total;
    // Search through items for pieces of heavy armor that is equipped
    const heavyArmor = token.actor.items.find(
      (item) =>
        item.data.type === "equipment" &&
        item.data.data.equipmentType === "armor" &&
        item.data.data.equipped &&
        item.data.data.equipmentSubtype === "heavyArmor"
    );
    // Check for heavy load encumbrance
    const heavyLoad = token.actor.data.data.attributes.encumbrance.level >= 2;

    let runMultiplier = 4;
    if (heavyArmor || heavyLoad) runMultiplier = 3;
    return [
      { range: baseSpeed, color: playerColor },
      { range: baseSpeed * 2, color: 0xffff00 },
      { range: baseSpeed * runMultiplier, color: 0xff8000 },
    ];
  };
}
