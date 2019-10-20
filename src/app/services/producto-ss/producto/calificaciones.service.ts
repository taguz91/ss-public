import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Calificaciones } from '../../../models/producto-ss/calificaciones';

@Injectable({
  providedIn: 'root'
})
export class CalificacionesService {
  baseUrl = 'http://localhost:6060/api/v1/calificacion';
  constructor(private http: HttpClient) { }
 guardarCalificacion(calificaciones:Calificaciones) {
  return this.http.post<Calificaciones>(this.baseUrl + '/guardar', calificaciones).subscribe();
 }
}

