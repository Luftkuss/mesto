import Card from './Card.js';
import FormValidator from './FormValidator.js';
import { initialCards, editionButton, popupEditProfileCloseButton, formElementEditProfile, editionCardButton, popupCardCloseButton,
  popupEditProfile, popupEditCard, popupClickCard, nameInput, profileName, profileDescription, descriptionInput, cardNameForm,
  cardLinkForm, list, formSubmitAddCard } from './variables.js';
import { classSettings, openPopup, closePopup } from './scripts.js'

const formElementEditProfileValidator = new FormValidator(classSettings, formElementEditProfile);
const formAddCardValidator = new FormValidator(classSettings, formAddCard);
  
formElementEditProfileValidator.enableValidation();
formAddCardValidator.enableValidation();

initialCards.forEach((item) => {
  const name = item.name;
  const link = item.link;
  createCard({name, link})
});

formAddCard.addEventListener('submit', handleAddCard);

function handleAddCard(event) {
  event.preventDefault();
  const name = cardNameForm.value;
  const link = cardLinkForm.value;
  createCard({name, link});
  closePopup(popupEditCard);
  console.log(formSubmitAddCard)
  event.target.reset();
  formAddCardValidator.toDisableButton()
};

function createCard({name, link}){
  const newCard = new Card ({name, link});
  insertCard(newCard.generateCard());
};

function insertCard(cardElement){
  list.prepend(cardElement);
};
 
editionButton.addEventListener('click', function() {
  nameInput.value = profileName.textContent;
  descriptionInput.value = profileDescription.textContent;
  openPopup(popupEditProfile);
});

popupEditProfileCloseButton.addEventListener('click', function() {
  closePopup(popupEditProfile);
});

function submitFormEditProfile(event) {
  event.preventDefault();
  profileName.textContent = nameInput.value;
  profileDescription.textContent = descriptionInput.value;
  closePopup(popupEditProfile);
};

formElementEditProfile.addEventListener('submit', submitFormEditProfile);

editionCardButton.addEventListener('click', function(){
  openPopup(popupEditCard);
});

popupCardCloseButton.addEventListener('click', function(){
  closePopup(popupEditCard);
});  

popupEditProfile.addEventListener('click', (evt) => {
  if (evt.target.classList.contains('popup_is_open')) {
      closePopup(popupEditProfile);
    };
});

popupEditCard.addEventListener('click', (evt) => {
  if (evt.target.classList.contains('popup_is_open')) {
      closePopup(popupEditCard);
    };
});

popupClickCard.addEventListener('click', (evt) => {
  if (evt.target.classList.contains('popup_is_open')) {
      closePopup(popupClickCard);
    };
});

popupClickCard.querySelector('.popup__close_card-content').addEventListener('click', () => {
      closePopup(popupClickCard)
 });