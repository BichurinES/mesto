export default class Card {
  constructor({link, name}, handleCardClick, cardSelector) {
    this._image = link;
    this._title = name;
    this._handleCardClick = handleCardClick;
    this.isLike = false;
    this._cardSelector = cardSelector;
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

  // Метод отработки нажатия на кнопку Like
  // Немного расширил метод, чтобы в классе карты сохранялось текущее состояние кнопки
  _handleToggleLike() {
    this.isLike ?
      this._likeButton.classList.remove('place__like-button_active') :
      this._likeButton.classList.add('place__like-button_active');

    this.isLike = !this.isLike;
  }

  // Метод удаления карточки по нажатию на кнопку
  _handleDeletePlace() {
    this._element.remove();
    this._element = null;
  }

  // Подключение всех обработчиков событий
  _setEventListeners() {
    this._element
      .querySelector('.place__image')
      .addEventListener('click', this._handleCardClick.bind(this, this._image, this._title));

    this._element
      .querySelector('.place__like-button')
      .addEventListener('click', this._handleToggleLike.bind(this));

    this._element
      .querySelector('.place__trash-button')
      .addEventListener('click', this._handleDeletePlace.bind(this));
  }

  // Публичный метод создания элемента карты
  createCard() {
    this._element = this._getTemplate();
    this._likeButton = this._element.querySelector('.place__like-button');
    this.isLike = false; // обнуление начального состояния кнопки Like при повторном вызове метода
    this._setEventListeners();

    const imgNode = this._element.querySelector('.place__image'),
          titleNode = this._element.querySelector('.place__title');

    imgNode.alt = this._title;
    imgNode.src = this._image;
    titleNode.textContent = this._title;

    return this._element;
  }
}
