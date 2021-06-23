import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TaskDataService {


// OBTER O A PROXIMA TAREFA  QUANDO FIZER EDIÇÃO
  constructor() { }


  private descriptionInit = new BehaviorSubject({ task : null ,  key : ''})

}
