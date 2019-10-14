import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-categorias',
  templateUrl: './categorias.component.html',
  styleUrls: ['./categorias.component.css']
})
export class CategoriasComponent implements OnInit {

  @Input('tipo') public tipo: string = 'h';
  private maximo: number = 1;
  categorias = Array;

  constructor() { 
  }

  ngOnInit() {
    switch(this.tipo){
      case('home'):
        this.maximo = 4;
      break;
      case('usuario'):
        this.maximo = 3;
      break;
      case('todas'):
        this.maximo = 10;
      break;
    }
  }

}
