import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { ProductoService } from 'src/app/services/producto-ss/producto/producto.service';
import { ProductoPage } from 'src/app/models/shopshop/producto-page';
import { query } from '@angular/animations';

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

  constructor(
    private PS: ProductoService,
    private ruter: Router
  ) { }

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

    switch(this.tipo){
      case('home'):
        this.loadForHome();
      break;
      case('todas'):
      break;
    }
    
  }

  seleccionarEstrella(i, calificacion: number) {
    let newCal = Math.round(calificacion);
    
    let IE = document.querySelector('#est'+i+'-'+newCal);
    if(IE != null){
      IE.setAttribute('checked', '');
    }
  }

  getImgProd(url: string){
    if(url === null){
      url = '../../../../../assets/icon/mi-lista.png';
    }
    return url;
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

}
