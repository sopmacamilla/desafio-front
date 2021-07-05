import { CadastroPedido } from "./CadastroPedido";

export class CadastroServico {
    public id: number;
    public tipoServico: string;
    public valorHora: number;
    public cadPedido: CadastroPedido[];
}