export class FormValidator {
  constructor(settings, currentFormElem) {
    this.inputSelector = settings.inputSelector;
    this.submitButtonSelector = settings.submitButtonSelector;
    this.inactiveButtonClass = settings.inactiveButtonClass;
    this.inputErrorClass = settings.inputErrorClass;
    this.errorClass = settings.errorClass;
    this.form = currentFormElem;
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
    const inputList = Array.from(this.form.querySelectorAll(this.inputSelector)),
          btn = this.form.querySelector(this.submitButtonSelector);

    this._toggleBtn(inputList, btn, this.inactiveButtonClass);

    inputList.forEach((input) => {
      input.addEventListener('input', () => {
        this._toggleError(this.form, input, this.inputErrorClass, this.errorClass);
        this._toggleBtn(inputList, btn, this.inactiveButtonClass);
      });
    });
  }
}
