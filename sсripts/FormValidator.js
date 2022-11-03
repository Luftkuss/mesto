export default class FormValidator {
  constructor(classSettings, formElement){
    this._classSettings = classSettings;
    this._formElement = formElement;
    this._inputSelector = classSettings.inputSelector;
    this._errorClass = classSettings.errorClass;
    this._inputErrorClass = classSettings.inputErrorClass;
    this._inactiveButtonClass = classSettings.inactiveButtonClass;
    this._submitButtonSelector = classSettings.submitButtonSelector;
  };

  enableValidation(){
    this._setEventListeners();
  };

  toDisableButton(){
     this._buttonElement.classList.add(this._inactiveButtonClass);
     this._buttonElement.disabled = true;
  };

  _setEventListeners(){
    this._inputList = Array.from(this._formElement.querySelectorAll(this._inputSelector));
    this._buttonElement = this._formElement.querySelector(this._submitButtonSelector);

    this._toggleButtonState(this._inputList);

    this._inputList.forEach(inputElement => {
        inputElement.addEventListener('input', () => {
              this._checkInputValidity(inputElement);
              this._toggleButtonState(this._inputList);
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
    const errorElement = this._formElement.querySelector(`.${inputElement.id}-error`);
    inputElement.classList.add(this._inputErrorClass);
    errorElement.textContent = inputElement.validationMessage;
    errorElement.classList.add(this._errorClass);
  };

  _hideInputError(inputElement){
    const errorElement = this._formElement.querySelector(`.${inputElement.id}-error`);
    inputElement.classList.remove(this._inputErrorClass);
    errorElement.textContent = '';
    errorElement.classList.remove(this._errorClass);
  };

  _toggleButtonState(){
    if (this._hasInvalidInput(this._inputList)) {
        this.toDisableButton()
    } else {
          this._buttonElement.classList.remove(this._inactiveButtonClass);
          this._buttonElement.disabled = false;
        } 
  }

  _hasInvalidInput(){
    return this._inputList.some((inputElement) => {  
          return !inputElement.validity.valid
        })
    }
  };