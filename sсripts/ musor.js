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