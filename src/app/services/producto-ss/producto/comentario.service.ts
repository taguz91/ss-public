import { Injectable } from '@angular/core';
import { Comentario } from '../../../models/producto-ss/comentario';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ComentarioService {

 // constructor() { }
  baseUrl = 'http://localhost:6060/api/v1/comentario';
  constructor(private http: HttpClient) { }
  getcomentario(id:number): Observable <Object>{
      return this.http.get(`${this.baseUrl}/${id}`);
  }

  getcomentariosLista(){
      return this.http.get<Comentario[]>(this.baseUrl + '/');
  }
  createcomentario(comentario: Comentario){
      return this.http.post<Comentario>(this.baseUrl + '/guardar', comentario).subscribe();
  }
  updateComentario(comentario: Comentario){
    return this.http.put<Comentario>(this.baseUrl + '/actualizar/' + comentario.id_comentario, comentario);
   
  }
  getComentarioId( id_comentario : number) {
    return this.http.get<Comentario>(this.baseUrl + '/' + id_comentario);
   
  }

}
