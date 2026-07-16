import { Employee } from "../models/Employee";

interface CreateEmployeeInput {
    name: string;
}

interface EmployeeServiceI {
    create(employeeData: CreateEmployeeInput): Employee;
    findById(id: string): Employee | null
    updateById(id: string, data: Partial<CreateEmployeeInput>): Employee | null
}
export class EmployeeService implements EmployeeServiceI {
    private employees: Employee[] = [];

    create(employeeData: CreateEmployeeInput): Employee {
        const { name } = employeeData;
        const newEmployee = new Employee(name);

        this.employees.push(newEmployee);
        return newEmployee;
    }

    findById(id: string): Employee | null {
        const employee = this.employees.find(emp => emp.getId() === id);
        return employee || null;
    }

    updateById(id: string, data: Partial<CreateEmployeeInput>): Employee | null {
        const employee = this.findById(id);

        if (!employee) {
            return null;
        }

        if (data.name !== undefined) {
            employee.setName(data.name);
        }
        return employee;
    }
}

