import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-brand-list',
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './brand-list.html',
  styleUrl: './brand-list.css',
})
export class BrandList {
  brands = [
    { id: 1, ten_thuong_hieu: 'Thương Hiệu A', mo_ta: "Thương hiệu thời trang nổi tiếng với các sản phẩm chất lượng cao.", trang_thai: 1 },
    { id: 2, ten_thuong_hieu: 'Thương Hiệu B', mo_ta: "Thương hiệu chuyên cung cấp các sản phẩm thời trang hiện đại và phong cách.", trang_thai: 1 },
  ];

  filterText = '';

  filterbrands() {
    return this.brands.filter((brand) =>
      brand.ten_thuong_hieu.toLowerCase().includes(this.filterText.toLowerCase())
    );
  }
}