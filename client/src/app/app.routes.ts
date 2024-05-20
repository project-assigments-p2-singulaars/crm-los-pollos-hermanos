import { Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout/layout.component';
import { ProductComponent } from './products/product.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CustomerComponent } from './customer/customer.component';
import { OrderComponent } from './order/order.component';

export const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    // children: [
    //   {
    //     path: 'overview',
    //     component: DashboardComponent,
    //   },
    //   {
    //     path: 'dashboard',
    //     redirectTo: '',
    //   },
    //   {
    //     path: 'customer',
    //     component: CustomerComponent,
    //   },
    //   {
    //     path: 'order',
    //     component: OrderComponent,
    //   },
    //   {
    //     path: 'product',
    //     component: ProductComponent,
    //   },
    // ],
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
