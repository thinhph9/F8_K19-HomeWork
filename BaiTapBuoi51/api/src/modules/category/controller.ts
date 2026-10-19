import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { CategoryService } from "./services.js";
import { CategoryBaseDto, CategoryCreateDto, CategoryDto, CategoryReplaceDto } from "./dto.js";
import { ApiResponse } from "@nestjs/swagger";

@Controller("categories")
export class CategoryController {

    constructor(private readonly categogyService: CategoryService) { }

    @Get()
    @ApiResponse({
        status: 201,
        description: 'The record has been GET ALL successfully.',
        type: CategoryDto,
        isArray: true

    })
    getCategories() {
        return this.categogyService.getList();
    }

    @Get(":id")
    @ApiResponse({
        status: 200,
        description: 'The record has been GET ONE successfully.',
        type: CategoryDto,

    })
    getCategory(@Param("id") id: number) {
        return this.categogyService.getById(id);
    }


    @Post()
    @ApiResponse({
        status: 200,
        description: 'The record has been successfully created.',
        type: CategoryDto

    })
    createCategory(@Body() category: CategoryCreateDto) {
        console.log(category)
        return this.categogyService.create(category)
    }

    @Put(":id")
    @ApiResponse({
        status: 200,
        description: 'The record has been REPLACE successfully.',
        type: CategoryDto,

    })
    replaceCategory(@Param("id") id: number,
        @Body() category: CategoryReplaceDto) {
        return this.categogyService.create(category);
    }

    @Delete(":id")
    @ApiResponse({
        status: 200,
        description: 'The record has been DELETE successfully.'
    })
    deleteCategory(@Param("id") id: number) {
        // return this.categogyService.create(category);
    }




    @Get("v2")
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

}

