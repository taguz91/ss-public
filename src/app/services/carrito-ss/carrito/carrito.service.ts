import { Injectable } from '@angular/core';
import { ProductoCarro } from 'src/app/models/shopshop/producto-carro';
import { ProductoPage } from 'src/app/models/shopshop/producto-page';

@Injectable({
  providedIn: 'root'
})
export class CarritoService {

  private productos: ProductoCarro[] = Array<ProductoCarro>();

  constructor() { }

  agregar(producto: ProductoPage, cantidad: number) {
    let newproducto: ProductoCarro = {
      cantidad: cantidad,
      total: producto.prod_precio_venta * cantidad,
      ima_url: producto.ima_url, 
      prod_nombre: producto.prod_nombre,
      prod_precio: producto.prod_precio_venta,
      tiene_iva: producto.tiene_iva,
      id_producto: producto.id_producto
    }; 

    let pos = this.existeProducto(producto.id_producto);
    if (pos != 0) {
      this.productos[pos] = newproducto;
    } else {
      this.productos.push(newproducto);
    }

  }

  private existeProducto(idProducto: number): number {
    let pos = 0;
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
  
}
