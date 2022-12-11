export default class Api {
    constructor({url, headers}) {
      this._url = url,
      this._headers = headers
    }

    getUserInformation(){
      console.log('getUserInformation')
      return this.test = fetch("https://nomoreparties.co/v1/cohort-54/users/me", {
          headers: this._headers
      })
      .then(res => res.ok ? res.json() : Promise.reject(res.status))
      .catch(console.log)
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