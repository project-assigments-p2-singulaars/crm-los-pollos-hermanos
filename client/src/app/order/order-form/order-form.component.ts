import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { Order } from '../../shared/interfaces/order';
import { OrderService } from '../../shared/order.service';

@Component({
  selector: 'app-order-form',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    MatFormFieldModule,
    MatSelectModule,
    MatButtonModule,
  ],
  templateUrl: './order-form.component.html',
  styleUrl: './order-form.component.scss',
})
export class OrderFormComponent implements OnInit {
  @Input() orderForm!: FormGroup;
  @Output() sentForm = new EventEmitter<Order>();

  constructor(private fb: FormBuilder, private orderService: OrderService) {}

  ngOnInit() {
    this.orderForm = this.fb.group({
      name: ['', Validators.required],
      categories: ['', Validators.required],
      price: ['', Validators.required],
      stock: ['', Validators.required],
      description: ['', Validators.required],
      imageUrl: ['', Validators.required],
    });
  }

  submit() {
    if (this.orderForm.valid) {
      const order: Order = {
        id: this.orderForm.controls['id'].value,
        productId: this.orderForm.controls['productId'].value,
        costumerId: this.orderForm.controls['customerId'].value,
        calendarDate: this.orderForm.controls['calendarDate'].value,
        quantity: this.orderForm.controls['quantity'].value,
        totalPrice: this.orderForm.controls['totalPrice'].value,
        orderStatus: this.orderForm.controls['orderStatus'].value,
      };
      console.log(order);
      this.orderService.addOrder(order);
    }
  }
}
