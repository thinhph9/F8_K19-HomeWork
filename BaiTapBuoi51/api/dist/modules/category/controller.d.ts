import { CategoryService } from "./services.js";
export declare class CategoryController {
    private readonly categogyService;
    constructor(categogyService: CategoryService);
    getCategories(): {
        id: number;
        name: string;
    }[];
    getCategories2(): {
        id: number;
        name: string;
    }[];
}
