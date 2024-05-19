import { Injectable, signal } from '@angular/core';
import { Product } from './interfaces/product';
@Injectable({
  providedIn: 'root'
})
export class ProductService {
  public products = signal<Product[]>([])
  constructor() { this.products.set([
    {
      id: 1,
      name: 'gato triste',
      price: 12.5,
      imageUrl: 'https://static.abc.es/media/sociedad/2017/09/28/gatos-tristes-kQMI--1240x698@abc.jpg',
      description: 'un gato triste',
      stock: 17,},

])}}
