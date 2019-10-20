import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsuarioService } from 'src/app/services/human-ss/usuario/usuario.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username: string = '';
  password = '';
  esValido = true;

  constructor(
    private router: Router,
    private userService: UsuarioService
  ) { }

  ngOnInit() {
    const HTML = document.querySelector('#all');
    const BODY = document.querySelector('#main');
    const CTNLOGIN = document.querySelector('#ctn-login');
    HTML.setAttribute('style', 'height: 100%;');
    BODY.setAttribute('style', 'height: 100%;');

    CTNLOGIN.parentElement.parentElement.setAttribute('style', 'height: 100%;');
  }

  checkLogin() {
    let res = this.userService.login(
      this.username, 
      this.password
    );

    res.subscribe(
      user => {
        sessionStorage.setItem('userssp', user.user_nick);
        sessionStorage.setItem('usertokenss', user.jwttoken);

        if (user.user_tipo == 'C') {
          sessionStorage.setItem('cli', user.id_persona.toString());
        } else {
          sessionStorage.setItem('ven', user.id_persona.toString());
        }
        this.router.navigate(['']);
      },
      err => {
        console.log('No nos logueamos');
        console.log(err);
        this.esValido = false;
      }
    );
  }

  clickRegistrarse() {
    this.router.navigate(['registrarse']);
  }

  cerrarError() {
    this.esValido = true;
  }

}
