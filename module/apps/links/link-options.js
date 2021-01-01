import { LinksApp } from "../links.js";

export class LinkOptions extends FormApplication {
  static get defaultOptions() {
    return mergeObject(super.defaultOptions, {
      id: "link-options",
      classes: ["pf1"],
      title: game.i18n.localize("PF1.LinkOptionsTitle"),
      template: "systems/pf1/templates/apps/link-options.hbs",
      width: 320,
      height: "auto",
      submitOnClose: true,
      closeOnSubmit: true,
    });
  }

  getData() {
    const e = this.object;

    const linkTypes = LinksApp.getLinkTypes(e.source(), e.target());
    const linkTypesObj = linkTypes.reduce((cur, o) => {
      cur[o] = `Link_${o}`;
      return cur;
    }, {});

    const options = this._getLinkTypeCommandOptions(e, linkTypes[0]);
    const result = {
      linkTypes: linkTypesObj,
      options: options,
      isNumber: options != null && options.type === "number",
      isString: options != null && options.type === "string",
    };

    return result;
  }

  /**
   * @typedef CommandOptions
   * @type {object}
   * @property {string} type             - Either "number" or "string".
   * @property {number} [min]            - A minimum value for numbers.
   * @property {number} [max]            - A maximum value for numbers.
   * @property {string} title            - The title for the dialog.
   * @property {string|number} [initial] - The initial value.
   *
   * @param {object} e           - The edge connecting two nodes.
   * @param {string} defaultType - The default type if `e` has no type yet.
   * @returns {CommandOptions} The resulting options.
   */
  _getLinkTypeCommandOptions(e, defaultType) {
    let type = e.data("type") || defaultType;

    if (type === "minLevel") {
      return {
        type: "number",
        min: 1,
        max: 20,
        initial: e.data("value") || 1,
      };
    }

    return null;
  }
}
