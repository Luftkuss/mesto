import { initialCards } from './index.js'
import { openPopup, closePopup, closeEsc } from './index.js'
// import { elementsTable } from './variables'

const elementsTable = document.querySelector('.elements__table');

export default class Card {
    constructor(name, link){
        this.name = name,
        this.link = link
    }

    _getTemplate(){
        const cardElement = document
        .getElementById('card-item')
        .content
        .querySelector('.card')
        .cloneNode(true);

        return cardElement
    }

    _setEventListeners(){
        this._element.querySelector('.card__trash').addEventListener('click', () => {
          this._removeCard()
        })

        this._element.querySelector('.card__image-like').addEventListener('click', () => {
          this._likeCard()
        })

        this._element.addEventListener('click', (e) => {
          if (!e.target.classList.contains('card__trash') && !e.target.classList.contains('card__image-like') ) {
            this._openCardsPopup();
            };
      
        })

        document.querySelector('.popup__close_card-content').addEventListener('click', () => {
          this._closeCardsPopup()
         })
    }

    _openCardsPopup(){
      openPopup(popupClickCard);
      popupClickCardPhoto.src = this.link;
      popupClickCardPhoto.alt = this.name;
      popupClickCardTitle.textContent = this.name;
    }

    _closeCardsPopup(){
      const cardsPopup = document.querySelector('.popup_click_card');
      closePopup(cardsPopup);
    }

    _removeCard(){
        this._element.remove();
    }

    _likeCard(){
        this._element.querySelector('.card__image-like').classList.toggle('card__image-like_liked');
    }

    generateCard(){
        this._element = this._getTemplate();
        this._setEventListeners();
        this._element.querySelector('.card__title').textContent = this.name;
        this._element.querySelector('.card__image').src = this.link;

        return this._element;
    };

}

initialCards.forEach((item) => {
    const card = new Card(item.name, item.link);
    const cardElement = card.generateCard();
    elementsTable.prepend(cardElement);
});

