import { Controller, Get } from "@nestjs/common";
import { CategoryService } from "./services.js";

@Controller("category")
export class CategoryController {

    constructor(private readonly categogyService: CategoryService) { }



    @Get()
    getCategories() {
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

    @Get("/v2")
    getCategories2() {
        return this.categogyService.getList();
    }

}