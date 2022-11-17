// import { editionCardButton } from './variables.js'

export default class Popup {
    constructor(popupSelector){
        this._popupSelector = popupSelector;
    };

    open(){
        document.querySelector(this._popupSelector).classList.add('popup_is_open');
        const currentPopup = document.querySelector(this._popupSelector);
        this._handleEscClose(currentPopup);
        this.setEventListeners(currentPopup);
        console.log(document.querySelector('.popup__close'))
    };

    close(){
        document.querySelector(this._popupSelector).classList.remove('popup_is_open');
        document.removeEventListener('keyup', this._handleEscClose);
    };

    setEventListeners(element){
        element.addEventListener('click', (evt) => {
            if (evt.target.classList.contains('popup_is_open')) {
               this.close();
            };
         });

        document.querySelectorAll('.popup__close').forEach((item) =>{
          item.addEventListener('click', () => {
            this.close();
            })  
        });

        // document.querySelectorAll('.popup').forEach((item) =>{
        //     item.addEventListener('click', () => {
        //       this.open();
        //       })  
        //   });


        
        document.addEventListener('keyup', (evt) => this._handleEscClose(evt));
    };

    _handleEscClose(evt){
        if (evt.key === 'Escape') {
            this.close();
        };
    };
};