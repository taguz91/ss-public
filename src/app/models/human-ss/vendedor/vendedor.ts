import { Persona } from '../persona';

export interface Vendedor extends Persona  {

    vend_max_productos:number;
    
    vend_activo?:boolean;    

}