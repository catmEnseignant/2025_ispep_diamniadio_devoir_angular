import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

export const APP_ROUTES: Routes = [
  {
    path: 'eleves',
    loadChildren: () =>
      import('./eleves/eleves.routes').then(m => m.ELEVES_ROUTES),
  },
  {
    path: 'enseignants',
    loadChildren: () =>
      import('./enseignant/enseignant.routes').then(m => m.ENSEIGNANTS_ROUTES),
  },
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full',
  },
  {
    path: '**',
    redirectTo: '/home',
  },
];
