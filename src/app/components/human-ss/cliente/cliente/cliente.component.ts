import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Cliente } from 'src/app/models/human-ss/cliente/cliente';
import { TipoIdentificacion } from 'src/app/models/human-ss/tipoIdentificacion';
import { TipoIdentificacionService } from 'src/app/services/human-ss/tipoIdentificacion/tipo-identificacion.service';
import { Router } from '@angular/router';
import { ClienteService } from 'src/app/services/human-ss/cliente/cliente.service';
@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.css']
})
export class ClienteComponent implements OnInit {

  registerForm: FormGroup;
  submitted = false;
  
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

  
    

  constructor(private router:Router, private service:ClienteService, private service2:TipoIdentificacionService, private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.service2.getTiposIdentificacion()
    .subscribe(data=>{
      this.tiposIdentificacion=data;
      
    })

    this.registerForm = this.formBuilder.group({
      tipoIdentificacion: ['', Validators.required],
      identificacion: ['', Validators.required],
      primerNombre: ['', Validators.required],
      segundoNombre: ['', Validators.required],
      primerApellido: ['', Validators.required],
      segundoApellido: ['', Validators.required],
      correoElectronico: ['', Validators.required],
      sexo: ['', Validators.required],
      nick: ['', Validators.required],
      contrasena: ['', Validators.required],
      fechaNacimiento: ['', Validators.required],
      
    });
  }


  get f() { return this.registerForm.controls; }

    onSubmit() {
        this.submitted = true;

        // stop here if form is invalid
        if (this.registerForm.invalid) {
            return;
        }

    }

    onReset() {
        this.submitted = false;
        this.registerForm.reset();
    }

    
  
    guardar(){

      if (this.submitted){
        console.log(this.cliente);
        this.service.insertCliente(this.cliente)
        .subscribe(data=>{
          alert("Se agregó exitosamente");
          this.router.navigate(["productos"]);
        })
      }


  
    }
}
