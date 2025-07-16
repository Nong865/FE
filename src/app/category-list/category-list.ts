import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'app-category-list',
    standalone: true,
    imports : [CommonModule, FormsModule],
    templateUrl: './category-list.html',
    styleUrl: './category-list.css',
})
export class CategoryList {
    categories = [
    { id: 1, name: 'Laptop', description: 'Các dòng laptop mới nhất', status: 'active' },
    { id: 2, name: 'Điện thoại', description: 'Smartphone chính hãng', status: 'active' },
    { id: 3, name: 'Phụ kiện', description: 'Tai nghe, sạc,...', status: 'inactive' },
    { id: 4, name: 'Máy tính bảng', description: 'Tablet đa dạng', status: 'active' }
  ];
  filterText = '';

  filterCategories() {
    return this.categories.filter((category) =>
      category.name.toLowerCase().includes(this.filterText.toLowerCase())
    );
  }
}
