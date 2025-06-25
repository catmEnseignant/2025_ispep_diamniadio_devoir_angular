import { Routes } from '@angular/router';
import { ElevesListComponent } from './eleves-list/eleves-list.component';
import { ElevesFormComponent } from './eleves-form/eleves-form.component';



export const elevesRoutes: Routes = [
  { path: '', component: ElevesListComponent },
  { path: 'ajouter', component: ElevesFormComponent },
  { path: 'modifier/:id', component: ElevesFormComponent }
];
