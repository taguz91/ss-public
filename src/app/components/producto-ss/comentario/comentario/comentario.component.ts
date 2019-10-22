import { Component, OnInit, Input } from '@angular/core';
import { Comentario } from '../../../../models/producto-ss/comentario';
import { ComentarioService } from '../../../../services/producto-ss/producto/comentario.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-comentario',
  templateUrl: './comentario.component.html',
  styleUrls: ['./comentario.component.css']
})
export class ComentarioComponent implements OnInit {
  private idProducto: number;
  Comentario: Comentario = new Comentario();
submited = false;
   textocomentario: string;
  constructor( private activatedRoute: ActivatedRoute,private comentarioServic: ComentarioService, private router: Router) {
    this.activatedRoute.params.subscribe(params => {
    this.idProducto = params.id;
  }); }

  ngOnInit() {
   
  }
  newComentario(): void{
    this.submited = false;
    this.Comentario = new Comentario();
      }
      save() {
        console.log(this.idProducto);
        this.Comentario.id_producto = this.idProducto;
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
 
}
