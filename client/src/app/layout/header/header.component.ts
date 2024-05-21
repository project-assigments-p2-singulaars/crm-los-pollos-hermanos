import { Component, OnInit, inject } from '@angular/core';
import { MatAccordion, MatExpansionModule } from '@angular/material/expansion';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { RouterService } from '../../shared/services/router.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    MatAccordion,
    MatButtonModule,
    MatExpansionModule,
    MatIconModule,
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  routerService = inject(RouterService);
  title = this.routerService.headerTitle;

  logout() {
    this.routerService.headerTitle.update(v => "Logging out")
  }

  products() {
    this.routerService.headerTitle.update(v => "Products")
  }

  welcome() {
    this.routerService.headerTitle.update(v => "Welcome back, Natalia!")
  }
}
