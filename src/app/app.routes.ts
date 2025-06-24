import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';


export const routes: Routes = [
    {path:"eleves",
        loadChildren:()=>import("./eleves/eleves.routes").then((m) =>m.ELEVES_ROUTES)
    },

    {path:"enseignants",
        loadChildren:()=>import("./enseignants/enseignants.routes").then((m) =>m.ENSEIGNANTS_ROUTES)
    },

    {path:"home",component:HomeComponent},

    {path:"",redirectTo:"/home",pathMatch:"full"}
];
