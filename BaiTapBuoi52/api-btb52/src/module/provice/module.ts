import { Module } from "@nestjs/common";
import { ProviceController } from "./controller.js";
import { ProvinceService } from "./service.js";


@Module({
    controllers: [ProviceController],
    providers: [ProvinceService]
})

export class ProvinceModule { }