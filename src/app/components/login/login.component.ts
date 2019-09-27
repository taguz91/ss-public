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
  esValido = false;

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
    if(this.userService.login(
      this.username, 
      this.password
    )) {
      this.router.navigate(['']);
      this.esValido = true;
    } else {
      this.esValido = false;
    }
  }

}
