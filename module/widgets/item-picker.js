export class Widget_ItemPicker {
  constructor(callback, { items, columns = 3 } = {}) {
    /**
     * @property
     * The HTML element that represents this widget.
     */
    this.element = null;

    /**
     * @property
     * The callback to fire if an item is clicked.
     */
    this.callback = callback;

    /**
     * @typedef Widget_ItemPicker_Item
     * @type {Object}
     * @property {string} value
     * @property {string} label
     */
    /**
     * @property
     * @type Widget_ItemPicker_Item[]
     * The items in this widget.
     */
    this._items = items;

    /**
     * @property
     * @type {number}
     * The maximum amount of columns shown.
     */
    this.columns = columns;
  }

  render(parentElem) {
    // Generate widget
    const rootElem = $($.parseHTML('<div class="widget item-picker"></div>'));
    // Add rows
    let rowElem;
    for (let a = 0; a < this._items.length; a++) {
      const item = this._items[a];
      if (a % this.columns === 0) {
        rowElem = $($.parseHTML('<div class="row"></div>'));
        rootElem.append(rowElem);
      }

      const itemElem = $($.parseHTML(`<div class="item" value="${item.value}">${item.label}</div>`));
      const widthRate = Math.floor(10000 / this.columns) / 100;
      itemElem.css("flex", `0 0 calc(${widthRate}% - 4px)`);
      rowElem.append(itemElem);
    }

    // Replace parent element
    if (!(parentElem instanceof jQuery)) parentElem = $(parentElem);
    rootElem.css("position", "absolute");
    rootElem.css("left", `${parentElem[0].offsetLeft}px`);
    rootElem.css("position", `${parentElem[0].offsetBottom}px`);
    parentElem.parent().append(rootElem);

    this.element = rootElem;

    window.setTimeout(() => {
      this.activateListeners(rootElem);
    }, 10);
  }

  activateListeners(html) {
    // Click item callback
    html.find(".item").click(this._onClickItem.bind(this));

    // Cancel widget
    this._cancelCallback = this._onCancel.bind(this);
    document.addEventListener("click", this._cancelCallback);
  }

  _onCancel(event) {
    event.preventDefault();

    // Don't cancel if this widget was clicked
    const target = event.target;
    let node = target;
    if (node === this.element[0]) return;
    while (node.parentNode) {
      if (node === this.element[0]) return;
      node = node.parentNode;
    }

    this.cancel();
  }

  _onClickItem(event) {
    event.preventDefault();
    const a = event.currentTarget;

    this.callback($(a).attr("value"));
  }

  cancel() {
    document.removeEventListener("click", this._cancelCallback);
    this.element.remove();
  }
}
