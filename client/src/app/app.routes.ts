import { Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout/layout.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { ProductComponent } from './products/product.component';
import { ProductDetailComponent } from './products/product-detail/product-detail.component';
import { ProductListComponent } from './products/product-list/product-list.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CustomerComponent } from './customer/customer.component';
import { OrderComponent } from './order/order.component';
import { authGuard } from './auth.guard';

export const routes: Routes = [
  {
    path: '',
    component: LandingPageComponent,
  },
  {
    path: 'layout',
    canActivate: [authGuard],
    component: LayoutComponent,
    children: [
      {
        path: '',
        component: DashboardComponent,
      },
      {
        path: 'overview',
        redirectTo: '',
      },
      {
        path: 'customers',
        component: CustomerComponent,
      },
      {
        path: 'orders',
        component: OrderComponent,
      },
      {
        path: 'products',
        component: ProductComponent,
      },
      {
        path: 'products/:id',
        component: ProductDetailComponent,
      },
    ],
  },
];
