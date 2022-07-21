const editButton = document.querySelector('.profile__edit-button');                 // кнопка редактирвоания
const popup = document.querySelector('.popup');                                     // попап
const popupCloseButton = document.querySelector('.popup__close');                   // кнопка закрытия

const profileName = document.querySelector('.profile__title');                      // Имя 
const profileDescription = document.querySelector('.profile__description');         // Описание

const nameInput = document.querySelector('.popup__input_type_name');                     // Имя введение в форме
const descriptionInput = document.querySelector('.popup__input_type_description');       // Описание введение в форме

const formElement = document.querySelector('.popup__form');                         // Форма


function openPopup(popupElement) {  // функция открытия попапа + сохраненеия данных в атрибутах
    popupElement.classList.add('popup__isOpen');
    nameInput.value = profileName.textContent;
    descriptionInput.value = profileDescription.textContent;
}

function closePopup(popupElement) { // функция закрытия попапа
    popupElement.classList.remove('popup__isOpen');
};

editButton.addEventListener('click', function(){ //открытие попапа эвент
    openPopup(popup);
});

popupCloseButton.addEventListener('click', function(){ //закрытие попапа эвент
    closePopup(popup);
});

function submitForm(event) {
    event.preventDefault();
    profileName.textContent = nameInput.value;
    profileDescription.textContent = descriptionInput.value;
    closePopup(popup);
};

formElement.addEventListener('submit', submitForm);
