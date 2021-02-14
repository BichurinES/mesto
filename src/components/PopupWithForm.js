import Popup from './Popup.js';

export default class PopupWithForm extends Popup {
  constructor(popupSelector, openButtonSelector, handleSubmitForm, handleOpenForm) {
    super(popupSelector);
    this._handleSubmitForm = handleSubmitForm;
    this._handleOpenForm = handleOpenForm;
    this._openButton = document.querySelector(openButtonSelector);
    this._form = this._popupElement.querySelector('.popup__form');
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

  getValueFromName(inputName) {
    this._getInputValues();
    const findedInput = this._inputValues.find((inputObj) => {
      return inputName === inputObj.name;
    });
    return findedInput.value;
  }

  setEventListener() {
    super.setEventListener();
    this._form.addEventListener('submit', this._handleSubmitForm);
    this._openButton.addEventListener('click', this.open.bind(this));
  }

  open() {
    if (this._handleOpenForm) {
      this._handleOpenForm();
    };
    super.open();
  }

  close() {
    super.close();
    this._form.reset();
  }
}
