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

  // Informacion de todo  
  private total = 0;
  private subTotalSI = 0;
  private subTotalI = 0;
  private iva = 0;

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

  actualizarPrecio(p: ProductoCarro) {
    if(p.tiene_iva) {
      this.subTotalI += p.total;
    } else {
      this.subTotalSI += p.total;
    }
    this.iva = this.subTotalI * 0.12;
    this.total = this.subTotalSI + this.subTotalI + this.iva; 
  }

  actualizarCarro() {
    this.productos = this.CS.getProductos();

    this.productos.forEach(p => {
      this.actualizarPrecio(p);
    });
  }


}
