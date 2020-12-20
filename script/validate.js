const validateSettings = {
        formSelector: '.popup__form',
        inputSelector: '.popup__form-field',
        submitButtonSelector: '.popup__submit-button',
        inactiveButtonClass: 'popup__submit-button_type_disabled',
        inputErrorClass: 'popup__form-field_type_error',
        errorClass: 'popup__error_visible'
      };

//Проверка валидности конкретного поля
function checkInvalidInput(input) {
  return !input.validity.valid;
}

//Проверка валидности списка полей
function hadInvalidInput(inputList) {
  return inputList.some(checkInvalidInput);
}

//Функции скрытия и показа поля ошибки

function showInputError(form, input, inputErrorClass, errorClass, errorMsg) {
  const errorInput = form.querySelector(`.${input.id}-error`);
  input.classList.add(inputErrorClass);
  errorInput.textContent = errorMsg;
  errorInput.classList.add(errorClass);
}

function hideInputError(form, input, inputErrorClass, errorClass) {
  const errorInput = form.querySelector(`.${input.id}-error`);
  input.classList.remove(inputErrorClass);
  errorInput.classList.remove(errorClass);
  errorInput.textContent = '';
}

// Переключение состояния поля с ошибкой
function toggleError(form, input, inputErrorClass, errorClass) {
  if (checkInvalidInput(input)) {
    showInputError(form, input, inputErrorClass, errorClass, input.validationMessage);
  } else {
    hideInputError(form, input);
  }
}

// Переключение состояния кнопки
function toggleBtn(inputList, btn, inactiveBtnClass) {
  if (hadInvalidInput(inputList)) {
    btn.classList.add(inactiveBtnClass);
    btn.disabled = true;
  } else {
    btn.classList.remove(inactiveBtnClass);
    btn.disabled = false;
  }
}

function enableValidation(settings) {
  const forms = Array.from(document.querySelectorAll(settings.formSelector));
  forms.forEach((form) => {
    const inputList = Array.from(form.querySelectorAll(settings.inputSelector)),
          btn = form.querySelector(settings.submitButtonSelector);

    toggleBtn(inputList, btn, settings.inactiveButtonClass);

    inputList.forEach((input) => {
      input.addEventListener('input', () => {
        toggleError(form, input, settings.inputErrorClass, settings.errorClass);
        toggleBtn(inputList, btn, settings.inactiveButtonClass)
      });
    });
  });
}

enableValidation(validateSettings);

// {
//   formSelector: '.popup__form',
//   inputSelector: '.popup__input',
//   submitButtonSelector: '.popup__button',
//   inactiveButtonClass: 'popup__button_disabled',
//   inputErrorClass: 'popup__input_type_error',
//   errorClass: 'popup__error_visible'
// }
