import { Component} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { Product, ProductService } from '../product-services/product.service';

@Component({
  selector: 'app-product-list',
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './product-list.html',
  styleUrl: './product-list.css',
})
export class ProductList {
  products: Product[] = [];

  filterText = '';

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.productService.getAllProduct().subscribe({
        next: (data) => {
          console.log(data);
          this.products = data;
        },
        error: (err) => {
          console.log(err);
        }
    });
  }
  filterProducts() {
    return this.products.filter((product) =>
      product.name.toLowerCase().includes(this.filterText.toLowerCase())
    );
  }
  selectedProduct?: Product;
  findProductById(id: string) {
  this.productService.getProductId(id).subscribe({
    next: (product) => {
      this.selectedProduct = product;
      console.log('Tìm thấy:', product);
    },
    error: (err) => {
      this.selectedProduct = undefined;
      console.log('Không tìm thấy sản phẩm với id:', id);
    }
  });
  }
  deleteProduct(id: string) {
  if (confirm('Bạn có chắc muốn xoá sản phẩm này không?')) {
    this.productService.deleteProduct(id).subscribe({
      next: () => {
        // Sau khi xoá thành công, cập nhật lại danh sách
        this.products = this.products.filter(product => product.id !== id);
        console.log('Xoá thành công sản phẩm có id:', id);
      },
      error: (err) => {
        console.error('Lỗi khi xoá sản phẩm:', err);
      }
    });
  }
  }
  addToCart(product: Product) {
  const cart = JSON.parse(localStorage.getItem('cart') || '[]');

  const existingItem = cart.find((item: Product & { quantity: number }) => item.id === product.id);
  if (existingItem) {
    existingItem.quantity += 1;
  } else {
    cart.push({ ...product, quantity: 1 });
  }

  localStorage.setItem('cart', JSON.stringify(cart));
  alert('Đã thêm vào giỏ hàng!');
}

}
