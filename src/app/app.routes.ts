import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';

export const APP_ROUTES: Routes = [
    {path:"enseignant",
        loadChildren:() => import("./enseignants/enseignants.routes").then((m) => m.ENSEIGNANTS_ROUTES)
    },

    {path:"eleve",
        loadChildren:() => import("./eleves/eleves.routes").then((m) => m.ELEVES_ROUTES)
    },

    {path:"home",component:HomeComponent},

    {path:"",redirectTo:"/home",pathMatch:"full"},
];
