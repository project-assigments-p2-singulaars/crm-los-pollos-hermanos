import { Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout/layout.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { ProductComponent } from './products/product.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CustomerComponent } from './customer/customer.component';
import { OrderComponent } from './order/order.component';

export const routes: Routes = [
  {
    path: '',
    component: LandingPageComponent
  },
  {
    path: 'layout',
    component: LayoutComponent,
    children: [
      {
        path: '',
        component: DashboardComponent,
      },
      {
        path: 'dashboard',
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
    ],
  },
  // {
  //   path: 'login',
  //   component: Login,
  // },
  // {
  //   path: 'register',
  //   component: RegisterComponent,
  // },
  // {
  //   path: '**',
  //   component: NotfoundpageComponent,
  // },

];
