import Popup from './Popup.js'

export default class PopupWithSubmit extends Popup {
    constructor(popupSelector, callbackSubmit){
        super(popupSelector)
        this._callbackSubmit = callbackSubmit,
        this._popupSelector = popupSelector
        this._id = null,
        this._card = null
        }

    setEventListeners(){
        super.setEventListeners()

        document.querySelector(this._popupSelector).addEventListener('submit', (evt) => {
            evt.preventDefault();
            this._callbackSubmit(this._id)
            console.log(1)
        })
    }

    setId(id){
        this._id = id
    }

    deleteCard(card){
        this._card = card
    }

    close(){
        super.close()
    }
};
