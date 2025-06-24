import { Routes } from '@angular/router';
import { ListEleveComponent } from './list-eleve/list-eleve.component';
import { FormEleveComponent } from './form-eleve/form-eleve.component';

export const ELEVES_ROUTES: Routes = [
  { path: 'list-eleves', component: ListEleveComponent },
  { path: 'ajout', component: FormEleveComponent },          // route pour ajout
  { path: 'edit/:id', component: FormEleveComponent },       // route pour modification avec param id
  { path: '', redirectTo: 'list-eleves', pathMatch: 'full' }
];
