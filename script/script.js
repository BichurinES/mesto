import {Card} from './card.js';

// Объявляем глобальные переменные
const name = document.querySelector('.profile__title'),
      description = document.querySelector('.profile__subtitle'),
      closeButtons = Array.from(document.querySelectorAll('.popup__close-button')),
      popups = Array.from(document.querySelectorAll('.popup')),
      placesList = document.querySelector('.places__list'),
      editButton = document.querySelector('.profile__edit-button'),
      popupEditProfile = document.querySelector('.popup_type_edit-profile'),
      nameField = popupEditProfile.querySelector('.popup__form-field_type_name'),
      aboutField = popupEditProfile.querySelector('.popup__form-field_type_about'),
      editForm = document.forms['edit-profile-form'],
      addButton = document.querySelector('.profile__add-button'),
      popupAddPlace = document.querySelector('.popup_type_add-place'),
      placeTitle = popupAddPlace.querySelector('.popup__form-field_type_title'),
      placeImgLink = popupAddPlace.querySelector('.popup__form-field_type_link'),
      addSubmitButton = popupAddPlace.querySelector('.popup__submit-button'),
      addForm = document.forms['add-form'],
      addFormInputsList = Array.from(addForm.querySelectorAll('.popup__form-field')),
      addFormErorrsList = Array.from(addForm.querySelectorAll('.popup__error'));

// Открытие popup
function openPopup(popup) {
  popup.classList.add('popup_opened');
  document.addEventListener('keydown', closeFromEsc);
}

// Функционал закрытия popup
function closePopup(popup) {
  popup.classList.remove('popup_opened');
  document.removeEventListener('keydown', closeFromEsc);
}

// Закрытие popup по щелчку вне контейнера
function clickOutsideContainer(evt) {
  if (evt.target.classList.contains('popup')) {
    closePopup(evt.target);
  }
}

// Закрытие popup по Esc
function closeFromEsc(evt) {
  if (evt.key === 'Escape') {
    evt.preventDefault();
    const currentPopup = document.querySelector('.popup_opened');
    closePopup(currentPopup);
  }
}

// Сохранение изменений данных профиля
function changeInfo(evt) {
  evt.preventDefault();
  name.textContent = nameField.value;
  description.textContent = aboutField.value;
  closePopup(popupEditProfile);
}

// Добавление карточки в контейнер
function addCard(container, cardElement) {
  container.prepend(cardElement);
}

// Функционал формы по добавлению нового места
function addNewPlace(evt) {
  evt.preventDefault();
  const place = {
    name: placeTitle.value,
    link: placeImgLink.value,
    openPopup: openPopup
  };

  const newCard = new Card(place, '#place-template');

  addCard(placesList, newCard.createCard());
  closePopup(popupAddPlace);
}

// Очистка формы добавления нового места
function cleanAddForm() {
  addFormInputsList.forEach((input) => {
    input.value = '';
    input.classList.remove('popup__form-field_type_error');
  });

  addFormErorrsList.forEach((error) => {
    error.textContent = '';
    error.classList.remove('popup__error_visible');
  });

  addSubmitButton.disable = true;
  addSubmitButton.classList.add('popup__submit-button_type_disabled');
}

// Привязываем функции к событиям
editForm.addEventListener('submit', changeInfo);
addForm.addEventListener('submit', addNewPlace);
popups.forEach((popup) => popup.addEventListener('mousedown', clickOutsideContainer));

editButton.addEventListener('click', () => {
  nameField.value = name.textContent;
  aboutField.value = description.textContent;

  const inputEvent = new Event("input");  // Программно генерирую событие input, чтобы убрать ошибку,
  nameField.dispatchEvent(inputEvent);    // при которой поля editForm заполнены по-умолчанию, а кнопка не активна

  openPopup(popupEditProfile);
});

addButton.addEventListener('click', () => {
  cleanAddForm();
  openPopup(popupAddPlace);
});

closeButtons.forEach(button => button.addEventListener('click', (evt) => {
  const popup = evt.target.closest('.popup');
  closePopup(popup);
}));

// Заполняем блок places заготовленными карточками
initialCards.forEach((place) => {
  place.openPopup = openPopup;
  const newCard = new Card(place, '#place-template');
  addCard(placesList, newCard.createCard());
});
