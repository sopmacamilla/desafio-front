import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CadastroServico } from '../model/CadastroServico';

@Injectable({
  providedIn: 'root'
})
export class CadastroServicoService {

  constructor(private http: HttpClient) { }

  getAllServicos(): Observable<CadastroServico[]>{
    return this.http.get<CadastroServico[]>('http://localhost:8080/cadastrar-pedido')
  }

  postServico(cadServico: CadastroServico): Observable<CadastroServico>{
    return this.http.post<CadastroServico>('http://localhost:8080/cadastrar-pedido', cadServico)
  }  

}
