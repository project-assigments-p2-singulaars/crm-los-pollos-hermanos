import { Component, Input, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Order } from '../../shared/interfaces/order';
import { MatTableModule } from '@angular/material/table';
import { OrderService } from '../../shared/order.service';
import { CommonModule } from '@angular/common';
import { OrderFormComponent } from '../order-form/order-form.component';
import { Product } from '../../shared/interfaces/product';
import { ProductService } from '../../shared/product.service';

@Component({
  selector: 'app-order-list',
  standalone: true,
  imports: [RouterLink, MatTableModule, CommonModule, OrderFormComponent],
  templateUrl: './order-list.component.html',
  styleUrl: './order-list.component.scss',
})
export class OrderListComponent implements OnInit {
  @Input() orders!: Order[];
  products: Product[] = [];
  showForm: boolean = false;

  constructor(
    private orderService: OrderService,
    private productService: ProductService
  ) {}

  ngOnInit(): void {
    this.loadProductsAndOrders();
  }

  loadProductsAndOrders() {
    this.productService.getAllProduct().subscribe((products) => {
      this.products = products;
      this.loadOrders();
    });
  }

  getProductName(productId: number): string {
    const product = this.products.find((p) => p.id === productId);
    return product ? product.name : 'Unknown Product';
  }

  loadOrders() {
    this.orderService.getAllOrders().subscribe((orders) => {
      this.orders = orders;
    });
  }

  addNewOrder(order: Order) {
    this.orders.unshift(order); // Agrega la nueva orden a la lista local inmediatamente
    this.showForm = false;
  }
  closeForm() {
    this.showForm = false;
  }
}
