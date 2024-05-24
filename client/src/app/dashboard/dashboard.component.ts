import { Component } from '@angular/core';
import { StockListComponent } from './stock-list/stock-list.component';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [StockListComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {

}
