import './index.css';
import Card from '../components/Card.js';
import Section from '../components/Section.js';
import FormValidator from '../components/FormValidator.js';
import { initialCards, editionButton, formElementEditProfile, editionCardButton,
  nameInput, profileName, profileDescription, descriptionInput, cardNameForm,
  cardLinkForm } from '../utils/variables.js';
import { classSettings } from '../utils/scripts.js';
import PopupWithImage from '../components/PopupWithImage.js';
import PopupWithForm from '../components/PopupWithForm.js';
import PopupWithSubmit from '../components/PopupWithSubmit.js';
import UserInfo from '../components/UserInfo.js';
import Api from '../components/Api.js';

const api = new Api({
  baseUrl: 'https://mesto.nomoreparties.co/v1/cohort-54',
  headers: {
    authorization: 'ce774f77-8c0e-4344-a990-44b9a94c00ea',
    'Content-Type': 'application/json'
  }
});

api.getUserInformation()
  .then(res => {
    userInfo.setUserInfo({name: res.name, description: res.about})
  })

api.getCards()
.then(res => {
  // console.log(res)
  const cardsList = res
  cardsList.forEach((item) => {
    const name = item.name;
    const link = item.link;
    const likes = item.likes;
    createCard({name, link, likes})
  })
})



const userInfo = new UserInfo({ nameElement: profileName, descriptionElement: profileDescription });

function submitFormEditProfile(editObject) {
    api.editUserInformation(editObject)
    .then(res => res.json())
    .then(userInfo.setUserInfo(editObject))
  };

const рopupEditButtonElement = new PopupWithForm('.popup_edit_profile', submitFormEditProfile);
рopupEditButtonElement.setEventListeners()

editionButton.addEventListener('click', function() {
  const contentObj = userInfo.getUserInfo()
  nameInput.value = contentObj.name;
  descriptionInput.value = contentObj.description;
  рopupEditButtonElement.open();
});

const editionCardButtonPopupElement = new PopupWithForm('.popup_edit_card', handleAddCard);
editionCardButtonPopupElement.setEventListeners()

editionCardButton.addEventListener('click', function(){
  editionCardButtonPopupElement.open();
});

function handleAddCard(inputElements) {
  const name = inputElements.picture;
  const link = inputElements.url;
  createCard({name, link, likes});
  api.uploadCard({name, link})
  editionCardButtonPopupElement.close();
  formAddCardValidator.toDisableButton();
};

const popupClickCardPopupElement = new PopupWithImage('.popup_click_card');
popupClickCardPopupElement.setEventListeners()
// 
const popupConfirmDelete = new PopupWithSubmit('.popup_confirm_delete', handleSubmitDeleteCard);
popupConfirmDelete.setEventListeners()

function handleSubmitDeleteCard(){
  console.log('1')
}

const formElementEditProfileValidator = new FormValidator(classSettings, formElementEditProfile);
const formAddCardValidator = new FormValidator(classSettings, formAddCard);
formElementEditProfileValidator.enableValidation();
formAddCardValidator.enableValidation();

const cardList = new Section({
  items: '',
  renderer: (item) => {
      const name = item.name;
      const link = item.link;
      const likes = item.likes;
      createCard({name, link, likes})
  }  
}, '.elements__table');

cardList.renderItems();

function createCard({name, link, likes}){
  const newCard = new Card ({name, link, likes}, handleCardClick, handleDeleteCard);
  cardList.addItem(newCard.generateCard());
};

function handleCardClick(nameElement, linkElement) {
  popupClickCardPopupElement.open(nameElement, linkElement)
}

function handleDeleteCard() {
  console.log("clicked")
  popupConfirmDelete.open()
}

// formElementEditProfile.addEventListener('submit', submitFormEditProfile);