import { Producto } from './producto';

 export interface Marca{

    id_marca?: number,
    marc_nombre?: string,
    marc_codigo?: string,
    marc_activo?: boolean,
    productos:[]
 }