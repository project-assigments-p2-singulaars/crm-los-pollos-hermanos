import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import { Customer } from '../../shared/interfaces/customer';
import { CustomerService } from '../../shared/customer.service';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-customer-form',
  standalone: true,
  imports: [ReactiveFormsModule, MatFormFieldModule, MatInputModule, MatSelectModule, MatButtonModule],
  templateUrl: './customer-form.component.html',
  styleUrl: './customer-form.component.scss'
})
export class CustomerFormComponent implements OnInit{
  @Input() customerForm!: FormGroup;
  @Output() sentForm = new EventEmitter<Customer>();

  constructor(private fb: FormBuilder, private customerService:CustomerService) {}

  ngOnInit() {
    this.customerForm = this.fb.group({
      id: ['', Validators.required],
      customerName: ['', Validators.required],
      customerSurname: ['', Validators.required],
      age: ['', Validators.required],
      gender: ['', Validators.required],
      email: ['', Validators.required],
      joinDate: ['', Validators.required],
      profilePhoto: ['', Validators.required]
    });
  }

  submit() {
    if (this.customerForm.valid) {
      const customer: Customer = {
        // id: this.productForm.controls["id"].value,
        id: 98,
        customerName: this.customerForm.controls["customerName"].value,
        customerSurname: this.customerForm.controls["customerSurname"].value,
        age: this.customerForm.controls["age"].value,
        gender: this.customerForm.controls["gender"].value,
        email: this.customerForm.controls["email"].value,
        joinDate: this.customerForm.controls["joinDate"].value,
        profilePhoto: this.customerForm.controls["profilePhoto"].value,
      };console.log(customer)
      this.customerService.addCustomer(customer)
      // this.sentForm.emit(product);
    }
  }
}
