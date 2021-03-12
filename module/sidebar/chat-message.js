export class ChatMessageFFD20 extends ChatMessage {
  get isRoll() {
    return this.data.type === CONST.CHAT_MESSAGE_TYPES.ROLL || this.getFlag("ffd20", "noRollRender");
  }

  /**
   * Return linked item or falsey
   * @type {ItemFFD20}
   */
  get itemSource() {
    let itemId = this.data.flags?.ffd20?.metadata?.item;
    let actor = this.constructor.getSpeakerActor(this.data.speaker);
    if (!itemId || !actor) return false;
    return actor.items.get(itemId);
  }
}

// Returns a promise to the created chatMessage or false if no command was executed
export const customRolls = function (message, speaker, rollData) {
  if (message.match(/^\/(\w+)(?: +([^#]+))(?:#(.+))?/)) {
    const type = RegExp.$1;
    const value = RegExp.$2;
    const flavor = RegExp.$3;
    const cMsg = CONFIG.ChatMessage.entityClass;

    speaker = speaker ?? cMsg.getSpeaker();
    const actor = cMsg.getSpeakerActor(speaker);
    const tokenId = speaker.token;

    switch (type.toUpperCase()) {
      case "DAMAGE":
      case "HEAL":
        rollData = rollData ?? actor?.getRollData() ?? {};
        var roll = new Roll(value, rollData).roll();
        var total = roll.total;

        return (async () => {
          const content = await renderTemplate("systems/ffd20/templates/chat/simple-damage.hbs", {
            tokenId: tokenId,
            isHealing: type.toUpperCase() === "HEAL",
            roll: {
              value: total,
              halfValue: Math.floor(total / 2),
              formula: value,
              json: escape(JSON.stringify(roll.toJSON())),
            },
          });
          const chatOptions = {
            type: CONST.CHAT_MESSAGE_TYPES.ROLL,
            roll: roll,
            flavor,
            speaker: speaker,
            rollMode: game.settings.get("core", "rollMode"),
            content: content,
          };
          cMsg.create(chatOptions);
        })();
    }
  }
  return false;
};
