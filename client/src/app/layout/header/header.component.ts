import { Component, OnInit, inject } from '@angular/core';
import { MatAccordion, MatExpansionModule } from '@angular/material/expansion';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { RouterService } from '../../shared/services/router.service';
import { LocalStorageService } from '../../shared/local-storage.service';
import { Router } from '@angular/router';

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
  localStorageService = inject(LocalStorageService);
  routerService = inject(RouterService);
  title = this.routerService.headerTitle;
  router = inject(Router);

  logout() {
    this.localStorageService.removeItem('token');
    this.router.navigate(['']);
  }
}
