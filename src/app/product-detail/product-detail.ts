import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { ProductService } from '../product-services/product.service';

@Component({
  selector: 'app-product-detail',
  imports: [CommonModule,RouterLink],
  templateUrl: './product-detail.html',
  styleUrl: './product-detail.css',
})
export class ProductDetail {
  product = {
    id: '',
    name: '',
    price: 0,
    image: '',
    inStock: true,
  };
  productId: string | null = null;

  constructor(
    private route: ActivatedRoute, 
    private productService: ProductService
  ) {}

  ngOnInit() {
    this.productId = this.route.snapshot.paramMap.get('id');
    if(this.productId){
      this.productService.getProductId(this.productId).subscribe({
        next: (data) => {
          this.product = {
          id: data.id ?? '',
          name: data.name ?? '',
          price: data.price ?? 0,
          image: data.image ?? '',
          inStock: data.inStock ?? false,
        };
        console.log('Chi tiết sản phẩm:', this.product);
        },
        error: () => {

        }
      })
    }
  }
}