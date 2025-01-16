import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private router: Router) {}

  canActivate(): boolean {
    const isAuthenticated = !!sessionStorage.getItem("STORAGE_TOKEN"); // Verifica si hay un token
    console.log("isAuthenticated",isAuthenticated);
    /*if (!isAuthenticated) {
      this.router.navigate(['/login']); // Redirige al login si no está autenticado
      return false;
    }*/
    return true;
  }
}
