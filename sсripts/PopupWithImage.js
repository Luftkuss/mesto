import Popup from './Popup.js'
import { popupClickCardPhoto, popupClickCardTitle } from './variables.js';

export default class PopupWithImage extends Popup {
    constructor(popupSelector){
    super(popupSelector)

    this._popupClickCardPhoto = popupClickCardPhoto,
    this._popupClickCardTitle = popupClickCardTitle
    };

    open(nameElement, linkElement){
        super.open()
        this._popupClickCardPhoto.src = linkElement;
        this._popupClickCardPhoto.alt = nameElement;
        this._popupClickCardTitle.textContent = nameElement;
    };
};

