import { Component, OnInit } from '@angular/core';
import {CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';
import { CategoriaService } from '../../../services/producto-ss/categoria/categoria.service';
import { Router } from '@angular/router';
import { Categoria } from '../../../models/producto-ss/categoria';
import { PreferenciasService } from 'src/app/services/human-ss/preferencias/preferencias.service';
import { Preferencia } from '../../../models/human-ss/cliente/preferencia';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';


@Component({
  selector: 'app-preferencias',
  templateUrl: './preferencias.component.html',
  styleUrls: ['./preferencias.component.css']
})
export class PreferenciasComponent implements OnInit {

categorias:Categoria[]=[];

misCategorias:Categoria[]=[];

misCategoriasAux:Categoria[]=[];

preferencias:Preferencia[]=[];

estadoBoton=false;



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
            for (let categoria of this.categorias){
              categoria.cat_activo=false;
              for (let miCategoria of this.misCategorias){
                
              if (categoria.cat_codigo===miCategoria.cat_codigo){
                console.log("entra");
                  categoria.cat_activo=true;
              }
              }
            }
            //this.categorias=this.categorias.filter(this.comparer(this.misCategorias))
            
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
        this.misCategoriasAux.push(data);
      })
    }

    

  }

   comparer(otherArray){
    return function(current){
      return otherArray.filter(function(other){
        return other.id_categoria == current.id_categoria
      }).length==0;
    }
  }



  guardarPreferencias(){
    
    console.log(this.misCategorias);
    console.log("x");
    console.log(this.misCategoriasAux);
    console.log("x");
    console.log(this.preferencias);
    
    let misCategoriasNuevas:Categoria[]=[];
    let misPreferenciasEliminadas:Preferencia[]=[];  
      
    misPreferenciasEliminadas=this.preferencias.filter(this.comparer(this.misCategorias));
    misCategoriasNuevas=this.misCategorias.filter(this.comparer(this.misCategoriasAux));
    
    console.log("x");
    console.log(misPreferenciasEliminadas);
    console.log("x");
    console.log(misCategoriasNuevas);
    // console.log(misCategoriasNuevas);

    for (let miPreferenciaEliminada of misPreferenciasEliminadas){
      miPreferenciaEliminada.pref_activo=false;
      this.service2.deletePreferencia(miPreferenciaEliminada)
          .subscribe(data=>{
            console.log("Eliminamos "+miPreferenciaEliminada.id_categoria);
      })

    }

      for (let miCategoriaNueva of misCategoriasNuevas){
        let miPreferencia:Preferencia={ 
          cliente: {
            id_persona: 0
          },
          id_categoria: 0
        };
        miPreferencia.id_categoria=miCategoriaNueva.id_categoria;
        miPreferencia.cliente.id_persona=10;
        console.log("x");
        console.log(miPreferencia);
        this.service2.insertPreferencia(miPreferencia)
            .subscribe(data=>{
              console.log("Agregamos "+miPreferencia.id_categoria);
        })
      }
    
      alert("Se guardo exitosamente");
      this.estadoBoton=false;  
 }

 checkCheckBoxvalue(event, categoria:Categoria){

    this.estadoBoton=true;
    console.log(event.checked+"-"+categoria.cat_codigo);

    if (event.checked){
      this.misCategorias.push(categoria);
    }else{
      this.misCategorias=this.misCategorias.filter(e => e.cat_codigo !== categoria.cat_codigo)
    }

  }

}
