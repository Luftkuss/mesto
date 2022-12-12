import Popup from './Popup.js'

export default class PopupWithSubmit extends Popup {
    constructor(popupSelector, callbackSubmit){
        super(popupSelector)
        this._callbackSubmit = callbackSubmit,
        this._popupSelector = popupSelector
    }
    
    // _getInputValues(){
    //     // const inputValues = {}
    //     // const formElement = document.querySelector(this._popupSelector).querySelectorAll('input');
    //     // formElement.forEach(input => {
    //     //     return inputValues[input.id] = input.value
    //     // })
    //     // return inputValues
    // }

    setEventListeners(){
        super.setEventListeners()
        console.log(2)

        document.querySelector(this._popupSelector).addEventListener('submit', (evt) => {
            evt.preventDefault();
            console.log(1)
        })
    }

    close(){
        super.close()
    }
};
