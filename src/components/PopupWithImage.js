import Popup from './Popup.js'

export default class PopupWithImage extends Popup {
    constructor(popupSelector){
        super(popupSelector)
        this._popupClickCardPhoto = this._popupElement.querySelector('.popup__click-photo'),
        this._popupClickCardTitle = this._popupElement.querySelector('.popup__title_cardseen')
    };

    open(nameElement, linkElement){
        this._popupClickCardPhoto.src = linkElement;
        this._popupClickCardPhoto.alt = nameElement;
        this._popupClickCardTitle.textContent = nameElement;
        super.open();
    };
};
