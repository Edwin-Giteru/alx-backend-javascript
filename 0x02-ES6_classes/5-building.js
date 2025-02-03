export default class Building {
    constructor(sqft) {
/*if (new.target === Building) {
            throw new Error("Building is an abstract class!");
        }*/
        if (typeof this.evacuationWarningMessage !== 'function') {
            throw new Error("Class extending Building must override evacuationWarningMessage");
        }
        this._sqft = sqft;
    }
    get sqft() {
        return this._sqft;
    }
    set sqft(value) {
        if (!typeof value == 'number') {
            throw new TypeError("Sqft should be a number!");
        }
        this._sqft = value;
    }

}