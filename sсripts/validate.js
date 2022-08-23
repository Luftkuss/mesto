
 // Показать ошибку
const showInputError = (formElement, inputElement, errorMessage, inputErrorClass, errorClass) => {
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
  inputElement.classList.add(inputErrorClass);
  errorElement.textContent = errorMessage;
  errorElement.classList.add(errorClass);
};

// // // Функция отключения энтера
// // function enterPrevent(formElement){

// // formElement.addEventListener('keydown', function(e) {
// //   const code = e.keyCode; 
// //       if (code  === 13) {  
// //       e.preventDefault();
// //   } 
// // });


// };

// , true)

// Скрыть ошибку
const hideInputError = (formElement, inputElement, errorClass, inputErrorClass) => {
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
  inputElement.classList.remove(inputErrorClass);
  errorElement.classList.remove(errorClass);
  errorElement.textContent = '';
};

// Валидация проверка
const checkInputValidity = (formElement, inputElement, inputErrorClass, errorClass) => {
  if (!inputElement.validity.valid) {
    showInputError(formElement, inputElement, inputElement.validationMessage, inputErrorClass, errorClass);
  } else {
    hideInputError(formElement, inputElement, errorClass, inputErrorClass);
  }
};

const setEventListeners = (formElement, inactiveButtonClass, inputSelector, submitButtonSelector, inputErrorClass, errorClass) => {
  const inputList = Array.from(formElement.querySelectorAll(inputSelector));
  const buttonElement = formElement.querySelector(submitButtonSelector);
  
  toggleButtonState(inputList, buttonElement, inactiveButtonClass, submitButtonSelector);
  
  inputList.forEach((inputElement) => {
    inputElement.addEventListener('input', function () {
      checkInputValidity(formElement, inputElement, inputErrorClass, errorClass);
      toggleButtonState(inputList, buttonElement, inactiveButtonClass, submitButtonSelector);
    });
  });
  
};

const enableValidation = ({formSelector, inputSelector, submitButtonSelector, inactiveButtonClass, inputErrorClass, errorClass}) => {

  const formList = Array.from(document.querySelectorAll(formSelector));
  formList.forEach((formElement) => {
    setEventListeners(formElement, inactiveButtonClass, inputSelector, submitButtonSelector, inputErrorClass, errorClass);

  });
};

function hasInvalidInput(inputList){
    return inputList.some((inputElement) => {  
    return !inputElement.validity.valid;
  })
}

function toggleButtonState(inputList, buttonElement, inactiveButtonClass){
  if (hasInvalidInput(inputList)) {
  buttonElement.classList.add(inactiveButtonClass);
  buttonElement.disabled = true;
} else {
  buttonElement.classList.remove(inactiveButtonClass);
  buttonElement.disabled = false;
} 

}

enableValidation({
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__button',
  inactiveButtonClass: 'popup__button_disabled',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__input-error_active'
});

