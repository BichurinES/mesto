export default class UserInfo {
  constructor({userNameSelector, aboutSelector, avatarSelector}) {
    this._userNameElement = document.querySelector(userNameSelector);
    this._aboutElement = document.querySelector(aboutSelector);
    this._avatarElement = document.querySelector(avatarSelector);
  }

  getUserInfo() {
    return {
      name: this._userNameElement.textContent,
      about: this._aboutElement.textContent,
      userId: this._userId
    }
  }

  setUserInfo({name, about, avatar, _id}) {
    this._userNameElement.textContent = name;
    this._aboutElement.textContent = about;
    this._userId = _id;
    if (avatar) {
      this._avatarElement.style.backgroundImage = `url(${avatar})`;
    }
  }
}
