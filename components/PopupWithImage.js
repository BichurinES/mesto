import Popup from './Popup.js';

export default class PopupWithImage extends Popup {
  open(currentImgSrc, currentImgTitle) {
    this._popupImg = this._popupElement.querySelector('.popup__image'),
    this._popupImgCaption = this._popupElement.querySelector('.popup__image-caption');

    this._popupImg.src = currentImgSrc;
    this._popupImg.alt = currentImgTitle;
    this._popupImgCaption.textContent = currentImgTitle;

    super.open();
  }
}
