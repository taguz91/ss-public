import { Component, OnInit } from '@angular/core';
import { Comentario } from '../../../../models/producto-ss/comentario';
import { ComentarioService } from '../../../../services/producto-ss/producto/comentario.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-comentario-list',
  templateUrl: './comentario-list.component.html',
  styleUrls: ['./comentario-list.component.css']
})
export class ComentarioListComponent implements OnInit {
  comentarios: Comentario[];
  constructor(private service: ComentarioService, private router:Router) { }

  ngOnInit() {
    this.service.getcomentariosLista()
    .subscribe(data => {
      this.comentarios = data;
    } );
  }
  editar(comen: Comentario): void {
    console.log(comen.id_comentario);
    localStorage.setItem('idComentario', String(comen.id_comentario));
    this.router.navigate(['productos/ComentarioActualizar']);

  }
}
