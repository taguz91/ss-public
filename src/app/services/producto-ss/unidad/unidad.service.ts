import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Unidad } from 'src/app/models/producto-ss/unidad';

@Injectable({
  providedIn: 'root'
})
export class UnidadService {

  url = "http://localhost:6060/api/v1/unidad";

  constructor( private _http: HttpClient ) { }

  getAllUnidades(){
    return this._http.get<Unidad[]>(this.url+"/");
  }

  saveUnidad( unidad:Unidad ){
    return this._http.post<Unidad>(this.url+"/guardar", unidad);
  }

  getUnidadId( idUnidad: number ){

  }

  updateUnidad( unidad:Unidad ){
    return this._http.post<Unidad>(this.url+"/guardar", unidad);
  }

  deleteUnidad( idUnidad: number ){
    this._http.delete(this.url+`eliminar/${idUnidad}`)

  }

}
