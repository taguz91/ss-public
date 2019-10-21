import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ClienteService } from 'src/app/services/human-ss/cliente/cliente.service';
import { Cliente } from 'src/app/models/human-ss/cliente/cliente';
import { UsuarioService } from 'src/app/services/human-ss/usuario/usuario.service';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {

  nick:string;
  

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
    private service:ClienteService,
    private service2:UsuarioService, ) { }

  ngOnInit() {
    
    
    this.nick=sessionStorage.getItem('userssp');

    this.service2.getUserXnick(this.nick)
    .subscribe(data1=>{
      this.cliente.usuario.user_nick=data1[0].user_nick; 
      this.cliente.usuario.id_usuario=data1[0].id_usuario;
        this.service.getClienteLogueado(this.cliente.usuario.id_usuario)
          .subscribe(data2=>{
          
              this.cliente=data2[0];          
            
    
        })     
    })

    

    
  }

  misCategorias(){
    console.log(this.cliente.id_persona)
    this.router.navigate(["cliente/preferencias"],{ state: { id: this.cliente.id_persona  } });
  }

  misDatos(){
    this.router.navigate(["/perfil/editar"],{ state: { id: this.cliente.id_persona  } });
  }

  cambiarContrasena(){
    this.router.navigate(["/perfil/contrasena"],{ state: { id: this.cliente.id_persona } });
  }

}
