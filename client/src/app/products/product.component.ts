import { Component, OnInit, inject } from '@angular/core';
import { ProductListComponent } from "./product-list/product-list.component";
import { ProductService } from '../shared/product.service';
import { Observable } from "rxjs";
import { Product } from '../shared/interfaces/product';
import { AsyncPipe } from '@angular/common';
import { ProductFormComponent } from './product-form/product-form.component';

@Component({
    selector: 'app-product',
    standalone: true,
    templateUrl: './product.component.html',
    styleUrl: './product.component.scss',
    imports: [ProductListComponent, AsyncPipe, ProductFormComponent]
})
export class ProductComponent implements OnInit{

    products!:Observable<Product[]>;
    private productService = inject(ProductService)
   

    ngOnInit(): void {
        this.products=this.productService.getAllProduct();
    }
}
