export default class Api {
  constructor({baseUrl, headers}) {
    this._baseUrl = baseUrl;
    this._profileUrl = baseUrl + '/users/me';
    this._cardsUrl = baseUrl + '/cards';
    this._headers = headers;
  }

  _createRequest({url, headersObj, method, body}) {
    return fetch(url, {method: method, headers: headersObj, body: body})
      .then((res) => {
        if (res.ok) {
          return res.json();
        }

        return Promise.reject(`Ошибка: ${res.status}`);
      })
  }

  getProfile() {
    return this._createRequest({
      url: this._profileUrl,
      headersObj: this._headers,
      method: 'GET'})
  }

  getInitialCards() {
    return this._createRequest({
      url: this._cardsUrl,
      headersObj: this._headers,
      method: 'GET'})
  }

  chahgeProfile(newData, setInfo) {
    return this._createRequest({
      url: this._profileUrl,
      headersObj: this._headers,
      method: 'PATCH',
      body: JSON.stringify(newData)
    })
      .then((data) => {
        setInfo(data);
      });
  }

  changeAvatar(avatar, setInfo) {
    return this._createRequest({
      url: `${this._profileUrl}/avatar`,
      headersObj: this._headers,
      method: 'PATCH',
      body: JSON.stringify(avatar)
    })
      .then((data) => {
        setInfo(data);
      });
  }

  addNewCard(cardData, addCard) {
    return this._createRequest({
      url: this._cardsUrl,
      headersObj: this._headers,
      method: 'POST',
      body: JSON.stringify(cardData)
    })
      .then((data) => {
        addCard(data, false);
      });
  }

  deleteCard(idCard) {
    return this._createRequest({
      url: `${this._cardsUrl}/${idCard}`,
      headersObj: this._headers,
      method: 'DELETE'
    });
  }

  likeCard(idCard, refreshLikes) {
    return this._createRequest({
      url: `${this._cardsUrl}/likes/${idCard}`,
      headersObj: this._headers,
      method: 'PUT'
    })
      .then((card) => {
        refreshLikes(card.likes);
      });
  }

  dislikeCard(idCard, refreshLikes) {
    return this._createRequest({
      url: `${this._cardsUrl}/likes/${idCard}`,
      headersObj: this._headers,
      method: 'DELETE'
    })
      .then((card) => {
        refreshLikes(card.likes);
      });
  }
}
