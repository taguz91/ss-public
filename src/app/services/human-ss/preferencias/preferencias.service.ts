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

  insertPreferencia(preferencia:Preferencia){
    return this.http.post<Preferencia>(this.Url+"guardar/", preferencia);
   
  }


  deletePreferencia(preferencia:Preferencia){
    return this.http.put<Preferencia>(this.Url+"eliminar/"+preferencia.id_preferencia, preferencia);
   
  }

  

}
