import { Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout/layout.component';
import { ProductComponent } from './products/product.component';

export const routes: Routes = [
    {
        path:"",
        component: LayoutComponent,
      },
  /*     {
        path:"/product",
        component: ProductComponent,
      }, */
];
