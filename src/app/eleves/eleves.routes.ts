// src/app/eleves/eleves.routes.ts
import { Routes } from '@angular/router';
import { ListEleveComponent } from './list-eleve/list-eleve.component';
import { FormEleveComponent } from './form-eleve/form-eleve.component';

export const ELEVES_ROUTES: Routes = [
  { path: 'list-eleve', component: ListEleveComponent },
  { path: 'ajouter', component: FormEleveComponent },
  { path: 'modifier/:id', component: FormEleveComponent }
];
