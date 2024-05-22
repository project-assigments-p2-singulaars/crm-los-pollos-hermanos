import { Injectable, inject } from '@angular/core';
import { User } from './interfaces/user';
import { HttpClient } from '@angular/common/http';
import { firstValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
users!:User[];
http = inject(HttpClient);

async addUser(user: User){
  const result = await firstValueFrom(
    this.http.post<User>('http://localhost:3000/users', user))
}
}
