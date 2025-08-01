import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { RouterLink } from "@angular/router";
import { Brand, BrandService } from "../brand-services/brand.service";

@Component({
    selector: 'app-brand-list',
    standalone: true,
    imports: [CommonModule, FormsModule,RouterLink],
    templateUrl: './brand-list.html',
    styleUrl: './brand-list.css',
})
export class BrandList{
    brands: Brand[] = [];

    filterText = '';

    constructor(private brandService: BrandService) {}

    ngOnInit():  void{
        this.brandService.getAllBrand().subscribe({
            next: (data) => {
                console.log(data);
                this.brands = data
            },
            error: (err) => {
                console.log(err);
            }
        })
    }
    filterBrands() {
        return this.brands.filter((brand) => 
            brand.name.toLowerCase().includes(this.filterText.toLowerCase())
        );
    }
    selectedBrand?: Brand;
      findBrandById(id: number) {
      this.brandService.getBrandId(id).subscribe({
        next: (brand) => {
          this.selectedBrand = brand;
          console.log('Tìm thấy:', brand);
        },
        error: (err) => {
          this.selectedBrand = undefined;
          console.log('Không tìm thấy thuong hieu với id:', id);
        }
      });
      }
}