import './index.css';
import Card from '../components/Card.js';
import Section from '../components/Section.js';
import FormValidator from '../components/FormValidator.js';
import { formElementEditAvatar, editionButton, formElementEditProfile, editionCardButton,
  nameInput, profileName, profileDescription, descriptionInput, avatarButton,
  profileAvatar, popupButtonAddAvatar, formSubmitAddCard, popupEditProfile, popupButtonEditProfile } from '../utils/variables.js';
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
    userInfo.setUserInfo(res)
  })

api.getCards()
  .then(res => {
    res.forEach(createCard)
})

const userInfo = new UserInfo({ nameElement: profileName, descriptionElement: profileDescription, avatarElement: profileAvatar });

function submitFormEditProfile(editObject) {
    рopupEditButtonElement.sendingInform(true, 'Сохранение...')
    api.editUserInformation(editObject)
    .then(res => res.json())
    .then(userInfo.setUserInfo(editObject))
    .finally(() => рopupEditButtonElement.sendingInform(false))
  };

const рopupEditButtonElement = new PopupWithForm('.popup_edit_profile', submitFormEditProfile, popupButtonEditProfile);
рopupEditButtonElement.setEventListeners()

editionButton.addEventListener('click', function() {
  const contentObj = userInfo.getUserInfo()
  nameInput.value = contentObj.name;
  descriptionInput.value = contentObj.description;
  рopupEditButtonElement.open();
});

const editionCardButtonPopupElement = new PopupWithForm('.popup_edit_card', handleAddCard, formSubmitAddCard);
editionCardButtonPopupElement.setEventListeners()

editionCardButton.addEventListener('click', function(){
  editionCardButtonPopupElement.open();
});

function handleAddCard(inputElements) {
  editionCardButtonPopupElement.sendingInform(true, 'Сохранение...')
  api.uploadCard({ name: inputElements.picture, link: inputElements.url })
  .then(res => {
    res.trashExist = res.owner._id === userInfo.getUserInfo()._id
    createCard(res);
  })
  .finally(() => editionCardButtonPopupElement.sendingInform(false))
  editionCardButtonPopupElement.close();
  formAddCardValidator.toDisableButton();
};

const popupClickCardPopupElement = new PopupWithImage('.popup_click_card');
popupClickCardPopupElement.setEventListeners()

const popupConfirmDelete = new PopupWithSubmit('.popup_confirm_delete', handleSubmitDeleteCard);
popupConfirmDelete.setEventListeners()

const popupChangeAvatar = new PopupWithForm('.popup_edit_avatar', handleSubmitChangeAvatar, popupButtonAddAvatar);
popupChangeAvatar.setEventListeners()

avatarButton.addEventListener('click', function(){
  popupChangeAvatar.open();
});

function handleSubmitChangeAvatar(editObject){
  popupChangeAvatar.sendingInform(true, 'Сохранение...')
  api.changeAvatar(editObject)
  .then(userInfo.setUserAvatar(editObject))
  .finally(() => popupChangeAvatar.sendingInform(false))
}

function handleSubmitDeleteCard(id){
  api.deleteCard(id)
  cardList.getItemById(id).removeCard()
  popupConfirmDelete.close()
}

const formElementEditProfileValidator = new FormValidator(classSettings, formElementEditProfile);
const formAddCardValidator = new FormValidator(classSettings, formAddCard);
const formAddAvatar = new FormValidator(classSettings, formElementEditAvatar);
formElementEditProfileValidator.enableValidation();
formAddCardValidator.enableValidation();
formAddAvatar.enableValidation();

const cardList = new Section({
  items: [],
  renderer: (item) => {
      const name = item.name;
      const link = item.link;
      const likes = item.likes;
      return createCard({name, link, likes})
  }  
}, '.elements__table');

cardList.renderItems();

function createCard({ name, link, likes, _id, owner }){
  const trashExist = owner._id === userInfo.getUserInfo()._id
  const usersId = userInfo.getUserInfo()._id
  const newCard = new Card ({ name, link, likes, _id, trashExist, usersId }, handleCardClick, handleDeleteCard, (id) => {
    if(newCard.isCardLiked()){
      api.deleteLike(id)
      .then(res => {
      newCard.setLike(res.likes)
    })
    } else {
      api.doLike(id)
      .then(res => {
      newCard.setLike(res.likes)
    })
  }
  });
  cardList.addItem(newCard.generateCard(), newCard);
  return newCard
};

function handleCardClick(nameElement, linkElement) {
  popupClickCardPopupElement.open(nameElement, linkElement)
}
 
function handleDeleteCard(id) {
  popupConfirmDelete.setId(id)
  popupConfirmDelete.open()
}
