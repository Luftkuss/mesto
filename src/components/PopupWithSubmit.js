import Popup from './Popup.js'

export default class PopupWithSubmit extends Popup {
    constructor(popupSelector, callbackSubmit){
        super(popupSelector)
        this._callbackSubmit = callbackSubmit,
        // this._popupSelector = popupSelector
        this._id = null,
        this._card = null
        }

    setEventListeners(){
        super.setEventListeners()
        
        this._popupElement.addEventListener('submit', (evt) => {
            evt.preventDefault();
            this._callbackSubmit(this._id)
        })
    }

    setId(id){
        this._id = id
    }

    // deleteCard(card){
    //     console.log(1)
    //     this._card = card
    // }
};
