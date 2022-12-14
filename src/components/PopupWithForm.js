import Popup from './Popup.js'

export default class PopupWithForm extends Popup {
    constructor(popupSelector, callbackSubmit, popupButton){
        super(popupSelector)
        this._callbackSubmit = callbackSubmit,
        this._popupSelector = popupSelector,
        this._popupButton = popupButton
    }
    
    _getInputValues(){
        const inputValues = {}
        const formElement = document.querySelector(this._popupSelector).querySelectorAll('input');
        formElement.forEach(input => {
            return inputValues[input.id] = input.value
        })
        return inputValues
    }

    setEventListeners(){
        super.setEventListeners()

        document.querySelector(this._popupSelector).addEventListener('submit', (evt) => {
            evt.preventDefault();
            this._inputElements = this._getInputValues()
            this._callbackSubmit(this._inputElements)
            this.close()
        })
    }

    close(){
        super.close()
        document.querySelector(this._popupSelector).querySelector('form').reset();
    }

    sendingInform(state, message){
        if(state){
            this._popupButton.textContent = message
        } else {
            this._popupButton.textContent = 'Сохранить'
        }
      }
    }

