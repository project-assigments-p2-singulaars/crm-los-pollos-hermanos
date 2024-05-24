import { Component, OnInit, inject } from '@angular/core';
import { Observable } from "rxjs";
import { Customer } from '../shared/interfaces/customer';
import { CustomerService } from '../shared/customer.service';
import { CustomerListComponent } from './customer-list/customer-list.component';
import { AsyncPipe } from '@angular/common';
import { CustomerFormComponent } from "./customer-form/customer-form.component";

@Component({
    selector: 'app-customer',
    standalone: true,
    templateUrl: './customer.component.html',
    styleUrl: './customer.component.scss',
    imports: [CustomerListComponent, AsyncPipe, CustomerFormComponent]
})
export class CustomerComponent implements OnInit{

  customers!:Observable<Customer[]>;
  private customerService = inject(CustomerService)
 

  ngOnInit(): void {
      this.customers=this.customerService.getAllCustomers();
  }
}
