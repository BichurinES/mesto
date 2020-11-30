// Объявляем глобальные переменные

let popup = document.querySelector('.popup'),
    name = document.querySelector('.profile__title'),
    description = document.querySelector('.profile__subtitle'),
    nameField = popup.querySelector('.popup__form-field_type_name'),
    aboutField = popup.querySelector('.popup__form-field_type_about'),
    editButton = document.querySelector('.profile__edit-button'),
    closeButton = popup.querySelector('.popup__close-button'),
    form = popup.querySelector('.popup__form');

// Функционал кнопки редактирования профиля

function editProfile() {
  nameField.value = name.textContent;
  aboutField.value = description.textContent;
  popup.classList.add('popup_opened');
}

// Функционал кнопки закрытия формы по кнопке или по щелчку вне зоны формы

function closeForm() {
  popup.classList.remove('popup_opened');
}

// Функционал кнопки сохранения формы

function changeInfo(event) {
  event.preventDefault();
  name.textContent = nameField.value;
  description.textContent = aboutField.value;
  closeForm();
}

// Привязываем функции к событиям
editButton.addEventListener('click', editProfile);
closeButton.addEventListener('click', closeForm);
form.addEventListener('submit', changeInfo);
