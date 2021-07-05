import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { HashLocationStrategy, LocationStrategy} from '@angular/common';

import { AppComponent } from './app.component';
import { PaginaInicialComponent } from './pagina-inicial/pagina-inicial.component';
import { CadastroServicoComponent } from './cadastro-servico/cadastro-servico.component';
import { CadastroPedidoComponent } from './cadastro-pedido/cadastro-pedido.component';
import { PedidoComponent } from './pedido/pedido.component';

@NgModule({
  declarations: [
    AppComponent,
    PaginaInicialComponent,
    CadastroServicoComponent,
    CadastroPedidoComponent,
    PedidoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [{
    provide: LocationStrategy,
    useClass: HashLocationStrategy
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
