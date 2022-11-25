import Card from './Card.js';
import Section from './Section.js';
import FormValidator from './FormValidator.js';
import { initialCards, editionButton, popupEditProfileCloseButton, formElementEditProfile, editionCardButton, popupCardCloseButton,
  popupEditProfile, popupEditCard, popupClickCard, nameInput, profileName, profileDescription, descriptionInput, cardNameForm,
  cardLinkForm, list, formSubmitAddCard } from './variables.js';
import { classSettings } from './scripts.js';
import PopupWithImage from './PopupWithImage.js';
import PopupWithForm from './PopupWithForm.js';
import UserInfo from './UserInfo.js';

const userInfo = new UserInfo({ nameElement: profileName, descriptionElement: profileDescription });

formElementEditProfile.addEventListener('submit', submitFormEditProfile);

function submitFormEditProfile(editObject) {
    userInfo.setUserInfo(editObject)
  };

const editButtonPopupElement = new PopupWithForm('.popup_edit_profile', submitFormEditProfile);
editButtonPopupElement.setEventListeners()

editionButton.addEventListener('click', function() {
  const contentObj = userInfo.getUserInfo()
  nameInput.value = contentObj.name;
  descriptionInput.value = contentObj.description;
  editButtonPopupElement.open();
});

const editionCardButtonPopupElement = new PopupWithForm('.popup_edit_card', handleAddCard);
editionCardButtonPopupElement.setEventListeners()

editionCardButton.addEventListener('click', function(){
  editionCardButtonPopupElement.open();
});

function handleAddCard() {
  const name = cardNameForm.value;
  const link = cardLinkForm.value;
  createCard({name, link});
  editionCardButtonPopupElement.close();
  formAddCardValidator.toDisableButton();
};

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