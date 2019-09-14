import { Component, OnInit } from '@angular/core';
import { ProductoService } from 'src/app/services/producto-ss/producto/producto.service';
import { Producto } from 'src/app/models/producto-ss/producto';

@Component({
  selector: 'app-producto-list',
  templateUrl: './producto-list.component.html',
  styleUrls: ['./producto-list.component.css']
})
export class ProductoListComponent implements OnInit {

  private listaProductos: Producto[];

  constructor( private productoService: ProductoService ) { 
    this.listaProductos = this.productoService.getProductos();
  }

  ngOnInit() {
  }

  

}
