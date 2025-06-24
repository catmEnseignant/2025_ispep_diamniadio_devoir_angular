import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ListeElevesComponent } from './eleves/liste-eleves/liste-eleves.component';
import { FormEleveComponent } from './eleves/form-eleve/form-eleve.component';
import { ListeEnseignantsComponent } from './enseignants/liste-enseignants/liste-enseignants.component';
import { FormEnseignantComponent } from './enseignants/form-enseignant/form-enseignant.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'eleves/liste-eleves', component: ListeElevesComponent },
  { path: 'eleves/form-eleve', component: FormEleveComponent },
  { path: 'enseignants/liste-enseignants', component: ListeEnseignantsComponent },
  { path: 'enseignants/form-enseignant', component: FormEnseignantComponent },
];
