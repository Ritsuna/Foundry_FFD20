export class ChatMessageffd20lnrw extends ChatMessage {
  get isRoll() {
    return this.data.type === CONST.CHAT_MESSAGE_TYPES.ROLL || this.getFlag("ffd20lnrw", "noRollRender");
  }

  /**
   * Return linked item or falsey
   * @type {Itemffd20lnrw}
   */
  get itemSource() {
    let itemId = this.data.flags?.ffd20lnrw?.metadata?.item;
    let actor = this.constructor.getSpeakerActor(this.data.speaker);
    if (!itemId || !actor) return false;
    return actor.items.get(itemId);
  }
}
