export default class Currency {
    constructor(code, name) {
        this._code = code;
        this._name = name;     
    }
    set Code(value) {
        if (typeof value !== 'string') {
            throw new TypeError("Code must be a string");
        }
        this._code = value;
    }
    get Code() {
        return this._code ;
    }
    set Name(value) {
        if (typeof value !== 'string') {
            throw new TypeError("Name must be a string");
        }
        this._code = value;
    }
    get Name() {
        return this._name ;
    }

    displayFullCurrency() {
        return `${this._name} (${this._code})`
    }
}