import { Routes } from '@angular/router';
import { ListElevesComponent } from './eleves/list-eleves/list-eleves.component';
// import { FormEleveComponent } from './eleves/form-eleve/form-eleve.component';
import { ListEnseignantsComponent } from './enseignants/list-enseignants/list-enseignants.component';

export const routes: Routes = [
  { path: '', redirectTo: 'eleves', pathMatch: 'full' },

  { path: 'eleves', component: ListElevesComponent },
 { path: 'eleves/ajouter', loadComponent: () => import('./eleves/form-eleve/form-eleve.component').then(m => m.FormEleveComponent) },
{ path: 'eleves/editer/:id', loadComponent: () => import('./eleves/form-eleve/form-eleve.component').then(m => m.FormEleveComponent) },
 // ✅ ajout nécessaire

  { path: 'enseignants', component: ListEnseignantsComponent }
];
