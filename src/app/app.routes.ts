import { Routes } from '@angular/router';
import {ListComponent} from "./eleves/list/list.component";
import {AjoutComponent} from "./eleves/ajout/ajout.component";
import {AjoutEnseignantComponent} from "./enseignant/ajout-enseignant/ajout-enseignant.component";
import {ListEnseignantComponent} from "./enseignant/list-enseignant/list-enseignant.component";
import {EditElComponent} from "./eleves/edit-el/edit-el.component";
import {EditEnseignantComponent} from "./enseignant/edit-enseignant/edit-enseignant.component";


export const routes: Routes = [
    {path: 'eleves',component:ListComponent},
    {path: '',redirectTo:'eleves',pathMatch:'full'},

    {path:'eleves/ajouter',component:AjoutComponent},
    {path:'eleves/edit/:id',component:EditElComponent},

    {path: 'enseignant',component:ListEnseignantComponent},
    {path:'enseignant/ajouter',component:AjoutEnseignantComponent},
    {path:'enseignant/edit/:id',component:EditEnseignantComponent},

];
