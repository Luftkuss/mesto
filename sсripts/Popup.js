export default class Popup {
    constructor(popupSelector){
        this._popupSelector = popupSelector;
    };

    open(){
        document.querySelector(this._popupSelector).classList.add('popup_is_open');
    };

    close(){
        document.querySelector(this._popupSelector).classList.remove('popup_is_open');
        document.removeEventListener('keyup', this._handleEscClose);
    };

    setEventListeners(){
        document.querySelector(this._popupSelector).addEventListener('click', (evt) => {
            if (evt.target.classList.contains('popup_is_open')) {
               this.close();
            };
         });

        document.querySelectorAll('.popup__close').forEach((item) =>{
          item.addEventListener('click', () => {
            this.close();
            })  
        });
        document.addEventListener('keyup', (evt) => this._handleEscClose(evt));
    };
    
    _handleEscClose(evt){
        if (evt.key === 'Escape') {
            this.close();
        };
    };
};