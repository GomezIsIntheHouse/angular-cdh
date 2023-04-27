import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, BehaviorSubject } from 'rxjs';
import { Usuario } from 'src/app/core/models';
export interface LoginFormValue {
  email: string;
  password: string;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private authUser$ = new BehaviorSubject<Usuario | null>(null);

  constructor(private router: Router) { }

  obtenerUsuarioAutenticado(): Observable<Usuario | null> {
    return this.authUser$.asObservable();
  }

  login(formValue: LoginFormValue): void {
    const usuario: Usuario = {
      id: 1,
      nombre: 'MOCK',
      apellido: 'USER',
      email: formValue.email,
      role: 'user'
    }
    localStorage.setItem('auth-user', JSON.stringify(usuario));
    this.authUser$.next(usuario);
    this.router.navigate(['dashboard']);
  }

  logout(): void {
    localStorage.removeItem('auth-user');
    this.authUser$.next(null);
    this.router.navigate(['auth']);
  }

  verificarStorage(): void {
    const storageValor = localStorage.getItem('auth-user');//toma el valor de la clave auth-user
    if (storageValor) {
      const usuario = JSON.parse(storageValor);
      this.authUser$.next(usuario);
    }
  }
}
