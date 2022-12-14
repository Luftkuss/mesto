export default class Card {
    constructor({name, link, likes, _id, trashExist, usersId }, handleCardClick, handleDeleteCard, handleLikeCard){
        this._name = name,
        this._link = link,
        this._likes = likes,
        this._id = _id,
        this._usersId = usersId,
        this.handleCardClick = handleCardClick,
        this._handleDeleteCard = handleDeleteCard,
        this._handleLikeCard = handleLikeCard,
        this._like = null,
        this._element = null,
        this._image = null,
        this._trashExist = trashExist
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
          this._handleDeleteCard(this._id, this._element)
        });

        this._like.addEventListener('click', () => {
          this._handleLikeCard(this._id)
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
    
    removeCard(){
      this._element.remove();
    };

    isCardLiked(){
      const likedCardByUser = this._likes.find(user => user._id === this._usersId)
      return likedCardByUser
    }

    _likeCard(){
      this._like.classList.add('card__image-like_liked'); 
    };

    _unlikeCard(){
      this._like.classList.remove('card__image-like_liked'); 
    }

    setLike(likeItems){
      this._likes = likeItems
      const likesCounterElement = this._element.querySelector('.card__likes-counter');
      likesCounterElement.textContent = this._likes.length
      if(this.isCardLiked()) {
        this._likeCard()
      } else {
        this._unlikeCard()
      }
    }

    generateCard(){
      this._element = this._getTemplate();
      this._like = this._element.querySelector('.card__image-like')
      this._image = this._element.querySelector('.card__image')
      this._setEventListeners();
      this._element.querySelector('.card__title').textContent = this._name;
      this._image.src = this._link;
      this._image.alt = this._name;
      this.setLike(this._likes)
      if (!this._trashExist) {
        this._element.querySelector('.card__trash').classList.toggle('card__trash-hidden')
      }
      return this._element;
    };
};