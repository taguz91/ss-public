import { Component } from '@angular/core';
import { UsuarioService } from './services/human-ss/usuario/usuario.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'SSI';

  constructor(
    private userService: UsuarioService,
    private router: Router
  ) { }

  esPaginaCompleta(): boolean {

    if(this.userService.estaLogueado()){
      let user = sessionStorage.getItem('userssp');
      console.log('Usuario');
      console.log(user);
      
    }
    
    if(this.router.url === '/login') {
      return true;
    } else {
      return false;
    }
  }

}
