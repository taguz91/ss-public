import { Component, OnInit } from '@angular/core';
import { Comentario } from '../../../../models/producto-ss/comentario';
import { ComentarioService } from '../../../../services/producto-ss/producto/comentario.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-comentario-update',
  templateUrl: './comentario-update.component.html',
  styleUrls: ['./comentario-update.component.css']
})
export class ComentarioUpdateComponent implements OnInit {
 Comentario: Comentario = new Comentario();
 private idProducto:number;
 
  constructor(private activatedRoute: ActivatedRoute, private service: ComentarioService, private ruter: Router ) {
    this.activatedRoute.params.subscribe(params => {
      this.idProducto = params.id;
    });
   }

  ngOnInit() {
  this.editar();
  }
  editar(){
    console.log(this.Comentario);
    let id_comentario1 = localStorage.getItem('idComentario');
    
    console.log(id_comentario1);

      this.service.getComentarioId(+id_comentario1) .
       subscribe ( data => {
        console.log(data);
        this.Comentario=data;})
  }
  verObjeto(comentario:Comentario){
    let idProducto1 = localStorage.getItem('idProducto1');
    console.log(idProducto1);
    comentario.id_producto = Number(idProducto1);
    console.log(comentario.id_comentario +' '+comentario.comentario +' '+comentario.id_producto+' '+comentario.id_cliente);
    this.service.createcomentario(comentario);
      alert("Se actualizó exitosamente");
      this.ruter.navigate(["productos"]);
   
  }

}
