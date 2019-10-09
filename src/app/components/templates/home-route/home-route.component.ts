import { Component, OnInit } from '@angular/core';
import { UsuarioService } from 'src/app/services/human-ss/usuario/usuario.service';

@Component({
  selector: 'app-home-route',
  templateUrl: './home-route.component.html',
  styleUrls: ['./home-route.component.css']
})
export class HomeRouteComponent implements OnInit {

  constructor(
    private userService: UsuarioService
  ) { }

  ngOnInit() {
  }

}
