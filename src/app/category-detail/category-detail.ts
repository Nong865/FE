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
    catagory = {
        id: 1, 
        name: 'laptop',
        price : 1000,
        image: 'https://fdn.gsmarena.com/imgroot/reviews/24/apple-iphone-16/lifestyle/-1024w2/gsmarena_001.jpg',
        inStock:  true
    };
    categoryID: String| null = null;
    
}
