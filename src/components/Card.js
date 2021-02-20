export default class Card {
  constructor({link, name, _id, likes, owner},
              {myUserId, cardSelector, handleCardClick, handleTrashClick, handleLikeBtn}) {
    this._image = link;
    this._title = name;
    this._cardId = _id;
    this._ownerId = owner._id;
    this._likes = likes;

    this._myUserId = myUserId;
    this._cardSelector = cardSelector;
    this._handleCardClick = handleCardClick;
    this._handleTrashClick = handleTrashClick;
    this._handleLikeBtn = handleLikeBtn;
  }

  // Копируем шаблон из разметки документа
  _getTemplate() {
    const cardElement = document
      .querySelector(this._cardSelector)
      .content
      .querySelector('.place')
      .cloneNode(true);

    return cardElement;
  }

  // Получение id карты
  getCardId() {
    return this._cardId;
  }

  // Получение id карты
  getCardElement() {
    return this._element;
  }

  // Проверка массива лайков на лайк нашего пользователя
  isMyLike() {
    return this._likes.find((like) => {
      return like._id === this._myUserId;
    });
  }

  // Переключение кнопки Like
  _toggleLike() {
    this._likeButton.classList.toggle('place__like-button_active');
  }

  refreshLikes(likes) {
    this._likes = likes;
    this._likeCount.textContent = this._likes.length;
    this._toggleLike();
  }

  // Подключение всех обработчиков событий
  _setEventListeners() {
    this._element
      .querySelector('.place__image')
      .addEventListener('click', this._handleCardClick.bind(this, this._image, this._title));

    this._element
      .querySelector('.place__like-button')
      .addEventListener('click', this._handleLikeBtn.bind(this));

    if (this._ownerId === this._myUserId) {
      this._element
      .querySelector('.place__trash-button')
      .addEventListener('click', this._handleTrashClick.bind(this));
    }
  }

  // Публичный метод создания элемента карты
  createCard() {
    this._element = this._getTemplate();
    this._likeButton = this._element.querySelector('.place__like-button');
    this._setEventListeners();

    const imgNode = this._element.querySelector('.place__image'),
          titleNode = this._element.querySelector('.place__title');
    this._likeCount = this._element.querySelector('.place__like-count');

    if (this._ownerId !== this._myUserId) {
      this._element
        .querySelector('.place__trash-button')
        .remove();
    }

    imgNode.alt = this._title;
    imgNode.src = this._image;
    titleNode.textContent = this._title;
    this._likeCount.textContent = this._likes.length;

    if (this.isMyLike()) {
      this._toggleLike();
    }

    return this._element;
  }
}
