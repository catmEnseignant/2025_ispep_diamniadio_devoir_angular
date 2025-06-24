import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ListeElevesComponent } from './eleves/liste-eleves/liste-eleves.component';
import { FormEleveComponent } from './eleves/form-eleve/form-eleve.component';
import { ListeEnseignantsComponent } from './enseignants/liste-enseignants/liste-enseignants.component';
import { FormEnseignantComponent } from './enseignants/form-enseignant/form-enseignant.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },

  // Routes Élèves
  { path: 'liste-eleves', component: ListeElevesComponent },
  { path: 'form-eleve', component: FormEleveComponent },

  // Routes Enseignants
  { path: 'liste-enseignants', component: ListeEnseignantsComponent },
  { path: 'form-enseignant', component: FormEnseignantComponent },

  // Redirection inconnue
  { path: '**', redirectTo: '', pathMatch: 'full' }
];
