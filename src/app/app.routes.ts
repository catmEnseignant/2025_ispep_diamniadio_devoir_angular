import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  {
    path: 'eleves',
    loadChildren: () =>
      import('./eleves/eleves.routes').then(m => m.routes) // OK
  },
  {
    path: 'enseignants',
    loadChildren: () =>
      import('./enseignants/enseignants.routes').then(m => m.routes) // ✅ corrige bien le nom ici
  }
];

