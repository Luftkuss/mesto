export default class Card {
    constructor({name, link}, handleCardClick){
        this._name = name,
        this._link = link,
        this.handleCardClick = handleCardClick,
        this._like = null,
        this._element = null,
        this._image = null
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

        this._like.addEventListener('click', () => {
          this._likeCard()
        });

        this._element.addEventListener('click', (e) => {
          if (e.target.classList.contains('card__image') ) {
            this._openCardsPopup();
          };
        });
    };

    _openCardsPopup(){
      const nameElement = this._name
      const linkElement = this._link
      this.handleCardClick(nameElement, linkElement)
    };
    
    _removeCard(){
      this._element.remove();
    };

    _likeCard(){
      this._like.classList.toggle('card__image-like_liked'); 
    };

    generateCard(){
        this._element = this._getTemplate();
        this._like = this._element.querySelector('.card__image-like')
        this._image = this._element.querySelector('.card__image')
        this._setEventListeners();
        this._element.querySelector('.card__title').textContent = this._name;
        this._image.src = this._link;
        this._image.alt = this._name;
        return this._element;
    };
};