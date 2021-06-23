import { SharedModule } from './../../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { TaskListRouting } from './task-list.routing';
import { CadTaskComponent } from './cad-task/cad-task.component';
import { EditTaskComponent } from './edit-task/edit-task.component';

@NgModule({
  declarations: [CadTaskComponent, EditTaskComponent  ],
  imports: [
    CommonModule , 
    FontAwesomeModule,
    TaskListRouting,
    SharedModule
  ],
  exports: [CadTaskComponent]
})
export class TaskListModule { }
