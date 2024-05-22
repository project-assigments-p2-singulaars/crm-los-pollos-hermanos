import { Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout/layout.component';
import { ProductComponent } from './products/product.component';
import { ProductDetailComponent } from './products/product-detail/product-detail.component';
import { ProductListComponent } from './products/product-list/product-list.component';
import { LandingPageComponent } from './landing-page/landing-page.component';

export const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
  },
  {
    path: 'products',
    component: ProductComponent,
  },
  {
    path: 'products/:id',
    component: ProductDetailComponent,
  },
  {
    path: 'landing',
    component: LandingPageComponent,
  },
];
