import { Cliente } from './cliente';
export interface Preferencia {
    id_preferencia?: number;
    cliente: Cliente;
    id_categoria: number;
    pref_fecha_ingreso?: Date;
    pref_activo?: boolean;
}
