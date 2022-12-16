export default class Api {
    constructor({baseUrl, headers}) {
      this._url = baseUrl,
      this._headers = headers
    }

    getUserInformation(){
      return fetch(`${this._url}/users/me`, {
          headers: this._headers
      })
      .then(this._checkResponse)
    }

    getCards(){
      return fetch(`${this._url}/cards`, {
        headers: this._headers
      })
      .then(this._checkResponse)
    }
    
    editUserInformation(object){
      return fetch(`${this._url}/users/me`, {
        method: 'PATCH',
        headers: this._headers,
        body: JSON.stringify({
          name: object.name,
          about: object.about
        })
      })
      .then(this._checkResponse)
    }

    uploadCard(object){
      return fetch(`${this._url}/cards`, {
        method: 'POST',
        headers: this._headers,
        body: JSON.stringify({
          name: object.name,
          link: object.link
        })
      })
      .then(this._checkResponse)
    }

    deleteCard(id){
      return fetch(`${this._url}/cards/${id}`, {
        method: 'DELETE',
        headers: this._headers,
      })
      .then(this._checkResponse)
    }

    doLike(id){
      return fetch(`${this._url}/cards/${id}/likes`, {
        method: "PUT",
        headers: this._headers
      }) 
      .then(this._checkResponse)
    }

    deleteLike(id){
      return fetch(`${this._url}/cards/${id}/likes`, {
        method: "DELETE",
        headers: this._headers
      }) 
      .then(this._checkResponse)
    }

    changeAvatar(object){
      return fetch(`${this._url}/users/me/avatar`, {
        method: "PATCH",
        headers: this._headers,
        body: JSON.stringify({
          avatar: object.avatar
        })
      }) 
      .then(this._checkResponse)
    }

    _checkResponse(res) {
        if (res.ok) {
            return res.json();
        }
        return Promise.reject(`Ошибка ${res.status}`);
    }
  }