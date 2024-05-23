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
import { MatInputModule } from '@angular/material/input';
import { Order } from '../../shared/interfaces/order';
import { OrderService } from '../../shared/order.service';
import { AsyncPipe, DatePipe } from '@angular/common';
import { ProductService } from '../../shared/product.service';
import { Observable, firstValueFrom, map } from 'rxjs';
import { Product } from '../../shared/interfaces/product';
import { Customer } from '../../shared/interfaces/customer';
import { CustomerService } from '../../shared/customer.service';

@Component({
  selector: 'app-order-form',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    MatFormFieldModule,
    MatSelectModule,
    MatButtonModule,
    MatInputModule,
    AsyncPipe,
  ],
  templateUrl: './order-form.component.html',
  styleUrl: './order-form.component.scss',
})
export class OrderFormComponent implements OnInit {
  // @Input() orderForm!: FormGroup;
  @Output() sentForm = new EventEmitter<Order>();
  @Output() formClosed = new EventEmitter<void>();
  orderForm!: FormGroup;
  products!: Observable<Product[]>;
  customers!: Observable<Customer[]>;

  constructor(
    private fb: FormBuilder,
    private orderService: OrderService,
    private productService: ProductService,
    private customerService: CustomerService
  ) {}

  ngOnInit() {
    this.orderForm = this.fb.group({
      productId: ['', Validators.required],
      customerId: ['', Validators.required],
      quantity: ['', Validators.required],
    });

    this.products = this.productService.getAllProduct();
    this.customers = this.customerService.getAllCustomer();
  }

  async submit() {
    if (this.orderForm.valid) {
      const productId = parseInt(this.orderForm.controls['productId'].value);
      const quantity = this.orderForm.controls['quantity'].value;
      const product = await this.productService
        .getProductById(productId)
        .toPromise();
      const totalPrice = product.price * quantity;

      const orders = await firstValueFrom(this.orderService.getAllOrders());
      const newId = orders.length + 1;

      let productPrice = 0;
      await this.productService
        .getProductById(productId)
        .subscribe((result: any) => {
          productPrice = result.price;
        });

      const order: Order = {
        id: newId,
        productId: parseInt(this.orderForm.controls['productId'].value),
        customerId: parseInt(this.orderForm.controls['customerId'].value),
        calendarDate: new Date().toISOString(),
        quantity,
        totalPrice,
        orderStatus: 'pending',
      };
      console.log(order);
      this.orderService.addOrder(order);
      this.sentForm.emit(order);
      this.orderForm.reset();
      this.formClosed.emit();
    }
  }
  closeForm() {
    this.formClosed.emit();
  }
}
