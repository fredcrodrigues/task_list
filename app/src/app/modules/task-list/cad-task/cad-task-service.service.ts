import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { CadTask } from './cad-task';

@Injectable({
  providedIn: 'root'
})
export class CadTaskServiceService {

  constructor(private _angularFireDatabase: AngularFireDatabase) { }

  insert(desc: CadTask){
    this._angularFireDatabase.list("")

  }

  update(){

  }
}
