import { Component, OnInit } from '@angular/core';
import { ProductoPage } from 'src/app/models/shopshop/producto-page';
import { ProductoService } from 'src/app/services/producto-ss/producto/producto.service';

@Component({
  selector: 'app-producto-recom',
  templateUrl: './producto-recom.component.html',
  styleUrls: ['./producto-recom.component.css']
})
export class ProductoRecomComponent implements OnInit {

  productos: Array<ProductoPage> = [];

  constructor(
    private PS: ProductoService
  ) { }

  ngOnInit() {
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
