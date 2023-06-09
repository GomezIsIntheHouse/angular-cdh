import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable, map } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private router: Router, private authService: AuthService) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.authService.obtenerUsuarioAutenticado()
      .pipe(
        map((usuarioAutenticado) => {
          if (!usuarioAutenticado) {
            //si el usuario no esta logueado, el sistema dirigirá hacia auth/login
            return this.router.createUrlTree(['auth', 'login'])
          } else {
            return true;
          }
        })
      )
  }
}
