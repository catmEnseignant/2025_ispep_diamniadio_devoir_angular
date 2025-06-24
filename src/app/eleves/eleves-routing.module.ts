import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListeElevesComponent } from './liste-eleves/liste-eleves.component';
import { FormEleveComponent } from './form-eleve/form-eleve.component';

const routes: Routes = [
  { path: '', component: ListeElevesComponent },
  { path: 'add', component: FormEleveComponent },
  { path: 'edit/:id', component: FormEleveComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ElevesRoutingModule { }

