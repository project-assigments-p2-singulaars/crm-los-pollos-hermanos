import { Component, Input, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Order } from '../../shared/interfaces/order';
import { MatTableModule } from '@angular/material/table';
import { OrderService } from '../../shared/order.service';
import { CommonModule } from '@angular/common';
import { OrderFormComponent } from '../order-form/order-form.component';

@Component({
  selector: 'app-order-list',
  standalone: true,
  imports: [RouterLink, MatTableModule, CommonModule, OrderFormComponent],
  templateUrl: './order-list.component.html',
  styleUrl: './order-list.component.scss',
})
export class OrderListComponent implements OnInit {
  @Input() orders!: Order[];
  showForm: boolean = false;

  constructor(private orderService: OrderService) {}

  ngOnInit(): void {
    this.loadOrders();
  }

  loadOrders() {
    this.orderService.getAllOrders().subscribe((data) => {
      this.orders = data;
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
