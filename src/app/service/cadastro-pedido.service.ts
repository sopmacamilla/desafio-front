import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CadastroPedidoService {

  constructor(private http: HttpClient) { }  
}
