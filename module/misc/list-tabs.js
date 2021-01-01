export class ListTabs {
  constructor({ navSelector, contentSelector, initial, callback } = {}) {
    this.active = initial;
    this.callback = callback;
    this._navSelector = navSelector;
    this._nav = null;
    this._list = null;
    this._contentSelector = contentSelector;
    this._content = null;
  }

  bind(html) {
    // Identify navigation element
    this._nav = html.querySelector(this._navSelector);
    if (!this._nav) return;
    this._list = this._nav.querySelector("select.tabs");
    if (!this._list) return;

    // Set first active tab
    if (!this._list.querySelector("option.active") && !this.active) {
      const option = this._list.options[0];
      option.classList.toggle("active", true);
      this.active = option.dataset.tab;
    }

    // Identify content container
    if (!this._contentSelector) this._content = null;
    else if (html.matches(this._contentSelector)) this._content = html;
    else this._content = html.querySelector(this._contentSelector);

    // Initialize the active tab
    this.activate(this.active);

    // Register event
    this._list.addEventListener("change", this._onClickNav.bind(this));
  }

  activate(tabName, { triggerCallback = false } = {}) {
    // console.trace(tabName);

    // Validate the requested tab name
    const items = this._nav.querySelectorAll("select.tabs option");
    if (!items.length) return;
    const valid = Array.from(items).some((i) => i.dataset.tab === tabName);
    if (!valid) tabName = items[0].dataset.tab;

    // Change active tab
    for (let a of items) {
      if (a.dataset.tab === tabName) {
        this._list.value = a.value;
      }
    }

    // Change active content
    if (this._content) {
      const tabs = this._content.querySelectorAll(".tab");
      for (let t of tabs) {
        t.classList.toggle("active", t.dataset.tab === tabName);
      }
    }

    // Store the active tab
    this.active = tabName;

    // Optionally trigger the callback function
    if (triggerCallback) this.callback(null, this, tabName);
  }

  _onClickNav(event) {
    event.preventDefault();

    const a = event.currentTarget;
    const option = a.options[a.selectedIndex];
    const tabName = option.dataset.tab;
    if (tabName !== this.active) this.activate(tabName, { triggerCallback: true });
  }
}
