export class PF1_HelpBrowser extends Application {
  constructor(...args) {
    super(...args);

    /**
     * @property
     * @type String
     * The HTML content of the current page.
     */
    this.pageContent = "";

    /**
     * @property
     * @type Number
     * Maximum number of pages to track in history.
     */
    this.maxHistory = 20;

    /**
     * @property
     * @type Array
     * History list.
     */
    this.history = [];

    /**
     * @property
     * @type Number
     * @private
     * The current index in history.
     */
    this._historyIndex = 0;

    /**
     * @property
     * @type Number
     * @private
     * The scroll index of the nav element.
     */
    this._navScroll = 0;

    /**
     * @property
     * @type String
     * @Private
     * The URL of the current page.
     */
    this._currentURL = "";
  }

  static get defaultOptions() {
    return mergeObject(super.defaultOptions, {
      classes: ["pf1", "help-browser"],
      template: "systems/pf1/templates/apps/help-browser.hbs",
      minWidth: 800,
      minHeight: 450,
      width: 960,
      height: 600,
      resizable: true,
    });
  }

  get title() {
    return game.i18n.localize("PF1.Help.Label");
  }

  get currentURL() {
    return this.history[this._historyIndex].url;
  }

  async getData() {
    const data = await super.getData();

    data.pageContent = this.pageContent;

    data.hasHistoryBack = this.history.length > this._historyIndex + 1;
    data.hasHistoryForward = this._historyIndex > 0;

    data.nav = await renderTemplate("systems/pf1/help/nav.hbs", data);

    return data;
  }

  async openURL(url, { addToHistory = true, header = "" } = {}) {
    // Alter URL
    url = this.fixURL(url);

    if (url !== this._currentURL) {
      // Add new page to history
      if (addToHistory) {
        this.addHistory(url);
        this._historyIndex = 0;
      }

      // Render new page
      this.pageContent = await renderTemplate(url, this.getData());
      await this._render(true);
    }
    this._currentURL = url;

    // Scroll to specified header
    const baseElem = this.element.find(".content")[0];
    if (header) {
      const elem = baseElem.querySelector(`.${header}`);
      if (elem) {
        window.setTimeout(() => {
          baseElem.scrollTop = elem.offsetTop;
        }, 25);
      }
    } else {
      baseElem.scrollTop = 0;
    }
  }

  async _render(...args) {
    await super._render(...args);

    const el = this.element[0];
    el.style.minWidth = `${this.options.minWidth}px`;
    el.style.minHeight = `${this.options.minHeight}px`;
  }

  addHistory(url) {
    const elem = this.element.find(".content")[0];
    const scrollTop = elem ? elem.scrollTop : 0;
    const obj = {
      url: url,
      scrollTop: scrollTop,
    };

    this.history = this.history.slice(this._historyIndex);

    this.history.unshift(obj);
    if (this.history.length > this.maxHistory) {
      this.history.splice(20, this.history.length - this.maxHistory);
    }
  }

  /**
   * @param {Number} index - The specific index in history to go to. Larger values are further down history.
   */
  async goToHistory(index) {
    if (this.history[this._historyIndex]) {
      const elem = this.element.find(".content")[0];
      this.history[this._historyIndex].scrollTop = elem ? elem.scrollTop : 0;
    }

    this._historyIndex = index;
    await this.openURL(this.currentURL, { addToHistory: false });

    window.setTimeout(() => {
      this.element.find(".content")[0].scrollTop = this.history[index].scrollTop || 0;
    }, 25);
  }

  backInHistory() {
    if (this._historyIndex < this.maxHistory) {
      this.goToHistory(this._historyIndex + 1);
    }
  }

  forwardInHistory() {
    if (this._historyIndex > 0) {
      this.goToHistory(this._historyIndex - 1);
    }
  }

  fixURL(url) {
    let result = url;

    if (url.match(/^.+?:\/\/.+\//)) {
      const arr = url.split("/");
      result = arr.slice(3).join("/");
    }

    return result;
  }

  activateListeners(html) {
    // Translate links
    {
      const links = html.find("a[href]");
      for (let l of links) {
        const href = l.href;
        l.removeAttribute("href");
        l.addEventListener("click", () => {
          const header = l.dataset?.header || "";
          this.openURL(href, { header: header });
        });
      }
    }

    // History buttons
    html.find(".history-back").click(this.backInHistory.bind(this));
    html.find(".history-forward").click(this.forwardInHistory.bind(this));

    html.find("nav").on("scroll", (event) => {
      console.log(event, event.currentTarget);
    });
  }
}
