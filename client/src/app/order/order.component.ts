import { AsyncPipe } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { Order } from '../shared/interfaces/order';
import { OrderService } from '../shared/order.service';
import { OrderListComponent } from './order-list/order-list.component';
import { OrderFormComponent } from './order-form/order-form.component';

@Component({
  selector: 'app-order',
  standalone: true,
  imports: [OrderListComponent, OrderFormComponent, AsyncPipe],
  templateUrl: './order.component.html',
  styleUrl: './order.component.scss',
})
export class OrderComponent implements OnInit {
  orders!: Observable<Order[]>;
  private orderService = inject(OrderService);

  ngOnInit(): void {
    this.orders = this.orderService.getAllOrders();
  }
}
