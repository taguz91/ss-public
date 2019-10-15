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

  private productos: ProductoCarro[] = [
    {
      cantidad: 2,
      total: 30,
      ima_url: 'https://images.goodsmile.info/cgm/images/product/20120611/3575/18809/large/f2b278e93c215d999e5a694bae6cea2f.jpg', 
      prod_nombre: 'Link',
      prod_precio: 15,
      tiene_iva: false
    },
    {
      cantidad: 15,
      total: 300,
      ima_url: 'https://images.goodsmile.info/cgm/images/product/20180410/7197/51359/large/0392e410e9b5d0b0fd2f834a835ed629.jpg', 
      prod_nombre: 'Geralt de Rivia',
      prod_precio: 20,
      tiene_iva: true
    }
  ];

  constructor(
    private CS: CarritoService,
    private PS: ProductoService
  ) {
    this.productos.forEach(p => {
      this.actualizarPrecio(p);
    });
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


}
