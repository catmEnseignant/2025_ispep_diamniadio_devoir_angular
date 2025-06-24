import { Routes } from '@angular/router';
import { EnseignantsListComponent } from './enseignants-list/enseignants-list.component';
import { EnseignantsFormComponent } from './enseignants-form/enseignants-form.component';

export const enseignantsRoutes: Routes = [
  { path: 'enseignants-list', component: EnseignantsListComponent },
  { path: 'enseignants-form', component: EnseignantsFormComponent }
];
