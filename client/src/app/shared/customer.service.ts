import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, firstValueFrom, of } from 'rxjs';
import { Customer } from './interfaces/customer';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class CustomerService {
  private url= environment.apiUrl
  products!: Customer[];
  /*   public products = signal<Product[]>([]); */
  http = inject(HttpClient);

  getAllCustomers() {
    return this.http.get<Customer[]>(this.url.concat('/customers'));
  }

  async addCustomer(customer: Customer){
    console.log(customer);
    const result = await firstValueFrom(
      this.http.post<Customer>(this.url.concat('/customers'), customer)
    )
        console.log(result);
  }

// getProductById(id: number):any{
//   console.log(id)
//   return this.http.get<Customer>(`http://localhost:3000/products/${id}`); // string interpolation  ${ }
// }
  constructor() {}
}
