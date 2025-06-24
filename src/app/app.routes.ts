import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { provideClientHydration, withEventReplay } from '@angular/platform-browser';
import { provideHttpClient } from "@angular/common/http";

export const routes: Routes = [
  {
    path: "eleves",
    loadChildren: () =>
      import("./eleves/eleves.routes").then((m) => m.ELEVES_ROUTES),
  },
  {
    path: "enseignants",
    loadChildren: () =>
      import("./enseignants/enseignants.routes").then((m) => m.ENSEIGNANTS_ROUTES),
  },

  // {
  //   path: "enseignants",
  //   loadChildren: () =>
  //     import("./enseignants/enseignants.routes").then((m) => m.ENSEIGNANTS_ROUTES),
  // },

  { path: "home", component: HomeComponent },

  { path: "", redirectTo: "/home", pathMatch: "full" },
];

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideHttpClient(),
    provideRouter(routes),
    provideClientHydration(withEventReplay())
  ]
};
