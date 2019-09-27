import { Component, OnInit } from '@angular/core';
import { CategoriaService } from 'src/app/services/producto-ss/categoria/categoria.service';
import { Categoria } from 'src/app/models/producto-ss/categoria';
import { ActivatedRoute } from '@angular/router';
import { Producto } from 'src/app/models/producto-ss/producto';
import { ProductoService } from 'src/app/services/producto-ss/producto/producto.service';
import { ProductoCategoriaService } from 'src/app/services/producto-ss/producto-categoria/producto-categoria.service';
import { ProductoCategoria } from 'src/app/models/producto-ss/productocategoria';

@Component({
  selector: 'app-categoria-list',
  templateUrl: './categoria-list.component.html',
  styleUrls: ['./categoria-list.component.css']
})
export class CategoriaListComponent implements OnInit {

  idProducto: number;
  categorias:Categoria[];
  saveCategorias: Categoria[] = new Array;
  agregar: boolean = false;
  producto: Producto;
  productoCategorias: ProductoCategoria[] = [];

  

  constructor( private _categoriaService:CategoriaService,
              private route: ActivatedRoute, 
              private _catergoriaProductoService: ProductoCategoriaService) {

    this.idProducto = this.route.snapshot.params.idProducto;
    
   }

  ngOnInit() {

    this._categoriaService.getCategorias().subscribe(
      data => {
        console.log(data);
        this.categorias = data;
      }
    );

    // this._productoService.getProductoById(this.idProducto).subscribe(
    //   data => {
    //     this.producto = data;
    //     console.log(data);
        
    //   }
    // );

  }

  agregarCategoria(e, categoria:Categoria){
    
    if(e.target.checked == true){
      this.saveCategorias.push(categoria);
      this.agregar = false;
      console.log("Se agregó categoría");
      console.log(this.saveCategorias);
    } else{
      if(this.saveCategorias.length != 0){
        this.saveCategorias.forEach(element => {
          if(element.id_categoria == categoria.id_categoria){
            this.saveCategorias.splice(this.saveCategorias.indexOf(categoria), 1);
            console.log("Se quitó una categoría");
          }
          
        });
      } else{
        console.log("Vacío");
      }
    }

  }

  guardarCategorias(){

    this.saveCategorias.forEach(element => {
      let productoCategoria: ProductoCategoria = {
        id_producto: null,
        id_categoria: null,
        prca_activo: true
      };

      productoCategoria.id_categoria = element.id_categoria;
      productoCategoria.id_producto = this.idProducto;
      this.productoCategorias.push(productoCategoria);

    });

    this._catergoriaProductoService.guardarProductoCategoria(this.productoCategorias).subscribe(
      data => {
        alert("Se guardó correctamente");
      }
    );

  }

}
