import { Injectable } from '@angular/core';
import { Producto } from 'src/app/models/producto-ss/producto';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  url: string = "http://localhost:6060/api/v1/producto";

  // private listaProductos: Producto[] = [
  //   {
  //     vendedor: 'Jhonny García',
  //     marcas: 'Coco-cola',
  //     prod_nombre: 'Botella Cola',
  //     prod_fecha_ingreso: new Date(),
  //     prod_stock_total: 40,
  //     prod_precio_venta: 1.00,
  //     prod_descripcion: 'Esta es una botella de Coca-cola',
  //     prod_restriccion_edad_max: 5,
  //     prod_restriccion_edad_min: 1,
  //     prod_activo: true
  //   },
  //   {
  //     vendedor: 'Andrés Novillo',
  //     marcas: 'ReyLeche',
  //     prod_nombre: 'Funda de Leche ReyLeche',
  //     prod_fecha_ingreso: new Date(),
  //     prod_stock_total: 50,
  //     prod_precio_venta: 0.80,
  //     prod_descripcion: 'Funda de leche semidescremada',
  //     prod_restriccion_edad_max: 5,
  //     prod_restriccion_edad_min: 1,
  //     prod_activo: true
  //   },
  //   {
  //     vendedor: 'Patricio Pacheco',
  //     marcas: 'Converse',
  //     prod_nombre: 'Zapatos Converse',
  //     prod_fecha_ingreso: new Date(),
  //     prod_stock_total: 100,
  //     prod_precio_venta: 100.00,
  //     prod_descripcion: 'Par de zapatos Converse de color negro',
  //     prod_restriccion_edad_max: 3,
  //     prod_restriccion_edad_min: 1,
  //     prod_activo: true
  //   }
  // ];

  public producto: Producto;

  constructor( private http:HttpClient ) { }

  public getProductos(){
    return this.http.get<Producto[]>(this.url+"/");
  }

  // public getProductoById(idProducto: number): Observable<Producto>{
  //   return this.http.get<Producto>(this.url+`/${idProducto}`)
  // }

  public guardarProducto(productoG: Producto){
    return this.http.post(this.url+"/guardar", productoG).toPromise().then(
      data => {
        console.log(data);
      }
    );
  }

  public editarProducto(productoG: Producto){
    return this.http.post<Producto>(this.url+"/guardar", productoG);
  }

  public eliminarProducto(id: number){
    this.http.delete(this.url+`/${id}`);
  }

}





