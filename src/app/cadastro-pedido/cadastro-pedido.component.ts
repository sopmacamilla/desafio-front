import { Component, OnInit } from '@angular/core';
import { CadastroPedido } from '../model/CadastroPedido';

@Component({
  selector: 'app-cadastro-pedido',
  templateUrl: './cadastro-pedido.component.html',
  styleUrls: ['./cadastro-pedido.component.css']
})
export class CadastroPedidoComponent implements OnInit {

  cadPedido: CadastroPedido = new CadastroPedido;

  constructor() { }

  ngOnInit(): void {
  }

}
