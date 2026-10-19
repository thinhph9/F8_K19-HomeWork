import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsNumber, IsString, MinLength } from "class-validator";

export class CategoryBaseDto {
    @ApiProperty({
        example: "iphone12"
    })
    @IsString()
    @IsNotEmpty()
    @MinLength(2)
    name: string;
}

export class CategoryDto extends CategoryBaseDto {
    @ApiProperty({
        example: 1
    })
    @IsNumber()
    id: number;
}

export class CategoryCreateDto extends CategoryBaseDto { }
export class CategoryReplaceDto extends CategoryBaseDto { }