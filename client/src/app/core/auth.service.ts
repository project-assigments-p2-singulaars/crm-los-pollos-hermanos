import { Injectable, inject } from '@angular/core';
import { User } from '../shared/interfaces/user';
import { HttpClient } from '@angular/common/http';
import { catchError, firstValueFrom, of } from 'rxjs';
import { LocalStorageService } from '../shared/local-storage.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private http = inject(HttpClient); // manejar las peticiones de la API (con el get())
  private localStorageService = inject(LocalStorageService);



  
 async login(user: User){ // el async require del await posteriormente
  try{
    const result = await firstValueFrom (this.http.post<User>("http://localhost:3000/login", user).pipe(catchError // FirstValueFrom(rxjs) convierte el observable en promesa al suscribirse en el observable - hay una promesa con el asyinc/await
      (e=>of(e))))
      console.log(result)
      return result;
  } catch(e){
    throw e
  }
}

}
