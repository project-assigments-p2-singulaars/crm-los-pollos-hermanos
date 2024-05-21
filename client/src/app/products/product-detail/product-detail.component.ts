import { Component, Input, OnInit, inject } from '@angular/core';
import { Product } from '../../shared/interfaces/product';
import { ProductService } from '../../shared/product.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-product-detail',
  standalone: true,
  imports: [],
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.scss'
})
export class ProductDetailComponent implements OnInit{
@Input() id!:string;
productInfo!: Observable<Product>; // convertir el dato en observable 
product!: Product;
private productService = inject(ProductService)
ngOnInit(): void {
  console.log(this.id)
  let id = parseInt(this.id)
  console.log(id)
  this.productInfo = this.productService.getProductById(id);
  this.productInfo.subscribe((response:Product)=> { // subscribe obtenemos los datos del observable
this.product=response
  })
}
}
