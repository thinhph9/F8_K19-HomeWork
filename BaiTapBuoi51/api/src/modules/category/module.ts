import { Module } from "@nestjs/common";
import { CategoryController } from "./controller.js";
import { CategoryService } from "./services.js";
import { CategoryEntity } from "./entity.js";
import { TypeOrmModule } from "@nestjs/typeorm";




@Module({
    imports: [TypeOrmModule.forFeature([CategoryEntity])],
    controllers: [CategoryController],
    providers: [CategoryService]
})
export class CategoryModule { }
