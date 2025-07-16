import { FormEleveComponent } from './form-eleve/form-eleve.component';
import { Routes } from '@angular/router';
import { ListeElevesComponent } from './list-eleve/list-eleve.component';

export const ELEVE_ROUTES: Routes = [
  { path: "list-eleve", component: ListeElevesComponent },
  { path: "form-eleve", component: FormEleveComponent },
  { path: "", redirectTo: "list-eleve", pathMatch: "full" }
];
