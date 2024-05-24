import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  getItem(key:string){
    const value = localStorage.getItem(key);
    if(typeof value === 'object'&& value !==null)
    return JSON.parse(value);
    return value;
  }
  setItem(key:string,value:string){
    if(value)
    localStorage.setItem(key,value);
  }
  removeItem(key:string){
    localStorage.removeItem(key);
  }
  clearStorage(){
    localStorage.clear();
  }
}

