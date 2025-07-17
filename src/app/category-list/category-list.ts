import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'category-list',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './category-list.html',
  styleUrl: './category-list.css'
})
export class CategoryList {
  filterText = '';

  categories = [
    { id: 1, name: 'Category 1' },
    { id: 2, name: 'Category 2' },
    { id: 3, name: 'Category 3' },
    { id: 4, name: 'Category 4' },
    { id: 5, name: 'Category 5' },
    { id: 6, name: 'Category 6' },
    { id: 7, name: 'Category 7' },
    { id: 8, name: 'Category 8' },
    { id: 9, name: 'Category 9' },
    { id: 10, name: 'Category 10' }
  ];

  filterCategories() {
    const search = this.filterText.toLowerCase();
    return this.categories.filter(c =>
      c.name.toLowerCase().includes(search) || c.id.toString().includes(search)
    );
  }
}