
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
    this.buttonElement = this.formElement.querySelector(this.submitButtonSelector);


    this.inputList.forEach(inputElement => {
        inputElement.addEventListener('input', () => {
            this._checkInputValidity();
        });
      });
  };

  _checkInputValidity(inputElement){
    console.log(inputElement)

    if (!inputElement.validity.valid) {
        showInputError(this.formElement, inputElement, inputElement.validationMessage, inputErrorClass, errorClass);
        console.log(showInputError1)
    } else {
        hideInputError(this.formElement, inputElement, this.errorClass, this.inputErrorClass);
        console.log(hideInputError1)
    }
  }


};

// const showInputError = (formElement, inputElement, errorMessage, inputErrorClass, errorClass) => {
//     const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
//     inputElement.classList.add(inputErrorClass);
//     errorElement.textContent = errorMessage;
//     errorElement.classList.add(errorClass);
//   };

// const hideInputError = (formElement, inputElement, errorClass, inputErrorClass) => {
//     const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
//     inputElement.classList.remove(inputErrorClass);
//     errorElement.classList.remove(errorClass);
//     errorElement.textContent = '';
//   };
  


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


