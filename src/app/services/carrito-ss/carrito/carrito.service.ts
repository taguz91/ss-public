import { Injectable } from '@angular/core';
import { ProductoCarro } from 'src/app/models/shopshop/producto-carro';
import { ProductoPage } from 'src/app/models/shopshop/producto-page';
import { UsuarioService } from '../../human-ss/usuario/usuario.service';
import { HttpClient } from '@angular/common/http';
import { MiVenta } from 'src/app/models/shopshop/mi-venta';

@Injectable({
  providedIn: 'root'
})
export class CarritoService {

  private url = 'http://localhost:8080/api/v1/venta/';

  private productos: ProductoCarro[] = Array<ProductoCarro>();

  public total = 0; 
  public subtotalI = 0;
  public subtotalSI = 0;
  public iva = 0; 

  constructor(
    private US: UsuarioService,
    private http: HttpClient
  ) { }

  agregar(producto: ProductoPage, cantidad: number) {
    let pos = this.existeProducto(producto.id_producto);

    if (pos != null) {
      this.productos[pos].cantidad = Number(this.productos[pos].cantidad) + Number(cantidad);
      
      this.productos[pos].total = this.productos[pos].total + (producto.prod_precio_venta * cantidad);

      if (producto.tiene_iva) {
        this.subtotalI = this.subtotalI + (producto.prod_precio_venta * cantidad);
      } else {
        this.subtotalSI = this.subtotalSI + (producto.prod_precio_venta * cantidad);
      }

      this.iva = this.subtotalI * 0.12; 
      this.total = this.subtotalI + this.subtotalSI + this.iva;
      
    } else {
      let newproducto = this.setProducto(producto, cantidad);
      this.productos.push(newproducto);
      this.actualizaValores(newproducto);
    }
  }

  actualizaValores(newproducto: ProductoCarro) {
    if (newproducto.tiene_iva) {
      this.subtotalI = this.subtotalI + newproducto.total;
    } else {
      this.subtotalSI = this.subtotalSI + newproducto.total;
    }

    this.iva = this.subtotalI * 0.12; 
    this.total = this.subtotalI + this.subtotalSI + this.iva;
  }

  setProducto(producto: ProductoPage, cantidad: number) {
    let newproducto: ProductoCarro = {
      cantidad: cantidad,
      total: producto.prod_precio_venta * cantidad,
      ima_url: producto.ima_url, 
      prod_nombre: producto.prod_nombre,
      prod_precio: producto.prod_precio_venta,
      tiene_iva: producto.tiene_iva,
      id_producto: producto.id_producto
    }; 
    return newproducto;
  }

  private existeProducto(idProducto: number): number {
    let pos = null;
    for (let i = 0; i < this.productos.length; i++) {
      if (this.productos[i].id_producto == idProducto) {
        pos = i;
      }
      break;
    }
    return pos;
  }

  getProductos(): ProductoCarro[] {
    return this.productos;
  }

  guardar() {
    if (this.productos != null && this.productos.length > 0) {
      let id = this.US.getIdCliente(); 

      if (id != null) {
        let detalle: Detalle[] = Array<Detalle>();
        let venta: Venta = {
          id_cliente: parseInt(id),
          detalle: detalle
        };
        this.productos.forEach(p => {
          let newdetalle: Detalle = {
            id_producto: p.id_producto,
            deve_num_producto: p.cantidad
          }
          detalle.push(newdetalle);
        });

        return this.http.post<Venta>(this.url + 'guardar', venta).subscribe(
          data => {
            this.productos.splice(0, this.productos.length);
            this.total = 0;
            this.subtotalI = 0;
            this.subtotalSI = 0;
            this.iva = 0;
          }
        );
      }

    }
  }

  getVentasForCliente() {
    return this.http.get<MiVenta[]>(this.url + 'page/' +  this.US.getIdCliente());
  }
  
}


interface Venta {
  id_cliente: number; 
  detalle: Detalle[];
}

export interface Detalle {
  id_producto: number;
  deve_num_producto: number;
}
