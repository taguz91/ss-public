import { Injectable } from '@angular/core';
import { Producto } from 'src/app/models/producto-ss/producto';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  private listaProductos: Producto[] = [
    {
      vendedor: 'Jhonny García',
      marcas: 'Coco-cola',
      prod_nombre: 'Botella Cola',
      prod_fecha_ingreso: new Date(),
      prod_stock_total: 40,
      prod_precio_venta: 1.00,
      prod_descripcion: 'Esta es una botella de Coca-cola',
      prod_restriccion_edad_max: 5,
      prod_restriccion_edad_min: 1,
      prod_activo: true
    },
    {
      vendedor: 'Andrés Novillo',
      marcas: 'ReyLeche',
      prod_nombre: 'Funda de Leche ReyLeche',
      prod_fecha_ingreso: new Date(),
      prod_stock_total: 50,
      prod_precio_venta: 0.80,
      prod_descripcion: 'Funda de leche semidescremada',
      prod_restriccion_edad_max: 5,
      prod_restriccion_edad_min: 1,
      prod_activo: true
    },
    {
      vendedor: 'Patricio Pacheco',
      marcas: 'Converse',
      prod_nombre: 'Zapatos Converse',
      prod_fecha_ingreso: new Date(),
      prod_stock_total: 100,
      prod_precio_venta: 100.00,
      prod_descripcion: 'Par de zapatos Converse de color negro',
      prod_restriccion_edad_max: 3,
      prod_restriccion_edad_min: 1,
      prod_activo: true
    }
  ];

  public producto: Producto;

  constructor() { }

  public getProductos(){
    return this.listaProductos;
  }

  public getProductoById(idProducto: number){
    return this.listaProductos.filter((item: Producto) => item.id_producto == idProducto)[0];
  }

  public guardarProducto(productoG: Producto){
    this.listaProductos.push(productoG);
  }

  public editarProducto(productoG: Producto,idProducto:number){
    this.producto = this.getProductoById(idProducto);
     this.producto = productoG;
  }

  public eliminarProducto(productoG: Producto){
    this.listaProductos.splice(this.listaProductos.indexOf(productoG), 1);
  }

}





