import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
      <div class="container">
        <a class="navbar-brand fw-bold" routerLink="/">
          <i class="bi bi-mortarboard-fill me-2"></i>
          Gestion Scolaire
        </a>
        
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
          <span class="navbar-toggler-icon"></span>
        </button>
        
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav ms-auto">
            <li class="nav-item">
              <a class="nav-link" routerLink="/" routerLinkActive="active" [routerLinkActiveOptions]="{exact: true}">
                <i class="bi bi-house-fill me-1"></i>
                Accueil
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" routerLink="/eleves" routerLinkActive="active">
                <i class="bi bi-people-fill me-1"></i>
                Élèves
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" routerLink="/enseignants" routerLinkActive="active">
                <i class="bi bi-person-workspace me-1"></i>
                Enseignants
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  `
})
export class NavbarComponent {}