import { Component, OnInit } from '@angular/core';
import { Comentario } from '../../../../models/producto-ss/comentario';
import { ComentarioService } from '../../../../services/producto-ss/producto/comentario.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-comentario-list',
  templateUrl: './comentario-list.component.html',
  styleUrls: ['./comentario-list.component.css']
})
export class ComentarioListComponent implements OnInit {
  comentarios: Comentario[];
  private idProducto:number;
  constructor(private service: ComentarioService, private router:Router,private activatedRoute: ActivatedRoute) { 
    this.activatedRoute.params.subscribe(params => {
      this.idProducto = params.id;
    });
  }

  ngOnInit() {
    this.service.getComentarioIdPro(this.idProducto)
    .subscribe(data => {
      this.comentarios = data;
    } );
  }
  editar(comen: Comentario): void {
    console.log(comen.id_comentario);
    localStorage.setItem('idComentario', String(comen.id_comentario));
    localStorage.setItem('idProducto1', String(this.idProducto));
    this.router.navigate(['productos/ComentarioActualizar']);

  }
}
