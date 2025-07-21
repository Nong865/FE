import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";
import { FormsModule } from "@angular/forms";

@Component({
    selector: 'app-brand-list',
    standalone: true,
    imports: [CommonModule, FormsModule],
    templateUrl: './brand-list.html',
    styleUrl: './brand-list.css',
})
export class BrandList{
    brands = [
        { id: 1, name: 'Nike', origin: 'USA', status: 'active' },
        { id: 2, name: 'Adidas', origin: 'Germany', status: 'active' },
        { id: 3, name: 'Puma', origin: 'Germany', status: 'inactive' },
        { id: 4, name: 'Bitis', origin: 'Vietnam', status: 'active' }
    ];
    filterText = '';

    filterBrands() {
        return this.brands.filter((brand) => 
            brand.name.toLowerCase().includes(this.filterText.toLowerCase())
        );
    }
}