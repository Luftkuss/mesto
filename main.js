(()=>{"use strict";function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var t=function(){function t(e,n,r,o,i){var u=e.name,c=e.link,a=e.likes,s=e._id,l=e.trashExist,p=e.usersId;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),this._name=u,this._link=c,this._likes=a,this._id=s,this._usersId=p,this.handleCardClick=r,this._handleDeleteCard=o,this._handleLikeCard=i,this._like=null,this._likesCounter=null,this._element=null,this._image=null,this._trashExist=l,this._cardItem=n}var n,r;return n=t,(r=[{key:"_getTemplate",value:function(){return document.getElementById(this._cardItem).content.querySelector(".card").cloneNode(!0)}},{key:"_setEventListeners",value:function(){var e=this;this._element.querySelector(".card__trash").addEventListener("click",(function(){e._handleDeleteCard(e._id,e._element)})),this._like.addEventListener("click",(function(){e._handleLikeCard(e._id)})),this._image.addEventListener("click",(function(){e._openCardsPopup()}))}},{key:"_openCardsPopup",value:function(){var e=this._name,t=this._link;this.handleCardClick(e,t)}},{key:"removeCard",value:function(){this._element.remove()}},{key:"isCardLiked",value:function(){var e=this;return this._likes.find((function(t){return t._id===e._usersId}))}},{key:"_likeCard",value:function(){this._like.classList.add("card__image-like_liked")}},{key:"_unlikeCard",value:function(){this._like.classList.remove("card__image-like_liked")}},{key:"setLike",value:function(e){this._likes=e,this._likesCounter.textContent=this._likes.length,this.isCardLiked()?this._likeCard():this._unlikeCard()}},{key:"generateCard",value:function(){return this._element=this._getTemplate(),this._like=this._element.querySelector(".card__image-like"),this._image=this._element.querySelector(".card__image"),this._setEventListeners(),this._element.querySelector(".card__title").textContent=this._name,this._likesCounter=this._element.querySelector(".card__likes-counter"),this._image.src=this._link,this._image.alt=this._name,this.setLike(this._likes),this._trashExist||this._element.querySelector(".card__trash").classList.toggle("card__trash-hidden"),this._element}}])&&e(n.prototype,r),Object.defineProperty(n,"prototype",{writable:!1}),t}();function n(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var r=function(){function e(t,n){var r=t.items,o=t.renderer,i=t.idField;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._renderedItems=r,this._renderer=o,this._container=document.querySelector(n),this._itemsObject={},this.idField=i||"_id"}var t,r;return t=e,(r=[{key:"renderItems",value:function(){var e=this;this._renderedItems.forEach((function(t){e._addToObject(e._renderer(t))}))}},{key:"addItem",value:function(e,t){this._container.prepend(e),this._addToObject(t)}},{key:"_addToObject",value:function(e){this._itemsObject[e[this.idField]]=e}},{key:"getItemById",value:function(e){return this._itemsObject[e]}}])&&n(t.prototype,r),Object.defineProperty(t,"prototype",{writable:!1}),e}();function o(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var i=function(){function e(t,n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._classSettings=t,this._formElement=n,this._inputSelector=t.inputSelector,this._errorClass=t.errorClass,this._inputErrorClass=t.inputErrorClass,this._inactiveButtonClass=t.inactiveButtonClass,this._submitButtonSelector=t.submitButtonSelector}var t,n;return t=e,(n=[{key:"enableValidation",value:function(){this._setEventListeners()}},{key:"toDisableButton",value:function(){this._buttonElement.classList.add(this._inactiveButtonClass),this._buttonElement.disabled=!0}},{key:"_setEventListeners",value:function(){var e=this;this._inputList=Array.from(this._formElement.querySelectorAll(this._inputSelector)),this._buttonElement=this._formElement.querySelector(this._submitButtonSelector),this._toggleButtonState(this._inputList),this._inputList.forEach((function(t){t.addEventListener("input",(function(){e._checkInputValidity(t),e._toggleButtonState(e._inputList)}))}))}},{key:"_checkInputValidity",value:function(e){e.validity.valid?this._hideInputError(e):this._showInputError(e)}},{key:"_showInputError",value:function(e){var t=this._formElement.querySelector(".".concat(e.id,"-error"));e.classList.add(this._inputErrorClass),t.textContent=e.validationMessage,t.classList.add(this._errorClass)}},{key:"_hideInputError",value:function(e){var t=this._formElement.querySelector(".".concat(e.id,"-error"));e.classList.remove(this._inputErrorClass),t.textContent="",t.classList.remove(this._errorClass)}},{key:"_toggleButtonState",value:function(){this._hasInvalidInput(this._inputList)?this.toDisableButton():(this._buttonElement.classList.remove(this._inactiveButtonClass),this._buttonElement.disabled=!1)}},{key:"_hasInvalidInput",value:function(){return this._inputList.some((function(e){return!e.validity.valid}))}}])&&o(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}(),u=(document.querySelector("#card-item").content.querySelector(".card"),document.querySelector(".elements__table"),document.getElementById("formAddCard"),document.querySelector(".popup__button-addcard")),c=(document.querySelector(".popup__close_card-content"),document.querySelector(".popup_click_card"),document.querySelector(".popup__click-photo"),document.querySelector(".popup__title_cardseen"),document.querySelector(".elements__table"),document.querySelector(".profile__edit-button")),a=document.querySelector(".profile__title"),s=document.querySelector(".profile__description"),l=document.querySelector(".popup__input_type_name"),p=document.querySelector(".popup__input_type_description"),f=document.querySelector(".popup__form-profile"),d=(document.querySelector(".popup_edit_profile"),document.querySelector(".popup_edit_card")),h=document.querySelector(".profile__add-button"),_=(d.querySelector(".popup__input_type_name"),d.querySelector(".popup__input_type_description"),document.querySelector(".popup__close-edit"),document.querySelector(".popup__close-add"),document.querySelector(".popup__form-addAvatar")),y=document.querySelector(".profile__avatar-edit"),m=document.querySelector(".profile__avatar"),v=document.querySelector(".popup__button-avatar"),b=document.querySelector(".popup__button-profile"),k={formSelector:".popup__form",inputSelector:".popup__input",submitButtonSelector:".popup__button",inactiveButtonClass:"popup__button_disabled",inputErrorClass:"popup__input_type_error",errorClass:"popup__input-error_active"};function E(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var g=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._popup=t,this._popupElement=document.querySelector(this._popup),this._handleEscClose=this._handleEscClose.bind(this),this._popupButtonItem=this._popupElement.querySelector(".popup__close")}var t,n;return t=e,(n=[{key:"open",value:function(){this._popupElement.classList.add("popup_is_open"),document.addEventListener("keyup",this._handleEscClose)}},{key:"close",value:function(){this._popupElement.classList.remove("popup_is_open"),document.removeEventListener("keyup",this._handleEscClose)}},{key:"setEventListeners",value:function(){var e=this;this._popupElement.addEventListener("click",(function(t){t.target.classList.contains("popup_is_open")&&e.close()})),this._popupButtonItem.addEventListener("click",(function(){e.close()}))}},{key:"_handleEscClose",value:function(e){"Escape"===e.key&&this.close()}}])&&E(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function S(e){return S="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},S(e)}function w(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function C(){return C="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(e,t,n){var r=O(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},C.apply(this,arguments)}function O(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=I(e)););return e}function j(e,t){return j=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},j(e,t)}function L(e,t){if(t&&("object"===S(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function I(e){return I=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},I(e)}var P=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&j(e,t)}(u,e);var t,n,r,o,i=(r=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=I(r);if(o){var n=I(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return L(this,e)});function u(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,u),(t=i.call(this,e))._popupClickCardPhoto=t._popupElement.querySelector(".popup__click-photo"),t._popupClickCardTitle=t._popupElement.querySelector(".popup__title_cardseen"),t}return t=u,(n=[{key:"open",value:function(e,t){this._popupClickCardPhoto.src=t,this._popupClickCardPhoto.alt=e,this._popupClickCardTitle.textContent=e,C(I(u.prototype),"open",this).call(this)}}])&&w(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),u}(g);function q(e){return q="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},q(e)}function R(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function B(){return B="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(e,t,n){var r=T(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},B.apply(this,arguments)}function T(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=U(e)););return e}function x(e,t){return x=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},x(e,t)}function D(e,t){if(t&&("object"===q(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function U(e){return U=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},U(e)}var A=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&x(e,t)}(u,e);var t,n,r,o,i=(r=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=U(r);if(o){var n=U(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return D(this,e)});function u(e,t,n){var r;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,u),(r=i.call(this,e))._callbackSubmit=t,r._popupSelector=e,r._popupButton=n,r}return t=u,(n=[{key:"_getInputValues",value:function(){var e={};return this._popupElement.querySelectorAll("input").forEach((function(t){return e[t.id]=t.value})),e}},{key:"setEventListeners",value:function(){var e=this;B(U(u.prototype),"setEventListeners",this).call(this),this._popupElement.addEventListener("submit",(function(t){t.preventDefault(),e._inputElements=e._getInputValues(),e._callbackSubmit(e._inputElements)}))}},{key:"close",value:function(){B(U(u.prototype),"close",this).call(this),this._popupElement.querySelector("form").reset()}},{key:"sendingInform",value:function(e,t){this._popupButton.textContent=e?t:"Сохранить"}}])&&R(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),u}(g);function V(e){return V="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},V(e)}function N(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function F(){return F="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(e,t,n){var r=J(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},F.apply(this,arguments)}function J(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=z(e)););return e}function H(e,t){return H=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},H(e,t)}function M(e,t){if(t&&("object"===V(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function z(e){return z=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},z(e)}var $=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&H(e,t)}(u,e);var t,n,r,o,i=(r=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=z(r);if(o){var n=z(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return M(this,e)});function u(e,t){var n;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,u),(n=i.call(this,e))._callbackSubmit=t,n._id=null,n._card=null,n}return t=u,(n=[{key:"setEventListeners",value:function(){var e=this;F(z(u.prototype),"setEventListeners",this).call(this),this._popupElement.addEventListener("submit",(function(t){t.preventDefault(),e._callbackSubmit(e._id)}))}},{key:"setId",value:function(e){this._id=e}}])&&N(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),u}(g);function G(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var K=function(){function e(t){var n=t.nameElement,r=t.descriptionElement,o=t.avatarElement;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._nameElement=n,this._descriptionElement=r,this._id=null,this._avatar=null,this._avatarElement=o}var t,n;return t=e,(n=[{key:"getUserInfo",value:function(){return{name:this._nameElement.textContent,description:this._descriptionElement.textContent,_id:this._id,avatar:this._avatar}}},{key:"setUserInfo",value:function(e){var t=e.name,n=e.about,r=e.avatar,o=e._id;this._id=o,this._avatar=r,this._nameElement.textContent=t,this._descriptionElement.textContent=n,this._avatarElement.src=r}}])&&G(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function Q(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function W(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var X=new(function(){function e(t){var n=t.baseUrl,r=t.headers;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._url=n,this._headers=r}var t,n;return t=e,(n=[{key:"getUserInformation",value:function(){return console.log(),fetch("".concat(this._url,"/users/me"),{headers:this._headers}).then(this._checkResponse)}},{key:"getCards",value:function(){return fetch("".concat(this._url,"/cards"),{headers:this._headers}).then(this._checkResponse)}},{key:"editUserInformation",value:function(e){return fetch("".concat(this._url,"/users/me"),{method:"PATCH",headers:this._headers,body:JSON.stringify({name:e.name,about:e.about})}).then(this._checkResponse)}},{key:"uploadCard",value:function(e){return fetch("".concat(this._url,"/cards"),{method:"POST",headers:this._headers,body:JSON.stringify({name:e.name,link:e.link})}).then(this._checkResponse)}},{key:"deleteCard",value:function(e){return fetch("".concat(this._url,"/cards/").concat(e),{method:"DELETE",headers:this._headers}).then(this._checkResponse)}},{key:"doLike",value:function(e){return fetch("".concat(this._url,"/cards/").concat(e,"/likes"),{method:"PUT",headers:this._headers}).then(this._checkResponse)}},{key:"deleteLike",value:function(e){return fetch("".concat(this._url,"/cards/").concat(e,"/likes"),{method:"DELETE",headers:this._headers}).then(this._checkResponse)}},{key:"changeAvatar",value:function(e){return fetch("".concat(this._url,"/users/me/avatar"),{method:"PATCH",headers:this._headers,body:JSON.stringify({avatar:e.avatar})}).then(this._checkResponse)}},{key:"_checkResponse",value:function(e){return e.ok?e.json():Promise.reject("Ошибка ".concat(e.status))}}])&&Q(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}())({baseUrl:"https://mesto.nomoreparties.co/v1/cohort-54",headers:{authorization:"ce774f77-8c0e-4344-a990-44b9a94c00ea","Content-Type":"application/json"}});Promise.all([X.getUserInformation(),X.getCards()]).then((function(e){var t,n,r=(n=2,function(e){if(Array.isArray(e))return e}(t=e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,o,i=[],u=!0,c=!1;try{for(n=n.call(e);!(u=(r=n.next()).done)&&(i.push(r.value),!t||i.length!==t);u=!0);}catch(e){c=!0,o=e}finally{try{u||null==n.return||n.return()}finally{if(c)throw o}}return i}}(t,n)||function(e,t){if(e){if("string"==typeof e)return W(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?W(e,t):void 0}}(t,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),o=r[0],i=r[1];Y.setUserInfo(o),i.forEach(ae)})).catch((function(e){return console.log(e)}));var Y=new K({nameElement:a,descriptionElement:s,avatarElement:m}),Z=new A(".popup_edit_profile",(function(e){Z.sendingInform(!0,"Сохранение..."),X.editUserInformation(e).then((function(e){Y.setUserInfo(e),Z.close()})).catch((function(e){return console.log(e)})).finally((function(){return Z.sendingInform(!1)}))}),b);Z.setEventListeners(),c.addEventListener("click",(function(){var e=Y.getUserInfo();l.value=e.name,p.value=e.description,Z.open(),oe.toDisableButton()}));var ee=new A(".popup_edit_card",(function(e){ee.sendingInform(!0,"Сохранение..."),X.uploadCard({name:e.picture,link:e.url}).then((function(e){e.trashExist=e.owner._id===Y.getUserInfo()._id,ae(e),ee.close()})).catch((function(e){return console.log(e)})).finally((function(){return ee.sendingInform(!1)}))}),u);ee.setEventListeners(),h.addEventListener("click",(function(){ee.open(),ie.toDisableButton()}));var te=new P(".popup_click_card");te.setEventListeners();var ne=new $(".popup_confirm_delete",(function(e){X.deleteCard(e).then((function(){ce.getItemById(e).removeCard(),ne.close()})).catch((function(e){return console.log(e)}))}));ne.setEventListeners();var re=new A(".popup_edit_avatar",(function(e){re.sendingInform(!0,"Сохранение..."),X.changeAvatar(e).then((function(e){Y.setUserInfo(e),re.close()})).catch((function(e){return console.log(e)})).finally((function(){re.sendingInform(!1)}))}),v);re.setEventListeners(),y.addEventListener("click",(function(){re.open(),ue.toDisableButton()}));var oe=new i(k,f),ie=new i(k,formAddCard),ue=new i(k,_);oe.enableValidation(),ie.enableValidation(),ue.enableValidation();var ce=new r({items:[],renderer:function(e){return ae({name:e.name,link:e.link,likes:e.likes,_id,owner})}},".elements__table");function ae(e){var n=e.name,r=e.link,o=e.likes,i=e._id,u=e.owner._id===Y.getUserInfo()._id,c=Y.getUserInfo()._id,a=new t({name:n,link:r,likes:o,_id:i,trashExist:u,usersId:c},"card-item",se,le,(function(e){a.isCardLiked()?X.deleteLike(e).then((function(e){a.setLike(e.likes)})).catch((function(e){return console.log(e)})):X.doLike(e).then((function(e){a.setLike(e.likes)})).catch((function(e){return console.log(e)}))}));return ce.addItem(a.generateCard(),a),a}function se(e,t){te.open(e,t)}function le(e){ne.setId(e),ne.open()}ce.renderItems()})();
//# sourceMappingURL=main.js.map