import { Routes } from '@angular/router';
import { ListEleveComponent } from './list-eleve/list-eleve.component';
import { FormEleveComponent } from './form-eleve/form-eleve.component';






export const ELEVES_ROUTES: Routes = [
    {path:"liste-eleve",component:ListEleveComponent},
    {path:"form-eleve",component:FormEleveComponent},
    {path:"",redirectTo:"/list-eleve",pathMatch:"full"},
   
];



