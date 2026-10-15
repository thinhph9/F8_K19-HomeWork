import { Module } from "@nestjs/common";
import { CategoryController } from "./controller.js";
import { CategoryService } from "./services.js";




@Module({
    controllers: [CategoryController],
    providers: [CategoryService]
})
export class CategoryModule { }
