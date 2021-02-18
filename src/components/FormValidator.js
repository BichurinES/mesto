export default class FormValidator {
  constructor(settings, formSelector) {
    this._inputSelector = settings.inputSelector;
    this._submitButtonSelector = settings.submitButtonSelector;
    this._inactiveButtonClass = settings.inactiveButtonClass;
    this._inputErrorClass = settings.inputErrorClass;
    this._errorClass = settings.errorClass;
    this._form = document.querySelector(formSelector);
  }

  //Проверка валидности конкретного поля
  _checkInvalidInput(input) {
    return !input.validity.valid;
  }

  //Проверка валидности списка полей
  _hadInvalidInput(inputList) {
    return inputList.some(this._checkInvalidInput);
  }

  //Методы скрытия и показа поля ошибки
  _showInputError(form, input, inputErrorClass, errorClass, errorMsg) {
    const errorInput = form.querySelector(`.${input.id}-error`);
    input.classList.add(inputErrorClass);
    errorInput.textContent = errorMsg;
    errorInput.classList.add(errorClass);
  }

  _hideInputError(form, input, inputErrorClass, errorClass) {
    const errorInput = form.querySelector(`.${input.id}-error`);
    input.classList.remove(inputErrorClass);
    errorInput.classList.remove(errorClass);
    errorInput.textContent = '';
  }

  // Переключение состояния поля с ошибкой
  _toggleError(form, input, inputErrorClass, errorClass) {
    if (this._checkInvalidInput(input)) {
      this._showInputError(form, input, inputErrorClass, errorClass, input.validationMessage);
    } else {
      this._hideInputError(form, input, inputErrorClass, errorClass);
    }
  }

  // Переключение состояния кнопки
  _toggleBtn(inputList, btn, inactiveBtnClass) {
    if (this._hadInvalidInput(inputList)) {
      btn.classList.add(inactiveBtnClass);
      btn.disabled = true;
    } else {
      btn.classList.remove(inactiveBtnClass);
      btn.disabled = false;
    }
  }

  enableValidation() {
    const inputList = Array.from(this._form.querySelectorAll(this._inputSelector)),
          btn = this._form.querySelector(this._submitButtonSelector);

    this._toggleBtn(inputList, btn, this._inactiveButtonClass);

    inputList.forEach((input) => {
      input.addEventListener('input', () => {
        this._toggleError(this._form, input, this._inputErrorClass, this._errorClass);
        this._toggleBtn(inputList, btn, this._inactiveButtonClass);
      });
    });
  }
}
