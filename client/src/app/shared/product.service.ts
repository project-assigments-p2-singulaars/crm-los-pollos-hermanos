import { Injectable, inject, signal } from '@angular/core';
import { Product } from './interfaces/product';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, firstValueFrom, of } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class ProductService {
  products!: Product[];
  /*   public products = signal<Product[]>([]); */
  http = inject(HttpClient);

  getAllProduct() {
    return this.http.get<Product[]>('http://localhost:3000/products');
  }

  async addProduct(product: Product){
    console.log(product);
    const result = await firstValueFrom(
      this.http.post<Product>('http://localhost:3000/products', product)
    )
        console.log(result);
  }

getProductById(id: number):any{
  console.log(id)
  return this.http.get<Product>(`http://localhost:3000/products/${id}`); // string interpolation  ${ } HAY QUE USAR ` `
}
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
