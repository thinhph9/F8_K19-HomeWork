import { Injectable } from "@nestjs/common";



@Injectable()
export class CategoryService {

    private categories: any[] = [];

    getList() {
        return this.categories;
    }

    create(category: any) {
        this.categories.push(category);
        return category
    }

    getById(id: number) {
        return this.categories.find(c => c.id === id)
    }



}