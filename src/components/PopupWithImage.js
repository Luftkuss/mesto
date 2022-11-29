import Popup from './Popup.js'

export default class PopupWithImage extends Popup {
    constructor(popupSelector){
        super(popupSelector)
        this._popupClickCardPhoto = document.querySelector(popupSelector).querySelector('.popup__click-photo'),
        this._popupClickCardTitle = document.querySelector(popupSelector).querySelector('.popup__title_cardseen')
    };

    open(nameElement, linkElement){
        this._popupClickCardPhoto.src = linkElement;
        this._popupClickCardPhoto.alt = nameElement;
        this._popupClickCardTitle.textContent = nameElement;
        super.open();
    };
};

