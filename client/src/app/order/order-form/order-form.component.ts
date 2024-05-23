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
        nameId: this.orderForm.controls['nameId'].value,
        categories: this.orderForm.controls['categories'].value,
        price: this.orderForm.controls['price'].value,
        stock: this.orderForm.controls['stock'].value,
        description: this.orderForm.controls['description'].value,
        imageUrl: this.orderForm.controls['imageUrl'].value,
      };
      console.log(order);
      this.orderService.addOrder(order); //michely te falta el servicio
    }
  }
}
