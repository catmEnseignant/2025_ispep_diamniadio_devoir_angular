import { Routes } from '@angular/router';


import { ListeEleveComponent } from './liste-eleve/liste-eleve.component';
import { FormEleveComponent } from './form-eleve/form-eleve.component';


export const ELEVES_ROUTES: Routes = [
    {path:"liste-eleve",component:ListeEleveComponent},
    {path:"form-eleve",component:FormEleveComponent},

    {path:"",redirectTo:"/liste-eleve",pathMatch:"full"},

];
