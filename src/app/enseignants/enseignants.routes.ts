import { Routes } from '@angular/router';
import { ListEnseignantComponent } from './enseignant-list/enseignant-list.component';
import { FormEnseignantComponent } from './enseignant-form/enseignant-form.component';


export const ENSEIGNANT_ROUTES: Routes = [
  {path:"list-enseignants",component:ListEnseignantComponent},
  {path:"form-enseignant",component:FormEnseignantComponent},
  {path:"",redirectTo:"/list-enseignants" ,pathMatch:"full"},



];



