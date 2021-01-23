export class Card {
  constructor(data, cardSelector) {
    this.image = data.link;
    this.title = data.name;
    this.isLike = false;
    this.cardSelector = cardSelector;
    this._openPopup = data.openPopup;
    /* Добавил функцию открытия попапа как аргумент объекта с данными,
    так как не смог придумать, как ещё можно красиво описать этот метод внутри класса,
    не прибегнув к дублированию кода. В противном случае, пришлось бы повторно прописывать
    функции openPopup и closeFromEsc */

    // Определил эти переменные внутри класса, чтобы не создавать переменные
    // при каждом вызове метода увеличения картинки
    this.popupFullscreenElement = document.querySelector('.popup_type_fullscreen-image'),
    this.popupImg = this.popupFullscreenElement.querySelector('.popup__image'),
    this.popupImgCaption = this.popupFullscreenElement.querySelector('.popup__image-caption');
  }

  // Копируем шаблон из разметки документа
  _getTemplate() {
    const cardElement = document
      .querySelector(this.cardSelector)
      .content
      .querySelector('.place')
      .cloneNode(true);

    return cardElement;
  }

  // Метод обработки увеличения картинки по клику на миниатюре
  _handleZoomImg(currentImg, imgTitle) {
    this.popupImg.src = currentImg.src;
    this.popupImg.alt = currentImg.alt;
    this.popupImgCaption.textContent = imgTitle.textContent;
    this._openPopup(this.popupFullscreenElement);
  }

  // Метод отработки нажатия на кнопку Like
  // Немного расширил метод, чтобы в классе карты сохранялось текущее состояние кнопки
  _handleToggleLike(evt) {
    this.isLike ?
      evt.target.classList.remove('place__like-button_active') :
      evt.target.classList.add('place__like-button_active');

    this.isLike = !this.isLike;
    console.log(this);
  }

  // Метод удаления карточки по нажатию на кнопку
  _handleDeletePlace(evt) {
    evt.target.closest('.place').remove();
  }

  // Подключение всех обработчиков событий
  _setEventListeners() {
    this._element
      .querySelector('.place__image')
      .addEventListener('click', (evt) => {
        const currentImg = evt.target,
              imgTitle = evt.target.closest('.place').querySelector('.place__title');

        this._handleZoomImg(currentImg, imgTitle);
      });

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

    imgNode.alt = this.title;
    imgNode.src = this.image;
    titleNode.textContent = this.title;

    return this._element;
  }
}

