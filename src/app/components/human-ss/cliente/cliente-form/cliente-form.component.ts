import { Component, OnInit } from '@angular/core';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Cliente } from 'src/app/models/human-ss/cliente/cliente';
import { TipoIdentificacion } from 'src/app/models/human-ss/tipoIdentificacion';
import { TipoIdentificacionService } from 'src/app/services/human-ss/tipoIdentificacion/tipo-identificacion.service';
import { Router } from '@angular/router';
import { ClienteService } from 'src/app/services/human-ss/cliente/cliente.service';

@Component({
  selector: 'app-cliente-form',
  templateUrl: './cliente-form.component.html',
  styleUrls: ['./cliente-form.component.css']
})
export class ClienteFormComponent implements OnInit {

  
  registerForm: FormGroup;
  submitted = false;
  registro=true;
  
  tiposIdentificacion:TipoIdentificacion[];

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
 

  constructor(
    private router:Router, 
    private service:ClienteService, 
    private service2:TipoIdentificacionService,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit() {
  

    this.registerForm = this.formBuilder.group({
      tipoIdentificacion: ['', Validators.required],
      identificacion: ['', Validators.required  ],
      primerNombre: ['', Validators.required],
      segundoNombre: [''],
      primerApellido: ['', Validators.required],
      segundoApellido: ['' ],
      correoElectronico: ['', Validators.required],
      sexo: ['', Validators.required],
      nick: ['', Validators.required],
      contrasena: ['', Validators.required ],
      fechaNacimiento: ['', Validators.required],
      acceptTerms: [false, Validators.required ]
      
    });

    //Solo para pruebas
    console.log(this.router.url); 
      if (this.router.url === '/perfil/editar'){
        this.registro=false;
        this.editar();
      }
    
          
  
    this.service2.getTiposIdentificacion()
    .subscribe(data=>{
      this.tiposIdentificacion=data;
      
    })

    
  }

  clickCancelar() {
    this.router.navigate(['']);
  }

  get f() { return this.registerForm.controls; }

    onSubmit(cliente:Cliente) {
        
        console.log(cliente)
        this.submitted = true;
        console.log("no pasa")
        // stop here if form is invalid
        if (this.registerForm.invalid) {
          
            return;
        }
        console.log("pasa")
        this.enviar(cliente)

    }

    onReset() {
        this.submitted = false;
        this.registerForm.reset();
    }

    enviar(cliente:Cliente){
     
      if (cliente.id_persona){
       
        this.actualizar(cliente);
      }else{
        
        this.guardar();
      }
    }
  
    guardar(){
      
    
      console.log(this.submitted);
      if (this.submitted){
        console.log(this.cliente);
        this.service.insertCliente(this.cliente)
        .subscribe(data=>{
          alert("Se agregó exitosamente");
          this.router.navigate(["productos"]);
        })
      }


  
    }


    editar(){
      
      console.log(this.cliente);
      // let id_cliente=;
      // console.log(id_cliente);
        this.service.getClienteId(+window.history.state.id)
        .subscribe(data=>{
          console.log(data);
          this.cliente=data;
        })
    }
  

    

    actualizar(cliente:Cliente){
      
     
      console.log(this.submitted);
      if (this.submitted){
        console.log("aqui");
        this.service.updateCliente(cliente)
        .subscribe(data=>{
          this.cliente=data;
          alert("Se actualizó exitosamente");
          this.router.navigate(["productos"]);
        })
      }
     
    }

}
