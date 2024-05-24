import { Injectable, inject } from '@angular/core';
import { Order } from './interfaces/order';
import { HttpClient } from '@angular/common/http';
import { Observable, firstValueFrom } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class OrderService {
  private url = environment.apiUrl;
  orders!: Order[];
  http = inject(HttpClient);

  getAllOrders(): Observable<Order[]> {
    return this.http.get<Order[]>(this.url.concat('/orders'));
  }
  async addOrder(order: Order): Promise<Order> {
    const result = await firstValueFrom(
      this.http.post<Order>(this.url.concat('/orders'), order)
    );
    this.orders.unshift(result);
    return result;
  }

  getOrdersById(id: number): Observable<Order> {
    return this.http.get<Order>(this.url.concat(`/orders/${id}`));
  }
  constructor() {}
}
