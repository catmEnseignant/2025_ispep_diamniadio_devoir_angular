import { Routes } from '@angular/router';
import { HomeComponent } from './pages/homePage/home/home.component';

export const APP_ROUTES: Routes = [
    {path : "eleves",
        loadChildren : () => import('./eleves/eleve.routes').then((el) => el.ELEVE_ROUTES)  
    },
    {path : "enseignants",
        loadChildren : () => import('./enseignant/enseignant.routes').then((ens) => ens.ENSEIGNANT_ROUTES)
    },
    {path : "homes", component:HomeComponent},
    {path : "", redirectTo:"/homes", pathMatch:"full"}
];
