import { Component, OnInit } from '@angular/core';
import { TipoIdentificacion } from 'src/app/models/human-ss/tipoIdentificacion';
import { Vendedor } from '../../../../models/human-ss/vendedor/vendedor';
import { Router } from '@angular/router';
import { VendedorService } from 'src/app/services/human-ss/vendedor/vendedor.service';
import { TipoIdentificacionService } from 'src/app/services/human-ss/tipoIdentificacion/tipo-identificacion.service';
import { Validators, FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-vendedor',
  templateUrl: './vendedor.component.html',
  styleUrls: ['./vendedor.component.css']
})
export class VendedorComponent implements OnInit {

  registerForm: FormGroup;
  submitted = false;
 
  
  tiposIdentificacion:TipoIdentificacion[];

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
 

  constructor(
    private router:Router, 
    private service:VendedorService, 
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
      
    });

    //Solo para pruebas
    console.log(this.router.url); 
     
        this.editar();
     
    
          
  
    this.service2.getTiposIdentificacion()
    .subscribe(data=>{
      this.tiposIdentificacion=data;
      
    })

    
  }

  clickCancelar() {
    this.router.navigate(['']);
  }

  get f() { return this.registerForm.controls; }

    onSubmit(vendedor:Vendedor) {
        
        console.log(vendedor)
        this.submitted = true;
        console.log("no pasa")
        // stop here if form is invalid
        if (this.registerForm.invalid) {
          
            return;
        }
        console.log("pasa")
        this.enviar(vendedor)

    }

    onReset() {
        this.submitted = false;
        this.registerForm.reset();
    }

    enviar(vendedor: Vendedor){
     
       
        this.actualizar(vendedor);
     
    }
  
    


  
   


    editar(){
      
      console.log(this.vendedor);
      
      console.log(+window.history.state.id)
      // let id_cliente=;
      // console.log(id_cliente);
        this.service.getVendedoresId(+window.history.state.id)
        .subscribe(data=>{
          console.log(data);
          this.vendedor=data;
        })
    }
  

    

    actualizar(vendedor:Vendedor){
      
     
      console.log(this.submitted);
      if (this.submitted){
        console.log("aqui");
        this.service.updateVendedor(vendedor)
        .subscribe(data=>{
          this.vendedor=data;
          alert("Se actualizó exitosamente");
          this.router.navigate(["productos"]);
        })
      }
     
    }


}
