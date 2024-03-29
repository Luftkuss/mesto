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

    setUserInfo({ name, about, avatar, _id }){
            this._id = _id,
            this._avatar = avatar,
            this._nameElement.textContent = name
            this._descriptionElement.textContent = about
            this._avatarElement.src = avatar 
        }
}