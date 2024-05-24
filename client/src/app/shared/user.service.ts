import { Injectable, inject } from '@angular/core';
import { User } from './interfaces/user';
import { HttpClient } from '@angular/common/http';
import { firstValueFrom } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private url = environment.apiUrl
users!:User[];
http = inject(HttpClient);

async addUser(user: User){
  const result = await firstValueFrom(
    this.http.post<User>(this.url.concat('/products'), user))
}
  constructor() { }
}
