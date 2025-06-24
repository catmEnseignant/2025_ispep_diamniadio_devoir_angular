import { Routes } from '@angular/router';
import { EnseignantsListComponent } from './enseignants-list.component';
import { EnseignantsFormComponent } from './enseignants-form.component';

export const ENSEIGNANTS_ROUTES: Routes = [
  { path: '', component: EnseignantsListComponent },
  { path: 'ajouter', component: EnseignantsFormComponent },
  { path: 'modifier/:id', component: EnseignantsFormComponent },
];
