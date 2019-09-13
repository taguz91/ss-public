export interface Producto {
    id_producto?: number,
    //Objeto de la clase Vendedor
    vendedor: string,
    //oBjeto de la clase Marcas
    marcas: string,
    prod_nombre: string,
    prod_fecha_ingreso: Date,
    prod_stock_total: number,
    prod_precio_venta: number,
    prod_descripcion: string,
    prod_restriccion_edad_max: number,
    prod_restriccion_edad_min: number,
    prod_activo: boolean
}
