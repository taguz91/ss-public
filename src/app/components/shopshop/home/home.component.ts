import { Component, OnInit } from '@angular/core';
import { ProductoService } from 'src/app/services/producto-ss/producto/producto.service';
import { ProductoPage } from 'src/app/models/shopshop/producto-page';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  private PSS: Array<ProductoPage>;

  constructor(private PS: ProductoService) { }

  ngOnInit() {
    this.PS.getForSlide().subscribe(
      res => {
        this.PSS = res;
      },
      err => {
        console.log('Error al buscar para slide: ');
        console.log(err);
      }
    );
  }

  // Para obtener el slide  
  getImgSlide(url: string){
    if(url === null){
      return '../../../../assets/img/slide2.png';
    }
    return url;
  }

}
