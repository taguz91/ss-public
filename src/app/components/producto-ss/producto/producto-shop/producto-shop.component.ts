import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ProductoService } from 'src/app/services/producto-ss/producto/producto.service';
import { ProductoPage } from 'src/app/models/shopshop/producto-page';
import { UsuarioService } from 'src/app/services/human-ss/usuario/usuario.service';
import { Observable } from 'rxjs';
import { CarritoService } from 'src/app/services/carrito-ss/carrito/carrito.service';

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
  cargando = true;

  // Para saber si solo estamos agregando 
  agregando = false;
  // IdCategoria 
  private idCategoria = 0;
  // Para buscar por linea 
  private idLinea;
  // Para buscar por marca 
  private idMarca;
  // Para buscar por vendedor 
  private idVendedor; 
  // Para buscar  
  private aguja: string = '';
  // Para saber si estamos en la pagina 
  private isPage: boolean = false; 
  private limitIni: number;

  constructor(
    private PS: ProductoService,
    private ruter: Router,
    private userService: UsuarioService,
    private activatedRoute: ActivatedRoute,
    private CS: CarritoService
  ) {
    this.activatedRoute.params.subscribe(params => {
      this.idCategoria = params.idCategoria;
      this.idLinea = params.idLinea;
      this.idMarca = params.idMarca;
      this.idVendedor = params.idVendedor;
    });
    this.limitIni = PS.LIMIT;
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

  buscar() {
    if (this.aguja != '') {
      this.cargando = true;
      this.PS.getForAguja(this.aguja).subscribe(
        data => {
          this.productos = data;
          this.cargando = false;
        }
      );
    }
    
  }

  ngOnInit() {

    if(
      this.idCategoria == null && 
      this.idLinea == null && 
      this.idMarca == null && 
      this.idVendedor == null
      ){   
      switch(this.tipo){
        case('home'):
          this.loadForHome();
          this.isPage = false;
        break;
        default:
          this.loadForPage();
          this.isPage = true;
        break;
      }
    } else {
      this.isPage = false;
      if (this.idCategoria != null) {
        this.loadForCategoria();
      }

      if(this.idLinea != null) {
        this.loadForLinea();
      }

      if (this.idMarca != null) {
        this.loadForMarca();
      }

      if(this.idVendedor != null) {
        this.loadForVendedor();
      }
      
    }
    
  }

  agregarAlCarro(idProducto: number, cantidad: number) {
    if(this.userService.estaLogueado()) {
      this.PS.getForCarro(idProducto).subscribe(
        data => {
          this.CS.agregar(data, cantidad);
        }
      );
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
    this.loadProducto( this.PS.getForHome());
  }

  private loadForPage() {
    this.loadProducto(this.PS.getForPage());
  }

  private loadForCategoria() {
    this.loadProducto(this.PS.getForCategoria(this.idCategoria));
  }

  private loadForLinea() {
    this.loadProducto(this.PS.getForLinea(this.idLinea));
  }

  private loadForMarca() {
    this.loadProducto(this.PS.getForMarca(this.idMarca));
  }

  private loadForVendedor() {
    this.loadProducto(this.PS.getForVendedor(this.idVendedor));
  }

  private loadProducto(peticion: Observable<ProductoPage[]>) {
    this.cargando = true;
    peticion.subscribe(
      res => {
        this.productos = res;
        this.cargando = false;
      },
      err => {
        console.log(err);
        this.cargando = false;
      }
    );
  }

  cargarMasProductos() {
    this.cargando = true;
    this.limitIni += this.PS.LIMIT;
    this.PS.getForPageWithOffset(this.limitIni).subscribe(
      res => {
        if (res != null) {
          res.forEach((pro) => {
            this.productos.push(pro);
          });
        }
        this.cargando = false;
      },
      err => {
        console.log(err);
        this.cargando = false;
      }
    );
  }

}
