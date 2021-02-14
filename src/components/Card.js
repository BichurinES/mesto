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
  _handleToggleLike(evt) {
    this.isLike ?
      evt.target.classList.remove('place__like-button_active') :
      evt.target.classList.add('place__like-button_active');

    this.isLike = !this.isLike;
  }

  // Метод удаления карточки по нажатию на кнопку
  _handleDeletePlace(evt) {
    evt.target.closest('.place').remove();
  }

  // Подключение всех обработчиков событий
  _setEventListeners() {
    this._element
      .querySelector('.place__image')
      .addEventListener('click', this._handleCardClick.bind(this));

    this._element
      .querySelector('.place__like-button')
      .addEventListener('click', this._handleToggleLike);

    this._element
      .querySelector('.place__trash-button')
      .addEventListener('click', this._handleDeletePlace);
  }

  // Публичный метод создания элемента карты
  createCard() {
    this._element = this._getTemplate();
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
