import { Component } from '@angular/core';
import { ProductComponent } from '../../products/product.component';
import { RouterOutlet } from '@angular/router';
import { AsideComponent } from '../aside/aside.component';
import { HeaderComponent } from '../header/header.component';
import { DashboardComponent } from '../../dashboard/dashboard.component';

@Component({
  selector: 'app-layout',
  standalone: true,
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.scss',
  imports: [RouterOutlet, AsideComponent, HeaderComponent, DashboardComponent, ProductComponent],
})
export class LayoutComponent {}
