import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./liste-eleves/liste-eleves.component').then(m => m.ListeElevesComponent)
  },
  {
    path: 'add',
    loadComponent: () =>
      import('./form-eleve/form-eleve.component').then(m => m.FormEleveComponent)
  },
  {
    path: 'edit/:id',
    loadComponent: () =>
      import('./form-eleve/form-eleve.component').then(m => m.FormEleveComponent)
  }
];
