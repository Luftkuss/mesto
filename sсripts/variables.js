


const variables = {
    editionButton: '.profile__edit-button',
    popup: '.popup', 
    popupEditProfile: '.popup_edit_profile',
    popupClickCard: '.popup_click_card',
    popupClickCardPhoto: '.popup__click-photo',
    popupClickCardTitle: '.popup__title_cardseen',
    popupEditProfileCloseButton: '.popup__close-edit',
    popupCardCloseButton: '.popup__close-add',
    popupAddCardCloseButton: '.popup__close-cards',
    formAddCard: 'formAddCard',
    profileName: '.profile__title',
    profileDescription: '.profile__description',
    cardNameForm: '.popup__input_type_name',
    cardLinkForm: '.popup__input_type_description',
    nameInput: '.popup__input_type_name',
    cardInput: '.popup__input_type_name',
    descriptionInput: '.popup__input_type_description', 
    formElementEditProfile: '.popup__form-profile', 
    popupEditProfile: '.popup_edit_profile', 
    popupEditCard: '.popup_edit_card', 
    popupEditContent: '.popup_edit_content', 
    editionProfileButton: '.profile__add-button',
    editionCardButton: '.profile__add-button',
    popupCloseCardContent: '.popup__close_card-content',
    template: '#card-item',
    tamplateCardPhoto: '#card-photo',
    list: '.elements__table',
    cardsName: '#card-name',
    cardsLink: '#card-link',
    like: '.card__image-like',
    trash: '.card__trash',
    сardImage: '.card__image',
    formSubmitAddCard: '.popup__button-addcard',
    elementsTable: '.elements__table'
}

export const classSettings = {
    formSelector: '.popup__form',
    inputSelector: '.popup__input',
    submitButtonSelector: '.popup__button',
    inactiveButtonClass: 'popup__button_disabled',
    inputErrorClass: 'popup__input_type_error',
    errorClass: 'popup__input-error_active'
  };

export function openPopup(popupElement) {
    popupElement.classList.add('popup_is_open'); 
    document.addEventListener('keyup', closeEsc);
    };

export function closePopup(popupElement) {
    popupElement.classList.remove('popup_is_open'); 
    document.removeEventListener('keyup', closeEsc);
    }; 

export function closeEsc(evt) {
    if (evt.key === 'Escape') {
    const openedPopup = document.querySelector('.popup_is_open');
    closePopup(openedPopup); 
        }
    } 



export const elementsTable = document.querySelector(variables.elementsTable);
export const formAddCard = document.getElementById('formAddCard');
export const formSubmitAddCard = document.querySelector(variables.formSubmitAddCard);
const popupCloseCardContent = document.querySelector(variables.popupCloseCardContent);
export const popupClickCard = document.querySelector(variables.popupClickCard);
export const popupClickCardPhoto = document.querySelector(variables.popupClickCardPhoto);
export const popupClickCardTitle = document.querySelector(variables.popupClickCardTitle);
const tamplateCardPhoto = document.querySelector(variables.tamplateCardPhoto);
export const list = document.querySelector(variables.list);
const template = document.querySelector(variables.template).content.querySelector('.card'); 
export const editionButton = document.querySelector(variables.editionButton);
export const profileName = document.querySelector(variables.profileName);
export const profileDescription = document.querySelector(variables.profileDescription);
export const nameInput = document.querySelector(variables.nameInput);
export const descriptionInput = document.querySelector(variables.descriptionInput);
export const formElementEditProfile = document.querySelector(variables.formElementEditProfile);
export const popupEditProfile = document.querySelector(variables.popupEditProfile);
export const popupEditCard = document.querySelector(variables.popupEditCard);
const cardInput = popupEditCard.querySelector(variables.cardInput);
const popupEditContent = document.querySelector(variables.popupEditContent);
const editionProfileButton = document.querySelector(variables.editionProfileButton);
export const editionCardButton = document.querySelector(variables.editionCardButton);
export const cardNameForm = popupEditCard.querySelector(variables.cardNameForm);
export const cardLinkForm = popupEditCard.querySelector(variables.cardLinkForm);
const trashIcon = template.querySelector(variables.trash);
const cardsLink = template.querySelector(variables.cardsLink);
export const popup = document.querySelector(variables.popup);
export const popupEditProfileCloseButton = document.querySelector(variables.popupEditProfileCloseButton);
export const popupCardCloseButton = document.querySelector(variables.popupCardCloseButton);
const popupAddCardCloseButton = document.querySelector(variables.popupAddCardCloseButton);

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
