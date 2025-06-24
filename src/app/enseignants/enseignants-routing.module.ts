import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListeEnseignantsComponent } from './liste-enseignants/liste-enseignants.component';
import { FormEnseignantComponent } from './form-enseignant/form-enseignant.component';

const routes: Routes = [
  { path: '', component: ListeEnseignantsComponent },
  { path: 'add', component: FormEnseignantComponent },
  { path: 'edit/:id', component: FormEnseignantComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EnseignantsRoutingModule { }

