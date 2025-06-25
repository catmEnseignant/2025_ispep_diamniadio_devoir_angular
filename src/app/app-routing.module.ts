import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'eleves', pathMatch: 'full' }, // ✅ redirection vers /eleves
  {
    path: 'eleves',
    loadChildren: () => import('./eleves/eleves.module').then(m => m.ElevesModule)
  },
  {
    path: 'enseignants',
    loadChildren: () => import('./enseignants/enseignants.module').then(m => m.EnseignantsModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
