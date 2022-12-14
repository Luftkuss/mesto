export default class UserInfo {
    constructor({ nameElement, descriptionElement }){
        this._nameElement = nameElement,
        this._descriptionElement = descriptionElement,
        this._id = null,
        this._avatar = null
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
        this._avatar = editObject._avatar,
        this._nameElement.textContent = editObject.name
        this._descriptionElement.textContent = editObject.about || editObject.description
        // this.getUserInfo()
    }
}