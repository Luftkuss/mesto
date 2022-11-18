import Card from './Card.js';
import Section from './Section.js';
import FormValidator from './FormValidator.js';
import { initialCards, editionButton, popupEditProfileCloseButton, formElementEditProfile, editionCardButton, popupCardCloseButton,
  popupEditProfile, popupEditCard, popupClickCard, nameInput, profileName, profileDescription, descriptionInput, cardNameForm,
  cardLinkForm, list, formSubmitAddCard } from './variables.js';
import { classSettings } from './scripts.js';
import PopupWithImage from './PopupWithImage.js';
import PopupWithForm from './PopupWithForm.js';

const editButtonPopupElement = new PopupWithForm('.popup_edit_profile', submitFormEditProfile);
const editionCardButtonPopupElement = new PopupWithForm('.popup_edit_card');
const popupClickCardPopupElement = new PopupWithImage('.popup_click_card');
popupClickCardPopupElement.setEventListeners()

const formElementEditProfileValidator = new FormValidator(classSettings, formElementEditProfile);
const formAddCardValidator = new FormValidator(classSettings, formAddCard);
formElementEditProfileValidator.enableValidation();
formAddCardValidator.enableValidation();

const cardList = new Section({
  items: initialCards,
  renderer: (item) => {
        const name = item.name;
        const link = item.link;
        createCard({name, link})
  }
}, '.elements__table');

cardList.renderItems();

formAddCard.addEventListener('submit', handleAddCard);
function handleAddCard(event) {
  event.preventDefault();
  const name = cardNameForm.value;
  const link = cardLinkForm.value;
  createCard({name, link});
  editionCardButtonPopupElement.close();
  console.log(formSubmitAddCard)
  event.target.reset();
  formAddCardValidator.toDisableButton()
};

function createCard({name, link}){
  const newCard = new Card ({name, link}, handleCardClick);
  cardList.addItem(newCard.generateCard());
};

function handleCardClick(nameElement, linkElement) {
  popupClickCardPopupElement.open(nameElement, linkElement)
}

editionButton.addEventListener('click', function() {
  // nameInput.value = profileName.textContent;
  // descriptionInput.value = profileDescription.textContent;
  editButtonPopupElement.open();
  editButtonPopupElement.setEventListeners();
});

function submitFormEditProfile(event) {
  event.preventDefault();
  profileName.textContent = nameInput.value;
  profileDescription.textContent = descriptionInput.value;
  editButtonPopupElement.close();
};

formElementEditProfile.addEventListener('submit', submitFormEditProfile);

editionCardButton.addEventListener('click', function(){
  editionCardButtonPopupElement.open();
});