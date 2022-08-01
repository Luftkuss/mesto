// Переменные
const editButton = document.querySelector('.profile__edit-button');                 // кнопка редактирвоания
const popup = document.querySelector('.popup');                                     // попап
const popupCloseButton = document.querySelector('.popup__close');                   // кнопка закрытия

const profileName = document.querySelector('.profile__title');                      // Имя 
const profileDescription = document.querySelector('.profile__description');         // Описание

const nameInput = document.querySelector('.popup__input_type_name');                // Имя введение в форме
const descriptionInput = document.querySelector('.popup__input_type_description');  // Описание введение в форме

const formElement = document.querySelector('.popup__form');                         // Форма

// Popup's Variables // 
const popupSelectors = {
    popupEditProfile: '.popup_edit_profile', // попап редактирования профиля
    popupEditCard: '.popup_edit_card', // попап редактирования карточек
    popupEditContent: '.popup_edit_content', // попап наполнения карточек

    editProfileButton: '.profile__add-button', // кнопка редактирования профиля
    editCardButton: '.profile__add-button', // кнопка редактирования карточек

    closeCardButton: '.popup__close',

};

const popupEditProfile = document.querySelector(popupSelectors.popupEditProfile); // поиск DOM элемента попапа редактировани профиля
const popupEditCard = document.querySelector(popupSelectors.popupEditCard); // редактировани карточки
const popupEditContent = document.querySelector(popupSelectors.popupEditContent); // попап наполнения карточки

const editProfileButton = document.querySelector(popupSelectors.editProfileButton); // DOM селектор кнопки редактирвоания опсиания
const editCardButton = document.querySelector(popupSelectors.editCardButton); // DOM селектор кнопки редактирвоания списка карточек

const closeCardButton = popupEditCard.querySelector(popupSelectors.closeCardButton);

console.log(closeCardButton);

// Функции открытия и закрытия попапа
function openPopup(popupElement) {  // функция открытия попапа + сохраненеия данных в атрибутах
    popupElement.classList.add('popup__isOpen');
    nameInput.value = profileName.textContent;
    descriptionInput.value = profileDescription.textContent;
}

function closePopup(popupElement) { // функция закрытия попапа
    popupElement.classList.remove('popup__isOpen');
};

// Попап 1
editButton.addEventListener('click', function(){ //открытие попапа редактирования профиля эвент
    openPopup(popupEditProfile);
});

popupCloseButton.addEventListener('click', function(){ //закрытие попапа редактирования профиля эвент
    closePopup(popupEditProfile);
});

// Попап 2
editCardButton.addEventListener('click', function(){ //открытие попапа редактирования карточек эвент
    openPopup(popupEditCard);
});

closeCardButton.addEventListener('click', function(){ //закрытие попапа редактирования профиля эвент
    closePopup(popupEditCard);
});
//

function submitForm(event) {                                    // отправка формы при закрытии попапа
    event.preventDefault();
    profileName.textContent = nameInput.value;
    profileDescription.textContent = descriptionInput.value;
    closePopup(popup);
};

formElement.addEventListener('submit', submitForm);

//


// пр2

const initialCards = [
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
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'}
  ];

