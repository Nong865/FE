import { Routes } from '@angular/router';
import { ProductList } from './product-list/product-list';
import { CategoryList } from './category-list/category-list';
import { BrandList } from './brand-list/brand-list';
import { ProductDetail } from './product-detail/product-detail';
import { ProductCreate } from './product-create/product-create';
import { CategoryDetail } from './category-detail/category-detail';
import { BrandDetail } from './brand-detail/brand-detail';
import { UserList } from './user-list/user-list';
import { UserDetail } from './user-detail/user-detail';
import { BrandCreate } from './brand-create/brand-create';
import { ProductUpdate } from './product-update/product-update';
import { CategoryCreate } from './category-create/category-create';
import { Login } from './auth/login/login';
import { Register } from './auth/register/register';
import {  OrderListComponent } from './order-list/order-list';
import {  CardListComponent } from './auth/card-list/card-list';
import {  CardCreateComponent } from './card-create/card-create';
import { CardUpdateComponent } from './card-update/card-update';
export const routes: Routes = [
     {
    path: 'login',
    component: Login,
  },
  {
    path: 'register',
    component: Register,
  },
    {path: "",
     component: ProductList},
    {path: "products",
         component: ProductList},
    {path: 'product/:id/detail',
        component: ProductDetail},
    {path: 'product/create',
        component: ProductCreate},
    {
    path: 'products/update/:id',
        component: ProductUpdate},

    // Category 
    {path: "categories",
        component: CategoryList},
    { path: 'category/:id/detail', 
        component: CategoryDetail },
    { path: 'categories/create', 
        component: CategoryCreate },
    { path: 'categories/update/:id', 
        component: CategoryCreate },
    // Brand
    {path: "brands",
        component: BrandList },
    {path: 'brands/create',
        component: BrandCreate},
     {path: 'brands/update/:id',
        component: BrandCreate},
    { path: 'brand/:id/detail', 
        component: BrandDetail },
    // User
    {path: "users",
        component: UserList },
    { path: 'user/:id/detail', 
        component: UserDetail },
    // orders
     {path: "orders",
        component: OrderListComponent },
    // card
    {path: "cards",
        component: CardListComponent },
    {path: "cards/create",
        component: CardCreateComponent },
    {path: "cards/update/:id",
        component: CardUpdateComponent},
];
