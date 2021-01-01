export class ScriptEditor extends FormApplication {
  constructor(options = {}) {
    super(options);

    this.command = options.command || "";

    this._promises = {
      submit: [],
    };
  }

  static get defaultOptions() {
    return mergeObject(super.defaultOptions, {
      classes: ["pf1", "script-editor"],
      template: "systems/pf1/templates/apps/script-editor.hbs",
      width: 640,
      height: 560,
    });
  }

  getData() {
    const data = {};

    data.command = this.command || "";

    return data;
  }

  awaitResult() {
    let callback;
    const promise = new Promise((resolve) => {
      callback = resolve;
    });
    this._promises.submit.push({ callback, promise, resolved: false });
    return promise;
  }

  activateListeners(html) {
    html.find('button[type="submit"]').click(this._onSubmit.bind(this));
  }

  _updateObject(event, formData) {
    this.command = formData["command"];

    this.resolvePromises("submit", this.command);
  }

  resolvePromises(type, result) {
    for (let p of this._promises[type]) {
      if (!p.resolved) {
        p.callback(result);
        p.resolved = true;
      }
    }
  }

  async close(...args) {
    super.close(...args);

    this.resolvePromises("submit", null);
  }
}
