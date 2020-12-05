// Объявляем глобальные переменные

let name = document.querySelector('.profile__title'),
    description = document.querySelector('.profile__subtitle'),
    closeButtons = Array.from(document.querySelectorAll('.popup__close-button')),
    editButton = document.querySelector('.profile__edit-button'),
    popupEditProfile = document.querySelector('.popup_type_edit-profile'),
    nameField = popupEditProfile.querySelector('.popup__form-field_type_name'),
    aboutField = popupEditProfile.querySelector('.popup__form-field_type_about'),
    editForm = popupEditProfile.querySelector('.popup__form'),
    addButton = document.querySelector('.profile__add-button'),
    popupAddPlace = document.querySelector('.popup_type_add-place'),
    placeTitle = popupAddPlace.querySelector('.popup__form-field_type_title'),
    placeImgLink = popupAddPlace.querySelector('.popup__form-field_type_link'),
    addForm = popupAddPlace.querySelector('.popup__form');

// Функционал кнопки редактирования профиля - открытие формы редактирования

function editProfile() {
  nameField.value = name.textContent;
  aboutField.value = description.textContent;
  popupEditProfile.classList.add('popup_opened');
}

// Функционал кнопки добавления нового места - открытие формы добавления

function showAddForm() {
  popupAddPlace.classList.add('popup_opened');
}

// Функционал кнопки закрытия формы по кнопке или по щелчку вне зоны формы

function closeForm(evt) {
  const popup = evt.target.closest('.popup');
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
editForm.addEventListener('submit', changeInfo);
addButton.addEventListener('click', showAddForm);
closeButtons.forEach((button) => {
  button.addEventListener('click', closeForm);
});
