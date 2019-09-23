import { Producto } from './producto';

 export interface Unidad{

    id_unidad?: number,
    unid_nombre?: string,
    unid_codigo?: string,
    unid_activo?: boolean,
    productos:[]
 }