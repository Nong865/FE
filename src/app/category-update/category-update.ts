import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CategoryService } from '../category-services/category.service';

@Component({
  selector: 'app-category-update',
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './category-update.html',
  styleUrl: './category-update.css'
})
export class CategoryUpdate implements OnInit {
      categoryForm : FormGroup;
      categoryId: string | null = null;

  constructor(
    private formBuilder: FormBuilder, 
    private route: ActivatedRoute,
    private categoryService: CategoryService,
    private router: Router
  ) {
    this.categoryForm = this.formBuilder.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      description: ['', [Validators.required]],
      status: ['', [Validators.required, Validators.min(3)]],
    });
  }
  
  ngOnInit(){
    this.categoryId = String (this.route.snapshot.paramMap.get('id'));
    // console.log(this.categoryId);
    console.log('>> categoryId:', this.categoryId);
    
    if (this.categoryId) {
    this.categoryService.getCategoryId(Number(this.categoryId)).subscribe(category => {
      console.log('Category data:', category);
      
      this.categoryForm.patchValue({
        name: category.name,
        description: category.description,
        status: category.status,
      });
      console.log('>> Giá trị form sau patchValue:', this.categoryForm.value);
    });
  }
  }
  handleSubmit() {
    if (this.categoryForm.valid && this.categoryId) {
    this.categoryService.updateCategory(this.categoryId, this.categoryForm.value).subscribe({
      next: () => {
        alert('Cập nhật thành công!');
        this.router.navigate  (['/categories']); 
      },
      error: () => {
        alert('Cập nhật thất bại!');
      }
    });
  }
  }
}
