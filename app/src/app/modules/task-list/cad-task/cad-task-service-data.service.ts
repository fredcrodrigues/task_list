import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { CadTask } from './cad-task';

@Injectable({
  providedIn: 'root'
})
export class CadTaskServiceDataService {

  constructor() { }

  private descriedit =  new BehaviorSubject({ desc: null , key:''});
  descatual = this.descriedit.asObservable();

  obterDesc(desc: CadTask , key: string){
    this.descriedit.next({ desc: desc , key: key})
  }
}
