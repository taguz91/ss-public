import { Persona } from '../persona';

export interface Cliente extends Persona  {

    cli_fecha_nacimiento?:Date;
    
    cli_activo?:boolean;    

}

