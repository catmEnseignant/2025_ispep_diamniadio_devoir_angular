import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-lg-8">
          <div class="text-center mb-5 animate-fade-in">
            <i class="bi bi-mortarboard-fill display-1 text-primary mb-4"></i>
            <h1 class="display-4 fw-bold text-primary mb-3">
              Bienvenue dans le système de gestion scolaire
            </h1>
            <p class="lead text-muted mb-4">
              Gérez efficacement vos enseignants et élèves avec notre plateforme moderne et intuitive.
            </p>
          </div>
          
          <div class="row g-4">
            <div class="col-md-6">
              <div class="card h-100 border-0 shadow-sm">
                <div class="card-body text-center p-4">
                  <i class="bi bi-people-fill display-4 text-info mb-3"></i>
                  <h4 class="card-title">Gestion des Élèves</h4>
                  <p class="card-text text-muted">
                    Ajoutez, modifiez et consultez les informations de vos élèves en toute simplicité.
                  </p>
                  <a routerLink="/eleves" class="btn btn-info btn-lg mt-auto">
                    <i class="bi bi-arrow-right me-2"></i>
                    Voir les élèves
                  </a>
                </div>
              </div>
            </div>
            
            <div class="col-md-6">
              <div class="card h-100 border-0 shadow-sm">
                <div class="card-body text-center p-4">
                  <i class="bi bi-person-workspace display-4 text-success mb-3"></i>
                  <h4 class="card-title">Gestion des Enseignants</h4>
                  <p class="card-text text-muted">
                    Administrez votre corps enseignant avec des outils performants et intuitifs.
                  </p>
                  <a routerLink="/enseignants" class="btn btn-success btn-lg mt-auto">
                    <i class="bi bi-arrow-right me-2"></i>
                    Voir les enseignants
                  </a>
                </div>
              </div>
            </div>
          </div>
          
          <div class="row mt-5">
            <div class="col-12">
              <div class="card bg-light border-0">
                <div class="card-body p-4">
                  <div class="row align-items-center">
                    <div class="col-md-8">
                      <h5 class="mb-2">
                        <i class="bi bi-info-circle-fill text-primary me-2"></i>
                        Fonctionnalités principales
                      </h5>
                      <ul class="list-unstyled mb-0">
                        <li><i class="bi bi-check-circle-fill text-success me-2"></i>CRUD complet pour élèves et enseignants</li>
                        <li><i class="bi bi-check-circle-fill text-success me-2"></i>Interface moderne avec Bootstrap 5</li>
                        <li><i class="bi bi-check-circle-fill text-success me-2"></i>Formulaires réactifs avec validation</li>
                        <li><i class="bi bi-check-circle-fill text-success me-2"></i>Design responsive et accessible</li>
                      </ul>
                    </div>
                    <div class="col-md-4 text-center">
                      <i class="bi bi-award-fill display-2 text-warning"></i>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  `
})
export class HomeComponent {}