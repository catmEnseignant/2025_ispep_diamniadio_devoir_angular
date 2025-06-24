import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { EleveService } from '../../../services/eleve.service';
import { EnseignantService } from '../../../services/enseignant.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <div class="hero-section">
      <div class="container">
        <div class="row justify-content-center text-center">
          <div class="col-lg-8">
            <h1 class="display-4 fw-bold mb-4 fade-in">
              <i class="bi bi-mortarboard-fill me-3"></i>
              Bienvenue A L'ISEP Diamniadio
            </h1>
            <p class="lead mb-5 fade-in">
              Système de gestion des élèves et enseignants de l'ISPEP Diamniadio
            </p>
          </div>
        </div>
      </div>
    </div>

    <div class="container my-5">
      <div class="row g-4">
        <div class="col-md-6">
          <div class="stats-card">
            <div class="stats-number">{{ totalEleves }}</div>
            <h4 class="mt-3 mb-3">Élèves</h4>
            <p class="text-muted mb-4">Nombre total d'élèves inscrits</p>
            <a routerLink="/eleves" class="btn btn-primary">
              <i class="bi bi-people-fill me-2"></i>
              Gérer les élèves
            </a>
          </div>
        </div>
        <div class="col-md-6">
          <div class="stats-card">
            <div class="stats-number">{{ totalEnseignants }}</div>
            <h4 class="mt-3 mb-3">Enseignants</h4>
            <p class="text-muted mb-4">Nombre total d'enseignants</p>
            <a routerLink="/enseignants" class="btn btn-success">
              <i class="bi bi-person-workspace me-2"></i>
              Gérer les enseignants
            </a>
          </div>
        </div>
      </div>

      <div class="row mt-5">
        <div class="col-12">
          <div class="card">
            <div class="card-body p-5">
              <h3 class="card-title text-center mb-4">
                <i class="bi bi-gear-fill me-2"></i>
                Fonctionnalités
              </h3>
              <div class="row g-4">
                <div class="col-md-4 text-center">
                  <i class="bi bi-plus-circle-fill text-primary" style="font-size: 3rem;"></i>
                  <h5 class="mt-3">Ajouter</h5>
                  <p class="text-muted">Ajoutez facilement de nouveaux élèves et enseignants</p>
                </div>
                <div class="col-md-4 text-center">
                  <i class="bi bi-pencil-square text-success" style="font-size: 3rem;"></i>
                  <h5 class="mt-3">Modifier</h5>
                  <p class="text-muted">Modifiez les informations existantes en temps réel</p>
                </div>
                <div class="col-md-4 text-center">
                  <i class="bi bi-trash-fill text-danger" style="font-size: 3rem;"></i>
                  <h5 class="mt-3">Supprimer</h5>
                  <p class="text-muted">Supprimez les enregistrements avec confirmation</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  `
})
export class HomeComponent implements OnInit {
  totalEleves = 0;
  totalEnseignants = 0;

  constructor(
    private eleveService: EleveService,
    private enseignantService: EnseignantService
  ) {}

  ngOnInit() {
    this.loadStats();
  }

  loadStats() {
    this.eleveService.getEleves().subscribe({
      next: (eleves) => this.totalEleves = eleves.length,
      error: (error) => console.error('Erreur lors du chargement des élèves:', error)
    });

    this.enseignantService.getEnseignants().subscribe({
      next: (enseignants) => this.totalEnseignants = enseignants.length,
      error: (error) => console.error('Erreur lors du chargement des enseignants:', error)
    });
  }
}