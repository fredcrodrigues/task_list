import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



import { UserLoginComponent } from './user-login/user-login.component';



@NgModule({
  declarations: [UserLoginComponent],
 
  imports: [CommonModule ,   
  FormsModule , 
  ReactiveFormsModule],
 
  exports: [ UserLoginComponent]
})
export class UserTaskModule { }
