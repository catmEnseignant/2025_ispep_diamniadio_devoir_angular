import { Routes } from '@angular/router';
import { ListeEleveComponent } from './liste-eleve/liste-eleve.component';




export const Eleves_ROUTES: Routes = [
{path:"liste-eleve",component:ListeEleveComponent},


 {path:"",redirectTo:"/liste-eleves",pathMatch:"full"},
];