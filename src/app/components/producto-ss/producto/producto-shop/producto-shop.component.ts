import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-producto-shop',
  templateUrl: './producto-shop.component.html',
  styleUrls: [
    './producto-shop.component.css',
    '../producto/producto.component.css'
  ]
})
export class ProductoShopComponent implements OnInit {

  productos: Array<any> = [
    {
      nombre: 'PC 2019',
      precio: '1232'
    },
    {
      nombre: 'MOUSE 2019',
      precio: '24'
    },
    {
      nombre: 'JOYSTICK 2019',
      precio: '54'
    },
    {
      nombre: 'TV 2019',
      precio: '2000'
    }
  ];

  // Para saber si solo estamos agregando 
  agregando = false;

  constructor(private ruter: Router) { }

  verProducto(id: number): void {
    if(!this.agregando){
      this.ruter.navigate(['producto', id]);
    }
    this.agregando = false;
  }

  agregarMiLista(){
    this.agregando = true;
  }

  ngOnInit() {
  }

}
