import { Component, OnInit } from '@angular/core';
import { UsuarioService } from 'src/app/services/human-ss/usuario/usuario.service';

@Component({
  selector: 'app-categorias-shop',
  templateUrl: './categorias-shop.component.html',
  styleUrls: ['./categorias-shop.component.css']
})
export class CategoriasShopComponent implements OnInit {

  constructor(
    private userService: UsuarioService
  ) { }

  ngOnInit() {
  }

}
