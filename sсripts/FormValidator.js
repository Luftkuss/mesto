export default class FormValidator {
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

    this._toggleButtonState(this.inputList);

    this.inputList.forEach(inputElement => {
        inputElement.addEventListener('input', () => {
            this._checkInputValidity(inputElement);
            this._toggleButtonState(this.inputList);
            });
        });
    };

  _checkInputValidity(inputElement){
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

  _toggleButtonState(inputList){
    if (this._hasInvalidInput(inputList)) {
        this.buttonElement.classList.add(this.inactiveButtonClass);
        this.buttonElement.disabled = true;
    } else {
        this.buttonElement.classList.remove(this.inactiveButtonClass);
        this.buttonElement.disabled = false;
        } 
    }

  _hasInvalidInput(inputList){
    return inputList.some((inputElement) => {  
        return !inputElement.validity.valid
            })
        }
    };