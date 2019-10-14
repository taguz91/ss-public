import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UsuarioService } from 'src/app/services/human-ss/usuario/usuario.service';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.css']
})
export class ProductoComponent implements OnInit {

  idProducto: number;

  constructor(
    private activatedRoute: ActivatedRoute,
    private userService: UsuarioService
  ) {
    this.activatedRoute.params.subscribe(params => {
      console.log('Parametros: ');
      
      console.log(params);
      this.idProducto = params.id;
    });
  }

  ngOnInit() {
  }

}
