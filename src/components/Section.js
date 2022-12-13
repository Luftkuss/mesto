export default class Section {
    constructor({ items, renderer, idField }, containerSelector){
        this._renderedItems = items,
        this._renderer = renderer,
        this._container = document.querySelector(containerSelector),
        this._itemsObject = {},
        this.idField = idField || '_id'
    };

    renderItems(){
        this._renderedItems.forEach((item) => {
            this._addToObject(this._renderer(item))
        })
    };

    addItem(element, obj){
        this._container.prepend(element)
        this._addToObject(obj)
    };

    _addToObject(obj){
        this._itemsObject[obj[this.idField]] = obj
    }

    getItemById(id){
        return this._itemsObject[id]
    }
};
