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
export const routes: Routes = [
    {path: "",
     component: ProductList},
    {path: "products",
         component: ProductList},
    {path: "categories",
        component: CategoryList},
    {path: "brands",
        component: BrandList },
    {path: "users",
        component: UserList },
    {path: 'product/:id/detail',
        component: ProductDetail},
    {path: 'product/create',
        component: ProductCreate},
    {path: 'brand/create',
        component: BrandCreate},
    { path: 'category/:id/detail', 
        component: CategoryDetail },
    { path: 'brand/:id/detail', 
        component: BrandDetail },
    { path: 'user/:id/detail', 
        component: UserDetail }
];
