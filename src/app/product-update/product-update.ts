import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../product-services/product.service';

@Component({
  selector: 'app-product-update',
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './product-update.html',
  styleUrl: './product-update.css'
})
export class ProductUpdate {
      productForm : FormGroup;
      productId: string | null = null;

  constructor(
    private formBuilder: FormBuilder, 
    private route: ActivatedRoute,
    private productService: ProductService,
    private router: Router
  ) {
    this.productForm = this.formBuilder.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      image: ['', [Validators.required]],
      price: ['', [Validators.required, Validators.min(3)]],
    });
  }
  
  ngOnInit(){
    this.productId = String(this.route.snapshot.paramMap.get('id'));
    if (this.productId) {
    this.productService.getProductId(this.productId).subscribe(product => {
      this.productForm.patchValue({
        name: product.name,
        image: product.image,
        price: product.price,
        inStock: product.inStock,
      });
    });
  }
  }
  handleSubmit() {
    if (this.productForm.valid && this.productId) {
    this.productService.updateProduct(this.productId, this.productForm.value).subscribe({
      next: () => {
        alert('Cập nhật thành công!');
        this.router.navigate(['/products']);
      },
      error: () => {
        alert('Cập nhật thất bại!');
      }
    });
  }
  }
}
