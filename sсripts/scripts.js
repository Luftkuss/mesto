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