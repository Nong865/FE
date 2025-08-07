import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { CategoryService } from '../category-services/category.service';

@Component({
  selector: 'app-category-create',
  imports: [FormsModule, CommonModule],
  templateUrl: './category-create.html',
  styleUrl: './category-create.css',
})
export class CategoryCreate {
  category = {
    name: '',
    description: '',
    status: '',
  };

  constructor(private categoryService: CategoryService, private router: Router) {}

   handleSubmit(categoryForm: NgForm) {
    console.log('categoryForm',categoryForm);
    if(!categoryForm.invalid){
      this.categoryService.addCategory(this.category).subscribe({
        next: () => {
          window.alert('Thêm thành công!');
          this.router.navigate(['/categories']);
        },
        error: () => {
          alert('Thêm sản phẩm thất bại!');
        }
      })
    }
  }
}
