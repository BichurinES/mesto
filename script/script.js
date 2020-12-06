// Объявляем глобальные переменные

const name = document.querySelector('.profile__title'),
      description = document.querySelector('.profile__subtitle'),
      closeButtons = Array.from(document.querySelectorAll('.popup__close-button')),
      placeTemplate = document.querySelector('#place-template').content,
      placesList = document.querySelector('.places__list'),
      editButton = document.querySelector('.profile__edit-button'),
      popupEditProfile = document.querySelector('.popup_type_edit-profile'),
      nameField = popupEditProfile.querySelector('.popup__form-field_type_name'),
      aboutField = popupEditProfile.querySelector('.popup__form-field_type_about'),
      editForm = popupEditProfile.querySelector('.popup__form_type_edit-profile'),
      addButton = document.querySelector('.profile__add-button'),
      popupAddPlace = document.querySelector('.popup_type_add-place'),
      placeTitle = popupAddPlace.querySelector('.popup__form-field_type_title'),
      placeImgLink = popupAddPlace.querySelector('.popup__form-field_type_link'),
      addForm = popupAddPlace.querySelector('.popup__form_type_add-place'),
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

function closeForm(popup) {
  popup.classList.remove('popup_opened');
}

function closeButtonFeat(evt) {
  const popup = evt.target.closest('.popup');
  closeForm(popup);
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

// Функция добавления нового места

function addNewPlace(title, imgLink) {
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

  placesList.prepend(newPlace);
}

// Функционал формы по добавлению нового места

function addFormFeat(evt) {
  evt.preventDefault();
  addNewPlace(placeTitle.value, placeImgLink.value);
  closeForm(popupAddPlace);
}

// Привязываем функции к событиям
editButton.addEventListener('click', editProfile);
editForm.addEventListener('submit', changeInfo);
addForm.addEventListener('submit', addFormFeat);
addButton.addEventListener('click', showAddForm);
closeButtons.forEach((button) => {
  button.addEventListener('click', closeButtonFeat);
});

initialCards.forEach((place) => {
  addNewPlace(place.name, place.link);
});
