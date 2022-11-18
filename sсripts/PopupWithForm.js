import Popup from './Popup.js'

export default class PopupWithForm extends Popup {
    constructor(popupSelector, callbackSubmit){
        super(popupSelector)
        this.callbackSubmit = callbackSubmit

    }
    
    _getInputValues(){
        // nameInput.value = profileName.textContent;
        // descriptionInput.value = profileDescription.textContent;
    }

    setEventListeners(){
        super.setEventListeners()
    }

    close(){
        super.close()
    }
};