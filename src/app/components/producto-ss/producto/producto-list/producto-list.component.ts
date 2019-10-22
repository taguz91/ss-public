import { Component, OnInit } from '@angular/core';
import { ProductoService } from 'src/app/services/producto-ss/producto/producto.service';
import { Producto } from 'src/app/models/producto-ss/producto';
import { Router } from '@angular/router';
import * as jsPdf from 'jspdf';
import * as jQuery from 'jquery';

@Component({
  selector: 'app-producto-list',
  templateUrl: './producto-list.component.html',
  styleUrls: ['./producto-list.component.css']
})
export class ProductoListComponent implements OnInit {

  public listaProductos: Producto[];
 // public producto: Producto;

  constructor( 
    private productoService: ProductoService,
    private router: Router
  ) { }

  ngOnInit() {

    this.productoService.getProductos().subscribe( 
      data => {
        console.log(data);
        this.listaProductos = data;
      }
     );
  }

  editarProducto(producto:Producto) {
    console.log(producto);
    // this.productoService.getProductoById(producto.id_producto).subscribe(
    //   data => {
    //     this.producto = data;
    //   }
    // );
    this.router.navigate([`productos/guardar/:${producto.id_producto}`]);
  }
  verReporte(){
    var doc=new jsPdf({
      orientation: 'landscape'
     });
    doc.text('Reporte de Productos',125,30);
    doc.fromHTML($('#body').get(0),40,30);
    doc.save('Reporte-de-productos.pdf');
    
  }

}
