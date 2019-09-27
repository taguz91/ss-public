import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Categoria } from 'src/app/models/producto-ss/categoria';

@Injectable({
  providedIn: 'root'
})
export class CategoriaService {

  url:string = "http://localhost:6060/api/v1/categoria";

  constructor( private http: HttpClient ) { }

  public getCategorias(){
    return this.http.get<Categoria[]>(this.url+"/");
  }
}
