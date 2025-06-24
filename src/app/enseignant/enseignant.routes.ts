import { Routes } from "@angular/router";
import { ListEnseignantComponent } from "./list-enseignant/list-enseignant.component";
import { FormEnseignantComponent } from "./form-enseignant/form-enseignant.component";

export const ENSEIGNANT_ROUTES : Routes = [
    {path:"list-enseignant", component:ListEnseignantComponent},
    {path:"form-enseignant", component:FormEnseignantComponent},
    {path:"", redirectTo:"/list-enseignant", pathMatch:"full"}
]