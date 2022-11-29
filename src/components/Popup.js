export default class Popup {
    constructor(popupSelector){
        this._popupSelector = popupSelector,
        this._popupSelectorElement = document.querySelector(this._popupSelector)
    };

    open(){
        this._popupSelectorElement.classList.add('popup_is_open');
        document.addEventListener('keyup', (evt) => this._handleEscClose(evt));
    };

    close(){
        this._popupSelectorElement.classList.remove('popup_is_open');
        document.removeEventListener('keyup', (evt) => this._handleEscClose(evt));
    };

    setEventListeners(){
        this._popupSelectorElement.addEventListener('click', (evt) => {
            if (evt.target.classList.contains('popup_is_open')) {
               this.close();
            };
         });
        document.querySelectorAll('.popup__close').forEach((item) =>{
          item.addEventListener('click', () => {
            this.close();
            })  
        });
    };
    
    _handleEscClose(evt){
        if (evt.key === 'Escape') {
            this.close();
        };
    };
};