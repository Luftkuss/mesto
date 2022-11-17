import Card from './Card.js';
import Section from './Section.js';
import FormValidator from './FormValidator.js';
import { initialCards, editionButton, popupEditProfileCloseButton, formElementEditProfile, editionCardButton, popupCardCloseButton,
  popupEditProfile, popupEditCard, popupClickCard, nameInput, profileName, profileDescription, descriptionInput, cardNameForm,
  cardLinkForm, list, formSubmitAddCard } from './variables.js';
import { classSettings } from './scripts.js';
import Popup from './Popup.js';

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
  const newCard = new Card ({name, link});
  cardList.addItem(newCard.generateCard());
};
 
const editButtonPopupElement = new Popup('.popup_edit_profile');
const editionCardButtonPopupElement = new Popup('.popup_edit_card');
const popupClickCardPopupElement = new Popup('.popup_click_card');

editionButton.addEventListener('click', function() {
  nameInput.value = profileName.textContent;
  descriptionInput.value = profileDescription.textContent;
  editButtonPopupElement.open();
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