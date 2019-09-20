export interface Producto {
    id_producto?: number
    id_vendedor: number;
    id_marca: number;
    id_unidad: number;
    id_linea: number;
    prod_nombre: string;
    prod_fecha_ingreso: Date;
    prod_stock_total: number;
    prod_precio_venta: number;
    prod_descripcion: string;
    prod_restriccion_edad_max: number;
    prod_restriccion_edad_min: number;
    prod_activo: boolean;
}
