// const formElement = document.querySelector('.popup__form');
// const formInput = formElement.querySelector('.popup__input');
// const formInputName = formElement.querySelector('.popup__input_type_name');
// const formInputDescription = formElement.querySelector('.popup__input_type_description');
// const formInputError = formElement.querySelector('.popup__input_type_error');

// Показать ошибку
const showError = (input, errorMessage, errorClass) => { 
  input.classList.add('popup__input-error');
  errorClass.textContent = errorMessage;
  errorClass.classList.add('popup__input-error_active');
};

// Скрыть ошибку
const hideError = (input, errorClass) => {
  input.classList.remove('popup__input-error');
  errorClass.classList.remove('popup__input-error_active');
  errorClass.textContent = '';
};

// // Сабмит
// formElement.addEventListener('submit', function (evt) {
//   evt.preventDefault();
// });

// Листенер введение символов в форму
// inputSelector.querySelector('.popup__input_type_name').addEventListener('input', function(){
//   checkInputValidity(formInput);
// });


// Функция проверки валидности введённого
function checkInputValidity(formInput){
  if (!formInput.validity.valid) {
    showError(formInput, formInput.validationMessage);
  } else {

    hideError(formInput, errorClass);
  }
};

function enableValidation({formSelector, inputSelector, submitButtonSelector, inactiveButtonClass, inputErrorClass, errorClass}){
  const formSelectorElement = document.querySelector(formSelector);
  const inputSelectorElements = formSelectorElement.querySelectorAll(inputSelector);
  const spanElement = formSelectorElement.querySelectorAll(inputSelector);
  
  inputSelectorElements.forEach(function(inputSelectorElementsItem){
    checkInputValidity(inputSelectorElementsItem);
  })


};

enableValidation({
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__button',
  inactiveButtonClass: 'popup__button_disabled',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__input-error'
});

///////

// const formEditProfile = document.querySelector('.popup__form');
// const formEditProfileFields = Array.from(formEditProfile.querySelectorAll('.popup__input'));
// const buttonSubmitFormEditProfile = formEditProfile.querySelectorAll('.popup__button');


// formEditProfile.addEventListener('submit', )
 
