export default class Popup {
  constructor(popupSelector) {
    this._popupElement = document.querySelector(popupSelector);
    this._handleEscClose = this._handleEscClose.bind(this);
  }

  _handleEscClose(evt) {
    if (evt.key === 'Escape') {
      evt.preventDefault();
      this.close();
    }
  }

  _handleClickOutside(evt) {
    if (evt.target === this._popupElement) {
      this.close();
    }
  }

  open() {
    this._popupElement.classList.add('popup_opened');
    document.addEventListener('keydown', this._handleEscClose);
  }

  close() {
    this._popupElement.classList.remove('popup_opened');
    document.removeEventListener('keydown', this._handleEscClose);
  }

  setEventListener() {
    this._popupElement
      .querySelector('.popup__close-button')
      .addEventListener('click', this.close.bind(this));

    this._popupElement
      .addEventListener('mousedown', this._handleClickOutside.bind(this));
  }
}
