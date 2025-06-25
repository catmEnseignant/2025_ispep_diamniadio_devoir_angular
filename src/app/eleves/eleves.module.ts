import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { elevesRoutes } from './eleves.routes';
import { ElevesListComponent } from './eleves-list/eleves-list.component';
import { ElevesFormComponent } from './eleves-form/eleves-form.component';

@NgModule({
  declarations: [
    ElevesListComponent,
    ElevesFormComponent
    
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule.forChild(elevesRoutes)
  ]
})
export class ElevesModule { }
