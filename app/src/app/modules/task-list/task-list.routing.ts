
import { CadTaskComponent } from './cad-task/cad-task.component';

import { ModuleWithProviders, NgModule } from "@angular/core";
import { Routes, RouterModule } from '@angular/router';


const appRoutindTask: Routes  =[

      {path: 'cad-task' , component: CadTaskComponent},
  //  {path: 'nav-task' , component: NavTaskComponent }

]


export const routing: ModuleWithProviders<any> = RouterModule.forRoot(appRoutindTask)
@NgModule({

    imports: [RouterModule.forRoot(appRoutindTask)],
    exports: [RouterModule]

})

export class TaskListRouting {}