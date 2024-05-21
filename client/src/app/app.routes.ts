import { Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout/layout.component';
import { LandingPageComponent } from './landing-page/landing-page.component';

export const routes: Routes = [
    {
        path:"",
        component: LayoutComponent,
        
      },
      {
        path:"login",
        component: LandingPageComponent,
      }
];
