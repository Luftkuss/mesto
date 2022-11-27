const variables = {
    template: '#card-item',
    elementsTable: '.elements__table',
    formAddCard: 'formAddCard',
    formSubmitAddCard: '.popup__button-addcard',
    popupCloseCardContent: '.popup__close_card-content',

    popupEditProfile: '.popup_edit_profile',
    popupClickCard: '.popup_click_card',
    popupClickCardPhoto: '.popup__click-photo',
    popupClickCardTitle: '.popup__title_cardseen',
    list: '.elements__table',

    editionButton: '.profile__edit-button',
    profileName: '.profile__title',
    profileDescription: '.profile__description',
    nameInput: '.popup__input_type_name',
    descriptionInput: '.popup__input_type_description', 

    formElementEditProfile: '.popup__form-profile',
    popupEditCard: '.popup_edit_card', 
    editionCardButton: '.profile__add-button',
    cardNameForm: '.popup__input_type_name',
    cardLinkForm: '.popup__input_type_description',

    popup: '.popup',
    popupEditProfileCloseButton: '.popup__close-edit',
    popupCardCloseButton: '.popup__close-add',
    popupEditProfileName: '.popup__editprofile-input_type_name',
    popupEditProfileDescription: '.popup__editprofile-input_type_description'
}

const template = document.querySelector(variables.template).content.querySelector('.card'); 
export const elementsTable = document.querySelector(variables.elementsTable);
export const formAddCard = document.getElementById('formAddCard');
export const formSubmitAddCard = document.querySelector(variables.formSubmitAddCard);
export const popupCloseCardContent = document.querySelector(variables.popupCloseCardContent);

export const popupClickCard = document.querySelector(variables.popupClickCard);
export const popupClickCardPhoto = document.querySelector(variables.popupClickCardPhoto);
export const popupClickCardTitle = document.querySelector(variables.popupClickCardTitle);
export const list = document.querySelector(variables.list);
export const editionButton = document.querySelector(variables.editionButton);

export const profileName = document.querySelector(variables.profileName);
export const profileDescription = document.querySelector(variables.profileDescription);
export const nameInput = document.querySelector(variables.nameInput);
export const descriptionInput = document.querySelector(variables.descriptionInput);
export const formElementEditProfile = document.querySelector(variables.formElementEditProfile);

export const popupEditProfile = document.querySelector(variables.popupEditProfile);
export const popupEditCard = document.querySelector(variables.popupEditCard);
export const editionCardButton = document.querySelector(variables.editionCardButton);
export const cardNameForm = popupEditCard.querySelector(variables.cardNameForm);
export const cardLinkForm = popupEditCard.querySelector(variables.cardLinkForm);

export const popupEditProfileCloseButton = document.querySelector(variables.popupEditProfileCloseButton);
export const popupCardCloseButton = document.querySelector(variables.popupCardCloseButton);
export const popupEditProfileName = document.querySelector(variables.popupEditProfileName);
export const popupEditProfileDescription = document.querySelector(variables.popupEditProfileDescription);

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