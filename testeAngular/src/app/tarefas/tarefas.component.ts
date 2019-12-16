import { Component, OnInit } from '@angular/core';
import { Tarefa } from '../model/tarefa';
import { ListawebService } from '../service/listaweb.service'

@Component({
  selector: 'app-tarefas',
  templateUrl: './tarefas.component.html',
  styleUrls: ['./tarefas.component.css']
})
export class TarefasComponent implements OnInit {

  minhaTarefa: Tarefa[];
  //injetando o serviço
  constructor(private servicoLista: ListawebService) { 
    
  }

  ngOnInit() {
    this.obterTodasTarefas()
  }

  //subscribe=faça uma inscrição
  public obterTodasTarefas(){
    this.servicoLista.obterTarefas().subscribe((resultado: Tarefa[])=>{this.minhaTarefa = resultado;})
  }

}
