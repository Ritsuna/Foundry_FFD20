import { ActorFFD20 } from "./actor/entity.js";

/* -------------------------------------------- */

/**
 * Override the default Initiative formula to customize special behaviors of the D&D5e system.
 * Apply advantage, proficiency, or bonuses where appropriate
 * Apply the dexterity score as a decimal tiebreaker if requested
 * See Combat._getInitiativeFormula for more detail.
 */
export const _getInitiativeFormula = function (actor) {
  if (CONFIG.Combat.initiative.formula) var parts = CONFIG.Combat.initiative.formula.split(/\s*\+\s*/);
  else parts = ["1d20", "@attributes.init.total", "@attributes.init.total / 100"];
  if (!actor) return parts[0] ?? "0";
  return parts.filter((p) => p !== null).join(" + ");
};

Combat.showInitiativeDialog = function (formula = null) {
  return new Promise((resolve) => {
    let template = "systems/ffd20/templates/chat/roll-dialog.hbs";
    let rollMode = game.settings.get("core", "rollMode");
    let dialogData = {
      formula: formula ? formula : "",
      rollMode: rollMode,
      rollModes: CONFIG.Dice.rollModes,
    };
    // Create buttons object
    let buttons = {
      normal: {
        label: "Roll",
        callback: (html) => {
          rollMode = html.find('[name="rollMode"]').val();
          const bonus = html.find('[name="bonus"]').val();
          resolve({ rollMode: rollMode, bonus: bonus });
        },
      },
    };
    // Show dialog
    renderTemplate(template, dialogData).then((dlg) => {
      new Dialog(
        {
          title: game.i18n.localize("FFD20.InitiativeBonus"),
          content: dlg,
          buttons: buttons,
          default: "normal",
          close: (html) => {
            resolve({ stop: true });
          },
        },
        {}
      ).render(true);
    });
  });
};

export const _rollInitiative = async function (ids, { formula = null, updateTurn = true, messageOptions = {} } = {}) {
  // Structure input data
  ids = typeof ids === "string" ? [ids] : ids;
  const currentId = this.combatant._id;
  if (!formula) formula = _getInitiativeFormula(this.combatant.actor);

  let overrideRollMode = null,
    bonus = "",
    stop = false;
  if (keyboard.isDown("Shift")) {
    const dialogData = await Combat.showInitiativeDialog(formula);
    overrideRollMode = dialogData.rollMode;
    bonus = dialogData.bonus || "";
    stop = dialogData.stop || false;
  }

  if (stop) return this;

  // Iterate over Combatants, performing an initiative roll for each
  const [updates, messages] = await ids.reduce(
    async (results, id, i) => {
      const result = await results;
      let [updates, messages] = result;

      // Get Combatant data
      const c = this.getCombatant(id);
      if (!c) return results;
      const actorData = c.actor ? c.actor.data.data : {};
      formula = formula || this._getInitiativeFormula(c.actor ? c.actor : null);

      actorData.bonus = bonus;
      // Add bonus
      if (bonus.length > 0 && i === 0) {
        formula += " + @bonus";
      }

      // Roll initiative
      const rollMode =
        overrideRollMode != null
          ? overrideRollMode
          : messageOptions.rollMode || c.token.hidden || c.hidden
          ? "gmroll"
          : "roll";
      const roll = new Roll(formula, actorData).roll();
      updates.push({ _id: id, initiative: roll.total });

      let [notes, notesHTML] = c.actor.getInitiativeContextNotes();

      // Create roll template data
      const rollData = mergeObject(
        {
          user: game.user._id,
          formula: roll.formula,
          tooltip: await roll.getTooltip(),
          total: roll.total,
        },
        notes.length > 0 ? { hasExtraText: true, extraText: notesHTML } : {}
      );

      // Create chat data
      let chatData = mergeObject(
        {
          user: game.user._id,
          type: CONST.CHAT_MESSAGE_TYPES.CHAT,
          rollMode: rollMode,
          sound: CONFIG.sounds.dice,
          speaker: {
            scene: canvas.scene._id,
            actor: c.actor ? c.actor._id : null,
            token: c.token._id,
            alias: c.token.name,
          },
          flavor: game.i18n.localize("FFD20.RollsForInitiative").format(c.token.name),
          roll: roll,
          content: await renderTemplate("systems/ffd20/templates/chat/roll-ext.hbs", rollData),
        },
        messageOptions
      );

      // Handle different roll modes
      switch (chatData.rollMode) {
        case "gmroll":
          chatData["whisper"] = game.users.entities.filter((u) => u.isGM).map((u) => u._id);
          break;
        case "selfroll":
          chatData["whisper"] = [game.user._id];
          break;
        case "blindroll":
          chatData["whisper"] = game.users.entities.filter((u) => u.isGM).map((u) => u._id);
          chatData["blind"] = true;
      }

      if (i > 0) chatData.sound = null; // Only play 1 sound for the whole set
      messages.push(chatData);

      // Return the Roll and the chat data
      return results;
    },
    [[], []]
  );
  if (!updates.length) return this;

  // Update multiple combatants
  await this.updateEmbeddedEntity("Combatant", updates);

  // Ensure the turn order remains with the same combatant
  if (updateTurn) await this.update({ turn: this.turns.findIndex((t) => t._id === currentId) });

  // Create multiple chat messages
  await ChatMessage.create(messages);

  // Return the updated Combat
  return this;
};

