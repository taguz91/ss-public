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

  
  constructor() { }

  ngOnInit() {
  }

}
