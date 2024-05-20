import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RouterService {
  headerTitle = signal('Welcome back, Natalia!');

  setHeaderTitle(newTitle: string){
    this.headerTitle.set(newTitle);
  }
}
