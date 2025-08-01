import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { ProductService } from '../product-services/product.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-create',
  imports: [FormsModule,CommonModule],
  templateUrl: './product-create.html',
  styleUrl: './product-create.css'
})
export class ProductCreate {
  product = {
    name: '',
    image: '',
    price: 0,
    inStock: true
  };
  constructor(private productService: ProductService, private router: Router) {}

  handleSubmit(productForm: NgForm) {
    console.log('productForm',productForm);
    if(!productForm.invalid){
      this.productService.addProduct(this.product).subscribe({
        next: () => {
          alert('Them thanh cong!');
          this.router.navigate(['/products']);
        },
        error: () => {
          alert('Thêm sản phẩm thất bại!');
        }
      })
    }
  }
}
