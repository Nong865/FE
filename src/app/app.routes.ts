import { Routes } from '@angular/router';
import { ProductList } from './product-list/product-list';
import { CategoryList } from './category-list/category-list';
import { BrandList } from './brand-list/brand-list';
import { ProductDetail } from './product-detail/product-detail';
import { ProductCreate } from './product-create/product-create';
export const routes: Routes = [
    {path: "",
     component: ProductList},
    {path: "products",
         component: ProductList},
    {path: "categories",
        component: CategoryList},
    {path: "brands",
        component: BrandList },
    {path: 'product/:id/detail',
        component: ProductDetail},
    {path: 'product/create',
        component: ProductCreate},
];
