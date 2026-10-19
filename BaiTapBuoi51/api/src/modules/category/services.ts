import { Injectable, NotFoundException } from "@nestjs/common";
import { CategoryCreateDto, CategoryDto, CategoryReplaceDto, CategoryUpdateDto } from "./dto.js";



@Injectable()
export class CategoryService {
    /**Thay kiểu any trong Service bằng DTO (CategoryDto) hoặc Interface để tận dụng Type Safety của TypeScript. và khởi tạo dữ liệu mặc định */
    private categories: CategoryDto[] = [
        { id: 1, name: "Thời trang" },
        { id: 2, name: "Điện tử" }
    ];
    /**Thêm kiểu dữ liệu CategoryDto */
    getList(): CategoryDto[] {
        return this.categories;
    }
    /**Viết lại logic chuẩn chỉnh hơn */
    getById(id: number): CategoryDto {
        const category = this.categories.find(c => c.id === id);
        if (!category) {
            throw new NotFoundException(`Category với ID ${id} không tồn tại`);
        }
        return category;
    }

    create(dto: CategoryCreateDto): CategoryDto {
        const newCategory: CategoryDto = {
            id: Date.now(), // Tự động tạo ID ngẫu nhiên/tăng dần đơn giản
            ...dto
        }
        this.categories.push(newCategory);
        return newCategory;
    }


    replace(id: number, dto: CategoryReplaceDto): CategoryDto {
        const index = this.categories.findIndex(c => c.id === id);
        if (index === -1) {
            throw new NotFoundException(`Category với ID ${id} không tồn tại`);
        }
        this.categories[index] = { id, ...dto };
        return this.categories[index];
    }

    delete(id: number): void {
        const index = this.categories.findIndex(c => c.id === id);
        if (index === -1) {
            throw new NotFoundException(`Category với ID ${id} không tồn tại`);
        }
        this.categories.splice(index, 1);
    }

    update(id: number, categoryDto: CategoryUpdateDto): CategoryDto {
        const index = this.categories.findIndex(c => c.id === id);
        if (index === -1) {
            throw new NotFoundException(`Category với ID ${id} không tồn tại`);
        }

        // Trộn các giá trị gửi lên vào object hiện tại
        const updatedCategory: CategoryDto = {
            ...this.categories[index],
            ...categoryDto,
        };

        this.categories[index] = updatedCategory;
        return updatedCategory;
    }



}