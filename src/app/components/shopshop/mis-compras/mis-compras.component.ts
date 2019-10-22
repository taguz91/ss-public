import { Component, OnInit } from '@angular/core';
import { CarritoService } from 'src/app/services/carrito-ss/carrito/carrito.service';
import { MiVenta } from 'src/app/models/shopshop/mi-venta';

@Component({
  selector: 'app-mis-compras',
  templateUrl: './mis-compras.component.html',
  styleUrls: ['./mis-compras.component.css']
})
export class MisComprasComponent implements OnInit {

  private ventas: MiVenta[];

  constructor(private CS: CarritoService) {
    this.CS.getVentasForCliente().subscribe(
      data => {
        this.ventas = data;
      }
    );
  }

  ngOnInit() {
  }

}
