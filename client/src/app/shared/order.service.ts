import { Injectable, inject } from '@angular/core';
import { Order } from './interfaces/order';
import { HttpClient } from '@angular/common/http';
import { firstValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class OrderService {
  orders!: Order[];
  http = inject(HttpClient);

  getAllOrders() {
    return this.http.get<Order[]>('http://localhost:3000/orders');
  }
  async addOrder(order: Order) {
    console.log(order);
    const result = await firstValueFrom(
      this.http.post<Order>('http://localhost:3000/orders', order)
    );
    console.log(result);
  }

  getOrdersById(id: number): any {
    console.log(id);
    return this.http.get<Order>(`http://localhost:3000/orderss/${id}`); // string interpolation  ${ }
  }
  constructor() {}
}
