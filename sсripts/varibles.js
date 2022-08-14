const varibles = {
    editButton: '.profile__edit-button', // Кнопка редактирвоания

    popup: '.popup',
    popupEditProfile: '.popup_edit_profile', // Popup 1
    popupCloseButton: '.popup__close', // Закрытие попапа
    popupClickCard: '.popup_click_card',
    popupClickCardPhoto: '.popup__click-photo',
    popupClickCardTitle: '.popup__title_cardseen',

    profileName: '.profile__title', // Имя
    profileDescription: '.profile__description', // Описание

    cardNameForm: '.popup__input_type_name',
    cardLinkForm: '.popup__input_type_description',

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
    popupCloseCardContent: '.popup__close_card-content',
    
    template: '#card-item',
    tamplateCardPhoto: '#card-photo',

    list: '.elements__table',
    
    cardsName: '#card-name',
    cardsLink: '#card-link',

    like: '.card__image-like',

    trash: '.card__trash',

    сardImage: '.card__image'
}

const  popupCloseCardContent = document.querySelector(varibles.popupCloseCardContent);
const  popupClickCard = document.querySelector(varibles.popupClickCard);
const  popupClickCardPhoto = document.querySelector(varibles.popupClickCardPhoto);
const  popupClickCardTitle = document.querySelector(varibles.popupClickCardTitle);

const  tamplateCardPhoto = document.querySelector(varibles.tamplateCardPhoto); // Нода попапа с фото


const list = document.querySelector(varibles.list);
const template = document.querySelector(varibles.template).content.children[0]; // Нода карточки

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

const cardNameForm = popupEditCard.querySelector(varibles.cardNameForm);
const cardLinkForm = popupEditCard.querySelector(varibles.cardLinkForm);

const like = template.querySelector(varibles.like);

const trash = template.querySelector(varibles.trash);

const  cardsLink = template.querySelector(varibles.cardsLink);

