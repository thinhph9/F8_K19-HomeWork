import { ApiProperty, PartialType } from "@nestjs/swagger";
import { IsInt, IsNotEmpty, IsNumber, IsPositive, IsString, MaxLength, MinLength } from "class-validator";

export class CategoryBaseDto {
    @ApiProperty({
        example: "Laptop",
        description: "Tên danh mục sản phẩm",
        minLength: 2,
        maxLength: 100,
    })
    @IsString({ message: "Tên danh mục phải là chuỗi ký tự" })
    @IsNotEmpty({ message: "Tên danh mục không được để trống" })
    @MinLength(2, { message: "Tên danh mục phải có ít nhất 2 ký tự" })
    @MaxLength(100, { message: "Tên danh mục không được vượt quá 100 ký tự" })
    name: string;
}

export class CategoryDto extends CategoryBaseDto {
    @ApiProperty({
        example: 1,
        description: "ID định danh của danh mục",
    })
    @IsInt({ message: "ID phải là số nguyên" })
    @IsPositive({ message: "ID phải là số dương" })
    id: number;
}

export class CategoryCreateDto extends CategoryBaseDto { }
export class CategoryReplaceDto extends CategoryBaseDto { }

// DTO cho PATCH: Tự động kế thừa thuộc tính của CategoryCreateDto nhưng chuyển thành optional
export class CategoryUpdateDto extends PartialType(CategoryCreateDto) { }