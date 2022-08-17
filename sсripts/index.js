function openPopup(popupElement) {  // функция открытия попапа
    popupElement.classList.add('popup_is_open'); 
  } 


function closePopup(popupElement) { // функция закрытия попапа 
  popupElement.classList.remove('popup_is_open'); 

}; 

// Попап 1
editionButton.addEventListener('click', function(){ //открытие попапа редактирования профиля эвент
    nameInput.value = profileName.textContent;
    descriptionInput.value = profileDescription.textContent;
    openPopup(popupEditProfile);
});

popupCloseButton.addEventListener('click', function(){ //закрытие попапа редактирования профиля эвент
  closePopup(popupEditProfile);
});

//
function submitForm(event) { // отправка формы при закрытии попапа
    event.preventDefault();
    profileName.textContent = nameInput.value;
    profileDescription.textContent = descriptionInput.value;
    closePopup(popup);
};

formElement.addEventListener('submit', submitForm);

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

cardButtonClose.addEventListener('click', function(){ //закрытие попапа редактирования профиля эвент
  closePopup(popupEditCard);
});  

 function addCard(event) { // Добавление карточки
  event.preventDefault();
  nameForm = cardNameForm.value;
  linkForm = cardLinkForm.value;
  assembleCard({name: nameForm, link: linkForm});
  closePopup(popupEditCard);
};

 popupEditCard.addEventListener('submit', addCard);

 function likeFun(likeElement){
   likeElement.addEventListener('click', function (){
    likeElement.classList.toggle('card__image-like_liked');
    console.log(likeElement);
   });
 };

function removeCard(trashIcon, cardElement){
  trashIcon.addEventListener('click', () => {
    cardElement.remove();
  });
}

function addPictureOpenerEventListener(elementOpen, elementOpenTitle){
  elementOpen.addEventListener('click', () =>{
    popupClickCard.classList.toggle('popup_is_open');
    popupClickCardPhoto.src = elementOpen.src;
    popupClickCardPhoto.alt = elementOpen.alt;
    popupClickCardTitle.textContent = elementOpenTitle;
  });
};

popupCloseCardContent.addEventListener('click', function(){ //закрытие попапа редактирования профиля эвент
  closePopup(popupClickCard);
});  
