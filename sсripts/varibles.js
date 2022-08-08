const varibles = {
    editButton: '.profile__edit-button', // Кнопка редактирвоания

    popup: '.popup',
    popupEditProfile: '.popup_edit_profile', // Popup 1
    popupCloseButton: '.popup__close', // Закрытие попапа

    profileName: '.profile__title', // Имя
    profileDescription: '.profile__description', // Описание

    nameInput: '.popup__input_type_name', // инпут имени
    cardInput: '.popup__input_type_name', // импут названия карточки
    descriptionInput: '.popup__input_type_description', // инпут описания

    formElement: '.popup__form', // форма

    popupEditProfile: '.popup_edit_profile', // попап редактирования профиля
    popupEditCard: '.popup_edit_card', // попап редактирования карточек
    popupEditContent: '.popup_edit_content', // попап наполнения карточек

    editProfileButton: '.profile__add-button', // кнопка редактирования профиля
    editCardButton: '.profile__add-button', // кнопка редактирования карточек

    closeCardButton: '.popup__close',
    
    template:  '#card-item',

    list: '.elements__table',
    
    cardsName: '#card-name',
    cardsLink: '#card-link',

}


const list = document.querySelector(varibles.list);
const template = document.querySelector(varibles.template).content.children[0];

const editButton = document.querySelector(varibles.editButton);                 // кнопка редактирвоания
const popup = document.querySelector(varibles.popup);                                     // попап
const popupCloseButton = document.querySelector(varibles.popupCloseButton);                   // кнопка закрытия

const profileName = document.querySelector(varibles.profileName);                      // Имя 
const profileDescription = document.querySelector(varibles.profileDescription);         // Описание

const nameInput = document.querySelector(varibles.nameInput);                // Имя введение в форме
const descriptionInput = document.querySelector(varibles.descriptionInput);  // Описание введение в форме

const formElement = document.querySelector(varibles.formElement);                        // Форма
//
const popupEditProfile = document.querySelector(varibles.popupEditProfile); // поиск DOM элемента попапа редактировани профиля
const popupEditCard = document.querySelector(varibles.popupEditCard); // редактировани карточки
const cardInput = popupEditCard.querySelector(varibles.cardInput); // импут названия карточки

const popupEditContent = document.querySelector(varibles.popupEditContent); // попап наполнения карточки

const editProfileButton = document.querySelector(varibles.editProfileButton); // DOM селектор кнопки редактирвоания опсиания
const editCardButton = document.querySelector(varibles.editCardButton); // DOM селектор кнопки редактирвоания списка карточек

const closeCardButton = popupEditCard.querySelector(varibles.closeCardButton);



