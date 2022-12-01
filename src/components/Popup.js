export default class Popup {
    constructor(popupSelector){
        this._popupSelector = popupSelector,
        this._popupSelectorElement = document.querySelector(this._popupSelector),
        this._handleEscClose = this._handleEscClose.bind(this),
        this._popupButtonItem = document.querySelector(popupSelector).querySelector('.popup__close')
    };

    open(){
        this._popupSelectorElement.classList.add('popup_is_open');
        document.addEventListener('keyup', this._handleEscClose);
    };

    close(){
        this._popupSelectorElement.classList.remove('popup_is_open');
        document.removeEventListener('keyup', this._handleEscClose);
    };

    setEventListeners(){
        this._popupSelectorElement.addEventListener('click', (evt) => {
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