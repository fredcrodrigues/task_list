import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CadTaskComponent } from './cad-task/cad-task.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';



 
@NgModule({
  declarations: [CadTaskComponent],
  imports: [
    CommonModule , 
    FontAwesomeModule
  ],
  exports: [CadTaskComponent ,]
})
export class TaskListModule { }
