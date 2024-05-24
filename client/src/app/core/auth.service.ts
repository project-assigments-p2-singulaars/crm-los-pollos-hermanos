import { Injectable, inject } from '@angular/core';
import { User } from '../shared/interfaces/user';
import { HttpClient } from '@angular/common/http';
import { catchError, firstValueFrom, of } from 'rxjs';
import { LocalStorageService } from '../shared/local-storage.service';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private http = inject(HttpClient); // manejar las peticiones de la API (con el get())
  private url = environment.apiUrl;

  async login(user: User) { // el async require del await posteriormente
    try {
      const result = await firstValueFrom(this.http.post<User>(this.url.concat("/login"), user).pipe(catchError // FirstValueFrom(rxjs) convierte el observable en promesa al suscribirse en el observable - hay una promesa con el asyinc/await
        (e => of(e))))
      console.log(result)
      return result;
    } catch (e) {
      throw e
    }
  }

  async register(userData: User){
    try {
      const result = await firstValueFrom(this.http.post<User>(this.url.concat("/register"), userData).pipe(catchError // FirstValueFrom(rxjs) convierte el observable en promesa al suscribirse en el observable - hay una promesa con el asyinc/await
        (e => of(e))))
      console.log(result)
      return result;
    } catch (e) {
      throw e
    }
  }
}
