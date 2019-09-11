import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-producto-shop',
  templateUrl: './producto-shop.component.html',
  styleUrls: ['./producto-shop.component.css']
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

  constructor() { }

  ngOnInit() {
  }

}
