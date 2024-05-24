import { Injectable, inject } from '@angular/core';
import { Order } from './interfaces/order';
import { HttpClient } from '@angular/common/http';
import { Observable, firstValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class OrderService {
  orders!: Order[];
  http = inject(HttpClient);

  getAllOrders(): Observable<Order[]> {
    return this.http.get<Order[]>('http://localhost:3000/orders');
  }
  async addOrder(order: Order): Promise<Order> {
    const result = await firstValueFrom(
      this.http.post<Order>('http://localhost:3000/orders', order)
    );
    this.orders.unshift(result);
    return result;
  }

  getOrdersById(id: number): Observable<Order> {
    return this.http.get<Order>(`http://localhost:3000/orders/${id}`);
  }
  constructor() {}
}
