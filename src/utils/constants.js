// Массив заготовленных мест
export const initialCards = [
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

// Объявляем глобальные переменные
export const userInfoSelectors = {
  userNameSelector: '.profile__title',
  aboutSelector: '.profile__subtitle'
};
export const cardSelector = '#place-template';
export const placesSelector = '.places__list';
export const popupSelectors = {
  image: '.popup_type_fullscreen-image',
  editForm: '.popup_type_edit-profile',
  addForm: '.popup_type_add-place'
};
export const openButtonSelectors = {
  editForm: '.profile__edit-button',
  addForm: '.profile__add-button'
};
export const validateSettings = {
  formSelector: '.popup__form',
  inputSelector: '.popup__form-field',
  submitButtonSelector: '.popup__submit-button',
  inactiveButtonClass: 'popup__submit-button_type_disabled',
  inputErrorClass: 'popup__form-field_type_error',
  errorClass: 'popup__error_visible'
};
export const popupEditProfile = document.querySelector('.popup_type_edit-profile');
export const nameField = popupEditProfile.querySelector('.popup__form-field_type_name');
export const aboutField = popupEditProfile.querySelector('.popup__form-field_type_about');
export const addFormSelector = '.popup__form_type_add-place';
export const editFormSelector = '.popup__form_type_edit-profile';
