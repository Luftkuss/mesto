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
    formSubmitAddCard: '.popup__button-addcard'
}

const formAddCard = document.getElementById('formAddCard');
const formSubmitAddCard = document.querySelector(variables.formSubmitAddCard);
const popupCloseCardContent = document.querySelector(variables.popupCloseCardContent);
const popupClickCard = document.querySelector(variables.popupClickCard);
const popupClickCardPhoto = document.querySelector(variables.popupClickCardPhoto);
const popupClickCardTitle = document.querySelector(variables.popupClickCardTitle);
const tamplateCardPhoto = document.querySelector(variables.tamplateCardPhoto);
const list = document.querySelector(variables.list);
const template = document.querySelector(variables.template).content.querySelector('.card'); 
const editionButton = document.querySelector(variables.editionButton);
const profileName = document.querySelector(variables.profileName);
const profileDescription = document.querySelector(variables.profileDescription);
const nameInput = document.querySelector(variables.nameInput);
const descriptionInput = document.querySelector(variables.descriptionInput);
const formElementEditProfile = document.querySelector(variables.formElementEditProfile);
const popupEditProfile = document.querySelector(variables.popupEditProfile);
const popupEditCard = document.querySelector(variables.popupEditCard);
const cardInput = popupEditCard.querySelector(variables.cardInput);
const popupEditContent = document.querySelector(variables.popupEditContent);
const editionProfileButton = document.querySelector(variables.editionProfileButton);
const editionCardButton = document.querySelector(variables.editionCardButton);
const cardNameForm = popupEditCard.querySelector(variables.cardNameForm);
const cardLinkForm = popupEditCard.querySelector(variables.cardLinkForm);
const trashIcon = template.querySelector(variables.trash);
const cardsLink = template.querySelector(variables.cardsLink);
const popup = document.querySelector(variables.popup);
const popupEditProfileCloseButton = document.querySelector(variables.popupEditProfileCloseButton);
const popupCardCloseButton = document.querySelector(variables.popupCardCloseButton);
const popupAddCardCloseButton = document.querySelector(variables.popupAddCardCloseButton);

// export const elementsTable = document.querySelector('.elements__table');
