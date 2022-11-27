import './pages/index.css';
import Card from './components/Card.js';
import Section from './components/Section.js';
import FormValidator from './components/FormValidator.js';
import { initialCards, editionButton, formElementEditProfile, editionCardButton,
  nameInput, profileName, profileDescription, descriptionInput, cardNameForm,
  cardLinkForm, formSubmitAddCard} from './components/variables.js';
import { classSettings } from './components/scripts.js';
import PopupWithImage from './components/PopupWithImage.js';
import PopupWithForm from './components/PopupWithForm.js';
import UserInfo from './components/UserInfo.js';

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