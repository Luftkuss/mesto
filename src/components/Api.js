export default class Api {
    constructor({url, headers}) {
      this._url = url,
      this._headers = headers
    }

    getUserInformation(){
      return fetch("https://nomoreparties.co/v1/cohort-54/users/me", {
          headers: this._headers
      })
      .then(res => res.ok ? res.json() : Promise.reject(res.status))
      .catch(console.log)
    }

    getCards(){
      console.log('getCards')
      return fetch("https://mesto.nomoreparties.co/v1/cohort-54/cards ", {
        headers: this._headers
      })
      .then(res => res.ok ? res.json() : Promise.reject(res.status))
      .catch(console.log)
    }

    editUserInformation(){
      return fetch("https://nomoreparties.co/v1/cohort-54/users/me", {
        method: 'PATCH',
        headers: this._headers,
        body: JSON.stringify({
          name: 'Marie Skłodowska Curie',
          about: 'Physicist and Chemist'
        })
      })

    }

  //   получить список всех карточек в виде массива (GET)

  // добавить карточку (POST)

  // удалить карточку (DELETE)

  // получить данные пользователя (GET) DONE

  // аменить данные пользователя (PATCH)

  // заменить аватар (PATCH)

  // “ залайкать” карточку (PUT)

  // удалить лайк карточки (DELETE)
  }