import { Component, OnInit, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../../shared/interfaces/product';
import { ProductService } from '../../shared/product.service';
import { AsyncPipe } from '@angular/common';
import { StockDetailsComponent } from '../stock-details/stock-details.component';
import { MatTableModule } from '@angular/material/table';

@Component({
  selector: 'app-stock-list',
  standalone: true,
  imports: [AsyncPipe, StockDetailsComponent, MatTableModule],
  templateUrl: './stock-list.component.html',
  styleUrl: './stock-list.component.scss'
})
export class StockListComponent implements OnInit{

  products!:Observable<Product[]>;

  productService = inject(ProductService);

  ngOnInit(): void {
    this.products = this.productService.getAllProduct();
  }
  calculateStockCapacity(currentStock: number, maxStock: number){
    return this.productService.getStockPercentage(currentStock, maxStock)
  }
}
