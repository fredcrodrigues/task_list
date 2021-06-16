
import { NgModule } from "@angular/core";

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { NavTaskComponent } from './nav-task/nav-task.component'
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';


@NgModule({
   declarations:[NavTaskComponent],
   imports:[CommonModule , FontAwesomeModule , 
      MatToolbarModule,
      MatIconModule, 
      MatButtonModule,
      RouterModule
  
   ],
   exports:[NavTaskComponent]
})

export class SharedModule{}