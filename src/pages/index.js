import './index.css';
import Card from '../components/Card.js';
import Section from '../components/Section.js';
import PopupWithImage from '../components/PopupWithImage.js';
import PopupWithForm from '../components/PopupWithForm.js';
import UserInfo from '../components/UserInfo.js';
import FormValidator from '../components/FormValidator.js';
import Api from '../components/Api.js';
import {
  cardSelector,
  nameField,
  aboutField,
  placesSelector,
  userInfoSelectors,
  popupSelectors,
  openButtonSelectors,
  validateSettings,
  apiOptions,
  addFormSelector,
  editFormSelector,
  editAvatarSelector,
  loadingText,
  startPromises
} from '../utils/constants.js';

// Предзаполнение полей формы изменения профиля
function prefillProfileForm() {
  const currentInfo = userInfo.getUserInfo();
  nameField.value = currentInfo.name;
  aboutField.value = currentInfo.about;
}

// Сохранение изменений данных профиля
function changeInfo() {
  const newData = {
    name: popupWithEditForm.getValueFromName('name'),
    about: popupWithEditForm.getValueFromName('about')
  };

  api.chahgeProfile(newData, function(data) {
    userInfo.setUserInfo(data);
    popupWithEditForm.close();
    prefillProfileForm();
  })
    .catch((err) => popupWithEditForm.showErrorMsg(err));
}

// Сохранение изменения аватара
function changeAvatar() {
  api.changeAvatar({
    avatar: popupWithEditAvatar.getValueFromName('avatar')
  },
  function(data) {
    userInfo.setUserInfo(data);
    popupWithEditAvatar.close();
  })
    .catch((err) => popupWithEditAvatar.showErrorMsg(err));
}

// Обработчик клиека по карте
function handleCardClick(link, name) {
  popupWithImage.open(link, name);
}

// Обратботчик клика по корзине на карточке
function handleTrashClick() {
  popupWithConfirmDelete.currentCard = this;
  popupWithConfirmDelete.open();
}

// Обратботчик лайка карточки
function handleLikeBtn() {
  if (this.isMyLike()) {
    api.dislikeCard(this.getCardId(), this.refreshLikes.bind(this))
      .catch((err) => console.log(err));
  } else {
    api.likeCard(this.getCardId(), this.refreshLikes.bind(this))
      .catch((err) => console.log(err));
  }
}

// Отрисовка и добавление карточки
function addPlace(item, isArray) {
  const newCard = new Card(item, {
    myUserId: userInfo.getUserInfo().userId,
    cardSelector: cardSelector,
    handleCardClick: handleCardClick,
    handleTrashClick: handleTrashClick,
    handleLikeBtn: handleLikeBtn
  });

  places.addItem(newCard.createCard(), isArray);
}

// Отрисовка и добавления новой карточки из формы
function addPlaceFromForm() {
  const item = {
    link: popupWithAddForm.getValueFromName('link'),
    name: popupWithAddForm.getValueFromName('title')
  };

  api.addNewCard(item, function(item, isArray) {
    addPlace(item, isArray);
    popupWithAddForm.close();
  })
    .catch((err) => popupWithAddForm.showErrorMsg(err));
}

// Удаление карточки
function deleteCard() {
  api.deleteCard(popupWithConfirmDelete.currentCard.getCardId())
    .then(() => {
      popupWithConfirmDelete.currentCard.getCardElement().remove();
      popupWithConfirmDelete.close();
    })
    .catch((err) => popupWithAddForm.showErrorMsg(err));
}

// Создание экземпляров классов
const userInfo = new UserInfo(userInfoSelectors),
      places = new Section(addPlace, placesSelector),
      popupWithImage = new PopupWithImage(popupSelectors.image),
      popupWithEditForm = new PopupWithForm({
        popupSelector: popupSelectors.editForm,
        openButtonSelector: openButtonSelectors.editForm,
        loadingText: loadingText,
        handleSubmitForm: changeInfo,
        handleOpenForm: prefillProfileForm
      }),
      popupWithEditAvatar = new PopupWithForm({
        popupSelector: popupSelectors.editAvatar,
        openButtonSelector: openButtonSelectors.editAvatar,
        loadingText: loadingText,
        handleSubmitForm: changeAvatar}),
      popupWithAddForm = new PopupWithForm({
        popupSelector: popupSelectors.addForm,
        openButtonSelector: openButtonSelectors.addForm,
        loadingText: loadingText,
        handleSubmitForm: addPlaceFromForm}),
      popupWithConfirmDelete = new PopupWithForm({
        popupSelector: popupSelectors.confirmDelete,
        handleSubmitForm: deleteCard
      }),
      addFormValidator = new FormValidator(validateSettings, addFormSelector),
      editFormValidator = new FormValidator(validateSettings, editFormSelector),
      editAvatarValidator = new FormValidator(validateSettings, editAvatarSelector),
      api = new Api(apiOptions);

// Активация фукнционала попапов
popupWithImage.setEventListener();
popupWithEditForm.setEventListener();
popupWithAddForm.setEventListener();
popupWithConfirmDelete.setEventListener();
popupWithEditAvatar.setEventListener();

// Активация валидации форм
addFormValidator.enableValidation();
editFormValidator.enableValidation();
editAvatarValidator.enableValidation();

// Добавляем стартовые промисы в соответствующий массив
startPromises.push(api.getProfile(userInfo.setUserInfo.bind(userInfo)))
startPromises.push(api.getInitialCards(places.renderItems.bind(places)))

// Отрисовка карточек после получения данных с обоих стартовых запросов
Promise.all(startPromises)
  .then((resArr) => {
    userInfo.setUserInfo(resArr[0]);
    places.renderItems(resArr[1]);
  })
  .catch((err) => console.log(err));
