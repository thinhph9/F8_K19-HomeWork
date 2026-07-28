import { v7 as uuidv7 } from "uuid";

export class Customer {
    private _id: string = uuidv7();
    private _name: string
    private _tax: string
    private _address: string

    constructor(name: string, tax: string, address: string) {
        this._name = name
        this._tax = tax
        this._address = address
    }

    getId(): string {
        return this._id;
    }
    getName(): string {
        return this._name;
    }
    getTax(): string {
        return this._tax;
    }
    getAddress(): string {
        return this._address;
    }

    setName(name: string) {
        this._name = name;
    }

    setTax(tax: string) {
        this._tax = tax;
    }

    setAddress(address: string) {
        this._address = address;
    }

    toString() {
        return `Customer [id=${this._id}, name=${this._name}, tax=${this._tax}, address=${this._address}]`;
    }
}
