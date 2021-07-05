import { CadastroServico } from "./CadastroServico";

export class CadastroPedido {
    public id: number;
    public servicoPedido: string;
    public qtdeHoras: number;
    public profissional: string;
    public impostoAdicional: number;
    public servicos: CadastroServico;
}