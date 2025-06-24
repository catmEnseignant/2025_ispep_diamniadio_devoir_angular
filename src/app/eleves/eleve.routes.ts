import { Enseignant } from './../enseignants/enseignant';
import { Routes } from '@angular/router';
import { ListeEleveComponent } from './list-eleves/list-eleves';


export const ELEVE_ROUTES: Routes = [
  { path: 'list-eleve', component: ListeEleveComponent },
  { path: 'form-eleve', component: FormElevesComponent },
  { path: '', redirectTo: '/list-eleve', pathMatch: 'full' }
];
