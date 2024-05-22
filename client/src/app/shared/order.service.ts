import { Injectable, inject } from '@angular/core';
import { Order } from './interfaces/order';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class OrderService {
  orders!: Order[];
  http = inject(HttpClient);

  getAllOrders() {
    return this.http.get<Order[]>('http://localhost:3000/orders');
  }
  constructor() {}
}
