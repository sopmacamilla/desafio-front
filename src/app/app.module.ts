import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PaginaInicialComponent } from './pagina-inicial/pagina-inicial.component';
import { CadastroServicoComponent } from './cadastro-servico/cadastro-servico.component';
import { CadastroPedidoComponent } from './cadastro-pedido/cadastro-pedido.component';

@NgModule({
  declarations: [
    AppComponent,
    PaginaInicialComponent,
    CadastroServicoComponent,
    CadastroPedidoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
