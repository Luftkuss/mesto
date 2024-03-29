import Popup from './Popup.js'

export default class PopupWithForm extends Popup {
    constructor(popupSelector, callbackSubmit, popupButton){
        super(popupSelector)
        this._callbackSubmit = callbackSubmit,
        this._popupSelector = popupSelector,
        this._popupButton = popupButton,
        this._inputList = this._popupElement.querySelectorAll('input');
        this._form = this._popupElement.querySelector('form')
    }
    
    _getInputValues(){
        const inputValues = {}
        const formElement = this._popupElement.querySelectorAll('input');
        this._inputList.forEach(input => {
            return inputValues[input.id] = input.value
        })
        return inputValues
    }

    setEventListeners(){
        super.setEventListeners()

        this._popupElement.addEventListener('submit', (evt) => {
            evt.preventDefault();
            this._inputElements = this._getInputValues()
            this._callbackSubmit(this._inputElements)
        })
    }

    close(){
        super.close()
        this._form.reset()
    }

    sendingInform(state, message){
        if(state){
            this._popupButton.textContent = message
        } else {
            this._popupButton.textContent = 'Сохранить'
        }
      }
    }
