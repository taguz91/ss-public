import { Component, OnInit } from '@angular/core';
import { Comentario } from '../../../../models/producto-ss/comentario';
import { ComentarioService } from '../../../../services/producto-ss/producto/comentario.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-comentario',
  templateUrl: './comentario.component.html',
  styleUrls: ['./comentario.component.css']
})
export class ComentarioComponent implements OnInit {
  Comentario: Comentario = new Comentario();
submited = false;
   textocomentario: string;
  constructor(private comentarioServic: ComentarioService, private router: Router) { }

  ngOnInit() {
    this.router.navigate(['productos/comentariosListar']);
  }
  newComentario(): void{
    this.submited = false;
    this.Comentario = new Comentario();
      }
      save() {
        this.Comentario.id_producto = 5;
        this.Comentario.id_cliente = 12;

        console.log(this.Comentario);
        let res = this. comentarioServic.createcomentario(this.Comentario);
        console.log('Respuesta!!! ');
        console.log(res);
        this.Comentario = new Comentario();
        
      }
      onSubmit(){
        this.submited = true;
        this.save();
      }
  getcomentario() {
    this.Comentario.id_producto = 12;
    
    console.log(this.Comentario.comentario,  this.Comentario.id_producto );
  }
  llamarListar(){
    
  }
}
