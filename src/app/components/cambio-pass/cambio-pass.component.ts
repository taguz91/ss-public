import { Component, OnInit } from '@angular/core';
import { Cliente } from 'src/app/models/human-ss/cliente/cliente';
import { ClienteService } from 'src/app/services/human-ss/cliente/cliente.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cambio-pass',
  templateUrl: './cambio-pass.component.html',
  styleUrls: ['./cambio-pass.component.css']
})
export class CambioPassComponent implements OnInit {

  nuevaContrasena1:string;
  nuevaContrasena2:string;
  
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
    this.editar();
  }

  editar(){
      
    console.log(this.cliente);
    // let id_cliente=;
    // console.log(id_cliente);
      this.service.getClienteId(+window.history.state.id)
      .subscribe(data=>{
        console.log(data);
        data.usuario.user_pass=null;
        this.cliente=data;
      })
  }

  actualizar(cliente:Cliente){
      console.log("aqui");
   
        if (this.nuevaContrasena1===this.nuevaContrasena2){
          cliente.usuario.user_pass=this.nuevaContrasena1;
          this.service.updateCliente(cliente)
          .subscribe(data=>{
            this.cliente=data;
          })
          alert("Se actualizó exitosamente");
          
          this.router.navigate(["/perfil"]);
        }else{
          alert("Las contrasenas no coinciden");
        }
      
    
   
  }
}
