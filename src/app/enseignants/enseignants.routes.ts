import { Routes } from '@angular/router';
import { ListeEnseignantComponent } from './liste-enseignant/liste-enseignant.component';
import { FormEnseignantComponent } from './form-enseignant/form-enseignant.component';

export const ENSEIGNANTS_ROUTES: Routes = [
  { path: 'liste-enseignant', component: ListeEnseignantComponent },
  { path: 'form-enseignant', component: FormEnseignantComponent },
  { path: '', redirectTo: 'liste-enseignant', pathMatch: 'full' }
];
