import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

@Component({
    selector: 'app-category-detail',
    imports: [CommonModule],
    templateUrl: './category-detail.html',
    styleUrl: './category-detail.css'
})
export class CategoryDetail {
    category = {
        id: 1, 
        name: 'Laptop',
        description : 'Các dòng laptop mới nhất',
        status: true
    };
    categoryId: string | null = null;
    
    constructor(private route: ActivatedRoute) {}

    ngOnInit() {
        this.categoryId = this.route.snapshot.paramMap.get('id');
    }
}
