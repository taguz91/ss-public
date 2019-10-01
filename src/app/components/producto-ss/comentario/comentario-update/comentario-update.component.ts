import { Component, OnInit } from '@angular/core';
import { Comentario } from '../../../../models/producto-ss/comentario';
import { ComentarioService } from '../../../../services/producto-ss/producto/comentario.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-comentario-update',
  templateUrl: './comentario-update.component.html',
  styleUrls: ['./comentario-update.component.css']
})
export class ComentarioUpdateComponent implements OnInit {
 Comentario: Comentario = new Comentario();
  constructor(private router: Router, private service: ComentarioService ) { }

  ngOnInit() {
  this.editar();
  }
  editar(){
    console.log(this.Comentario);
    let id_comentario1 = localStorage.getItem('idComentario');
    console.log(id_comentario1);

      this.service.getComentarioId(+id_comentario1)
      .subscribe(data=>{
        console.log(data);
        this.Comentario=data;})
  }
  verObjeto(comentario:Comentario){
    comentario.id_producto =5;
    console.log(comentario.id_comentario +' '+comentario.comentario +' '+comentario.id_producto+' '+comentario.id_cliente);
    this.service.createcomentario(comentario);
      alert("Se actualizó exitosamente");
      this.router.navigate(["productos/comentariosListar"]);
   
  }

}
