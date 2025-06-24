import { Routes } from '@angular/router';
import { ListeElevesComponent } from './liste-eleves/liste-eleves.component';
import { FormEleveComponent } from './form-eleve/form-eleve.component';

export const elevesRoutes: Routes = [
  { path: '', component: ListeElevesComponent },
  { path: 'form', component: FormEleveComponent },
];
