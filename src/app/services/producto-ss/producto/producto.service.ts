import { Injectable } from '@angular/core';
import { Producto } from 'src/app/models/producto-ss/producto';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ProductoPage } from 'src/app/models/shopshop/producto-page';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  url: string = "http://localhost:6060/api/v1/producto";

  public producto: Producto;

  constructor( private http:HttpClient) { }

  public getProductos(){
    return this.http.get<Producto[]>(this.url+"/");
  }

  public getProductoById(id_Producto: number){
    return this.http.get<Producto>(this.url+`/productobyid/${id_Producto}`);
  }

  public saveProducto(productoG: Producto){
    return this.http.post<Producto>(this.url+"/guardar", productoG);
  }

  public editarProducto(productoG: Producto){
    return this.http.post<Producto>(this.url+"/guardar", productoG);
  }

  public eliminarProducto(id: number){
    this.http.delete(this.url+`/${id}`);
  }

  // Para funcionalidad de la pagina en modo cliente 
  
  // Consultamos los productos para el slide 
  public getForSlide() {
    return this.http.get<ProductoPage[]>(this.url + '/slide/');
  }

  // Consultamos los productos para home
  public getForHome() {
    return this.http.get<ProductoPage[]>(this.url + '/home/all');
  }

  // Consultamos para la pagina 
  public getForPage() {
    return this.http.get<ProductoPage[]>(this.url + '/home/all', {
      params: {
        limit: '10',
        offset: '0'
      }
    });
  }

  public getForCategoria(idCategoria) {
    return this.http.get<ProductoPage[]>(this.url + '/categoria/' + idCategoria, {
      params: {
        limit: '10',
        offset: '0'
      }
    });
  }

  // Obtenemos la imagen del producto 
  getImgProd(url: string){
    if(url === null){
      url = ' ../../../../../assets/img/noimage.png';
    }
    return url;
  }

}





