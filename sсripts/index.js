// Функции открытия и закрытия попапа
function openPopup(popupElement) {  // функция открытия попапа + сохраненеия данных в атрибутах
    popupElement.classList.add('popup__isOpen');
    nameInput.value = profileName.textContent;
    descriptionInput.value = profileDescription.textContent;
}

function closePopup(popupElement) { // функция закрытия попапа
    popupElement.classList.remove('popup__isOpen');
};

// Попап 1
editButton.addEventListener('click', function(){ //открытие попапа редактирования профиля эвент
    openPopup(popupEditProfile);
});

popupCloseButton.addEventListener('click', function(){ //закрытие попапа редактирования профиля эвент
    closePopup(popupEditProfile);
});

// Попап 2
editCardButton.addEventListener('click', function(){ //открытие попапа редактирования карточек эвент
    openPopup(popupEditCard);
});

closeCardButton.addEventListener('click', function(){ //закрытие попапа редактирования профиля эвент
    closePopup(popupEditCard);
});

//

function submitForm(event) { // отправка формы при закрытии попапа
    event.preventDefault();
    profileName.textContent = nameInput.value;
    profileDescription.textContent = descriptionInput.value;
    closePopup(popup);
};

formElement.addEventListener('submit', submitForm);

// Массив карточек

const initialCards = [
    { name: 'Архыз',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'},

    { name: 'Челябинская область',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'},

    { name: 'Иваново',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'},

    { name: 'Камчатка',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'},

    { name: 'Холмогорский район',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'},

    { name: 'Байкал',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'},
  ];

  function createCard({name, link}) {
    const cardElement = template.cloneNode(true); 
    const cardsName = cardElement.querySelector(varibles.cardsName);
    const cardsLink = cardElement.querySelector(varibles.cardsLink);
    cardsName.textContent = name;
    cardsLink.src = link;
    list.prepend(cardElement);
    return cardElement;
    
  };

  
  initialCards.forEach(createCard, () => {
    
    });

 
    
   // создание всех карточек
  

 


  // function addEventListener(){
  //  const cardInput = popupEditCard.querySelector(varibles.cardInput);
  //  formElement.addEventListener('submit', function(event){
   //   event.preventDefault();
  //    console.log(cardInput.value);
  //  })
 // };
  //  initialCards.forEach(createCard, function(){
  //  createCard();
    
  //})
