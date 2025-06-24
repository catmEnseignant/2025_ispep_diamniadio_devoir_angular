import { Routes } from '@angular/router';
import { ListEleveComponent } from './eleve-list/eleve-list.component';
import { FormEleveComponent } from './eleve-form/eleve-form.component';


export const ELEVE_ROUTES: Routes = [
  {path:"list-eleves",component:ListEleveComponent},
  {path:"form-eleve",component:FormEleveComponent},
  {path:"",redirectTo:"/list-eleves" ,pathMatch:"full"},



];



