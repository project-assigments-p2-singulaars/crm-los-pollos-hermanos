import { Injectable, inject, signal } from '@angular/core';
import { Product } from './interfaces/product';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root',
})
export class ProductService {
  products!: Product[];
  /*   public products = signal<Product[]>([]); */
  http = inject(HttpClient);

  getAllProduct() {
    return this.http.get<Product[]>('http://localhost:3000/products');
  }
  getProductById(id: number): any {
    return this.http.get<Product[]>(`http://localhost:3000/products/${id}`);
  }
  constructor() {}
}
