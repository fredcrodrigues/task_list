import {ModuleWithProviders} from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListaTarefasComponent } from './lista-tarefas/lista-tarefas.component';


const routes: Routes = [
/*declarar rotas*/
  
  {path:'', component:ListaTarefasComponent}
];


export const routing: ModuleWithProviders<any> = RouterModule.forRoot(routes);


