import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CategoriaService } from 'src/app/services/producto-ss/categoria/categoria.service';
import { CategoriaPage } from 'src/app/models/shopshop/categoria-page';

@Component({
  selector: 'app-categorias',
  templateUrl: './categorias.component.html',
  styleUrls: ['./categorias.component.css']
})
export class CategoriasComponent implements OnInit {

  @Input('tipo') public tipo: string = 'h';
  categorias: Array<CategoriaPage>;

  constructor(
    private CS: CategoriaService
  ) { 
  }

  ngOnInit() {
    switch(this.tipo){
      case('home'):
        this.getFor('home');    
      break;
      case('usuario'):
        
      break;
      case('todas'):
        this.getFor('page');
      break;
    }
  }

  private getFor(url: string) {
    this.CS.getFor(url).subscribe(
      res => {
        this.categorias = res;
      },
      err => {
        console.log('No obtuvimos categorias');
        console.log(err);
      }
    );
  }

}
