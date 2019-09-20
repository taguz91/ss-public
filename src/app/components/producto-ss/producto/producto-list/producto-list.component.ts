import { Component, OnInit } from '@angular/core';
import { ProductoService } from 'src/app/services/producto-ss/producto/producto.service';
import { Producto } from 'src/app/models/producto-ss/producto';

@Component({
  selector: 'app-producto-list',
  templateUrl: './producto-list.component.html',
  styleUrls: ['./producto-list.component.css']
})
export class ProductoListComponent implements OnInit {

  public listaProductos: Producto[];
  public producto: Producto;

  constructor( private productoService: ProductoService ) {
   
  }

  ngOnInit() {

    this.productoService.getProductos().subscribe( 
      data => {
        this.listaProductos = data;
      }
     );
  }

  // editarProducto(idProducto:number) {
  //   this.productoService.getProductoById(idProducto).subscribe(
  //     data => {
  //       this.producto = data;
  //     }
  //   );
    
  // }

}
