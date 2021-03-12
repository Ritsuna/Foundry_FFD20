export class TooltipPF extends Application {
  constructor() {
    super();

    this.mousePos = {
      x: 0,
      y: 0,
    };
    document.addEventListener("mousemove", (event) => {
      this.mousePos.x = event.clientX;
      this.mousePos.y = event.clientY;
      if (this.onMouse && !this.hidden) this._setPosition();
    });

    this.objects = [];

    this.forceHideGMInfo = false;

    this.lock = {
      new: false,
      old: false,
    };
  }

  static get defaultOptions() {
    return mergeObject(super.defaultOptions, {
      template: "systems/ffd20/templates/hud/tooltip.hbs",
      popOut: false,
    });
  }

  get config() {
    return game.settings.get("ffd20", "tooltipConfig");
  }

  get worldConfig() {
    return game.settings.get("ffd20", "tooltipWorldConfig");
  }

  get anchor() {
    return this.config.anchor;
  }

  get offset() {
    return this.config.offset;
  }

  get onMouse() {
    return this.config.onMouse;
  }

  get hidden() {
    return this.element[0]?.style.visibility === "hidden";
  }

  bind(object) {
    if (this.lock.new) return;

    if (this.objects.indexOf(object) === -1) {
      this.objects.push(object);
      this.render(true);
    }
  }

  unbind(object) {
    if (this.lock.old) return;

    const idx = this.objects.indexOf(object);
    if (idx >= 0) {
      this.objects.splice(idx, 1);
      if (this.objects.length === 0) {
        this.hide();
      } else {
        this.render();
      }
    }
  }

  clearBinds() {
    this.objects = [];
    this.hide();
  }

  get object() {
    return this.objects[0];
  }

  async getData() {
    if (typeof this.object === "string") {
      return { stringContent: this.object };
    } else if (this.object instanceof Token) {
      return {
        actorData: this.getTokenData(this.object),
      };
    } else if (this.object instanceof Actor) {
      return {
        actorData: this.getActorData(this.object),
      };
    }

    return {};
  }

  getTokenData(token) {
    const data = this.getActorData(token.actor);
    if (!data) return null;

    data.name = token.data.name;
    if ((game.user.isGM && this.forceHideGMInfo) || (!game.user.isGM && !token.actor.hasPerm(game.user, "OBSERVER"))) {
      const tooltipName = getProperty(token.actor.data, "data.details.tooltip.name");
      data.name = tooltipName || token.data.name;

      if (
        (this.worldConfig.hideActorName === true && !tooltipName) ||
        getProperty(token.actor.data, "data.details.tooltip.hideName") === true
      ) {
        data.name = this.worldConfig.hideActorNameReplacement || "???";
      }
    }

    return data;
  }

  getActorData(actor) {
    if (!actor) return null;

    const data = {
      data: actor.data,
      name: actor.data.name,
    };

    if (!(game.user.isGM && !this.forceHideGMInfo)) {
      data.name = getProperty(actor.data, "data.details.tooltip.name") || actor.data.name;
    }

    data.isOwner = game.user.isGM || actor.owner;
    if (!data.isOwner) data.name = "???";
    this.getPortrait(data, actor.img);

    // Get conditions
    if (
      (game.user.isGM && !this.forceHideGMInfo) ||
      actor.owner ||
      (!getProperty(actor.data, "data.details.tooltip.hideConditions") &&
        !getProperty(this.worldConfig, "hideConditions"))
    ) {
      const conditions = getProperty(actor.data, "data.attributes.conditions") || {};
      for (const [ck, cv] of Object.entries(conditions)) {
        if (cv === true) {
          data.conditions = data.conditions || [];
          data.conditions.push({
            label: CONFIG.FFD20.conditions[ck],
            icon: CONFIG.FFD20.conditionTextures[ck],
          });
        }
      }
    }

    // Get buffs
    if (
      (game.user.isGM && !this.forceHideGMInfo) ||
      actor.owner ||
      (!getProperty(actor.data, "data.details.tooltip.hideBuffs") && !getProperty(this.worldConfig, "hideBuffs"))
    ) {
      const buffs = actor.items.filter((i) => i.data.data.active && !i.data.data.hideFromToken);
      for (const b of buffs) {
        data.buffs = data.buffs || [];
        data.buffs.push({
          label: b.name,
          icon: b.img,
          level: b.data.data.level,
        });
      }
    }

    // Get held items
    if (
      (game.user.isGM && !this.forceHideGMInfo) ||
      actor.owner ||
      (!getProperty(actor.data, "data.details.tooltip.hideHeld") && !getProperty(this.worldConfig, "hideHeld"))
    ) {
      const held = actor.items.filter((i) => {
        if (!["weapon", "equipment"].includes(i.type)) return false;
        if (!i.data.data.equipped) return false;
        if (i.type === "equipment") {
          if (i.data.data.equipmentType !== "shield") return false;
        }
        return true;
      });

      for (const i of held) {
        data.held = data.held || [];
        data.held.push({
          label: i.getName(this.forceHideGMInfo),
          icon: i.img,
        });
      }
    }

    // Get armor
    if (
      (game.user.isGM && !this.forceHideGMInfo) ||
      actor.owner ||
      (!getProperty(actor.data, "data.details.tooltip.hideArmor") && !getProperty(this.worldConfig, "hideArmor"))
    ) {
      const armor = actor.items.filter((i) => {
        if (i.type !== "equipment") return false;
        if (!i.data.data.equipped) return false;
        if (i.data.data.equipmentType !== "armor") return false;
        return true;
      });

      for (const i of armor) {
        data.armor = data.armor || [];
        data.armor.push({
          label: i.getName(this.forceHideGMInfo),
          icon: i.img,
        });
      }
    }

    // Get clothing
    if (
      (game.user.isGM && !this.forceHideGMInfo) ||
      actor.owner ||
      (!getProperty(actor.data, "data.details.tooltip.hideClothing") && !getProperty(this.worldConfig, "hideClothing"))
    ) {
      const clothing = actor.items.filter((i) => {
        if (i.type !== "equipment") return false;
        if (!i.data.data.equipped) return false;
        if (i.data.data.equipmentType !== "misc") return false;
        if (i.data.data.equipmentSubtype !== "clothing") return false;
        return true;
      });

      for (const i of clothing) {
        data.clothing = data.clothing || [];
        data.clothing.push({
          label: i.getName(this.forceHideGMInfo),
          icon: i.img,
        });
      }
    }

    return data;
  }

  getPortrait(data, url) {
    if (getProperty(this.config, "portrait.hide") === true || getProperty(this.worldConfig, "portrait.hide") === true)
      return;

    data.portrait = {
      maxWidth: getProperty(this.config, "portrait.maxSize.width") || 100,
      maxHeight: getProperty(this.config, "portrait.maxSize.height") || 100,
      url: url,
    };
  }

  _setPosition() {
    if (!this.element[0]) return;

    const v = canvas.app.view.getBoundingClientRect();
    const elSize = this.element[0].getBoundingClientRect();
    const position = {
      width: elSize.width,
      height: elSize.height,
      left: 0,
      top: 0,
    };

    const sb = ui.sidebar.element[0].getBoundingClientRect();
    const mw = v.width - position.width - sb.width,
      mh = v.height - position.height;

    // Calculate final position
    if (this.onMouse) {
      const minPos = {
        x: v.left,
        y: v.top,
      };
      const maxPos = {
        x: minPos.x + mw,
        y: minPos.y + mh,
      };
      const pos = {
        x: this.mousePos.x - position.width + position.width * this.anchor.x + this.offset.x,
        y: this.mousePos.y - position.height + position.height * this.anchor.y + this.offset.y,
      };
      position.left = Math.max(minPos.x, Math.min(maxPos.x, pos.x));
      position.top = Math.max(minPos.y, Math.min(maxPos.y, pos.y));
    } else {
      position.left = v.left + mw * this.anchor.x + this.offset.x;
      position.top = v.top + mh * this.anchor.y + this.offset.y;
    }

    this.element.css(position);
  }

  show() {
    if (this.objects.length === 0) return;
    if (this.config.hideWithoutKey && !game.keyboard.isDown("Control")) return;
    if (!this.config.hideWithoutKey && game.keyboard.isDown("Control")) return;
    if (getProperty(this.config, "disable") === true || getProperty(this.worldConfig, "disable") === true) return;

    this.element.css("visibility", "visible");
  }

  hide() {
    this.element.css("visibility", "hidden");
  }

  async _render(force = false, options = {}) {
    const p = super._render(force, options);

    await p;
    this.hide();

    // Required to re-align portraits
    const loadableContent = this.element.find("img");
    const loadableContentCount = loadableContent.length;
    if (loadableContentCount > 0) {
      let loadedContentCount = 0;
      loadableContent.one("load", () => {
        loadedContentCount++;
        if (loadedContentCount === loadableContentCount && this.objects.length) {
          this._setPosition();
          this.show();
        }
      });
    } else if (this.objects.length) {
      this._setPosition();
      this.show();
    }
  }

  activateListeners(html) {
    html.find(".controls .close").click(() => {
      this.clearBinds();
    });
  }
}
