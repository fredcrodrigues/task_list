import { Component, OnInit } from '@angular/core';
import { faTrash , faPen} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-lista-tarefas',
  templateUrl: './lista-tarefas.component.html',
  styleUrls: ['./lista-tarefas.component.css']
})
export class ListaTarefasComponent implements OnInit {

  faTrash = faTrash;
  faPen = faPen;

  constructor() { }

  ngOnInit(): void {
  }

}
