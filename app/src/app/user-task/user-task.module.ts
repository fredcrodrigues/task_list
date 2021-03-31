import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { UserLoginComponent } from './user-login/user-login.component';
import { UserFormComponent } from './user-form/user-form.component';



@NgModule({
  declarations: [UserLoginComponent, UserFormComponent],
 
  imports: [CommonModule ,   
  FormsModule , 
  ReactiveFormsModule],
 
  exports: [ UserLoginComponent , UserFormComponent]
})
export class UserTaskModule { }
