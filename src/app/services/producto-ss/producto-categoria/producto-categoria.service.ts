import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ProductoCategoria } from 'src/app/models/producto-ss/productocategoria';

@Injectable({
  providedIn: 'root'
})
export class ProductoCategoriaService {

  url: string = "http://localhost:6060/api/v1/producto/categoria";


  constructor( private _http: HttpClient ) { }

  public guardarProductoCategoria(datos:ProductoCategoria[]){
    return this._http.post<ProductoCategoria>(this.url+"/lista", datos);
  }
}
