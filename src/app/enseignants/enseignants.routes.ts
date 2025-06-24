import { Routes } from '@angular/router';
import { ListeEnseignantsComponent } from './liste-enseignants/liste-enseignants.component';
import { FormEnseignantComponent } from './form-enseignant/form-enseignant.component';

export const enseignantsRoutes: Routes = [
  { path: '', component: ListeEnseignantsComponent },
  { path: 'form', component: FormEnseignantComponent },
];
