
// Функции открытия и закрытия попапа
function changePopupCondition(popupElement) {  // функция открытия попапа + сохраненеия данных в атрибутах
    popupElement.classList.toggle('popup_is_open');
}

// Попап 1
editionButton.addEventListener('click', function(){ //открытие попапа редактирования профиля эвент
    nameInput.value = profileName.textContent;
    descriptionInput.value = profileDescription.textContent;
    changePopupCondition(popupEditProfile);
});

popupCloseButton.addEventListener('click', function(){ //закрытие попапа редактирования профиля эвент
  changePopupCondition(popupEditProfile);
});

//
function submitForm(event) { // отправка формы при закрытии попапа
    event.preventDefault();
    profileName.textContent = nameInput.value;
    profileDescription.textContent = descriptionInput.value;
    changePopupCondition(popup);
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


initialCards.forEach(assembleCard, () => { 
});

  // Попап 2
editionCardButton.addEventListener('click', function(){ //открытие попапа редактирования карточек эвент
  changePopupCondition(popupEditCard);
});

cardButtonClose.addEventListener('click', function(){ //закрытие попапа редактирования профиля эвент
  changePopupCondition(popupEditCard);
});  

 function addCard(event) { // Добавление карточки
  event.preventDefault();
  nameForm = cardNameForm.value;
  linkForm = cardLinkForm.value;
  assembleCard({name: nameForm, link: linkForm});
  changePopupCondition(popupEditCard);
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

function addPictureOpenerEventListener(openElement, openElementTitle){
  openElement.addEventListener('click', () =>{
    popupClickCard.classList.toggle('popup_is_open');
    popupClickCardPhoto.src = openElement.src;
    popupClickCardPhoto.alt = openElement.alt;
    popupClickCardTitle.textContent = openElementTitle;
  });
};

popupCloseCardContent.addEventListener('click', function(){ //закрытие попапа редактирования профиля эвент
  changePopupCondition(popupClickCard);
});  
