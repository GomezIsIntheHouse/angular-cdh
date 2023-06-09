import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, BehaviorSubject, map } from 'rxjs';
import { Usuario } from 'src/app/core/models';
import { enviroment } from 'src/environments/environments';
import { AppState } from '../store';
import { Store } from '@ngrx/store';
import { EstablecerUsuarioAutenticado, QuitarUsuarioAutenticado } from '../store/auth/auth.action';
import { selectAuthUser } from '../store/auth/auth.selectors';

export interface LoginFormValue {
  email: string;
  password: string;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  // private authUser$ = new BehaviorSubject<Usuario | null>(null);

  constructor(
    private router: Router, 
    private httpClient: HttpClient,
    private store:Store<AppState>
    ) { }

  obtenerUsuarioAutenticado(): Observable<Usuario | null> {
    // return this.authUser$.asObservable();
    return this.store.select(selectAuthUser);
  }

  establecerUsuarioAutenticado(usuario: Usuario){
    // this.authUser$.next(usuario);
    this.store.dispatch(EstablecerUsuarioAutenticado({payload: usuario}))
  }

  login(formValue: LoginFormValue): void {
    
    this.httpClient.get<Usuario[]>(`${enviroment.baseApiUrl}/users`,{
      params:{
        ...formValue
      }
      //declaramos el observable con el subscribe, lo que nos abre la posibilidad de utulizar el next (similar al then )
    }).subscribe({
      next:(usuarios) => {
        const usuarioAutenticado = usuarios[0];
        if(usuarioAutenticado){
          localStorage.setItem('token', usuarioAutenticado.token)
          
          this.establecerUsuarioAutenticado(usuarioAutenticado)
          
          this.router.navigate(['dashboard'])
        }else{
          alert('Usuario y contraseña incorrectos')
        }
      }
    })
  }

  logout(): void {
    localStorage.removeItem('auth-user');
    //vuelve a null el estado del usuario autenticado
    this.store.dispatch(QuitarUsuarioAutenticado())
    this.router.navigate(['auth']);
  }

  verificarToken(): Observable<boolean> {
    const token = localStorage.getItem('token')
    return this.httpClient.get<Usuario[]>(`${enviroment.baseApiUrl}/users?token=${token}`)
    .pipe(
      map((usuarios)=>{
        const usuarioAutenticado = usuarios[0];
      if(usuarioAutenticado){
        localStorage.setItem('token', usuarioAutenticado.token)
        this.establecerUsuarioAutenticado(usuarioAutenticado)
        
      }
        return !!usuarioAutenticado //transforma la info de tipo undefined o usuario a booleano
      })
    )
      

  }
}
