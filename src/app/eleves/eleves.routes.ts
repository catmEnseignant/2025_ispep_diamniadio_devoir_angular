import { Routes } from '@angular/router';
import { ElevesListComponent } from './eleves-list.component';
import { ElevesFormComponent } from './eleves-form.component';

export const ELEVES_ROUTES: Routes = [
  { path: '', component: ElevesListComponent },
  { path: 'ajouter', component: ElevesFormComponent },
  { path: 'modifier/:id', component: ElevesFormComponent },
];
