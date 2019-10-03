import { TipoIdentificacion } from './tipoIdentificacion';
import { Usuario } from './usuario';
export abstract class Persona {

    id_persona:number;

    per_identificacion?:string;

    usuario?:Usuario;

    tipoIdentificacion?:TipoIdentificacion;

    per_primer_nombre?:string;

    per_segundo_nombre?:string;

    per_primer_apellido?:string;

    per_segundo_apellido?:string;

    per_correo?:string;

    per_sexo?:string;

    per_fecha_registro?:Date;

    per_activo?:boolean;
    
}