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
      return fetch("https://mesto.nomoreparties.co/v1/cohort-54/cards", {
        headers: this._headers
      })
      .then(res => res.ok ? res.json() : Promise.reject(res.status))
      .catch(console.log)
    }
    
    editUserInformation(object){
      return fetch("https://nomoreparties.co/v1/cohort-54/users/me", {
        method: 'PATCH',
        headers: this._headers,
        body: JSON.stringify({
          name: object.name,
          about: object.description
        })
      })
    }

    uploadCard(object){
      console.log(object)
      return fetch("https://mesto.nomoreparties.co/v1/cohort-54/cards", {
        method: 'POST',
        headers: this._headers,
        body: JSON.stringify({
          name: object.name,
          link: object.link
        })
      })
      .then(res => res.ok ? res.json() : Promise.reject(res.status))
      .catch(console.log)
    }

    deleteCard(id){
      return fetch(`https://mesto.nomoreparties.co/v1/cohort-54/cards/${id}`, {
        method: 'DELETE',
        headers: this._headers,
      }).then(res => res.ok ? res.json() : Promise.reject(res.status))
      .catch(console.log)
    }

    doLike(id){
      return fetch(`https://mesto.nomoreparties.co/v1/cohort-54/cards/${id}/likes`, {
        method: "PUT",
        headers: this._headers
      }) 
      .then(res => res.ok ? res.json() : Promise.reject(res.status))
      .catch(console.log)
    }

    deleteLike(id){
      return fetch(`https://mesto.nomoreparties.co/v1/cohort-54/cards/${id}/likes`, {
        method: "DELETE",
        headers: this._headers
      }) 
      .then(res => res.ok ? res.json() : Promise.reject(res.status))
      .catch(console.log)
    }

    changeAvatar(object){
      return fetch("https://mesto.nomoreparties.co/v1/cohort-54/users/me/avatar", {
        method: "PATCH",
        headers: this._headers,
        body: JSON.stringify({
          avatar: object.url
        })
      }) 
      .then(res => res.ok ? res.json() : Promise.reject(res.status))
      .catch(console.log)
    }
  }