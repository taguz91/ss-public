import { Component, OnInit } from '@angular/core';
import { UsuarioService } from 'src/app/services/human-ss/usuario/usuario.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  constructor(
    private userService: UsuarioService,
    private router: Router
  ) { }

  ngOnInit() {
    console.log('SALIMOSSS');
    this.userService.salir();
    this.router.navigate([{
      outlets: {
        primary: '',
        cli: '',
        ven: ''
      },
    }]);
  }

}
