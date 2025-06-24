import { Routes } from '@angular/router';
import { ListeEnseignantsComponent } from './liste-enseignants/liste-enseignants.component';
import { AjoutEnseignantsComponent } from './ajout-enseignants/ajout-enseignants.component';

export const ENSEIGNANTS_ROUTES : Routes = [
   {path:"list-enseignants",component:ListeEnseignantsComponent},
   {path:"ajout-enseignants",component:AjoutEnseignantsComponent},
   {path:"",redirectTo:"/list-eleves",pathMatch:"full"} 
];
