import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormDebugComponent } from './form-debug/form-debug.component';
import { ListaTarefasComponent } from './lista-tarefas/lista-tarefas.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NavTarefasComponent } from './nav-tarefas/nav-tarefas.component';
import { importType } from '@angular/compiler/src/output/output_ast';
import { routing } from './app-routing.module';


import { UserTaskModule } from './user-task/user-task.module';



@NgModule({
  declarations: [
    AppComponent,
    FormDebugComponent,
    ListaTarefasComponent,
    NavTarefasComponent,

  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    FontAwesomeModule,
    UserTaskModule,
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
