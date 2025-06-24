import { Routes } from '@angular/router';
import { ListeEnseignantComponent } from './liste-enseignant/liste-enseignant.component';




export const Enseignants_ROUTES: Routes = [
{path:"liste-enseignant",component:ListeEnseignantComponent},


 {path:"",redirectTo:"/liste-enseignant",pathMatch:"full"},
];