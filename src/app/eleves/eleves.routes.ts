import { Routes } from '@angular/router';
import { ListeElevesComponent } from './liste-eleves/liste-eleves.component';
import { FormEleveComponent } from './form-eleve/form-eleve.component';

export const routes: Routes = [
  { path: '', redirectTo: '/liste-eleves', pathMatch: 'full' }, // redirection initiale
  { path: 'liste-eleves', component: ListeElevesComponent },
  { path: 'form-eleve', component: FormEleveComponent },
  { path: '**', redirectTo: '/liste-eleves' }
];
