// Объявляем глобальные переменные
const name = document.querySelector('.profile__title'),
      description = document.querySelector('.profile__subtitle'),
      closeButtons = Array.from(document.querySelectorAll('.popup__close-button')),
      popups = Array.from(document.querySelectorAll('.popup')),
      placeTemplate = document.querySelector('#place-template').content,
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
      addForm = document.forms['add-form'],
      popupFullscreen = document.querySelector('.popup_type_fullscreen-image'),
      popupImg = popupFullscreen.querySelector('.popup__image'),
      popupImgCaption = popupFullscreen.querySelector('.popup__image-caption');

// Массив заготовленных мест
const initialCards = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
];

// Открытие popup
function openPopup(popup) {
  popup.classList.add('popup_opened');
  document.addEventListener('keydown', closeFromEsc);
}

// Функционал закрытия popup
function closeForm(popup) {
  popup.classList.remove('popup_opened');
  document.removeEventListener('keydown', closeFromEsc);
}

// Закрытие popup по щелчку вне контейнера
function clickOutsideContainer(evt) {
  if (evt.target.classList.contains('popup')) {
    closeForm(evt.target);
  }
}

// Закрытие popup по Esc
function closeFromEsc(evt) {
  if (evt.key === 'Escape') {
    evt.preventDefault();
    const currentPopup = document.querySelector('.popup_opened');
    closeForm(currentPopup);
  }
}

// Сохранение изменений данных профиля

function changeInfo(evt) {
  evt.preventDefault();
  name.textContent = nameField.value;
  description.textContent = aboutField.value;
  closeForm(popupEditProfile);
}

// Проставление/снятие лайка

function toggleLike(evt) {
  evt.target.classList.toggle('place__like-button_active');
}

// Удаление карточки места
function deletePlace(evt) {
  evt.target.closest('.place').remove();
}

// Увеличение картинки
function zoomImg(evt) {
  const currentImg = evt.target,
        imgTitle = evt.target.closest('.place').querySelector('.place__title');

  popupImg.src = currentImg.src;
  popupImg.alt = currentImg.alt;
  popupImgCaption.textContent = imgTitle.textContent;
  popupFullscreen.classList.add('popup_opened');
}

// Функция создания новой карточки
function createCard(title, imgLink) {
  const newPlace = placeTemplate.cloneNode(true),
        imgNode = newPlace.querySelector('.place__image'),
        titleNode = newPlace.querySelector('.place__title'),
        likeButton = newPlace.querySelector('.place__like-button'),
        trashButton = newPlace.querySelector('.place__trash-button');

  imgNode.alt = title;
  imgNode.src = imgLink;
  titleNode.textContent = title;

  likeButton.addEventListener('click', toggleLike);
  trashButton.addEventListener('click', deletePlace);
  imgNode.addEventListener('click', zoomImg);

  return newPlace;
}

// Добавление карточки в контейнер
function addCard(container, cardElement) {
  container.prepend(cardElement);
}

// Функционал формы по добавлению нового места
function addNewPlace(evt) {
  evt.preventDefault();
  addCard(placesList, createCard(placeTitle.value, placeImgLink.value));
  closeForm(popupAddPlace);
}

// Привязываем функции к событиям
editButton.addEventListener('click', () => {
  nameField.value = name.textContent;
  aboutField.value = description.textContent;

  const inputEvent = new Event("input");  // Программно генерирую событие input, чтобы убрать ошибку,
  nameField.dispatchEvent(inputEvent);    // при которой поля editForm заполнены по-умолчанию, а кнопка не активна

  openPopup(popupEditProfile);
});
addButton.addEventListener('click', () => openPopup(popupAddPlace));
editForm.addEventListener('submit', changeInfo);
addForm.addEventListener('submit', addNewPlace);
closeButtons.forEach(button => button.addEventListener('click', (evt) => {
  const popup = evt.target.closest('.popup');
  closeForm(popup);
}));
popups.forEach((popup) => popup.addEventListener('mousedown', clickOutsideContainer));

// Заполняем блок places заготовленными карточками
initialCards.forEach(place => addCard(placesList, createCard(place.name, place.link)));
