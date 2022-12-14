export default class UserInfo {
    constructor({ nameElement, descriptionElement, avatarElement }){
        this._nameElement = nameElement,
        this._descriptionElement = descriptionElement,
        this._id = null,
        this._avatar = null,
        this._avatarElement = avatarElement
        }

    getUserInfo(){
        return {
            name: this._nameElement.textContent,
            description : this._descriptionElement.textContent,
            _id: this._id,
            avatar: this._avatar
        }
    }

    setUserInfo(editObject){
        this._id = editObject._id,
        this._avatar = editObject.avatar,
        this._nameElement.textContent = editObject.name
        this._descriptionElement.textContent = editObject.about || editObject.description
        this._avatarElement.src = editObject.avatar || this._avatarElement.src
    }

    setUserAvatar(editObject) {
        this._avatarElement.src = editObject.url
        this._avatar = editObject.avatar
    }
}