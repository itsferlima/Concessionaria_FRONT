import { Carro } from "./carro";

export interface Itens {
    id?: number;
    carro: Carro;
    valor: number;
    carroId: number;
    carrinhoId: string;

}