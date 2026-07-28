import { CustomerService } from "./services/CustomerService";
import { EmployeeService } from "./services/EmployeeService";
import { ProjectService } from "./services/ProjectService";

// Khởi tạo các Service
const customerService = new CustomerService();
const employeeService = new EmployeeService();
// Thực hiện Dependency Injection: Tiêm employeeService vào ProjectService
const projectService = new ProjectService(employeeService);

console.log("=== BẮT ĐẦU CHẠY CÁC TEST CASES ===\n");

// ==========================================
// Test Case 1: Tạo Customer
// ==========================================
console.log("--- Test Case 1: Tạo Customer ---");
const customer1 = customerService.create({
    name: "Công ty Công Nghệ ABC",
    tax: "0102030405",
    address: "123 Đường Lê Lợi, Đà Nẵng"
});
console.log("Customer được tạo thành công:");
console.log(customer1.toString());
console.log(`Kiểm tra ID tồn tại: ${customer1.getId() ? "ĐẠT ✅" : "THẤT BẠI ❌"}`);
console.log("\n");


// ==========================================
// Test Case 2: Cập nhật Customer
// ==========================================
console.log("--- Test Case 2: Cập nhật Customer ---");
const updatedCustomer = customerService.updateById(customer1.getId(), {
    address: "456 Đường Hùng Vương, Đà Nẵng"
});
if (updatedCustomer) {
    console.log("Customer sau khi cập nhật địa chỉ:");
    console.log(updatedCustomer.toString());
    console.log(`Kiểm tra địa chỉ mới: ${updatedCustomer.getAddress() === "456 Đường Hùng Vương, Đà Nẵng" ? "ĐẠT ✅" : "THẤT BẠI ❌"}`);
} else {
    console.log("Không tìm thấy Customer để cập nhật! ❌");
}
console.log("\n");


// ==========================================
// Test Case 3: Tạo Employee
// ==========================================
console.log("--- Test Case 3: Tạo Employee ---");
const employee1 = employeeService.create({ name: "Nguyễn Văn A" });
const employee2 = employeeService.create({ name: "Trần Thị B" });

console.log("Employee 1:", employee1.toString());
console.log("Employee 2:", employee2.toString());
const isDifferentId = employee1.getId() !== employee2.getId();
console.log(`Kiểm tra 2 Employee có ID khác nhau: ${isDifferentId ? "ĐẠT ✅" : "THẤT BẠI ❌"}`);
console.log("\n");


// ==========================================
// Test Case 4: Tìm Employee
// ==========================================
console.log("--- Test Case 4: Tìm Employee ---");
// Thử tìm Employee hợp lệ
const foundEmployee = employeeService.findById(employee1.getId());
console.log(`Tìm thấy đúng Employee 1: ${foundEmployee && foundEmployee.getName() === "Nguyễn Văn A" ? "ĐẠT ✅" : "THẤT BẠI ❌"}`);

// Thử tìm với ID không tồn tại
const notFoundEmployee = employeeService.findById("non-existent-id");
console.log(`Tìm ID không tồn tại trả về null: ${notFoundEmployee === null ? "ĐẠT ✅" : "THẤT BẠI ❌"}`);
console.log("\n");


// ==========================================
// Test Case 5: Tạo Project
// ==========================================
console.log("--- Test Case 5: Tạo Project ---");
console.log("Mong đợi thông báo từ Employee 1 nhận dự án mới:");
const project1 = projectService.create({
    customerId: customer1.getId(),
    employeeId: employee1.getId()
});
console.log("Project được tạo thành công:");
console.log(project1.toString());
console.log(`Kiểm tra ID Project tồn tại: ${project1.getId() ? "ĐẠT ✅" : "THẤT BẠI ❌"}`);
console.log("\n");


// ==========================================
// Test Case 6: Đổi nhân viên phụ trách Project
// ==========================================
console.log("--- Test Case 6: Đổi nhân viên phụ trách Project ---");
console.log("Mong đợi thông báo chuyển giao nhiệm vụ tới Employee 2:");
const updatedProjectEmp = projectService.updateById(project1.getId(), {
    employeeId: employee2.getId()
});
if (updatedProjectEmp) {
    console.log("Project sau khi đổi nhân viên:");
    console.log(updatedProjectEmp.toString());
    console.log(`Kiểm tra employeeId mới: ${updatedProjectEmp.getEmployeeId() === employee2.getId() ? "ĐẠT ✅" : "THẤT BẠI ❌"}`);
} else {
    console.log("Cập nhật Project thất bại! ❌");
}
console.log("\n");


// ==========================================
// Test Case 7: Cập nhật Project nhưng không đổi Employee
// ==========================================
console.log("--- Test Case 7: Cập nhật Project nhưng không đổi Employee ---");
console.log("Cập nhật customerId (Mong đợi: KHÔNG có thông báo nào hiển thị ở console):");
const updatedProjectCust = projectService.updateById(project1.getId(), {
    customerId: "another-customer-id",
    employeeId: employee2.getId() // Giữ nguyên employeeId cũ
});
if (updatedProjectCust) {
    console.log("Project sau khi cập nhật customerId:");
    console.log(updatedProjectCust.toString());
    console.log(`Kiểm tra customerId mới: ${updatedProjectCust.getCustomerId() === "another-customer-id" ? "ĐẠT ✅" : "THẤT BẠI ❌"}`);
}
console.log("\n");


// ==========================================
// Test Case 8: Cập nhật dữ liệu không tồn tại
// ==========================================
console.log("--- Test Case 8: Cập nhật dữ liệu không tồn tại ---");
const fakeId = "non-existent-uuid-12345";

const testCustUpdate = customerService.updateById(fakeId, { name: "Fake Name" });
const testEmpUpdate = employeeService.updateById(fakeId, { name: "Fake Name" });
const testProjUpdate = projectService.updateById(fakeId, { customerId: "Fake Cust ID" });

console.log(`CustomerService.updateById() trả về null: ${testCustUpdate === null ? "ĐẠT ✅" : "THẤT BẠI ❌"}`);
console.log(`EmployeeService.updateById() trả về null: ${testEmpUpdate === null ? "ĐẠT ✅" : "THẤT BẠI ❌"}`);
console.log(`ProjectService.updateById() trả về null: ${testProjUpdate === null ? "ĐẠT ✅" : "THẤT BẠI ❌"}`);
console.log("\n");


// ==========================================
// Test Case 9: Tạo Project với employeeId không tồn tại
// ==========================================
console.log("--- Test Case 9: Tạo Project với employeeId không tồn tại ---");
console.log("(Mong đợi: Không phát sinh lỗi, Project vẫn được tạo, không có thông báo)");

try {
    const projectWithFakeEmp = projectService.create({
        customerId: customer1.getId(),
        employeeId: "fake-employee-id"
    });
    console.log("Project vẫn được tạo bình thường:");
    console.log(projectWithFakeEmp.toString());
    console.log("Kết quả: ĐẠT ✅");
} catch (error) {
    console.log("Bị phát sinh lỗi hệ thống! ❌", error);
}
console.log("\n");

console.log("=== TẤT CẢ CÁC BÀI TEST ĐÃ HOÀN THÀNH ===");