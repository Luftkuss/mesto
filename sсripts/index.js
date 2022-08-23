function openPopup(popupElement) {  // функция открытия попапа
    popupElement.classList.add('popup_is_open'); 
    document.addEventListener('keyup', closeEsc);
  } 


function closePopup(popupElement) { // функция закрытия попапа 
  popupElement.classList.remove('popup_is_open'); 
  document.removeEventListener('keyup', closeEsc);
}; 

// Попап 1
editionButton.addEventListener('click', function(){ //открытие попапа редактирования профиля эвент
    nameInput.value = profileName.textContent;
    descriptionInput.value = profileDescription.textContent;

    openPopup(popupEditProfile);
});

popupEditProfileCloseButton.addEventListener('click', function(){ //закрытие попапа редактирования профиля эвент
  closePopup(popupEditProfile);
});

//
function submitFormEditProfile(event) { // отправка формы при закрытии попапа
    event.preventDefault();
    profileName.textContent = nameInput.value;
    profileDescription.textContent = descriptionInput.value;
    closePopup(popup);
};

formElementEditProfile.addEventListener('submit', submitFormEditProfile);

function createCard({name, link}) {
  const cardElement = template.cloneNode(true); 
  const cardsName = cardElement.querySelector(variables.cardsName);
  const cardsLink = cardElement.querySelector(variables.cardsLink);
  cardsName.textContent = name;
  cardsLink.src = link;
  cardsLink.alt = name;
  likeFun(cardElement.querySelector(variables.like));
  removeCard (cardElement.querySelector(variables.trash), cardElement);
  addPictureOpenerEventListener(cardElement.querySelector(variables.cardsLink), name);
  return cardElement
};



function insertCard(card){ // Универсальная функция добавления карточки
  list.prepend(card);
}

function assembleCard({name, link}){
  insertCard(createCard({name, link}));
};


initialCards.forEach(assembleCard)

  // Попап 2
editionCardButton.addEventListener('click', function(){ //открытие попапа редактирования карточек эвент
  openPopup(popupEditCard);
});

popupCardCloseButton.addEventListener('click', function(){ //закрытие попапа редактирования профиля эвент
  closePopup(popupEditCard);
});  

 function addCard(event) { // Добавление карточки
  event.preventDefault();
  nameForm = cardNameForm.value;
  linkForm = cardLinkForm.value;
  assembleCard({name: nameForm, link: linkForm});
  closePopup(popupEditCard);
  event.target.reset();
  formSubmitAddCard.classList.add('popup__button_disabled');
//  
};

formAddCard.addEventListener('submit', addCard);

 function likeFun(likeElement){
   likeElement.addEventListener('click', function (){
    likeElement.classList.toggle('card__image-like_liked');
   });
 };

function removeCard(trashIcon, cardElement){
  trashIcon.addEventListener('click', () => {
    cardElement.remove();
  });
}

function addPictureOpenerEventListener(elementOpen, elementOpenTitle){
  elementOpen.addEventListener('click', () =>{
    // popupClickCard.classList.toggle('popup_is_open');
    openPopup(popupClickCard);
    popupClickCardPhoto.src = elementOpen.src;
    popupClickCardPhoto.alt = elementOpen.alt;
    popupClickCardTitle.textContent = elementOpenTitle;
  
  });
};

popupAddCardCloseButton.addEventListener('click', function(){ //закрытие попапа редактирования профиля эвент
  closePopup(popupClickCard);
});  

// Клик на оверлей попап редактировани профиля
popupEditProfile.addEventListener('click', (evt) => {
  if (evt.target.classList.contains('popup_is_open')) {
        closePopup(popupEditProfile);
  };
});
// Клик на оверлей попап создания карточки 
popupEditCard.addEventListener('click', (evt) => {
  if (evt.target.classList.contains('popup_is_open')) {
        closePopup(popupEditCard);
  };
});
// Клик на оверлей попап контента карточки при клике на неё
popupClickCard.addEventListener('click', (evt) => {
  if (evt.target.classList.contains('popup_is_open')) {
        closePopup(popupClickCard);
  };
});

// Функция закрытия попапа при клике на ESC
function  closeEsc(evt) {
  if (evt.key === 'Escape') {
    const openedPopup = document.querySelector('.popup_is_open');
    closePopup(openedPopup); 
  }
} 