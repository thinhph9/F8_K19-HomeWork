import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, ParseIntPipe, Patch, Post, Put } from "@nestjs/common";
import { CategoryService } from "./services.js";
import { CategoryCreateDto, CategoryDto, CategoryReplaceDto, CategoryUpdateDto } from "./dto.js";
import { ApiOperation, ApiResponse, ApiTags } from "@nestjs/swagger";

/**Thêm apitags */
@ApiTags("Categories")
@Controller("categories")
export class CategoryController {

    constructor(private readonly categoryService: CategoryService) { }

    @Get()
    /**Thêm thông tin ghi chú cho api*/
    @ApiOperation({ summary: "Lấy danh sách tất cả các danh mục" })
    @ApiResponse({
        status: HttpStatus.OK, /** Dùng HttpStatus thay vì fix cứng số */
        description: "Lấy danh sách thành công.",
        type: CategoryDto,
        isArray: true

    })
    /**Thêm kiểu dữ liệu */
    getCategories(): CategoryDto[] {
        return this.categoryService.getList();
    }

    // Đặt route tĩnh "v2" lên trước route động ":id"
    @Get("v2")
    @ApiOperation({ summary: "Lấy danh sách v2" })
    getCategories2() {
        return [
            {
                id: 1,
                name: "KT"
            },
            {
                id: 2,
                name: "AAT"
            }
        ]
    }

    @Get(":id")
    @ApiOperation({ summary: "Lấy chi tiết danh mục theo ID" })
    @ApiResponse({
        status: HttpStatus.OK,
        description: "Tìm thấy bản ghi",
        type: CategoryDto
    })
    @ApiResponse({
        status: HttpStatus.NOT_FOUND,
        description: "Không tìm thấy danh mục"
    })
    getCategory(@Param("id", ParseIntPipe) id: number): CategoryDto {
        return this.categoryService.getById(id);
    }


    @Post()
    @ApiOperation({ summary: "Tạo mới danh mục" })
    @ApiResponse({
        status: HttpStatus.CREATED,
        description: "Tạo thành công",
        type: CategoryDto

    })
    createCategory(@Body() category: CategoryCreateDto): CategoryDto {
        return this.categoryService.create(category)
    }

    @Put(":id")
    @ApiOperation({ summary: "Cập nhật danh mục theo ID" })
    @ApiResponse({
        status: HttpStatus.OK,
        description: "Cập nhật danh mục thành công.",
        type: CategoryDto

    })
    @ApiResponse({
        status: HttpStatus.NOT_FOUND,
        description: "Không tìm thấy danh mục"
    })
    replaceCategory(@Param("id", ParseIntPipe) id: number,
        @Body() category: CategoryReplaceDto): CategoryDto {
        return this.categoryService.replace(id, category);
    }

    @Delete(":id")
    @HttpCode(HttpStatus.NO_CONTENT)
    @ApiOperation({ summary: "Xóa danh mục theo ID" })
    @ApiResponse({
        status: HttpStatus.NO_CONTENT,
        description: "Xóa thành công."
    })
    deleteCategory(@Param("id", ParseIntPipe) id: number): void {
        this.categoryService.delete(id);
    }

    @Patch(":id")
    @ApiOperation({ summary: "Cập nhật một phần danh mục theo ID" })
    @ApiResponse({
        status: HttpStatus.OK,
        description: 'Cập nhật một phần danh mục thành công.',
        type: CategoryDto,
    })
    @ApiResponse({ status: HttpStatus.NOT_FOUND, description: 'Không tìm thấy danh mục.' })
    updateCategory(
        @Param("id", ParseIntPipe) id: number,
        @Body() categoryDto: CategoryUpdateDto): CategoryDto {
        return this.categoryService.update(id, categoryDto);
    }




}

