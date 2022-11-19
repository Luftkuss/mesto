
export default class UserInfo {
    constructor({ nameElement, descriptionElement }){
        this._nameElement = nameElement,
        this._descriptionElement = descriptionElement
    }

    getUserInfo(){
        return {
            name: this._nameElement.textContent,
            description : this._descriptionElement.textContent
        }
    }

    setUserInfo(editObject){
        console.log(editObject.name)
        this._nameElement.textContent = editObject.name
        this._descriptionElement.textContent = editObject.description
        this.getUserInfo()
    }
}