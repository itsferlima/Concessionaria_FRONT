import { Usuario } from 'src/app/models/usuario';
export interface Carro {
    id?: number;
    marca : string;
    valor: number;
    usuario?: Usuario;
    userId: number;

}
