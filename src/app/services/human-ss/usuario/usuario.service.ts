import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { UsuarioLog } from 'src/app/models/human-ss/usuario-log';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  private usuarios: Array<UsuarioLog> = [
    {
      id_persona: 1,
      id_vendedor: 5,
      id_cliente: 0,
      username: 'cli',
      token: ''
    },
    {
      id_persona: 2,
      id_vendedor: 0,
      id_cliente: 12,
      username: 'ven',
      token: ''
    }
  ]

  constructor(
    private http: HttpClient
  ) { }


  login(username: string, password: string) {
    // Un Login en memoria, solo para que sea rapido ya que no tenemos tiempo
    let existe = false;
    if(password === 'pass'){
      if(username === 'cli'){
        console.log(this.usuarios[0]);
        
        sessionStorage.setItem('userssp', this.usuarios[0].username);
        sessionStorage.setItem('cli', this.usuarios[0].id_cliente.toString());
        existe = true;
      }

      if(username === 'ven'){
        sessionStorage.setItem('userssp', this.usuarios[1].username);
        sessionStorage.setItem('ven', this.usuarios[1].id_vendedor.toString());
        existe = true;
      }
    }

    return existe;

    /*let res = this.http
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
    return res;*/
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

  salir() {
    sessionStorage.removeItem('userssp');
    if(this.esVendedor){
      sessionStorage.removeItem('ven');
    } else {
      sessionStorage.removeItem('cli');
    }
    
  }

}
