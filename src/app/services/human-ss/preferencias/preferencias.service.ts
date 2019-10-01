import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Preferencia } from 'src/app/models/human-ss/cliente/preferencia';

@Injectable({
  providedIn: 'root'
})
export class PreferenciasService {

  constructor(private http:HttpClient) { }

  Url="http://localhost:2020/v1/api/preferencia/";

  getMisPreferencias(id:number){
    return this.http.get<Preferencia[]>(this.Url+"buscar/"+id);
     
  }

  

}
