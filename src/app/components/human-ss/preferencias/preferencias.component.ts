import { Component, OnInit } from '@angular/core';
import {CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';
import { CategoriaService } from '../../../services/producto-ss/categoria/categoria.service';
import { Router } from '@angular/router';
import { Categoria } from '../../../models/producto-ss/categoria';
import { PreferenciasService } from 'src/app/services/human-ss/preferencias/preferencias.service';
import { Preferencia } from '../../../models/human-ss/cliente/preferencia';


@Component({
  selector: 'app-preferencias',
  templateUrl: './preferencias.component.html',
  styleUrls: ['./preferencias.component.css']
})
export class PreferenciasComponent implements OnInit {

categorias:Categoria[]=[];

categoria:Categoria;

misCategorias:Categoria[]=[];

preferencias:Preferencia[]=[];

  constructor(private service:CategoriaService, private service2:PreferenciasService, private router:Router) { }

  title = 'Preferencias';

  ngOnInit() {

     

    this.service2.getMisPreferencias(10)
        .subscribe(data=>{
          this.preferencias=data;
          this.cargarPreferencias();     
            this.service.getCategorias()
            .subscribe(data=>{
            this.categorias=data;
            this.categorias=this.categorias.filter(this.comparer(this.misCategorias))
            
          })
    })

    

    
    

       
  }

  onDrop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data,
        event.previousIndex,
        event.currentIndex);        

      } else {
      transferArrayItem(event.previousContainer.data,
        event.container.data,
        event.previousIndex, event.currentIndex);
        
      
  
    }
  }

  cargarPreferencias(){
    for(let preferencia of this.preferencias){
      this.service.getCategoriasId(preferencia.id_categoria)
      .subscribe(data=>{
        this.misCategorias.push(data);
        
      })
    }
  }

   comparer(otherArray){
    return function(current){
      return otherArray.filter(function(other){
        return other.id_categoria == current.id_categoria
      }).length == 0;
    }
  }

}
