import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: 'eleves', pathMatch: 'full' },
  {
    path: 'eleves',
    loadChildren: () => import('./eleves/eleves.routes').then(m => m.ELEVES_ROUTES)
  },
  {
    path: 'enseignants',
    loadChildren: () => import('./enseignants/enseignants.routes').then(m => m.ENSEIGNANTS_ROUTES)
  }
];
