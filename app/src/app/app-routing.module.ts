
import { ComponentFixture } from '@angular/core/testing';

import { NgModule } from '@angular/core';
import {Component, ModuleWithProviders} from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CadTaskComponent } from './modules/task-list/cad-task/cad-task.component';
import { UserFormComponent } from './modules/user-task/user-form/user-form.component';
import { UserLoginComponent } from './modules/user-task/user-login/user-login.component';

const appRouting: Routes = [

    
    {path:'usuarios',  component: UserFormComponent},
    {path:'tarefas',  component: CadTaskComponent},
    {path:'' ,  component: UserLoginComponent },
   
 
   

]

export const routing: ModuleWithProviders<any> = RouterModule.forRoot(appRouting);


@NgModule({
    imports: [RouterModule.forRoot(appRouting) ],
    exports: [RouterModule] 
   
  })

  export class AppRoutingModule{ }
