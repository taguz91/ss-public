import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carro-shop',
  templateUrl: './carro-shop.component.html',
  styleUrls: ['./carro-shop.component.css']
})
export class CarroShopComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    const FONDO = document.querySelector('#circulo-carro');
    const CARRO = document.querySelector('#img-carro');
    CARRO.addEventListener('mouseover', function(){
      FONDO.classList.add('bg-sec');
    });
    CARRO.addEventListener('mouseout', function(){
      FONDO.classList.remove('bg-sec');
    });
  }

}
