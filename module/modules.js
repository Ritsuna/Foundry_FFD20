/**************************************************************/
/* Module: Drag Ruler                                         */
/**************************************************************/
{
  Hooks.once("dragRuler.ready", (SpeedProvider) => {
    class FFD20SpeedProvider extends SpeedProvider {
      get colors() {
        return [
          { id: "walk", default: 0x00ff00, name: "SETTINGS.FFD20DragRulerWalk" },
          { id: "dash", default: 0xffff00, name: "SETTINGS.FFD20DragRulerDash" },
          { id: "run", default: 0xff8000, name: "SETTINGS.FFD20DragRulerRun" },
        ];
      }

      getRanges(token) {
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
          { range: baseSpeed, color: "walk" },
          { range: baseSpeed * 2, color: "dash" },
          { range: baseSpeed * runMultiplier, color: "run" },
        ];
      }
    }
    dragRuler.registerSystem("FFD20", FFD20SpeedProvider);
  });
}
