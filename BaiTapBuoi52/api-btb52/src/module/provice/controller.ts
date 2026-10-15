import { Controller, Get } from "@nestjs/common";
import { ProvinceService } from "./service.js";

@Controller("province")
export class ProviceController {

    constructor(
        private readonly provinceService: ProvinceService
    ) { }

    @Get("/abc")
    getList1() {
        return [
            {
                id: 1,
                name: "Da Nang"
            },
            {
                id: 1,
                name: "Da Nang"
            },
            {
                id: 1,
                name: "Da Nang"
            },
            {
                id: 1,
                name: "Da Nang"
            }
        ]
    }
    @Get("/v2")
    getList() {
        return this.provinceService.getList();
    }

}