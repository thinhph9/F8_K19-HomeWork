import { v7 as uuidv7 } from "uuid";

export class Employee {
    private _id: string = uuidv7();
    private _name: string

    constructor(name: string) {
        this._name = name
    }
    getId(): string {
        return this._id;
    }
    getName(): string {
        return this._name;
    }
    setName(name: string) {
        this._name = name;
    }
    receiveNoti(message: string) {
        return `[${this._id}] - [${this._name}] received notification: [${message}]
`
    }

    toString() {
        return `Employee [id=${this._id}, name=${this._name}`;
    }
}
