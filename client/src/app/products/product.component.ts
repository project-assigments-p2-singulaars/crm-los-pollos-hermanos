import { Component, OnInit, inject } from '@angular/core';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductService } from '../shared/product.service';
import { Observable } from 'rxjs';
import { Product } from '../shared/interfaces/product';
import { AsyncPipe } from '@angular/common';
import { ProductFormComponent } from './product-form/product-form.component';
import { SearchComponent } from '../shared/components/search/search.component';
import { SearchService } from '../shared/search.service';
import { MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatButtonModule } from '@angular/material/button';
 
@Component({
  selector: 'app-product',
  standalone: true,
  templateUrl: './product.component.html',
  styleUrl: './product.component.scss',
  imports: [
    ProductListComponent,
    AsyncPipe,
    ProductFormComponent,
    SearchComponent,
    MatButtonToggleModule,
    MatButtonModule
  ],
})
export class ProductComponent implements OnInit {
submit() {
throw new Error('Method not implemented.');
}
  // private productService = inject(ProductService);
  private searchService = inject(SearchService);
  products = this.searchService.filterArray;

  ngOnInit(): void {
    // this.products=this.productService.getAllProduct();
    // this.products=this.searchService.filterArray();

    console.log(this.searchService.products());
  }
}
