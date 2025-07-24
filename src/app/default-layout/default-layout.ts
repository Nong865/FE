import { Component } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-default-layout',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterLink],
  template: `
    <div class="layout">
      <nav class="menu">
        <a routerLink="/home" routerLinkActive="active">Trang chủ</a>
        <a routerLink="/products" routerLinkActive="active">Sản phẩm</a>
        <a routerLink="/create-product" routerLinkActive="active">Thêm sản phẩm</a>
        <a routerLink="/brands" routerLinkActive="active">Thương hiệu</a>
        <a routerLink="/categories" routerLinkActive="active">Danh mục</a>
        <a routerLink="/users" routerLinkActive="active">Người dùng</a>
      </nav>

      <main class="content">
        <router-outlet></router-outlet>
      </main>
    </div>
  `,
  styles: [`
    .layout {
      font-family: Arial, sans-serif;
    }
    .menu {
      background: #eee;
      padding: 10px;
      display: flex;
      gap: 20px;
    }
    a {
      text-decoration: none;
      color: black;
    }
    a.active {
      font-weight: bold;
      color: blue;
    }
    .content {
      padding: 20px;
    }
  `]
})
export class DefaultLayout {}