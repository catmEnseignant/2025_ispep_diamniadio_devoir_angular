import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./liste-enseignants/liste-enseignants.component').then(m => m.ListeEnseignantsComponent)
  },
  {
    path: 'add',
    loadComponent: () =>
      import('./form-enseignant/form-enseignant.component').then(m => m.FormEnseignantComponent)
  },
  {
    path: 'edit/:id',
    loadComponent: () =>
      import('./form-enseignant/form-enseignant.component').then(m => m.FormEnseignantComponent)
  }
];
