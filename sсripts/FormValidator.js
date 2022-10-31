
const formAddCard = document.getElementById('formAddCard');
const formElementEditProfile = document.querySelector('.popup__form-profile');

// console.log(formAddCard)
// console.log(formElementEditProfile)


class FormValidator {
  constructor(classSettings, form){
    this._classSettings = classSettings;
    this._form = form;
    this._inputSelector = classSettings.inputSelector;
    this._errorClass = classSettings.errorClass;
    this._inputErrorClass = classSettings.inputErrorClass;
    this._inactiveButtonClass = classSettings.inactiveButtonClass;
    this._submitButtonSelector = classSettings.submitButtonSelector;
  }

  enableValidation(){
    this._setEventListeners();
  }

  _setEventListeners(){

  }

};

const classSettings = {
    formSelector: '.popup__form',
    inputSelector: '.popup__input',
    submitButtonSelector: '.popup__button',
    inactiveButtonClass: 'popup__button_disabled',
    inputErrorClass: 'popup__input_type_error',
    errorClass: 'popup__input-error_active'
  };

  const formElementEditProfileValidator = new FormValidator(classSettings, formElementEditProfile);
  const formAddCardValidator = new FormValidator(classSettings, formAddCard);

  formElementEditProfileValidator.enableValidation()
  formAddCardValidator.enableValidation()


