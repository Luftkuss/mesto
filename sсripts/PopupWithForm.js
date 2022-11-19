import Popup from './Popup.js'

export default class PopupWithForm extends Popup {
    constructor(popupSelector, callbackSubmit){
        super(popupSelector)
        this._callbackSubmit = callbackSubmit,
        this._popupSelector = popupSelector

    }
    
    _getInputValues(){
        console.log(this)
        const inputValues = []
        const formElement = document.querySelector(this._popupSelector).querySelectorAll('input');
        formElement.forEach(input => {
            console.log(input)
            inputValues[input.value] = input.value;
        })
        console.log(inputValues)
        return inputValues
    }

    setEventListeners(){
        super.setEventListeners()

        document.querySelector(this._popupSelector).addEventListener('submit', (evt) => {
            evt.preventDefault();
            this._inputElements = this._getInputValues()
            this._getInputValues()
            // this._callbackSubmit(this._inputElements)

            // console.log(this._callbackSubmit(this._getInputValues()))
            // this._inputs = 
            this.close()
        })

    }

    close(){
        super.close()
        
    }
};