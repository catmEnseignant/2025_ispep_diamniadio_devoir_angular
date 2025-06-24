import { Routes } from '@angular/router';
import { ListeElevesComponent } from './liste-eleves/liste-eleves.component';
import { AjoutEleveComponent } from './ajout-eleve/ajout-eleve.component';

export const ELEVES_ROUTES : Routes = [
   {path:"list-eleves",component:ListeElevesComponent},
   {path:"ajout-eleve",component:AjoutEleveComponent},
   {path:"ajout-eleve/:numero_cart",component:AjoutEleveComponent},
   {path:"",redirectTo:"/list-eleves",pathMatch:"full"} 
];
