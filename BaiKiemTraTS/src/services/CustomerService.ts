import { Customer } from "../models/Customer";
//interface data input khi tạo Customer
interface CreateCustomerInput {
    name: string;
    tax: string;
    address: string;
}

interface CustomerServiceI {
    create(customerData: CreateCustomerInput): Customer;
    updateById(id: string, data: Partial<CreateCustomerInput>): Customer | null;
}

export class CustomerService implements CustomerServiceI {

    private customers: Customer[] = [];

    create(customerData: CreateCustomerInput): Customer {
        const { name, tax, address } = customerData;

        const newCustomer = new Customer(name, tax, address);
        this.customers.push(newCustomer);
        return newCustomer;
    }

    updateById(id: string, data: Partial<CreateCustomerInput>): Customer | null {

        const customer = this.customers.find(c => c.getId() === id);
        if (!customer) {
            return null;
        }

        if (data.name !== undefined) {
            customer.setName(data.name);
        }
        if (data.tax !== undefined) {
            customer.setTax(data.tax);
        }
        if (data.address !== undefined) {
            customer.setAddress(data.address);
        }
        return customer;
    }
}