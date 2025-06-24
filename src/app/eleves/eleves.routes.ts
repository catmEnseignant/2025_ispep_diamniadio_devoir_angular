import { Routes } from '@angular/router';
import { ListeEleveComponent } from './liste-eleve/liste-eleve.component';
import { FormEleveComponent } from './form-eleve/form-eleve.component';




export const Eleves_ROUTES: Routes = [
{path:"liste-eleve",component:ListeEleveComponent},

  { path: 'ajouter', component: FormEleveComponent },
  { path: 'modifier/:id', component: FormEleveComponent },

 {path:"",redirectTo:"/liste-eleve",pathMatch:"full"},
];