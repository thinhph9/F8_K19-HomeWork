import { Customer } from "../models/Customer";
// Định nghĩa một interface đại diện cho dữ liệu đầu vào khi tạo Customer
interface CreateCustomerInput {
    name: string;
    tax: string;
    address: string;
}

interface CustomerServiceI {
    // Thay đổi kiểu dữ liệu tham số đầu vào ở đây
    create(customerData: CreateCustomerInput): Customer;
    updateById(id: string, data: Partial<CreateCustomerInput>): Customer | null;
}

export class CustomerService implements CustomerServiceI {

    private customers: Customer[] = [];
    create(customerData: CreateCustomerInput): Customer {
        // 1. Giải nén các thuộc tính từ dữ liệu đầu vào
        const { name, tax, address } = customerData;

        // 2. Khởi tạo đối tượng Customer mới 
        // (Lúc này class Customer sẽ tự động chạy constructor và sinh uuidv7 cho _id)
        const newCustomer = new Customer(name, tax, address);

        // 3. Thêm khách hàng mới vào mảng quản lý nội bộ
        this.customers.push(newCustomer);

        // 4. Trả về đối tượng vừa tạo
        return newCustomer;
    }

    /**
     * updateById(id: string, data: Partial): Customer | null
    Tìm khách hàng theo id.
    Cập nhật các thông tin được truyền vào.
    Nếu không tìm thấy thì trả về null.
     */
    updateById(id: string, data: Partial<CreateCustomerInput>): Customer | null {
        // BƯỚC 1: Tìm khách hàng trong mảng `this.customers` có id khớp với tham số truyền vào
        const customer = this.customers.find(c => c.getId() === id);

        // BƯỚC 2: Nếu không tìm thấy khách hàng, trả về null ngay lập tức
        if (!customer) {
            return null;
        }

        // BƯỚC 3: Cập nhật thông tin nếu chúng tồn tại trong object `data`
        // (Do data là Partial nên các thuộc tính có thể bị undefined, ta cần kiểm tra trước khi set)
        if (data.name !== undefined) {
            customer.setName(data.name);
        }
        if (data.tax !== undefined) {
            customer.setTax(data.tax);
        }
        if (data.address !== undefined) {
            customer.setAddress(data.address);
        }

        // BƯỚC 4: Trả về đối tượng khách hàng sau khi đã cập nhật thành công
        return customer;
    }

}