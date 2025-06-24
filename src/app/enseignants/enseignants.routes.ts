import { Routes } from '@angular/router';
import { ListeEnseignantComponent } from './liste-enseignant/liste-enseignant.component';
import { FormEnseignantComponent } from './form-enseignant/form-enseignant.component';




export const Enseignants_ROUTES: Routes = [
{path:"liste-enseignant",component:ListeEnseignantComponent},

  { path: 'ajouter', component: FormEnseignantComponent },
  { path: 'modifier/:id', component: FormEnseignantComponent},
 {path:"",redirectTo:"/liste-enseignant",pathMatch:"full"},
];