import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ListElevesComponent } from './list-eleves/list-eleves.component';
import { FormEleveComponent } from './form-eleve/form-eleve.component';
import { elevesRoutes } from './eleves-routing.module';
// import { elevesRoutes } from './eleves.routes';

@NgModule({
  declarations: [
    ListElevesComponent,
    FormEleveComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule.forChild(elevesRoutes)
  ]
})
export class ElevesModule { }

