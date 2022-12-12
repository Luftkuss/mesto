export default class Card {
    constructor({name, link, likes}, handleCardClick, handleDeleteCard){
        this._name = name,
        this._link = link,
        this._likes = likes
        this.handleCardClick = handleCardClick,
        this._handleDeleteCard = handleDeleteCard,
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
          // this._removeCard()
          this._handleDeleteCard()
        });

        // this._element.querySelector('.popup__button-confirm').addEventListener('click', () => {
        //   // this._removeCard()
        //   // this.handleDeleteCard()
        //   // console.log(1)
        // });

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

    _setLike(){
      const likesCounterElement = this._element.querySelector('.card__likes-counter');
      likesCounterElement.textContent = this._likes.length
      console.log(this._likes)
    }

    generateCard(){
        this._element = this._getTemplate();
        this._like = this._element.querySelector('.card__image-like')
        this._image = this._element.querySelector('.card__image')
        this._setEventListeners();
        this._element.querySelector('.card__title').textContent = this._name;
        this._image.src = this._link;
        this._image.alt = this._name;
        this._setLike()
        return this._element;
    };
};