import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CadastroServico } from '../model/CadastroServico';
import { CadastroServicoService } from '../service/cadastro-servico.service';

@Component({
  selector: 'app-cadastro-servico',
  templateUrl: './cadastro-servico.component.html',
  styleUrls: ['./cadastro-servico.component.css']
})
export class CadastroServicoComponent implements OnInit {

  cadServico: CadastroServico = new CadastroServico(); 
  listaServicos: CadastroServico[];

  constructor(
    private router: Router,
    private listagemServicos: CadastroServicoService

  ) { }

  ngOnInit() {
    window.scroll(0,0)
  }

  cadastrarServico() {
    this.listagemServicos.postServico(this.cadServico).subscribe((resp: CadastroServico) => {
      this.cadServico = resp
      alert('Serviço cadastrado com sucesso!')
    })
  }

}
