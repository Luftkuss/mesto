// навернео надо, но не работает

// // Клик на оверлей попап контента карточки при клике на неё 
// popupClickCard.addEventListener('click', (evt) => {
//   if (evt.target.classList.contains('popup_is_open')) {
//         closePopup(popupClickCard);
//   };
// });

// корзина

// function createCard({name, link}) {
//   const cardElement = template.cloneNode(true); 
//   const cardsName = cardElement.querySelector(variables.cardsName);
//   const cardsLink = cardElement.querySelector(variables.cardsLink);
//   cardsName.textContent = name;
//   cardsLink.src = link;
//   cardsLink.alt = name;
//   likeFun(cardElement.querySelector(variables.like));
//   removeCard (cardElement.querySelector(variables.trash), cardElement);
//   addPictureOpenerEventListener(cardElement.querySelector(variables.cardsLink), name);
//   return cardElement
// };

// function insertCard(card){ // Универсальная функция добавления карточки
//   list.prepend(card);
// }

// function assembleCard({name, link}){
//   insertCard(createCard({name, link}));
// };

// initialCards.forEach(assembleCard)

// function addPictureOpenerEventListener(elementOpen, elementOpenTitle){
//   elementOpen.addEventListener('click', () =>{
//     openPopup(popupClickCard);
//     popupClickCardPhoto.src = elementOpen.src;
//     popupClickCardPhoto.alt = elementOpen.alt;
//     popupClickCardTitle.textContent = elementOpenTitle;
//   });
// };

// function addCard(event) { // Добавление карточки
//   event.preventDefault();
//   nameForm = cardNameForm.value;
//   linkForm = cardLinkForm.value;
//   assembleCard({name: nameForm, link: linkForm});
//   closePopup(popupEditCard);
//   formSubmitAddCard.disabled = true;
//   event.target.reset();
//   formSubmitAddCard.classList.add('popup__button_disabled');
// };


///


// const enableValidation = ({formSelector, inputSelector, submitButtonSelector, inactiveButtonClass, inputErrorClass, errorClass}) => {
//     const formList = Array.from(document.querySelectorAll(formSelector));
//     formList.forEach((formElement) => {
//       setEventListeners(formElement, inactiveButtonClass, inputSelector, submitButtonSelector, inputErrorClass, errorClass);
//     });
//   };
  
//   const setEventListeners = (formElement, inactiveButtonClass, inputSelector, submitButtonSelector, inputErrorClass, errorClass) => {
//     const inputList = Array.from(formElement.querySelectorAll(inputSelector));
//     const buttonElement = formElement.querySelector(submitButtonSelector);
    
//     toggleButtonState(inputList, buttonElement, inactiveButtonClass, submitButtonSelector);
  
//     inputList.forEach((inputElement) => {
//       inputElement.addEventListener('input', function () {
//         checkInputValidity(formElement, inputElement, inputErrorClass, errorClass);
//         toggleButtonState(inputList, buttonElement, inactiveButtonClass, submitButtonSelector);
//       });
//     });
//   };
  
//   // Валидация проверка
//   const checkInputValidity = (formElement, inputElement, inputErrorClass, errorClass) => {
//     if (!inputElement.validity.valid) {
//       showInputError(formElement, inputElement, inputElement.validationMessage, inputErrorClass, errorClass);
//     } else {
//       hideInputError(formElement, inputElement, errorClass, inputErrorClass);
//     }
//   };
  
//   // Показать ошибку
//   const showInputError = (formElement, inputElement, errorMessage, inputErrorClass, errorClass) => {
//     const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
//     inputElement.classList.add(inputErrorClass);
//     errorElement.textContent = errorMessage;
//     errorElement.classList.add(errorClass);
//   };
  
//   // Скрыть ошибку
//   const hideInputError = (formElement, inputElement, errorClass, inputErrorClass) => {
//     const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
//     inputElement.classList.remove(inputErrorClass);
//     errorElement.classList.remove(errorClass);
//     errorElement.textContent = '';
//   };
  
//   function toggleButtonState(inputList, buttonElement, inactiveButtonClass){
//     if (hasInvalidInput(inputList)) {
//       buttonElement.classList.add(inactiveButtonClass);
//       buttonElement.disabled = true;
//     } else {
//       buttonElement.classList.remove(inactiveButtonClass);
//       buttonElement.disabled = false;
//     } 
//   };
  
//   function hasInvalidInput(inputList){
//     return inputList.some((inputElement) => {  
//     return !inputElement.validity.valid;
//   })
//   }
  
//   const classSettings = {
//     formSelector: '.popup__form',
//     inputSelector: '.popup__input',
//     submitButtonSelector: '.popup__button',
//     inactiveButtonClass: 'popup__button_disabled',
//     inputErrorClass: 'popup__input_type_error',
//     errorClass: 'popup__input-error_active'
//   };