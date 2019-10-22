import { Component, OnInit } from '@angular/core';
import { CarritoService } from 'src/app/services/carrito-ss/carrito/carrito.service';
import { ProductoCarro } from 'src/app/models/shopshop/producto-carro';
import { ProductoService } from 'src/app/services/producto-ss/producto/producto.service';

@Component({
  selector: 'app-carro-shop',
  templateUrl: './carro-shop.component.html',
  styleUrls: ['./carro-shop.component.css']
})
export class CarroShopComponent implements OnInit {

  private productos: ProductoCarro[];

  constructor(
    private CS: CarritoService,
    private PS: ProductoService
  ) {
    
    this.productos = CS.getProductos();
  }

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

  actualizarCarro() {
    console.log(this.CS.total);
  }

}
