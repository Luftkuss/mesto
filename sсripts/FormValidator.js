
const formAddCard = document.getElementById('formAddCard');
const formElementEditProfile = document.querySelector('.popup__form-profile');

// console.log(formAddCard)
// console.log(formElementEditProfile)


class FormValidator {
  constructor(classSettings, formElement){
    this.classSettings = classSettings;
    this.formElement = formElement;
    this.inputSelector = classSettings.inputSelector;
    this.errorClass = classSettings.errorClass;
    this.inputErrorClass = classSettings.inputErrorClass;
    this.inactiveButtonClass = classSettings.inactiveButtonClass;
    this.submitButtonSelector = classSettings.submitButtonSelector;
  }

  enableValidation(){
    this._setEventListeners();
  }

  _setEventListeners(){
    this.inputList = Array.from(this.formElement.querySelectorAll(this.inputSelector));
    this.buttonElement = this.formElement.querySelector(this.submitButtonSelector); // нужно будет, когда буду работать с кнопкой

    this.inputList.forEach(inputElement => {
        inputElement.addEventListener('input', () => {
            this._checkInputValidity(inputElement);
            
        });
      });
  };

  _checkInputValidity(inputElement){
    console.log(inputElement.validity.valid)

    if (!inputElement.validity.valid) {
        this._showInputError(inputElement);
    } else {
        this._hideInputError(inputElement);
    }
  }

  _showInputError(inputElement){
    const errorElement = this.formElement.querySelector(`.${inputElement.id}-error`);
    inputElement.classList.add(this.inputErrorClass);
    errorElement.textContent = inputElement.validationMessage;
    errorElement.classList.add(this.errorClass);
  };

  _hideInputError(inputElement){
    const errorElement = this.formElement.querySelector(`.${inputElement.id}-error`);
    inputElement.classList.remove(this.inputErrorClass);
    errorElement.textContent = '';
    errorElement.classList.remove(this.errorClass);
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


