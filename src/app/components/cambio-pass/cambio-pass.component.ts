import { Component, OnInit } from '@angular/core';
import { Cliente } from 'src/app/models/human-ss/cliente/cliente';
import { ClienteService } from 'src/app/services/human-ss/cliente/cliente.service';
import { Router } from '@angular/router';
import { Usuario } from '../../models/human-ss/usuario';
import { UsuarioService } from 'src/app/services/human-ss/usuario/usuario.service';

@Component({
  selector: 'app-cambio-pass',
  templateUrl: './cambio-pass.component.html',
  styleUrls: ['./cambio-pass.component.css']
})
export class CambioPassComponent implements OnInit {

  nuevaContrasena1:string;
  nuevaContrasena2:string;
  
  usuario:Usuario=
   
   {
      id_usuario: 0,
      user_nick: '',
      user_pass: ''
    }
   
  ;

  constructor(private router:Router, 
    private service:UsuarioService, ) { }

  ngOnInit() {
    this.editar()
  }

  editar(){
      
   
    // let id_cliente=;
    // console.log(id_cliente);
      this.service.getUserId(+window.history.state.id)
      .subscribe(data=>{
        console.log(data);
        data.user_pass=null;
        this.usuario=data;
      })
  }

  actualizar(){
      console.log("aqui");
       
        if (this.nuevaContrasena1===this.nuevaContrasena2){
          this.usuario.user_pass=this.nuevaContrasena1;
          this.service.updateUser(this.usuario)
          .subscribe(data=>{
            this.usuario=data;
          })
          alert("Se actualizó exitosamente");
          
          this.router.navigate(["/perfil"]);
        }else{
          alert("Las contrasenas no coinciden");
        }
      
    
   
  }
}


  