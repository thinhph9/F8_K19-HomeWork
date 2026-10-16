import { Module } from "@nestjs/common";
import { ProvinceController } from "./controller.js";
import { ProvinceService } from "./service.js";


@Module({
    imports: [],
    controllers: [ProvinceController],
    providers: [ProvinceService]
})
export class ProvinceModule { }