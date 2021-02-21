// Объявляем глобальные переменные
export const userInfoSelectors = {
  userNameSelector: '.profile__title',
  aboutSelector: '.profile__subtitle',
  avatarSelector: '.profile__avatar'
};
export const cardSelector = '#place-template';
export const placesSelector = '.places__list';
export const popupSelectors = {
  image: '.popup_type_fullscreen-image',
  editForm: '.popup_type_edit-profile',
  addForm: '.popup_type_add-place',
  confirmDelete: '.popup_type_confirm-delete',
  editAvatar: '.popup_type_edit-avatar'
};
export const openButtonSelectors = {
  editForm: '.profile__edit-button',
  editAvatar: '.profile__avatar',
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
export const apiOptions = {
  baseUrl: 'https://mesto.nomoreparties.co/v1/cohort-20',
  headers: {
    authorization: '73878bf0-187e-4ea2-beea-67c91647b84f',
    'Content-Type': 'application/json'
  }
};
export const popupEditProfile = document.querySelector('.popup_type_edit-profile');
export const nameField = popupEditProfile.querySelector('.popup__form-field_type_name');
export const aboutField = popupEditProfile.querySelector('.popup__form-field_type_about');
export const addFormSelector = '.popup__form_type_add-place';
export const editFormSelector = '.popup__form_type_edit-profile';
export const editAvatarSelector = '.popup__form_type_edit-avatar';
export const loadingText = 'Сохранение...';
export const startPromises = [];
