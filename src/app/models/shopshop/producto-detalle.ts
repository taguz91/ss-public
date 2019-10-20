import { CategoriaPage } from './categoria-page';

export interface ProductoDetalle {
  producto: ProductoD;
  categorias: CategoriaPage[];
}

export interface ProductoD {
  id_producto: number;
  id_linea: number;
  id_marca: number;
  calificacion: number;
  id_vendedor: number;
  ima_url: string;
  lin_nombre: string;
  marc_nombre: string;
  prod_nombre: string;
  prod_precio_venta: number;
  vendedor: string;
}
