import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterModule, CommonModule],
  template: `
    <nav class="navbar navbar-expand-lg navbar-light bg-white shadow-sm">
      <div class="container">
        <a class="navbar-brand" routerLink="/">
          <i class="bi bi-mortarboard-fill me-2"></i>
          ISEP Gestion
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
  `,
  styles: [`
    .navbar-brand {
      font-size: 1.5rem;
      font-weight: 700;
    }
    
    .nav-link {
      font-weight: 500;
      transition: color 0.3s ease;
    }
    
    .nav-link:hover {
      color: #3498db !important;
    }
    
    .nav-link.active {
      color: #3498db !important;
      font-weight: 600;
    }
  `]
})
export class NavbarComponent {}