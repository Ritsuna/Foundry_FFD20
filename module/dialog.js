export function dialogGetNumber({
  title = "Input Number",
  initial = null,
  min = Number.NEGATIVE_INFINITY,
  max = Number.POSITIVE_INFINITY,
} = {}) {
  return new Promise((resolve) => {
    let cancelled = true;

    new Dialog({
      title: title,
      content: `<input type="number" name="result" min="${min}" max="${max}" value="${initial || 0}">`,
      buttons: {
        ok: {
          label: "Submit",
          callback: (html) => {
            cancelled = false;
            const input = html.find('input[name="result"]');
            resolve(input.val());
          },
        },
      },
      close: () => {
        if (!cancelled) {
          resolve(initial);
        }
      },
    }).render(true);
  });
}

export const dialogGetActor = function (title = "", actors = []) {
  return new Promise((resolve) => {
    let cancelled = true;

    let content = "";
    actors.forEach((target) => {
      if (target instanceof Actor) {
        content += `<div class="dialog-get-actor flexrow" data-actor-id="${target._id}"><img src="${target.data.img}"><h2>${target.name}</h2></div>`;
      } else if (target instanceof Item) {
        content += `<div class="dialog-get-actor flexrow" data-item-id="${target._id}"><img src="${target.data.img}"><h2>${target.name}</h2></div>`;
      }
    });

    const dialog = new Dialog({
      title: title,
      content: content,
      buttons: {},
      close: () => {
        if (cancelled) {
          resolve(null);
        }
      },
    });

    dialog.activateListeners = function (html) {
      Dialog.prototype.activateListeners.call(this, html);

      html.find(".dialog-get-actor").click((event) => {
        const elem = event.currentTarget;
        const actorId = elem.dataset.actorId;
        if (actorId) {
          resolve({ type: "actor", id: actorId });
        } else {
          const itemId = elem.dataset.itemId;
          if (itemId) {
            resolve({ type: "item", id: itemId });
          }
        }
        this.close();
      });
    };

    dialog.render(true);
  });
};
