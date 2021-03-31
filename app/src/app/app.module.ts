import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { importType } from '@angular/compiler/src/output/output_ast';
import { routing } from './app-routing.module';


import { UserTaskModule } from './user-task/user-task.module';
import{ TaskListModule }  from './task-list/task-list.module';




@NgModule({
  declarations: [
    AppComponent,   
 

  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    UserTaskModule,
    TaskListModule,
    routing
  ],
 
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
