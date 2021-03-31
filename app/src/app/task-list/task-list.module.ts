import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { CadTaskComponent } from './cad-task/cad-task.component';
import { NavTaskComponent } from './nav-task/nav-task.component';



 
@NgModule({
  declarations: [CadTaskComponent, NavTaskComponent],
  imports: [
    CommonModule , 
    FontAwesomeModule,
  ],
  exports: [CadTaskComponent , NavTaskComponent]
})
export class TaskListModule { }
