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
    <section style="background: #eef2f7; padding: 2rem 1rem; text-align: center;">
      <h1 style="color: #2c3e50;">🎓 Bienvenue à l'ISEP Diamniadio</h1>
      <p style="color: #555;">Plateforme de gestion des élèves et enseignants</p>
    </section>

    <section style="max-width: 900px; margin: 2rem auto; padding: 1rem;">
      <div style="display: flex; flex-wrap: wrap; gap: 1rem; justify-content: center;">
        <div style="flex: 1 1 300px; background: #fff; border: 1px solid #ddd; border-radius: 12px; padding: 1.5rem; text-align: center;">
          <h2 style="color: #007bff;">{{ totalEleves }}</h2>
          <h4>Élèves</h4>
          <p style="color: #666;">Nombre total d'élèves inscrits</p>
          <a routerLink="/eleves" style="text-decoration: none; color: #007bff;">👥 Gérer les élèves</a>
        </div>

        <div style="flex: 1 1 300px; background: #fff; border: 1px solid #ddd; border-radius: 12px; padding: 1.5rem; text-align: center;">
          <h2 style="color: #28a745;">{{ totalEnseignants }}</h2>
          <h4>Enseignants</h4>
          <p style="color: #666;">Nombre total d'enseignants</p>
          <a routerLink="/enseignants" style="text-decoration: none; color: #28a745;">👨‍🏫 Gérer les enseignants</a>
        </div>
      </div>

      <div style="background: #fafafa; border: 1px solid #ccc; border-radius: 12px; padding: 2rem; margin-top: 2rem;">
        <h3 style="text-align: center;">⚙️ Fonctionnalités</h3>
        <div style="display: flex; flex-wrap: wrap; justify-content: space-around; margin-top: 1.5rem;">
          <div style="flex: 1 1 200px; text-align: center; margin-bottom: 1rem;">
            <div style="font-size: 2rem;">➕</div>
            <h5>Ajouter</h5>
            <p style="color: #666;">Ajoutez rapidement de nouveaux profils</p>
          </div>
          <div style="flex: 1 1 200px; text-align: center; margin-bottom: 1rem;">
            <div style="font-size: 2rem;">✏️</div>
            <h5>Modifier</h5>
            <p style="color: #666;">Modifiez les informations existantes</p>
          </div>
          <div style="flex: 1 1 200px; text-align: center; margin-bottom: 1rem;">
            <div style="font-size: 2rem;">🗑️</div>
            <h5>Supprimer</h5>
            <p style="color: #666;">Supprimez les enregistrements inutiles</p>
          </div>
        </div>
      </div>
    </section>
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
