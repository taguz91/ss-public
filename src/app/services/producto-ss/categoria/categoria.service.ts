import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Categoria } from 'src/app/models/producto-ss/categoria';
import { CategoriaPage } from 'src/app/models/shopshop/categoria-page';

@Injectable({
  providedIn: 'root'
})
export class CategoriaService {

  url:string = "http://localhost:6060/api/v1/categoria";

  constructor( private http: HttpClient ) { }

  public getCategorias(){
    return this.http.get<Categoria[]>(this.url+"/");
  }

  getCategoriasId(id:number) {
    return this.http.get<Categoria>(this.url+"/"+id);   
  }

  // Para mostrar todas las categorias que tenemos  
  getFor(url: string) {
    return this.http.get<CategoriaPage[]>(this.url+"/"+ url);
  }

}
