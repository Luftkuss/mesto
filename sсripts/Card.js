export default class Card {
    constructor({name, link}, handleCardClick){
        this.name = name,
        this.link = link,
        this.handleCardClick = handleCardClick
    };

    _getTemplate(){
        const cardElement = document
        .getElementById('card-item')
        .content
        .querySelector('.card')
        .cloneNode(true);

        return cardElement
    };

    _setEventListeners(){
        this._element.querySelector('.card__trash').addEventListener('click', () => {
          this._removeCard()
        });

        this._element.querySelector('.card__image-like').addEventListener('click', () => {
          this._likeCard()
        });

        this._element.addEventListener('click', (e) => {
          if (e.target.classList.contains('card__image') ) {
            this._openCardsPopup();
          };
        });
    };

    _openCardsPopup(){
      const nameElement = this.name
      const linkElement = this.link
      this.handleCardClick(nameElement, linkElement)
    };
    
    _removeCard(){
        this._element.remove();
    };

    _likeCard(){
        this._element.querySelector('.card__image-like').classList.toggle('card__image-like_liked');
    };

    generateCard(){
        this._element = this._getTemplate();
        this._setEventListeners();
        this._element.querySelector('.card__title').textContent = this.name;
        this._element.querySelector('.card__image').src = this.link;
        this._element.querySelector('.card__image').alt = this.name;
        return this._element;
    };
};