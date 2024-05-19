import { Component, inject } from '@angular/core';
import { ProductListComponent } from "./product-list/product-list.component";
import { ProductService } from '../shared/product.service';

@Component({
    selector: 'app-product',
    standalone: true,
    templateUrl: './product.component.html',
    styleUrl: './product.component.scss',
    imports: [ProductListComponent]
})
export class ProductComponent {

    private productService = inject(ProductService)
    products=this.productService.products
}
