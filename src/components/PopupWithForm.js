import Popup from './Popup.js';

export default class PopupWithForm extends Popup {
  constructor({popupSelector, openButtonSelector, loadingText, handleSubmitForm, handleOpenForm}) {
    super(popupSelector);
    this._handleSubmitForm = handleSubmitForm;
    this._handleOpenForm = handleOpenForm;
    this._openButton = openButtonSelector ? document.querySelector(openButtonSelector) : null;
    this._form = this._popupElement.querySelector('.popup__form');
    this._submitButton = this._form.querySelector('.popup__submit-button');
    this._loadingText = loadingText;
    this._defaultTextBtn = this._submitButton.value;
  }

  _getInputValues() {
    const inputs = Array.from(this._popupElement.querySelectorAll('.popup__form-field'));
    this._inputValues = inputs.map((input) => {
      return {
        name: input.name,
        value: input.value
      }
    });
  }

  showLoadingText() {
    this._submitButton.value = this._loadingText;
  }

  hideLoadingText() {
    this._submitButton.value = this._defaultTextBtn;
  }

  isHaveField() {
    return this._form.querySelector('.popup__form-field') ? true : false;
  }

  getValueFromName(inputName) {
    this._getInputValues();
    const findedInput = this._inputValues.find((inputObj) => {
      return inputName === inputObj.name;
    });
    return findedInput.value;
  }

  setEventListener() {
    super.setEventListener();
    this._form.addEventListener('submit', (evt) => {
      evt.preventDefault();
      if (this.isHaveField()) {
        this.showLoadingText();
      }
      this._handleSubmitForm();
    });
    if (this._openButton) {
      this._openButton.addEventListener('click', this.open.bind(this));
    }
  }

  open() {
    if (this._handleOpenForm) {
      this._handleOpenForm();
    };
    super.open();
  }

  close() {
    super.close();
    if (this.isHaveField()) {
      this.hideLoadingText()
      this._form.reset();
      this._submitButton.classList.add('popup__submit-button_type_disabled');
      this._submitButton.disabled = true;
    }
    if (this.currentCard) {
      this.currentCard = null;
    }
  }
}
