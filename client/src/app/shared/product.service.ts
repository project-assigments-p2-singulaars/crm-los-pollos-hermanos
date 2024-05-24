import { Injectable, inject, signal } from '@angular/core';
import { Product } from './interfaces/product';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private url = environment.apiUrl;
products!:Product[];
  /*   public products = signal<Product[]>([]); */
  http=inject(HttpClient);

  getAllProduct(){
    return this.http.get<Product[]>(this.url.concat("/products"));
  }
getProductById(id: number):any{
  const result = this.products.find((product:Product)=> 
  product.id === id)
  if (result !== undefined) return result;
}

getStockPercentage(currentStock: number, maxStock:number){
  return ((currentStock * 100) / maxStock).toFixed(2);
}
  constructor() {}
}
