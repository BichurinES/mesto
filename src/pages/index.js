import './index.css';
import Card from '../components/Card.js';
import Section from '../components/Section.js';
import PopupWithImage from '../components/PopupWithImage.js';
import PopupWithForm from '../components/PopupWithForm.js';
import UserInfo from '../components/UserInfo.js';
import FormValidator from '../components/FormValidator.js';
import {
  cardSelector,
  initialCards,
  nameField,
  aboutField,
  placesSelector,
  userInfoSelectors,
  popupSelectors,
  openButtonSelectors,
  validateSettings,
  addFormSelector,
  editFormSelector
} from '../utils/constants.js';

// Предзаполнение полей формы изменения профиля
function prefillProfileForm() {
  const currentInfo = userInfo.getUserInfo();
  nameField.value = currentInfo.name;
  aboutField.value = currentInfo.about;
}

// Сохранение изменений данных профиля
function changeInfo(evt) {
  evt.preventDefault();
  userInfo.setUserInfo(popupWithEditForm.getValueFromName('name'), popupWithEditForm.getValueFromName('about'));
  popupWithEditForm.close();
  prefillProfileForm();
}

// Отрисовка и добавление карточки
function addPlace(item, isArray) {
  const newCard = new Card({link: item.link, name: item.name}, function(link, name) {
    popupWithImage.open(link, name);
  }, cardSelector);
  places.addItem(newCard.createCard(), isArray);
}

// Отрисовка и добавления новой карточки из формы
function addPlaceFromForm(evt) {
  evt.preventDefault();
  const item = {
    link: popupWithAddForm.getValueFromName('link'),
    name: popupWithAddForm.getValueFromName('title')
  };

  addPlace(item, false);
  popupWithAddForm.close();
}

// Создание экземпляров классов
const userInfo = new UserInfo(userInfoSelectors),
      popupWithImage = new PopupWithImage(popupSelectors.image),
      popupWithEditForm = new PopupWithForm(popupSelectors.editForm, openButtonSelectors.editForm, changeInfo, prefillProfileForm),
      popupWithAddForm = new PopupWithForm(popupSelectors.addForm, openButtonSelectors.addForm, addPlaceFromForm),
      places = new Section({items: initialCards, render: addPlace}, placesSelector),
      addFormValidator = new FormValidator(validateSettings, addFormSelector),
      editFormValidator = new FormValidator(validateSettings, editFormSelector);

// Активация фукнционала попов
popupWithImage.setEventListener();
popupWithEditForm.setEventListener();
popupWithAddForm.setEventListener();

// Первичная отрисовка карточек
places.renderItems();

// Активация валидации форм
addFormValidator.enableValidation();
editFormValidator.enableValidation();
