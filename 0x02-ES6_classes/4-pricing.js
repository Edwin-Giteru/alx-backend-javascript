import Currency from "./3-currency.js";

export default class Pricing {
    constructor(amount, currency) {
        this._amount = amount;
        this._currency = currency;
    }

    set amount(value) {
        if (!Number.isInteger(value)) {
            throw new TypeError("Amount must be an integer!");
        }
        this._amount = value;
    }
    get amount() {
        return this._amount;
    }
    set currency(value) {
        if (!(value instanceof Currency)) {
            throw new TypeError("Currency must be an instance of currency!");
        }
        this._currency = value;
    }
    get currency() {
        return this._currency;
    }
    displayFullPrice() {
        return `${this._amount} ${this._currency.name} (${this._currency.code})`
    }
    static ConvertPrice(amount, conversionRate) {
        if (typeof amount !== 'number') {
            throw new Error("amount must be a number");
        }
        if (typeof conversionRate !== 'number') {
            throw new Error("conversionrate must be a number");
        }
        return amount * conversionRate;
    }
}
