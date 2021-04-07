

import { AppRoutingModuleUsertask } from './user-task.routing';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { UserLoginComponent } from './user-login/user-login.component';
import { UserFormComponent } from './user-form/user-form.component';
import { SharedModule } from './../../shared/shared.module';

import {MatButtonModule} from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';



@NgModule({
  declarations: [UserLoginComponent, UserFormComponent],
 
  imports: [CommonModule ,   
  FormsModule , 
  ReactiveFormsModule ,
  AppRoutingModuleUsertask ,
  SharedModule,
  MatFormFieldModule,
  MatButtonModule,
  MatInputModule,
 
  ],
 
  exports: [ UserLoginComponent , UserFormComponent]
})
export class UserTaskModule { }
