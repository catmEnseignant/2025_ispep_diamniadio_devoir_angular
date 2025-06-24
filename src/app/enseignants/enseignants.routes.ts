import { Routes } from '@angular/router';

import { ListeEnseignantsComponent } from './liste-enseignants/liste-enseignants.component';
import { FormEnseignantComponent } from './form-enseignant/form-enseignant.component';

export const enseignantsRoutes: Routes = [
  { path: 'liste-enseignants', component: ListeEnseignantsComponent },
  { path: 'form-enseignant', component: FormEnseignantComponent },
  { path: 'form-enseignant/:id', component: FormEnseignantComponent }, // édition
];
