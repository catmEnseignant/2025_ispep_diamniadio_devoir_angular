// Fichier : app.routes.ts
import { Routes } from '@angular/router';



export const routes: Routes = [
  { path: '', redirectTo: 'eleves', pathMatch: 'full' }, // page d'accueil par défaut
  { path: 'enseignants' },
  { path: 'enseignants/add' },
  { path: 'enseignants/edit/:id' },
  { path: 'eleves' },
  { path: 'eleves/add'},
  { path: 'eleves/edit/:id' }
];
