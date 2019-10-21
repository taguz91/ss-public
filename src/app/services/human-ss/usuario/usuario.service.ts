import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LoginRP } from 'src/app/models/shopshop/login-rp';
import { Usuario } from 'src/app/models/human-ss/usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor(
    private http: HttpClient
  ) { }

  Url="http://localhost:2020/api/v1/usuario/";


  login(username: string, password: string) {
    return this.http
    .post<LoginRP>(
      'http://localhost:1313/login', {
        username,
        password
      }
    );
  }

  estaLogueado(): boolean {
    let user = sessionStorage.getItem('userssp');
    return !(user === null);
  }

  esVendedor(): boolean {
    let vendedor = sessionStorage.getItem('ven');
      return !(vendedor === null);
  }

  esCliente(): boolean {
    return !(sessionStorage.getItem('cli') === null);
  }

  getToken(): string {
    if (this.estaLogueado()) {
      return sessionStorage.getItem('usertokenss');
    } else {
      return '';
    }
  }

  salir() {
    sessionStorage.removeItem('userssp');
    sessionStorage.removeItem('usertokenss');
    if(this.esVendedor){
      sessionStorage.removeItem('ven');
    } else {
      sessionStorage.removeItem('cli');
    }
    
  }


  getIdCliente () {
    if (this.estaLogueado()) {
      return sessionStorage.getItem('cli');
    }
  }

  getUserXnick(nick:string){
    return this.http.get<Usuario[]>(this.Url+"buscar/"+nick);
    
  }

}
