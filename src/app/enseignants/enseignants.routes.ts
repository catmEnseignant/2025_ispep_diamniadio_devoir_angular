import { Routes } from '@angular/router';
import { EnseignantsListComponent } from './enseignants-list/enseignants-list.component';
import { EnseignantsFormComponent } from './enseignants-form/enseignants-form.component';



export const elevesRoutes: Routes = [
  { path: '', component: EnseignantsListComponent },
  { path: 'ajouter', component: EnseignantsFormComponent },
  { path: 'modifier/:id', component: EnseignantsFormComponent }
];
