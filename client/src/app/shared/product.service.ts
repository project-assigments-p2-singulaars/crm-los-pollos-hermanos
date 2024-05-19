import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
products=signal(products)
  constructor() { }
}
