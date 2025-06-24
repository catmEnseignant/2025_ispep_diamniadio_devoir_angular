import { Routes } from '@angular/router';
import { EnseignantListComponent } from './enseignant-list/enseignant-list.component';
import { EnseignantFormComponent } from './enseignant-form/enseignant-form.component';

export const enseignantsRoutes: Routes = [
  {
    path: '',
    component: EnseignantListComponent
  },
  {
    path: 'form',
    component: EnseignantFormComponent
  },
  {
    path: 'form/:id',
    component: EnseignantFormComponent
  }
];