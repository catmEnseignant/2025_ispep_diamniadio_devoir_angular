import { Routes } from '@angular/router';
import { ListEnseignantComponent } from './list-enseignant/list-enseignant.component';
import { FormEnseignantComponent } from './form-enseignant/form-enseignant.component';

export const ENSEIGNANTS_ROUTES: Routes = [
  { path: 'list-enseignant', component: ListEnseignantComponent }, // <== route par défaut /enseignants
  { path: 'form-enseignant', component: FormEnseignantComponent },
  { path: 'form-enseignant/:id', component: FormEnseignantComponent }
];
