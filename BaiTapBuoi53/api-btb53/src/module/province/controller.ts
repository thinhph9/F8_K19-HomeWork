import { Controller, Get } from "@nestjs/common";
import { ProvinceService } from "./service.js";

@Controller("province")

export class ProvinceController {
    constructor(private readonly provinceService: ProvinceService) { }


    @Get()
    getList() {
        return this.provinceService.getList();
    }
}