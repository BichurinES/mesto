(()=>{"use strict";function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var t=function(){function t(e,n){var r=e.link,o=e.name,i=e._id,a=e.likes,u=e.owner,l=n.myUserId,s=n.cardSelector,c=n.handleCardClick,p=n.handleTrashClick,h=n.handleLikeBtn;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),this._image=r,this._title=o,this._cardId=i,this._ownerId=u._id,this._likes=a,this._myUserId=l,this._cardSelector=s,this._handleCardClick=c,this._handleTrashClick=p,this._handleLikeBtn=h}var n,r;return n=t,(r=[{key:"_getTemplate",value:function(){return document.querySelector(this._cardSelector).content.querySelector(".place").cloneNode(!0)}},{key:"getCardId",value:function(){return this._cardId}},{key:"getCardElement",value:function(){return this._element}},{key:"isMyLike",value:function(){var e=this;return this._likes.find((function(t){return t._id===e._myUserId}))}},{key:"_toggleLike",value:function(){this._likeButton.classList.toggle("place__like-button_active")}},{key:"refreshLikes",value:function(e){this._likes=e,this._likeCount.textContent=this._likes.length,this._toggleLike()}},{key:"_setEventListeners",value:function(){this._element.querySelector(".place__image").addEventListener("click",this._handleCardClick.bind(this,this._image,this._title)),this._element.querySelector(".place__like-button").addEventListener("click",this._handleLikeBtn.bind(this)),this._ownerId===this._myUserId&&this._element.querySelector(".place__trash-button").addEventListener("click",this._handleTrashClick.bind(this))}},{key:"createCard",value:function(){this._element=this._getTemplate(),this._likeButton=this._element.querySelector(".place__like-button"),this._setEventListeners();var e=this._element.querySelector(".place__image"),t=this._element.querySelector(".place__title");return this._likeCount=this._element.querySelector(".place__like-count"),this._ownerId!==this._myUserId&&this._element.querySelector(".place__trash-button").remove(),e.alt=this._title,e.src=this._image,t.textContent=this._title,this._likeCount.textContent=this._likes.length,this.isMyLike()&&this._toggleLike(),this._element}}])&&e(n.prototype,r),t}();function n(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var r=function(){function e(t,n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._render=t,this._container=document.querySelector(n)}var t,r;return t=e,(r=[{key:"addItem",value:function(e,t){t?this._container.appendChild(e):this._container.prepend(e)}},{key:"renderItems",value:function(e){var t=this;e.forEach((function(e){t._render(e,!0)}))}}])&&n(t.prototype,r),e}();function o(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var i=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._popupElement=document.querySelector(t),this._handleEscClose=this._handleEscClose.bind(this)}var t,n;return t=e,(n=[{key:"_handleEscClose",value:function(e){"Escape"===e.key&&(e.preventDefault(),this.close())}},{key:"_handleClickOutside",value:function(e){e.target===this._popupElement&&this.close()}},{key:"open",value:function(){this._popupElement.classList.add("popup_opened"),document.addEventListener("keydown",this._handleEscClose)}},{key:"close",value:function(){this._popupElement.classList.remove("popup_opened"),document.removeEventListener("keydown",this._handleEscClose)}},{key:"setEventListener",value:function(){this._popupElement.querySelector(".popup__close-button").addEventListener("click",this.close.bind(this)),this._popupElement.addEventListener("mousedown",this._handleClickOutside.bind(this))}}])&&o(t.prototype,n),e}();function a(e){return(a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function u(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function l(e,t,n){return(l="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var r=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=p(e)););return e}(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(n):o.value}})(e,t,n||e)}function s(e,t){return(s=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function c(e,t){return!t||"object"!==a(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function p(e){return(p=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var h=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&s(e,t)}(a,e);var t,n,r,o,i=(r=a,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=p(r);if(o){var n=p(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return c(this,e)});function a(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a),(t=i.call(this,e))._popupImg=t._popupElement.querySelector(".popup__image"),t._popupImgCaption=t._popupElement.querySelector(".popup__image-caption"),t}return t=a,(n=[{key:"open",value:function(e,t){this._popupImg.src=e,this._popupImg.alt=t,this._popupImgCaption.textContent=t,l(p(a.prototype),"open",this).call(this)}}])&&u(t.prototype,n),a}(i);function f(e){return(f="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function d(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function _(e,t,n){return(_="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var r=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=v(e)););return e}(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(n):o.value}})(e,t,n||e)}function m(e,t){return(m=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function y(e,t){return!t||"object"!==f(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function v(e){return(v=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var b=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&m(e,t)}(a,e);var t,n,r,o,i=(r=a,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=v(r);if(o){var n=v(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return y(this,e)});function a(e){var t,n=e.popupSelector,r=e.openButtonSelector,o=e.loadingText,u=e.handleSubmitForm,l=e.handleOpenForm;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a),(t=i.call(this,n))._handleSubmitForm=u,t._handleOpenForm=l,t._openButton=r?document.querySelector(r):null,t._form=t._popupElement.querySelector(".popup__form"),t._submitButton=t._form.querySelector(".popup__submit-button"),t._loadingText=o,t._defaultTextBtn=t._submitButton.value,t}return t=a,(n=[{key:"_getInputValues",value:function(){var e=Array.from(this._popupElement.querySelectorAll(".popup__form-field"));this._inputValues=e.map((function(e){return{name:e.name,value:e.value}}))}},{key:"showLoadingText",value:function(){this._submitButton.value=this._loadingText}},{key:"hideLoadingText",value:function(){this._submitButton.value=this._defaultTextBtn}},{key:"showErrorMsg",value:function(e){this._submitButton.value=e}},{key:"isHaveField",value:function(){return!!this._form.querySelector(".popup__form-field")}},{key:"getValueFromName",value:function(e){return this._getInputValues(),this._inputValues.find((function(t){return e===t.name})).value}},{key:"setEventListener",value:function(){var e=this;_(v(a.prototype),"setEventListener",this).call(this),this._form.addEventListener("submit",(function(t){t.preventDefault(),e.isHaveField()&&e.showLoadingText(),e._handleSubmitForm()})),this._openButton&&this._openButton.addEventListener("click",this.open.bind(this))}},{key:"open",value:function(){this._handleOpenForm&&this._handleOpenForm(),_(v(a.prototype),"open",this).call(this)}},{key:"close",value:function(){_(v(a.prototype),"close",this).call(this),this.isHaveField()&&(this.hideLoadingText(),this._form.reset(),this._submitButton.classList.add("popup__submit-button_type_disabled"),this._submitButton.disabled=!0),this.currentCard&&(this.currentCard=null)}}])&&d(t.prototype,n),a}(i);function g(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var k=function(){function e(t){var n=t.userNameSelector,r=t.aboutSelector,o=t.avatarSelector;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._userNameElement=document.querySelector(n),this._aboutElement=document.querySelector(r),this._avatarElement=document.querySelector(o)}var t,n;return t=e,(n=[{key:"getUserInfo",value:function(){return{name:this._userNameElement.textContent,about:this._aboutElement.textContent,userId:this._userId}}},{key:"setUserInfo",value:function(e){var t=e.name,n=e.about,r=e.avatar,o=e._id;this._userNameElement.textContent=t,this._aboutElement.textContent=n,this._userId=o,r&&(this._avatarElement.style.backgroundImage="url(".concat(r,")"))}}])&&g(t.prototype,n),e}();function S(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var E=function(){function e(t,n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._inputSelector=t.inputSelector,this._submitButtonSelector=t.submitButtonSelector,this._inactiveButtonClass=t.inactiveButtonClass,this._inputErrorClass=t.inputErrorClass,this._errorClass=t.errorClass,this._form=document.querySelector(n)}var t,n;return t=e,(n=[{key:"_checkInvalidInput",value:function(e){return!e.validity.valid}},{key:"_hadInvalidInput",value:function(e){return e.some(this._checkInvalidInput)}},{key:"_showInputError",value:function(e,t,n,r,o){var i=e.querySelector(".".concat(t.id,"-error"));t.classList.add(n),i.textContent=o,i.classList.add(r)}},{key:"_hideInputError",value:function(e,t,n,r){var o=e.querySelector(".".concat(t.id,"-error"));t.classList.remove(n),o.classList.remove(r),o.textContent=""}},{key:"_toggleError",value:function(e,t,n,r){this._checkInvalidInput(t)?this._showInputError(e,t,n,r,t.validationMessage):this._hideInputError(e,t,n,r)}},{key:"_toggleBtn",value:function(e,t,n){this._hadInvalidInput(e)?(t.classList.add(n),t.disabled=!0):(t.classList.remove(n),t.disabled=!1)}},{key:"enableValidation",value:function(){var e=this,t=Array.from(this._form.querySelectorAll(this._inputSelector)),n=this._form.querySelector(this._submitButtonSelector);this._toggleBtn(t,n,this._inactiveButtonClass),t.forEach((function(r){r.addEventListener("input",(function(){e._toggleError(e._form,r,e._inputErrorClass,e._errorClass),e._toggleBtn(t,n,e._inactiveButtonClass)}))}))}}])&&S(t.prototype,n),e}();function C(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var w=function(){function e(t){var n=t.baseUrl,r=t.headers;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._baseUrl=n,this._profileUrl=n+"/users/me",this._cardsUrl=n+"/cards",this._headers=r}var t,n;return t=e,(n=[{key:"_createRequest",value:function(e){var t=e.url,n=e.headersObj,r=e.method,o=e.body;return fetch(t,{method:r,headers:n,body:o}).then((function(e){return e.ok?e.json():Promise.reject("Ошибка: ".concat(e.status))}))}},{key:"getProfile",value:function(){return this._createRequest({url:this._profileUrl,headersObj:this._headers,method:"GET"})}},{key:"getInitialCards",value:function(){return this._createRequest({url:this._cardsUrl,headersObj:this._headers,method:"GET"})}},{key:"chahgeProfile",value:function(e,t){return this._createRequest({url:this._profileUrl,headersObj:this._headers,method:"PATCH",body:JSON.stringify(e)}).then((function(e){t(e)}))}},{key:"changeAvatar",value:function(e,t){return this._createRequest({url:"".concat(this._profileUrl,"/avatar"),headersObj:this._headers,method:"PATCH",body:JSON.stringify(e)}).then((function(e){t(e)}))}},{key:"addNewCard",value:function(e,t){return this._createRequest({url:this._cardsUrl,headersObj:this._headers,method:"POST",body:JSON.stringify(e)}).then((function(e){t(e,!1)}))}},{key:"deleteCard",value:function(e){return this._createRequest({url:"".concat(this._cardsUrl,"/").concat(e),headersObj:this._headers,method:"DELETE"})}},{key:"likeCard",value:function(e,t){return this._createRequest({url:"".concat(this._cardsUrl,"/likes/").concat(e),headersObj:this._headers,method:"PUT"}).then((function(e){t(e.likes)}))}},{key:"dislikeCard",value:function(e,t){return this._createRequest({url:"".concat(this._cardsUrl,"/likes/").concat(e),headersObj:this._headers,method:"DELETE"}).then((function(e){t(e.likes)}))}}])&&C(t.prototype,n),e}(),I={formSelector:".popup__form",inputSelector:".popup__form-field",submitButtonSelector:".popup__submit-button",inactiveButtonClass:"popup__submit-button_type_disabled",inputErrorClass:"popup__form-field_type_error",errorClass:"popup__error_visible"},O=document.querySelector(".popup_type_edit-profile"),L=O.querySelector(".popup__form-field_type_name"),q=O.querySelector(".popup__form-field_type_about"),T="Сохранение...",j=[];function B(){var e=F.getUserInfo();L.value=e.name,q.value=e.about}function P(e,t){V.open(e,t)}function U(){H.currentCard=this,H.open()}function R(){this.isMyLike()?K.dislikeCard(this.getCardId(),this.refreshLikes.bind(this)).catch((function(e){return console.log(e)})):K.likeCard(this.getCardId(),this.refreshLikes.bind(this)).catch((function(e){return console.log(e)}))}function x(e,n){var r=new t(e,{myUserId:F.getUserInfo().userId,cardSelector:"#place-template",handleCardClick:P,handleTrashClick:U,handleLikeBtn:R});N.addItem(r.createCard(),n)}var F=new k({userNameSelector:".profile__title",aboutSelector:".profile__subtitle",avatarSelector:".profile__avatar"}),N=new r(x,".places__list"),V=new h(".popup_type_fullscreen-image"),D=new b({popupSelector:".popup_type_edit-profile",openButtonSelector:".profile__edit-button",loadingText:T,handleSubmitForm:function(){var e={name:D.getValueFromName("name"),about:D.getValueFromName("about")};K.chahgeProfile(e,(function(e){F.setUserInfo(e),D.close(),B()})).catch((function(e){return D.showErrorMsg(e)}))},handleOpenForm:B}),M=new b({popupSelector:".popup_type_edit-avatar",openButtonSelector:".profile__avatar",loadingText:T,handleSubmitForm:function(){K.changeAvatar({avatar:M.getValueFromName("avatar")},(function(e){F.setUserInfo(e),M.close()})).catch((function(e){return M.showErrorMsg(e)}))}}),A=new b({popupSelector:".popup_type_add-place",openButtonSelector:".profile__add-button",loadingText:T,handleSubmitForm:function(){var e={link:A.getValueFromName("link"),name:A.getValueFromName("title")};K.addNewCard(e,(function(e,t){x(e,t),A.close()})).catch((function(e){return A.showErrorMsg(e)}))}}),H=new b({popupSelector:".popup_type_confirm-delete",handleSubmitForm:function(){K.deleteCard(H.currentCard.getCardId()).then((function(){H.currentCard.getCardElement().remove(),H.close()})).catch((function(e){return A.showErrorMsg(e)}))}}),J=new E(I,".popup__form_type_add-place"),G=new E(I,".popup__form_type_edit-profile"),z=new E(I,".popup__form_type_edit-avatar"),K=new w({baseUrl:"https://mesto.nomoreparties.co/v1/cohort-20",headers:{authorization:"73878bf0-187e-4ea2-beea-67c91647b84f","Content-Type":"application/json"}});V.setEventListener(),D.setEventListener(),A.setEventListener(),H.setEventListener(),M.setEventListener(),J.enableValidation(),G.enableValidation(),z.enableValidation(),j.push(K.getProfile(F.setUserInfo.bind(F))),j.push(K.getInitialCards(N.renderItems.bind(N))),Promise.all(j).then((function(e){F.setUserInfo(e[0]),N.renderItems(e[1])})).catch((function(e){return console.log(e)}))})();