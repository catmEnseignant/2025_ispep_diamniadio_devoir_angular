import { Component } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter } from '@angular/router';
import { provideHttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './app/shared/navbar/navbar.component';
import { FooterComponent } from './app/shared/footer/footer.component';
import { HomeComponent } from './app/home/home.component';
import { enseignantsRoutes } from './app/enseignants/enseignants.routes';
import { elevesRoutes } from './app/eleves/eleves.routes';

const routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'enseignants',
    loadChildren: () => enseignantsRoutes
  },
  {
    path: 'eleves',
    loadChildren: () => elevesRoutes
  },
  {
    path: '**',
    redirectTo: ''
  }
];

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, NavbarComponent, FooterComponent],
  template: `
    <div class="d-flex flex-column min-vh-100">
      <app-navbar></app-navbar>
      <main class="main-content flex-grow-1">
        <router-outlet></router-outlet>
      </main>
      <app-footer></app-footer>
    </div>
  `
})
export class App {}

bootstrapApplication(App, {
  providers: [
    provideRouter(routes),
    provideHttpClient()
  ]
});