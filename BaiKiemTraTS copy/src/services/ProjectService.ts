import { Project } from "../models/Project";
import { EmployeeService } from "./EmployeeService";

// Định nghĩa dữ liệu đầu vào dạng "tham số thô" (không dùng Omit)
interface CreateProjectInput {
    customerId: string;
    employeeId: string;
}

interface ProjectServiceI {
    create(projectData: CreateProjectInput): Project;
    updateById(id: string, data: Partial<CreateProjectInput>): Project | null;
}

export class ProjectService implements ProjectServiceI {
    private projects: Project[] = [];
    // Khai báo thuộc tính để lưu trữ EmployeeService được tiêm vào
    private _employeeService: EmployeeService;

    // Sử dụng Constructor để thực hiện Dependency Injection
    constructor(employeeService: EmployeeService) {
        this._employeeService = employeeService;
    }

    /**
     * 1. Tạo mới Project.
     * Tự động sinh id.
     * Lưu vào danh sách.
     * Tìm nhân viên phụ trách bằng employeeId để gửi thông báo.
     */
    create(projectData: CreateProjectInput): Project {
        const { customerId, employeeId } = projectData;

        // Tạo mới thực thể Project (id tự sinh bằng uuidv7 trong Class)
        const newProject = new Project(customerId, employeeId);

        // Lưu vào danh sách nội bộ
        this.projects.push(newProject);

        // Tìm nhân viên phụ trách thông qua EmployeeService được tiêm vào
        const employee = this._employeeService.findById(employeeId);
        if (employee) {
            employee.receiveNoti("Bạn vừa được gán vào dự án mới.");
        }

        return newProject;
    }

    /**
     * 2. Cập nhật Project theo id.
     * Nếu có thay đổi employeeId: tìm nhân viên mới và gửi thông báo.
     * Nếu không tìm thấy Project thì trả về null.
     */
    updateById(id: string, data: Partial<CreateProjectInput>): Project | null {
        // Tìm Project cần cập nhật
        const project = this.projects.find(p => p.getId() === id);
        if (!project) {
            return null;
        }

        // Kiểm tra xem có sự thay đổi về khách hàng không
        if (data.customerId !== undefined) {
            project.setCustomerId(data.customerId);
        }

        // Kiểm tra xem có sự thay đổi về nhân viên phụ trách không
        if (data.employeeId !== undefined && data.employeeId !== project.getEmployeeId()) {
            // Cập nhật mã nhân viên mới cho dự án
            project.setEmployeeId(data.employeeId);

            // Tìm nhân viên mới để gửi thông báo chuyển giao
            const newEmployee = this._employeeService.findById(data.employeeId);
            if (newEmployee) {
                newEmployee.receiveNoti("Bạn đã được chuyển giao phụ trách dự án này.");
            }
        }

        return project;
    }
}