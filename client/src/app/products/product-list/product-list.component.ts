import { Component, Input, Signal, input } from '@angular/core';
import { Product } from '../../shared/interfaces/product';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.scss'
})
export class ProductListComponent {
@Input() products!:Signal<Product[ ]>
}
