export default class Section {
  constructor({items, render}, containerSelector) {
    this._items = items;
    this._render = render;
    this._container = document.querySelector(containerSelector);
  }

  addItem(item, isArray) {
    if (isArray) {
      this._container.appendChild(item);
    } else {
      this._container.prepend(item);
    }
  }

  renderItems() {
    this._items.forEach((item) => {
      this._render(item, true);
    });
    this._items = [];
  }
}
