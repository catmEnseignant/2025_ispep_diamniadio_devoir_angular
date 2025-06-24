import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router'; // pour router-outlet

import { AppComponent } from './app.component';
import { NavbarComponent } from './shared/navbar/navbar.component';

// Import des composants que tu utilises dans les routes
import { ListElevesComponent } from './eleves/list-eleves/list-eleves.component';
import { FormEleveComponent } from './eleves/form-eleve/form-eleve.component';
import { ListEnseignantsComponent } from './enseignants/list-enseignants/list-enseignants.component';

// Import de tes routes
import { routes } from './app.routes';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ListElevesComponent,
    FormEleveComponent,
    ListEnseignantsComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)  // ⚠️ Ne pas oublier forRoot avec tes routes
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
