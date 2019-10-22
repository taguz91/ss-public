import { Component, OnInit } from '@angular/core';
import { Vendedor } from '../../../models/human-ss/vendedor/vendedor';
import { Router } from '@angular/router';
import { VendedorService } from 'src/app/services/human-ss/vendedor/vendedor.service';
import { UsuarioService } from 'src/app/services/human-ss/usuario/usuario.service';

@Component({
  selector: 'app-perfil-ven',
  templateUrl: './perfil-ven.component.html',
  styleUrls: ['./perfil-ven.component.css']
})
export class PerfilVenComponent implements OnInit {

  nick:string;

  vendedor:Vendedor={
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
    vend_max_productos:0
     
  };

  constructor(private router:Router, 
    private service:VendedorService,
    private service2:UsuarioService, ) { }

  ngOnInit() {
    
    
    this.nick=sessionStorage.getItem('userssp');

    this.service2.getUserXnick(this.nick)
    .subscribe(data1=>{
      this.vendedor.usuario.user_nick=data1[0].user_nick; 
      this.vendedor.usuario.id_usuario=data1[0].id_usuario;
        this.service.getVendedorLogueado(this.vendedor.usuario.id_usuario)
          .subscribe(data2=>{
          
              this.vendedor=data2[0];          
            
    
        })     
    })

    

    
  }

  

  misDatos(){
    this.router.navigate(["/perfil-vendedor/editar"],{ state: { id: this.vendedor.id_persona  } });
  }

  cambiarContrasena(){
    this.router.navigate(["/perfil/contrasena"],{ state: { id: this.vendedor.usuario.id_usuario } });
  }


  
}
