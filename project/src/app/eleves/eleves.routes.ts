import { Routes } from '@angular/router';
import { EleveListComponent } from './eleve-list/eleve-list.component';
import { EleveFormComponent } from './eleve-form/eleve-form.component';

export const elevesRoutes: Routes = [
  {
    path: '',
    component: EleveListComponent
  },
  {
    path: 'form',
    component: EleveFormComponent
  },
  {
    path: 'form/:id',
    component: EleveFormComponent
  }
];