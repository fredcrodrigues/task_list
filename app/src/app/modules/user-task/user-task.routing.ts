

import { NgModule, ModuleWithProviders, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule, Router } from '@angular/router';

import{UserFormComponent} from './user-form/user-form.component';
import { UserLoginComponent } from './user-login/user-login.component';

const appRoutingUser: Routes = [

  {path:'user-form' ,  component: UserFormComponent }, 
  {path:'user-login', component: UserLoginComponent} 

]

export const routing: ModuleWithProviders<any> = RouterModule.forRoot(appRoutingUser);


@NgModule({
    imports: [RouterModule.forRoot(appRoutingUser) ],
    exports: [RouterModule] 
   
  })

  export class AppRoutingModuleUsertask { }
