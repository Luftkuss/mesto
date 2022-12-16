export default class Popup {
    constructor(popupSelector){
        this._popup = popupSelector,
        this._popupElement = document.querySelector(this._popup),
        this._handleEscClose = this._handleEscClose.bind(this),
        this._popupButtonItem = this._popupElement.querySelector('.popup__close')
    };

    open(){
        this._popupElement.classList.add('popup_is_open');
        document.addEventListener('keyup', this._handleEscClose);
    };

    close(){
        this._popupElement.classList.remove('popup_is_open');
        document.removeEventListener('keyup', this._handleEscClose);
    };

    setEventListeners(){
        this._popupElement.addEventListener('click', (evt) => {
            if (evt.target.classList.contains('popup_is_open')) {
               this.close();
            };
        });
         this._popupButtonItem.addEventListener('click', () => {
            this.close();
        });
    };
    
    _handleEscClose(evt){
        if (evt.key === 'Escape') {
            this.close();
        };
    };
};
