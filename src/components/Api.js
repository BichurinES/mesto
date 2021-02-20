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
      .catch((err) => console.log(err));
  }

  getProfile(setInfo) {
    this._createRequest({
      url: this._profileUrl,
      headersObj: this._headers,
      method: 'GET'})
      .then((data) => {
        setInfo(data);
      });
  }

  chahgeProfile(newData, setInfo) {
    this._createRequest({
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
    this._createRequest({
      url: `${this._profileUrl}/avatar`,
      headersObj: this._headers,
      method: 'PATCH',
      body: JSON.stringify(avatar)
    })
      .then((data) => {
        setInfo(data);
      });
  }

  getInitialCards(addCards) {
    this._createRequest({
      url: this._cardsUrl,
      headersObj: this._headers,
      method: 'GET'})
      .then((cards) => {
        addCards(cards);
      });
  }

  addNewCard(cardData, addCard) {
    this._createRequest({
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
    this._createRequest({
      url: `${this._cardsUrl}/${idCard}`,
      headersObj: this._headers,
      method: 'DELETE'
    });
  }

  likeCard(idCard, refreshLikes) {
    this._createRequest({
      url: `${this._cardsUrl}/likes/${idCard}`,
      headersObj: this._headers,
      method: 'PUT'
    })
      .then((card) => {
        refreshLikes(card.likes);
      });
  }

  dislikeCard(idCard, refreshLikes) {
    this._createRequest({
      url: `${this._cardsUrl}/likes/${idCard}`,
      headersObj: this._headers,
      method: 'DELETE'
    })
      .then((card) => {
        refreshLikes(card.likes);
      });
  }
}
