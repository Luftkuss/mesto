const variables = {
    editionButton: '.profile__edit-button', // Кнопка редактирвоания
    popup: '.popup', 
    
    popupEditProfile: '.popup_edit_profile', // Popup 1
    popupClickCard: '.popup_click_card',
    popupClickCardPhoto: '.popup__click-photo',
    popupClickCardTitle: '.popup__title_cardseen',

    popupEditProfileCloseButton: '.popup__close-edit',
    popupCardCloseButton: '.popup__close-add',
    popupAddCardCloseButton: '.popup__close-cards',

    formAddCard: 'formAddCard',

    profileName: '.profile__title', // Имя
    profileDescription: '.profile__description', // Описание

    cardNameForm: '.popup__input_type_name',
    cardLinkForm: '.popup__input_type_description',

    nameInput: '.popup__input_type_name', // инпут имени
    cardInput: '.popup__input_type_name', // импут названия карточки
    descriptionInput: '.popup__input_type_description', // инпут описания

    formElementEditProfile: '.popup__form-profile', // форма

    popupEditProfile: '.popup_edit_profile', // попап редактирования профиля
    popupEditCard: '.popup_edit_card', // попап редактирования карточек
    popupEditContent: '.popup_edit_content', // попап наполнения карточек

    editionProfileButton: '.profile__add-button', // кнопка редактирования профиля
    editionCardButton: '.profile__add-button', // кнопка редактирования карточек

  
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

const  popupCloseCardContent = document.querySelector(variables.popupCloseCardContent);
const  popupClickCard = document.querySelector(variables.popupClickCard);
const  popupClickCardPhoto = document.querySelector(variables.popupClickCardPhoto);
const  popupClickCardTitle = document.querySelector(variables.popupClickCardTitle);

const  tamplateCardPhoto = document.querySelector(variables.tamplateCardPhoto); // Нода попапа с фото

const list = document.querySelector(variables.list);
const template = document.querySelector(variables.template).content.querySelector('.card'); // Нода карточки

const editionButton = document.querySelector(variables.editionButton);                 // кнопка редактирвоания

const profileName = document.querySelector(variables.profileName);                      // Имя 
const profileDescription = document.querySelector(variables.profileDescription);         // Описание

const nameInput = document.querySelector(variables.nameInput);                // Имя введение в форме
const descriptionInput = document.querySelector(variables.descriptionInput);  // Описание введение в форме

const formElementEditProfile = document.querySelector(variables.formElementEditProfile);                        // Форма
//
const popupEditProfile = document.querySelector(variables.popupEditProfile); // поиск DOM элемента попапа редактировани профиля
const popupEditCard = document.querySelector(variables.popupEditCard); // редактировани карточки
const cardInput = popupEditCard.querySelector(variables.cardInput); // импут названия карточки

const popupEditContent = document.querySelector(variables.popupEditContent); // попап наполнения карточки

const editionProfileButton = document.querySelector(variables.editionProfileButton); // DOM селектор кнопки редактирвоания опсиания
const editionCardButton = document.querySelector(variables.editionCardButton); // DOM селектор кнопки редактирвоания списка карточек

const cardNameForm = popupEditCard.querySelector(variables.cardNameForm);
const cardLinkForm = popupEditCard.querySelector(variables.cardLinkForm);

const trashIcon = template.querySelector(variables.trash);

const cardsLink = template.querySelector(variables.cardsLink);

const popup = document.querySelector(variables.popup);

const popupEditProfileCloseButton = document.querySelector(variables.popupEditProfileCloseButton);  // кнопка закрытия попапа редактирования профиля
const popupCardCloseButton = document.querySelector(variables.popupCardCloseButton);   // кнопка закрытия попапа карточки
const popupAddCardCloseButton = document.querySelector(variables.popupAddCardCloseButton);   // кнопка закрытия попапа редактирвоания карточки

