import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, firstValueFrom, of } from 'rxjs';
import { Customer } from './interfaces/customer';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  products!: Customer[];
  /*   public products = signal<Product[]>([]); */
  http = inject(HttpClient);

  getAllCustomers() {
    return this.http.get<Customer[]>('http://localhost:3000/customers');
  }

  async addCustomer(customer: Customer){
    console.log(customer);
    const result = await firstValueFrom(
      this.http.post<Customer>('http://localhost:3000/customers', customer)
    )
        console.log(result);
  }

// getProductById(id: number):any{
//   console.log(id)
//   return this.http.get<Customer>(`http://localhost:3000/products/${id}`); // string interpolation  ${ }
// }
  constructor() {}
}

// async login(credentials:User){
//     try{
//       const result = await firstValueFrom(this.http.post<LoginResponseType>(this.url.concat('/login'), credentials))

//       const {user} = result;
//       this.localStorageService.setItem('user',JSON.stringify(user))

//     }catch(e){
//       throw e;
//     }
//   }
// }

// addHero(hero: Hero): Observable<Hero> {
//   return this.http.post<Hero>(this.heroesUrl, hero, httpOptions)
//     .pipe(
//       catchError(this.handleError('addHero', hero))
//     );
// }
