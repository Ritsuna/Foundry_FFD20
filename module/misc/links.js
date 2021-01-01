export const LinkFunctions = {
  charges: function (item, links) {
    for (let l of links) {
      const otherItem = this.items.find((o) => o._id === l.id);
      if (!otherItem) continue;

      otherItem.links.charges = item;
      otherItem.prepareLinks();
    }
  },
};
