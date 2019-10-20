import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ClienteService } from 'src/app/services/human-ss/cliente/cliente.service';
import { Cliente } from 'src/app/models/human-ss/cliente/cliente';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {

  cliente:Cliente={
    id_persona: 0,

    per_correo: '',
    per_identificacion: '',
    per_primer_apellido: '',
    per_primer_nombre: '',
    per_segundo_apellido: '',
    per_segundo_nombre: '',
    per_sexo: '',
    tipoIdentificacion: {
      id_tipo_identificacion: 1
    },
    usuario: {
      id_usuario: 0,
      user_nick: '',
      user_pass: ''
    },
    cli_fecha_nacimiento:null
  };
 
  constructor(private router:Router, 
    private service:ClienteService, ) { }

  ngOnInit() {
    this.service.getClienteId(10)
    .subscribe(data=>{
      this.cliente=data;
      
    })
  }

  misCategorias(){
    console.log(this.cliente.id_persona)
    this.router.navigate(["cliente/preferencias"],{ state: { id: this.cliente.id_persona  } });
  }

}
