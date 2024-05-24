import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Customer } from './interfaces/customer';

@Injectable({
  providedIn: 'root',
})
export class CustomerService {
  http = inject(HttpClient);

  getAllCustomer() {
    return this.http.get<Customer[]>('http://localhost:3000/customers');
  }

  constructor() {}
}
