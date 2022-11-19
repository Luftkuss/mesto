import Card from './Card.js';
import Section from './Section.js';
import FormValidator from './FormValidator.js';
import { initialCards, editionButton, popupEditProfileCloseButton, formElementEditProfile, editionCardButton, popupCardCloseButton,
  popupEditProfile, popupEditCard, popupClickCard, nameInput, profileName, profileDescription, descriptionInput, cardNameForm,
  cardLinkForm, list, formSubmitAddCard } from './variables.js';
import { classSettings } from './scripts.js';
import PopupWithImage from './PopupWithImage.js';
import PopupWithForm from './PopupWithForm.js';

//
formElementEditProfile.addEventListener('submit', submitFormEditProfile);

function submitFormEditProfile(contentObject) {
  // contentObject[0] = nameInput.value;
  // contentObject[1] = descriptionInput.value;
    profileName.textContent = nameInput.value;
    profileDescription.textContent = descriptionInput.value;
  };

const editButtonPopupElement = new PopupWithForm('.popup_edit_profile', submitFormEditProfile);

editionButton.addEventListener('click', function() {
  // nameInput.value = profileName.textContent;
  // descriptionInput.value = profileDescription.textContent;
  editButtonPopupElement.open();
});
//
//
const editionCardButtonPopupElement = new PopupWithForm('.popup_edit_card', handleAddCard);

editionCardButton.addEventListener('click', function(){
  editionCardButtonPopupElement.open();
});

formAddCard.addEventListener('submit', handleAddCard);

function handleAddCard(event) {
  // event.preventDefault();
  const name = cardNameForm.value;
  const link = cardLinkForm.value;
  createCard({name, link});
  editionCardButtonPopupElement.close();
  console.log(formSubmitAddCard)
  event.target.reset();
  formAddCardValidator.toDisableButton()
};
//
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

function createCard({name, link}){
  const newCard = new Card ({name, link}, handleCardClick);
  cardList.addItem(newCard.generateCard());
};

function handleCardClick(nameElement, linkElement) {
  popupClickCardPopupElement.open(nameElement, linkElement)
}