import { CustomerService } from "./services/CustomerService";
import { EmployeeService } from "./services/EmployeeService";
import { ProjectService } from "./services/ProjectService";

// Khởi tạo Services
const customerService = new CustomerService();
const employeeService = new EmployeeService();
const projectService = new ProjectService(employeeService);


// Test Case 1: Tạo Customer
console.log("TC1");
const customer1 = customerService.create({
    name: "abc",
    tax: "123",
    address: "ĐN"
});
console.log(customer1.toString());
console.log("\n");



// Test Case 2: Cập nhật Customer
console.log("TC2");
const updatedCustomer = customerService.updateById(customer1.getId(), {
    name: "abc1", tax: "333"
});

if (updatedCustomer) {
    console.log(updatedCustomer.toString());
} else {
    console.log("Không tìm thấy Customer");
}
console.log("\n");


// Test Case 3: Tạo Employee
console.log("TC3");
const employee1 = employeeService.create({ name: "Nguyễn Văn A" });
const employee2 = employeeService.create({ name: "Trần Thị B" });

console.log(employee1.toString());
console.log(employee2.toString());
console.log("\n");


// Test Case 4: Tìm Employee
console.log("TC4");
// Employee có ID
const foundEmployee = employeeService.findById(employee1.getId());
console.log(`${foundEmployee && foundEmployee.getName()}`);

// Employee không có ID
const notFoundEmployee = employeeService.findById("abc");
console.log(`${notFoundEmployee && notFoundEmployee.getName()}`);
console.log("\n");


// Test Case 5: Tạo Project
console.log("TC5");
const project1 = projectService.create({
    customerId: customer1.getId(),
    employeeId: employee1.getId()
});
console.log(project1.toString());
console.log(project1.getId());
console.log("\n");


// Test Case 6: Đổi nhân viên phụ trách Project
console.log("TC6");
const updatedProjectEmp = projectService.updateById(project1.getId(), {
    employeeId: employee2.getId()
});
if (updatedProjectEmp) {
    console.log(updatedProjectEmp.toString());
    console.log(`Kiểm tra employeeId mới: ${updatedProjectEmp.getEmployeeId() === employee2.getId()}`);
} else {
    console.log("Cập nhật Project thất bại");
}
console.log("\n");


// Test Case 7: Cập nhật Project nhưng không đổi Employee
console.log("TC7");
const updatedProjectCust = projectService.updateById(project1.getId(), {
    customerId: "fake id",
    employeeId: employee2.getId() // Giữ nguyên employeeId cũ
});
if (updatedProjectCust) {
    console.log(updatedProjectCust.toString());
    console.log(`Kiểm tra customerId mới: ${updatedProjectCust.getCustomerId()}`);
}
console.log("\n");


// Test Case 8: Cập nhật dữ liệu không tồn tại
console.log("TC8");
const fakeId = "1234";

const testCustUpdate = customerService.updateById(fakeId, { name: "Fake Name" });
const testEmpUpdate = employeeService.updateById(fakeId, { name: "Fake Name" });
const testProjUpdate = projectService.updateById(fakeId, { customerId: "Fake Cust ID" });

console.log(`CustomerService.updateById() trả về null: ${testCustUpdate === null ? "OK" : "NOT"}`);
console.log(`EmployeeService.updateById() trả về null: ${testEmpUpdate === null ? "OK" : "NOT"}`);
console.log(`ProjectService.updateById() trả về null: ${testProjUpdate === null ? "OK" : "NOT"}`);
console.log("\n");



// Test Case 9: Tạo Project với employeeId không tồn tại
console.log("TC9");

const projectWithFakeEmp = projectService.create({
    customerId: customer1.getId(),
    employeeId: "fake123"
});
console.log(projectWithFakeEmp.toString());
console.log("\n");