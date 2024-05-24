import { Component, Input, inject } from '@angular/core';
import { Product } from '../../shared/interfaces/product';
import { ProductService } from '../../shared/product.service';
import { MatTableModule } from '@angular/material/table';

@Component({
  selector: 'app-stock-details',
  standalone: true,
  imports: [MatTableModule],
  templateUrl: './stock-details.component.html',
  styleUrl: './stock-details.component.scss'
})
export class StockDetailsComponent {
  @Input() product!:Product;
  productService = inject(ProductService);

  calculateStockCapacity(currentStock: number, maxStock: number){
    return this.productService.getStockPercentage(currentStock, maxStock)
  }
}
