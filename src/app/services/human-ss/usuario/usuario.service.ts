import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor(
    private http: HttpClient
  ) { }

  login(username: string, password: string) {
    let res = this.http
    .post<any>(
      '', {
        username,
        password
      }
    ).pipe(
      map(
        user => {
          sessionStorage.setItem('userssp', username);

          return user;
        }
      )
    ).subscribe();
    return res;
  }

  estaLogueado(): boolean {
    let user = sessionStorage.getItem('userssp');
    return !(user === null);
  }

  esVendedor(): boolean {
    return false;
  }

}
