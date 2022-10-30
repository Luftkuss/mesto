import Card from './Card.js';

export const initialCards = [
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

export function openPopup(popupElement) {
    popupElement.classList.add('popup_is_open'); 
    document.addEventListener('keyup', closeEsc);
  } 

export function closePopup(popupElement) {
  popupElement.classList.remove('popup_is_open'); 
  document.removeEventListener('keyup', closeEsc);
}; 

export function  closeEsc(evt) {
  if (evt.key === 'Escape') {
    const openedPopup = document.querySelector('.popup_is_open');
    closePopup(openedPopup); 
  }
} 

editionButton.addEventListener('click', function(){ // Попап 1 //открытие попапа редактирования профиля эвент
    nameInput.value = profileName.textContent;
    descriptionInput.value = profileDescription.textContent;
    openPopup(popupEditProfile);
});

popupEditProfileCloseButton.addEventListener('click', function(){ //закрытие попапа редактирования профиля эвент
  closePopup(popupEditProfile);
});

function submitFormEditProfile(event) { // отправка формы при закрытии попапа
    event.preventDefault();
    profileName.textContent = nameInput.value;
    profileDescription.textContent = descriptionInput.value;
    closePopup(popup);
};


formElementEditProfile.addEventListener('submit', submitFormEditProfile);

editionCardButton.addEventListener('click', function(){ // Попап 2 // открытие попапа редактирования карточек эвент
  openPopup(popupEditCard);
});

popupCardCloseButton.addEventListener('click', function(){ // закрытие попапа редактирования профиля эвент
  closePopup(popupEditCard);
});  

formAddCard.addEventListener('submit', addCard);


function addCard(event) { // Добавление карточки
  event.preventDefault();
  const nameForm = cardNameForm.value;
  const linkForm = cardLinkForm.value;
  const newCard = new Card (nameForm, linkForm);
  list.prepend(newCard.generateCard());
  closePopup(popupEditCard);
  formSubmitAddCard.disabled = true;
  event.target.reset();
  formSubmitAddCard.classList.add('popup__button_disabled');
};

popupEditProfile.addEventListener('click', (evt) => { // Клик на оверлей попап редактировани профиля
  if (evt.target.classList.contains('popup_is_open')) {
        closePopup(popupEditProfile);
  };
});

popupEditCard.addEventListener('click', (evt) => { // Клик на оверлей попап создания карточки 
  if (evt.target.classList.contains('popup_is_open')) {
        closePopup(popupEditCard);
  };
});