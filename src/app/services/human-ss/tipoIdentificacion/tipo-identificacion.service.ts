import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TipoIdentificacion } from 'src/app/models/human-ss/tipoIdentificacion';

@Injectable({
  providedIn: 'root'
})
export class TipoIdentificacionService {

  constructor(private http:HttpClient) { }

  Url="http://localhost:2020/api/v1/tipo/identificacion/";

  getTiposIdentificacion(){
    return this.http.get<TipoIdentificacion[]>(this.Url);
   
  }
  
}