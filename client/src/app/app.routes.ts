import { Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout/layout.component';
import { ProductComponent } from './products/product.component';
import { ProductDetailComponent } from './products/product-detail/product-detail.component';
import { ProductListComponent } from './products/product-list/product-list.component';

export const routes: Routes = [
    {
        path:"",
        component: LayoutComponent,
      },
      {
        path:"products", 
        component: ProductListComponent,
      },
    {
        path:"products/:id",
        component: ProductDetailComponent,
      },


];
