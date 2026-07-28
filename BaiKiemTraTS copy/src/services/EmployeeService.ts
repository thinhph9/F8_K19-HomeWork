import { Employee } from "../models/Employee";
interface CreateEmployeeInput {
    name: string;
}

interface EmployeeServiceI {
    // Thay đổi kiểu dữ liệu tham số đầu vào ở đây
    create(employeeData: CreateEmployeeInput): Employee;
    findById(id: string): Employee | null
    updateById(id: string, data: Partial<CreateEmployeeInput>): Employee | null
}
export class EmployeeService implements EmployeeServiceI {

    //Giống logic Customer, hãy viết tiếp các hàm cho tôi

    /**
     * 
1. create(employeeData: CreateEmployeeInput): Employee;
Tạo mới nhân viên.
Tự động sinh id.
Trả về Employee vừa tạo.

2. Tìm nhân viên theo id. 
Tìm nhân viên theo id.
Nếu tìm thấy thì trả về Employee.
Nếu không tìm thấy thì trả về null.

3. updateById(id: string, data: Partial<CreateEmployeeInput>): Employee | null
Tìm nhân viên theo id.
Cập nhật thông tin.
Nếu không tìm thấy thì trả về null.

     */
    // 0. Khởi tạo mảng lưu trữ danh sách nhân viên nội bộ
    private employees: Employee[] = [];

    /**
     * 1. Tạo mới nhân viên.
     * Tự động sinh id thông qua việc khởi tạo constructor của class Employee.
     * Trả về Employee vừa tạo.
     */
    create(employeeData: CreateEmployeeInput): Employee {
        const { name } = employeeData;
        const newEmployee = new Employee(name);

        this.employees.push(newEmployee);
        return newEmployee;
    }

    /**
     * 2. Tìm nhân viên theo id.
     * Nếu tìm thấy thì trả về Employee.
     * Nếu không tìm thấy thì trả về null.
     */
    findById(id: string): Employee | null {
        const employee = this.employees.find(emp => emp.getId() === id);
        return employee || null;
    }

    /**
     * 3. Cập nhật nhân viên theo id.
     * Tìm nhân viên theo id, cập nhật thông tin được truyền vào.
     * Nếu không tìm thấy thì trả về null.
     */
    updateById(id: string, data: Partial<CreateEmployeeInput>): Employee | null {
        // Tận dụng lại hàm findById đã viết ở trên để tìm kiếm
        const employee = this.findById(id);

        if (!employee) {
            return null;
        }

        // Tiến hành cập nhật nếu dữ liệu name có truyền vào
        if (data.name !== undefined) {
            employee.setName(data.name);
        }

        return employee;
    }

}

