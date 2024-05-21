import { Component, Input, OnInit, inject } from '@angular/core';
import { Product } from '../../shared/interfaces/product';
import { ProductService } from '../../shared/product.service';

@Component({
  selector: 'app-product-detail',
  standalone: true,
  imports: [],
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.scss'
})
export class ProductDetailComponent implements OnInit{
@Input() id!:string;
product!: Product;
private productService = inject(ProductService)
ngOnInit(): void {
  this.product = this.productService.getProductById(+this.id)
}
}
