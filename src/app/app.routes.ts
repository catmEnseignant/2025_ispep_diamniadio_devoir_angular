// src/app/app.routes.ts
import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: 'enseignants',
        loadChildren: () =>
          import('./enseignants/enseignants.routes').then((m) => m.ENSEIGNANTS_ROUTES),
      },
  
  {
    path: 'eleves',
    loadChildren: () =>
      import('./eleves/eleves.routes').then((m) => m.ELEVES_ROUTES),
  },
  { path: '', redirectTo: 'enseignants', pathMatch: 'full' },
];
