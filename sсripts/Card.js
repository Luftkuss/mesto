
const initialCards = [
    { name: 'Архыз',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'},

    { name: 'Челябинская область',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'},

    { name: 'Иваново',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'},

    { name: 'Камчатка',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'},

    { name: 'Холмогорский район',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'},

    { name: 'Байкал',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'},
  ];

const elementsTable = document.querySelector('.elements__table');
const trash = document.getElementById('card-item').content.querySelector('.card__image-like').cloneNode(true);

// console.log(trash)


class Card {
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
            this. _likeCard()
        })
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

//

function removeCard(trashIcon, cardElement){
    trashIcon.addEventListener('click', () => {
      cardElement.remove();
    });
  }

//

initialCards.forEach((item) => {
    const card = new Card(item.name, item.link);
    const cardElement = card.generateCard();
    elementsTable.prepend(cardElement);
});


