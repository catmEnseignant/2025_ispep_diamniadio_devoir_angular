import { Routes } from '@angular/router';
import { ElevesFormComponent } from './eleves-form/eleves-form.component';
import { ElevesListComponent } from './eleves-list/eleves-list.component';



export const ELEVES_ROUTES: Routes = [
    {path:"eleves-list" ,component:ElevesListComponent},
    {path:"eleves-form" ,component:ElevesFormComponent},

    {path:"",redirectTo:"/eleves-list",pathMatch:"full"},  
];
