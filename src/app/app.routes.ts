import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
    
   { path:"enseignants",
   loadChildren:()=> import("./enseignants/enseignants.routes").then((m) => m.Enseignants_ROUTES),
  },

   
   { path:"eleves",
   loadChildren:()=> import("./eleves/eleves.routes").then((m) => m.Eleves_ROUTES),
  },

 {path:"home",component:HomeComponent},

{path:"",redirectTo:"/home",pathMatch:"full"}
];

