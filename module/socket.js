export function initializeSocket() {
  game.socket.on("system.pf1", async (args) => {
    switch (args.eventType) {
      case "cleanItemLink": {
        // Get actor
        const actor = await fromUuid(args.actorUUID);
        // Get item
        const parentItemData = await fromUuid(args.itemUUID);
        const parentItem = actor.items.find((o) => o._id === parentItemData._id);
        // Get link data
        const link = args.link;
        const linkType = args.linkType;
        // Clean item links
        parentItem._cleanLink(link, linkType);
        break;
      }
      case "redrawCanvas":
        canvas.draw();
        break;
    }
  });
}
