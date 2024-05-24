import { Injectable, inject, signal } from '@angular/core';
import { Product } from './interfaces/product';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { firstValueFrom } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private url = environment.apiUrl;
products!:Product[];
  /*   public products = signal<Product[]>([]); */
  http = inject(HttpClient);

  getAllProduct(){
    return this.http.get<Product[]>(this.url.concat("/products"));
  }

  async addProduct(product: Product){
    console.log(product);
    const result = await firstValueFrom(
      this.http.post<Product>(this.url.concat("/products"), product)
    )
        console.log(result);
  }

getProductById(id: number):any{
  console.log(id)
  return this.http.get<Product>(this.url.concat(`/products/${id}`)); // string interpolation  ${ }
}
deleteProd(id: number){
  return this.http.delete<Product>(this.url.concat(`/products/${id}`));

}

getStockPercentage(currentStock: number, maxStock:number){
  return ((currentStock * 100) / maxStock).toFixed(2);
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
