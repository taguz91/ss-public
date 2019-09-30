import { Injectable } from '@angular/core';
import { Producto } from 'src/app/models/producto-ss/producto';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  url: string = "http://localhost:6060/api/v1/producto";

  public producto: Producto;

  constructor( private http:HttpClient) { }

  public getProductos(){
    return this.http.get<Producto[]>(this.url+"/");
  }

  public getProductoById(id_Producto: number){
    return this.http.get<Producto>(this.url+`/productobyid/${id_Producto}`);
  }

  public saveProducto(productoG: Producto){
    return this.http.post<Producto>(this.url+"/guardar", productoG);
  }

  public editarProducto(productoG: Producto){
    return this.http.post<Producto>(this.url+"/guardar", productoG);
  }

  public eliminarProducto(id: number){
    this.http.delete(this.url+`/${id}`);
  }

}





