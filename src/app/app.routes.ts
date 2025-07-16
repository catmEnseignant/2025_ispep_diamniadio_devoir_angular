import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';



export const APP_ROUTES: Routes = [
    {path:"eleves",
        loadChildren:() => import("./eleves/eleves.routes").then((e) => e.ELEVE_ROUTES),
    },
    {path:"enseignants",
       loadChildren:() => import("./enseignants/enseignants.routes").then((e) => e.ENSEIGNANT_ROUTES),
    },
    {path:"homes", component:HomeComponent},
    {path:"", redirectTo:"/homes", pathMatch:"full"}
];