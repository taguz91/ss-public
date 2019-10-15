import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ProductoService } from 'src/app/services/producto-ss/producto/producto.service';
import { ProductoPage } from 'src/app/models/shopshop/producto-page';
import { UsuarioService } from 'src/app/services/human-ss/usuario/usuario.service';

@Component({
  selector: 'app-producto-shop',
  templateUrl: './producto-shop.component.html',
  styleUrls: [
    './producto-shop.component.css',
    '../producto/producto.component.css'
  ]
})
export class ProductoShopComponent implements OnInit {

  // Para identificar de donde se llama al componente 
  @Input('tipo') public tipo: string = 'p';

  productos: Array<ProductoPage> = [];

  // Para saber si solo estamos agregando 
  agregando = false;
  // IdCategoria 
  private idCategoria = 0;

  constructor(
    private PS: ProductoService,
    private ruter: Router,
    private userService: UsuarioService,
    private activatedRoute: ActivatedRoute
  ) {
    this.activatedRoute.params.subscribe(params => {
      this.idCategoria = params.idCategoria;
    });
  }

  verProducto(id: number): void {
    if(!this.agregando){
      this.ruter.navigate(['producto', id]);
    }
    this.agregando = false;
  }

  agregarMiLista(){
    this.agregando = true;
  }

  ngOnInit() {

    if(this.idCategoria == null){   
      switch(this.tipo){
        case('home'):
          this.loadForHome();
        break;
        default:
          this.loadForPage();
        break;
      }
    } else {
      this.loadForCategoria();
    }
    
  }

  agregarAlCarro(idProducto: number, cantidad: number) {
    console.log(cantidad);
    if(this.userService.estaLogueado()) {
      
    } else {
      // this.ruter.navigate(['login']);
    }
  }

  seleccionarEstrella(i, calificacion: number) {
    let newCal = Math.round(calificacion);
    
    let IE = document.querySelector('#est'+i+'-'+newCal);
    if(IE != null){
      IE.setAttribute('checked', '');
    }
  }

  private loadForHome(){
    this.PS.getForHome().subscribe(
      res => {
        this.productos = res;
      },
      err => {
        console.log('Error al buscar para home page.');
        console.log(err);
      }
    );
  }

  private loadForPage() {
    this.PS.getForPage().subscribe(
      res => {
        this.productos = res;
      }, 
      err => {
        console.log('No logramos cargar los productos.');
        console.log(err);        
      }
    );
  }

  private loadForCategoria() {
    this.PS.getForCategoria(this.idCategoria).subscribe(
      res => {
        this.productos = res;
      },
      err => {
        console.log('No cargamos por categoria');
        console.log(err);
      }
    );
  }

}
