export class VisionPermissionSheet extends FormApplication {
  constructor(object, options) {
    super(object, options);

    // Register the sheet as an active Application for the Entity
    this.object.apps[this.appId] = this;
  }

  static get defaultOptions() {
    return mergeObject(super.defaultOptions, {
      classes: ["sheet", "vision-permission"],
      template: "systems/ffd20/templates/apps/vision-permission.hbs",
      width: 300,
      height: "auto",
      closeOnSubmit: true,
      submitOnClose: false,
      submitOnChange: false,
    });
  }

  get title() {
    return this.token && !this.token.data.actorLink
      ? `Vision Permissions: [Token] ${this.object.name}`
      : `Vision Permissions: ${this.object.name}`;
  }
  get isLinkedToken() {
    return this.token ? this.token.data.actorLink : false;
  }

  async _updateObject(event, formData) {
    await this.object.setFlag("ffd20", "visionPermission", formData);
    game.socket.emit("system.ffd20", { eventType: "redrawCanvas" });
  }

  async getData() {
    let data = super.getData();
    data = mergeObject(data, this.object.getFlag("ffd20", "visionPermission"));
    data.users = data.users || {};

    data.defaultLevels = [
      { level: "no", name: game.i18n.localize("FFD20.No") },
      { level: "yes", name: game.i18n.localize("FFD20.Yes") },
    ];
    data.levels = [{ level: "default", name: game.i18n.localize("FFD20.Default") }, ...data.defaultLevels];
    if (data.default == null) data.default = "no";

    data.users = game.users.reduce((cur, o) => {
      if (!o.isGM) {
        cur[o._id] = {
          user: o,
          level: data.users[o._id]?.level || "default",
          hidden: false,
        };
      }

      return cur;
    }, {});

    return data;
  }
}

export const hasTokenVision = function (token) {
  if (!token.actor) return false;
  if (token.actor.hasPerm(game.user, "OWNER")) return true;

  const visionFlag = token.actor.getFlag("ffd20", "visionPermission");
  if (!visionFlag || !visionFlag.users[game.user._id]) return false;
  if (visionFlag.users[game.user._id].level === "yes") return true;
  if (visionFlag.users[game.user._id].level === "default" && visionFlag.default === "yes") return true;

  return false;
};

Object.defineProperty(Actor.prototype, "visionPermissionSheet", {
  get() {
    if (!this._visionPermissionSheet) this._visionPermissionSheet = new VisionPermissionSheet(this);
    return this._visionPermissionSheet;
  },
});

const ActorDirectory__getEntryContextOptions = ActorDirectory.prototype._getEntryContextOptions;
ActorDirectory.prototype._getEntryContextOptions = function () {
  return ActorDirectory__getEntryContextOptions.call(this).concat([
    {
      name: "FFD20.Vision",
      icon: '<i class="fas fa-eye"></i>',
      condition: (li) => {
        return game.user.isGM;
      },
      callback: (li) => {
        const entity = this.constructor.collection.get(li.data("entityId"));
        if (entity) {
          const sheet = entity.visionPermissionSheet;
          if (sheet.rendered) {
            if (sheet._minimized) sheet.maximize();
            else sheet.close();
          } else sheet.render(true);
        }
      },
    },
  ]);
};

// const SightLayer__isTokenVisionSource = SightLayer.prototype._isTokenVisionSource;
SightLayer.prototype._isTokenVisionSource = function (token) {
  if (!this.tokenVision || !token.hasSight) return false;

  // Only display hidden tokens for the GM
  const isGM = game.user.isGM;
  if (token.data.hidden && !isGM) return false;

  // Always display controlled tokens which have vision
  if (token._controlled) return true;

  // Otherwise vision is ignored for GM users
  if (isGM) return false;

  // If a non-GM user controls no other tokens with sight, display sight anyways
  const canObserve = token.actor && hasTokenVision(token);
  if (!canObserve) return false;
  const others = canvas.tokens.controlled.filter((t) => !t.data.hidden && t.hasSight);
  return !others.length || game.settings.get("ffd20", "sharedVisionMode") === "1";
};

Object.defineProperty(Token.prototype, "observer", {
  get() {
    return game.user.isGM || hasTokenVision(this);
  },
});
