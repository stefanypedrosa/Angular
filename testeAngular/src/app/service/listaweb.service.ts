import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class ListawebService {

  //injeção de dependencia (declara e somente usa internamente)
  constructor(private http: HttpClient) { }

  public obterTarefas(){
    return this.http.get("http://professorisidro.com.br/tarefas.php")
  }
}
