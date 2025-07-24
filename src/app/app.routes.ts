import { Routes } from '@angular/router';
import { ProductList } from './product-list/product-list';
import { ProductDetail } from './product-detail/product-detail';
import { CategoryList } from './category-list/category-list';
import { ProductCreate } from './product-create/product-create';
import { CategoryCreate } from './category-create/category-create';
import { UserCreate } from './user-create/user-create';
import { UserList } from './user-list/user-list';
import { BrandList } from './brand-list/brand-list';
import { BrandCreate } from './brand-create/brand-create';

export const routes: Routes = [
  {
    path: '',
    component: ProductList,
  },
  {
    path: 'products',
    component: ProductList,
  },
  {
    path: 'categories',
    component: CategoryList,
  },
   {
    path: 'user',
    component: UserList,
  },
   {
    path: 'brand',
    component: BrandList,
  },
 
  {
    path: 'product/:id/detail',
    component: ProductDetail,
    canActivate: [], 
  },
  {
    path: 'products/create',
    component: ProductCreate,
  },
  {
    path: 'brands/create',
    component: BrandCreate,
  },
  {
    path: 'categories/create',
    component: CategoryCreate,
  },
   {
    path: 'user/create',
    component: UserCreate,
  },
];