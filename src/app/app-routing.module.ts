import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastroPedidoComponent } from './cadastro-pedido/cadastro-pedido.component';
import { CadastroServicoComponent } from './cadastro-servico/cadastro-servico.component';
import { PaginaInicialComponent } from './pagina-inicial/pagina-inicial.component';

const routes: Routes = [

  {path: '', redirectTo: 'pagina-inicial', pathMatch: 'full'},
  {path: 'pagina-inicial', component: PaginaInicialComponent},
  {path: 'cadastrar-servico', component: CadastroServicoComponent},
  {path: 'cadastrar-pedido', component: CadastroPedidoComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
