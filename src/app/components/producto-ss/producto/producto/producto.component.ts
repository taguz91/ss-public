import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UsuarioService } from 'src/app/services/human-ss/usuario/usuario.service';
import { ProductoDetalle } from 'src/app/models/shopshop/producto-detalle';
import { ProductoService } from 'src/app/services/producto-ss/producto/producto.service';
import { Calificaciones } from '../../../../models/producto-ss/calificaciones';
import { CalificacionesService } from '../../../../services/producto-ss/producto/calificaciones.service';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.css']
})
export class ProductoComponent implements OnInit {
 private  Calificaciones1 : Calificaciones={
  id_calificacion: 0,
  id_producto:0,
  id_cliente:0,
  calificacion:0
 };
  
  private idProducto: number;
  private producto: ProductoDetalle = {
    categorias: [
      {
        cat_nombre: 'SC',
        id_categoria: 2
      },
      {
        cat_nombre: 'C2',
        id_categoria: 1
      }
    ],
    producto: {
      id_producto: this.idProducto,
      id_linea: 1,
      id_marca: 2,
      id_vendedor: 0, 
      calificacion: 3,
      ima_url: null,
      lin_nombre: 'SL',
      marc_nombre: 'SN',
      prod_nombre: 'No producto',
      prod_precio_venta: 0.0,
      vendedor: 'SV'
    }
  };
  
  private estrella1:number=0;

  constructor(
    private activatedRoute: ActivatedRoute,
    private userService: UsuarioService,
    private PS: ProductoService,
    private cal:CalificacionesService,
    private ruter: Router
  ) {
    this.activatedRoute.params.subscribe(params => {
      this.idProducto = params.id;
    });
  }

  ngOnInit() {
  }

  verProductosPorLinea(idLinea) {
    if (idLinea != null) {
      this.ruter.navigate(['productos', 'linea', idLinea]);
    }
  }

  verProductosPorMarca(idMarca) {
    if (idMarca != null) {
      this.ruter.navigate(['productos', 'marca', idMarca]);
    }
  }

  verProductosPorVendedor(idVendedor) {
    if (idVendedor != null) {
      this.ruter.navigate(['productos', 'vendedor', idVendedor]);
    }
  }
  verCalificacion(){
 
      console.log(this.estrella1);
      
      this.Calificaciones1.id_producto =this.idProducto;
      this.Calificaciones1.id_cliente=12;
      this.Calificaciones1.calificacion=this.estrella1;

      console.log(this.idProducto);
     this.cal.guardarCalificacion(this.Calificaciones1);
     


    
  }

}
