import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { Category, CategoryService } from '../category-services/category.service';

@Component({
    selector: 'app-category-list',
    standalone: true,
    imports : [CommonModule, FormsModule, RouterLink],
    templateUrl: './category-list.html',
    styleUrl: './category-list.css',
})
export class CategoryList {
    categories: Category[] = [];
    
      filterText = '';
    
      constructor(private categoryService: CategoryService) {}
    
      ngOnInit(): void {
        this.categoryService.getAllCategory().subscribe({
            next: (data) => {
              console.log(data);
              this.categories = data;
            },
            error: (err) => {
              console.log(err);
            }
        });
      }
      filterCategories() {
        return this.categories.filter((category) =>
          category.name.toLowerCase().includes(this.filterText.toLowerCase())
        );
      }
      selectedCategory?: Category;
      findCategoryById(id: number) {
      this.categoryService.getCategoryId(id).subscribe({
        next: (category) => {
          this.selectedCategory = category;
          console.log('Tìm thấy:', category);
        },
        error: (err) => {
          this.selectedCategory = undefined;
          console.log('Không tìm thấy danh muc với id:', id);
        }
      });
      }
}
