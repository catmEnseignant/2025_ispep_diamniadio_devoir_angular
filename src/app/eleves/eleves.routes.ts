import { Routes } from '@angular/router';
import { ListeElevesComponent } from './liste-eleves/liste-eleves.component';
import { AjoutElevesComponent } from './ajout-eleve/ajout-eleve.component';


export const ELEVES_ROUTES: Routes = [
  { path: 'list-eleves', component: ListeElevesComponent },
  { path: 'ajout-eleves', component: AjoutElevesComponent },
  { path: '', redirectTo: '/eleves/liste-eleves', pathMatch: 'full' }
];
