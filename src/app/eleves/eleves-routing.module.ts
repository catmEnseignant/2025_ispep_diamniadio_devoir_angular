import { Routes } from '@angular/router';
import { ListElevesComponent } from './list-eleves/list-eleves.component';
import { FormEleveComponent } from './form-eleve/form-eleve.component';

export const elevesRoutes: Routes = [
  { path: '', component: ListElevesComponent },
  { path: 'ajouter', component: FormEleveComponent },
  { path: 'editer/:id', component: FormEleveComponent },
];

