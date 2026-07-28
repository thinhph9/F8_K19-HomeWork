import { v7 as uuidv7 } from "uuid";

export class Project {
    private _id: string = uuidv7();
    private _customerId: string
    private _employeeId: string

    constructor(customerId: string, employeeId: string) {
        this._customerId = customerId
        this._employeeId = employeeId
    }
    getId(): string {
        return this._id;
    }
    getCustomerId(): string {
        return this._customerId;
    }
    getEmployeeId(): string {
        return this._employeeId;
    }

    setCustomerId(customerId: string) {
        this._customerId = customerId;
    }
    setEmployeeId(employeeId: string) {
        this._employeeId = employeeId;
    }

    toString() {
        return `Project [id=${this._id}, customerID=${this._customerId}, employeeId=${this._employeeId}`;
    }
}