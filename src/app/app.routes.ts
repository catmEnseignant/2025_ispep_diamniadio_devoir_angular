import { Routes } from '@angular/router';
import { ELEVE_ROUTES } from './eleves/eleves.routes';
import { ENSEIGNANT_ROUTES } from './enseignants/enseignants.routes';

export const APP_ROUTES: Routes = [
  { 
    path: 'eleves',
    children: ELEVE_ROUTES
  },
  { 
    path: 'enseignants',
    children: ENSEIGNANT_ROUTES
  },
  { path: '', redirectTo: '/eleves', pathMatch: 'full' }
];