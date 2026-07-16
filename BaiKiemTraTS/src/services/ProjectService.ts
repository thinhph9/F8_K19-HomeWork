import { Project } from "../models/Project";
import { EmployeeService } from "./EmployeeService";

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
    private _employeeService: EmployeeService;

    constructor(employeeService: EmployeeService) {
        this._employeeService = employeeService;
    }

    create(projectData: CreateProjectInput): Project {
        const { customerId, employeeId } = projectData;

        const newProject = new Project(customerId, employeeId);

        this.projects.push(newProject);

        // Tìm Employee từ EmployeeService
        const employee = this._employeeService.findById(employeeId);
        if (employee) {
            employee.receiveNoti("Bạn vừa được gán vào dự án mới.");
        }
        return newProject;
    }

    updateById(id: string, data: Partial<CreateProjectInput>): Project | null {

        const project = this.projects.find(p => p.getId() === id);
        if (!project) {
            return null;
        }

        // check customer 
        if (data.customerId !== undefined) {
            project.setCustomerId(data.customerId);
        }

        // check employee
        if (data.employeeId !== undefined && data.employeeId !== project.getEmployeeId()) {
            // update employeeId cho Project
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