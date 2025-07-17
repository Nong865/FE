import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-brand-list',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './brand-list.html',
  styleUrls: ['./brand-list.css']
})
export class BrandList {
  filterText = '';

  BrandList = [
    {
      id: 1,
      name: 'Nike air foce 1',
      description: 'Thương hiệu thời trang thể thao hàng đầu',
    },
    {
      id: 2,
      name: 'MLB',
      description: 'Thời trang phong cách Mỹ',
    },
    {
      id: 3,
      name: 'Nike',
      description: 'Biểu tượng thời trang thể thao toàn cầu',
    }
  ];

  get filteredBrands() {
    const keyword = this.filterText.toLowerCase();
    return this.BrandList.filter(brand =>
      brand.name.toLowerCase().includes(keyword) ||
      brand.description.toLowerCase().includes(keyword)
    );
  }
}