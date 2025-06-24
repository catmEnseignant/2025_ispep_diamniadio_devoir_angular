import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListeElevesComponent } from './liste-eleves/liste-eleves.component';
import { FormEleveComponent } from './form-eleve/form-eleve.component';
import { ElevesRoutingModule } from './eleves-routing.module'; // ou eleves.routes.ts selon ton nom

@NgModule({
  declarations: [
    ListeElevesComponent,
    FormEleveComponent
  ],
  imports: [
    CommonModule,
    ElevesRoutingModule
  ]
})
export class ElevesModule {}
