import {RouterModule, Routes,} from '@angular/router';
import { NgModule } from '@angular/core';
import { HomeComponent } from './components/home/home.component';
import { ElevesListComponent } from './components/eleves/eleves-list/eleves-list.component';
import { ElevesFormsComponent } from './components/eleves/eleves-forms/eleves-forms.component';
// import { EnseignantsListComponent } from './components/enseignants/enseignants-list/enseignants-list.component';
// import { EnseignantsFormsComponent } from './components/enseignants/enseignants-forms/enseignants-forms.component';

export const routes: Routes = [

    { path: '', component: HomeComponent },
    { path: 'eleves', component: ElevesFormsComponent },
    { path: 'eleves/add', component: ElevesListComponent },
    { path: 'eleves/edit/:id', component: ElevesFormsComponent },
    // { path: 'enseignants', component: EnseignantsListComponent },
    // { path: 'enseignants/add', component: EnseignantsFormsComponent },
    // { path: 'enseignants/edit/:id', component: EnseignantsFormsComponent },
    { path: '**', redirectTo: '' }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }


