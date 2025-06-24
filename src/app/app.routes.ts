import { Routes } from '@angular/router';
import { ENSEIGNANT_ROUTES } from './enseignants/enseignants.routes';
import { ELEVE_ROUTES } from './eleves/eleves.routes';
import { AppComponent } from './app.component';

//import { Matiere_ROUTES } from './matieres/matieres.routes';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';

export const routes: Routes =  [
  {path:"enseignants",
    loadChildren:() => import("./enseignants/enseignants.routes").then((m) => m.ENSEIGNANT_ROUTES),
  },

  {path:"eleves",
    loadChildren:() => import("./eleves/eleves.routes").then((m) => m.ELEVE_ROUTES),
  },

  {path:"home" ,component:HomeComponent},

  {path:"",redirectTo:"/home" ,pathMatch:"full"},
];
