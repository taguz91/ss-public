import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Cliente } from 'src/app/models/human-ss/cliente/cliente';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  constructor(private http:HttpClient) { }

  Url="http://localhost:2020/api/v1/cliente/";

  getClientes(){
    return this.http.get<Cliente[]>(this.Url);
   
  }

  insertCliente(cliente:Cliente){
    return this.http.post<Cliente>(this.Url+"guardar/", cliente);
   
  }

  getClienteId(id_cliente:number) {
    return this.http.get<Cliente>(this.Url+id_cliente);
   
  }

  updateCliente(cliente:Cliente){
    return this.http.put<Cliente>(this.Url+"editar/"+cliente.id_persona, cliente);
   
  }

  deleteCliente(cliente:Cliente){
    return this.http.put<Cliente>(this.Url+"eliminar/"+cliente.id_persona, cliente);
   
  }
}
