import { Marca } from './marca';
import { Unidad } from './unidad';
import { Linea } from './linea';
import { Categoria } from './categoria';

export interface Producto {
    id_producto?: number,
    id_vendedor: number,
    id_marca:Marca,
    id_unidad:Unidad,
    id_linea: Linea,
    categorias?: Categoria[],
    prod_nombre: string,
    prod_fecha_ingreso?: Date,
    prod_stock_min: number,
    prod_stock_max: number, 
    prod_stock_total: number,
    prod_precio_venta: number,
    prod_descripcion: string,
    prod_restriccion_edad_max: number,
    prod_restriccion_edad_min: number,
    prod_tiene_iva: boolean,
    prod_activo: boolean
}