/* -------------------------------------------- */

/**
 * This function is used to hook into the Chat Log context menu to add additional options to each message
 * These options make it easy to conveniently apply damage to controlled tokens based on the value of a Roll
 *
 * @param {HTMLElement} html    The Chat Message being rendered
 * @param {Array} options       The Array of Context Menu options
 *
 * @return {Array}              The extended options Array including new context choices
 */
export const addChatMessageContextOptions = function (html, options) {
  let canApply = (li) => canvas.tokens.controlled.length && li.find(".damage-roll .dice-total").length;
  let canApplyCritical = (li) => canvas.tokens.controlled.length && li.find(".crit-damage-roll .dice-total").length;
  options.push(
    {
      name: game.i18n.localize("FFD20.ApplyDamage"),
      icon: '<i class="fas fa-user-minus"></i>',
      condition: canApply,
      callback: (li) => ActorFFD20.applyDamage(li, 1),
    },
    {
      name: game.i18n.localize("FFD20.ApplyHealing"),
      icon: '<i class="fas fa-user-plus"></i>',
      condition: canApply,
      callback: (li) => ActorFFD20.applyDamage(li, -1),
    },
    {
      name: game.i18n.localize("FFD20.ApplyCriticalDamage"),
      icon: '<i class="fas fa-user-minus"></i>',
      condition: canApplyCritical,
      callback: (li) => ActorFFD20.applyDamage(li, 1, true),
    },
    {
      name: game.i18n.localize("FFD20.ApplyCriticalHealing"),
      icon: '<i class="fas fa-user-minus"></i>',
      condition: canApplyCritical,
      callback: (li) => ActorFFD20.applyDamage(li, -1, true),
    }
  );
  return options;
};

const duplicateCombatantInitiativeDialog = function (combat, combatantId) {
  const combatant = combat.combatants.filter((o) => o._id === combatantId)[0];
  if (!combatant) {
    ui.notifications.warn(game.i18n.localize("FFD20.WarningNoCombatantFound"));
    return;
  }

  new Dialog({
    title: `${game.i18n.localize("FFD20.DuplicateInitiative")}: ${combatant.actor.name}`,
    content: `<div class="flexrow form-group">
      <label>${game.i18n.localize("FFD20.InitiativeOffset")}</label>
      <input type="number" name="initiativeOffset" value="0"/>
    </div>`,
    buttons: {
      confirm: {
        label: game.i18n.localize("FFD20.Confirm"),
        callback: (html) => {
          const offset = parseFloat(html.find('input[name="initiativeOffset"]').val());
          const prevInitiative = combatant.initiative != null ? combatant.initiative : 0;
          const newInitiative = prevInitiative + offset;
          duplicateCombatantInitiative(combat, combatant, newInitiative);
        },
      },
      cancel: {
        label: game.i18n.localize("Cancel"),
      },
    },
    default: "confirm",
  }).render(true);
};

export const duplicateCombatantInitiative = function (combat, combatant, initiative) {
  console.debug("Duplicating combatant:", combatant);
  combat.createEmbeddedEntity("Combatant", mergeObject(combatant, { initiative: initiative }, { inplace: false }));
};

export const addCombatTrackerContextOptions = function (result) {
  result.push({
    name: "FFD20.DuplicateInitiative",
    icon: '<i class="fas fa-dice-d20"></i>',
    callback: (li) => duplicateCombatantInitiativeDialog.call(this, this.combat, li.data("combatant-id")),
  });
};
