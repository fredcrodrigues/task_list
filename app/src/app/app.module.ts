import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { UserTaskModule } from './modules/user-task/user-task.module';
import { TaskListModule } from './modules/task-list/task-list.module';
import { AppRoutingModule } from './app-routing.module';
import {MatButtonModule} from '@angular/material/button';

import { AngularFireModule } from '@angular/fire';
import {AngularFireDatabaseModule} from '@angular/fire/database';
import { environment } from 'src/environments/environment';

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
    AppRoutingModule,
    MatButtonModule,
    AngularFireDatabaseModule,
    AngularFireModule.initializeApp(environment.firebaseConfig)

    
   
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
