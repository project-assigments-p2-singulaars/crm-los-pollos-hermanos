import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { LocalStorageService } from './shared/local-storage.service';

export const authGuard: CanActivateFn = (route, state) => {
  const localStorageService = inject(LocalStorageService);
  const router = inject(Router);

  const token = localStorageService.getItem('token');

  if(!token){
    router.navigate(['']);
    window.alert("You should be logged in")
    return false;
  }
  return true;
};
