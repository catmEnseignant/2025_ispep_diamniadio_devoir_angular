import { Routes } from '@angular/router';
import { ListEnseignantComponent } from './list-enseignant/list-enseignant.component';
import { FormEnseignantComponent } from './form-enseignant/form-enseignant.component';

export const ENSEIGNANTS_ROUTES: Routes = [
  { path: "liste-enseignants", component: ListEnseignantComponent },
  { path: "ajout", component: FormEnseignantComponent },
  { path: "edit/:id", component: FormEnseignantComponent },
  { path: "", redirectTo: "liste-enseignants", pathMatch: "full" }
];
