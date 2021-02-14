export default class UserInfo {
  constructor({userNameSelector, aboutSelector}) {
    this._userNameElement = document.querySelector(userNameSelector);
    this._aboutElement = document.querySelector(aboutSelector);
  }

  getUserInfo() {
    return {
      name: this._userNameElement.textContent,
      about: this._aboutElement.textContent,
    }
  }

  setUserInfo(newName, newAbout) {
    this._userNameElement.textContent = newName;
    this._aboutElement.textContent = newAbout;
  }
}
