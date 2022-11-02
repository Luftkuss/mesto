import Card from './Card.js';
import FormValidator from './FormValidator.js';
import { initialCards, editionButton, popupEditProfileCloseButton, formElementEditProfile, editionCardButton, popupCardCloseButton,
  popupEditProfile, popupEditCard, elementsTable, popupClickCard, nameInput, profileName, profileDescription, descriptionInput,
  popup, cardNameForm, cardLinkForm, list, formSubmitAddCard, openPopup, closePopup, classSettings } from './variables.js';

const formElementEditProfileValidator = new FormValidator(classSettings, formElementEditProfile);
const formAddCardValidator = new FormValidator(classSettings, formAddCard);
  
formElementEditProfileValidator.enableValidation();
formAddCardValidator.enableValidation();

initialCards.forEach((item) => {
  const card = new Card (item.name, item.link);
  const cardElement = card.generateCard();
  elementsTable.prepend(cardElement);
});

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
  closePopup(popup);
  };

formElementEditProfile.addEventListener('submit', submitFormEditProfile);

editionCardButton.addEventListener('click', function(){
  openPopup(popupEditCard);
  });

popupCardCloseButton.addEventListener('click', function(){
  closePopup(popupEditCard);
  });  

formAddCard.addEventListener('submit', addCard);

function addCard(event) {
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