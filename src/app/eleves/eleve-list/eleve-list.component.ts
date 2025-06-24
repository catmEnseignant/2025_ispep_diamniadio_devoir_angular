import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { EleveService } from '../../services/eleve.service';
import { Eleve } from '../../models/eleve.model';

@Component({
  selector: 'app-eleve-list',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <div class="container-fluid">
      <div class="page-header">
        <div class="container">
          <div class="row align-items-center">
            <div class="col-md-4">
              <h2 class="mb-0">
                <i class="bi bi-people-fill me-2"></i>
                Liste des Élèves
              </h2>
            </div>
            <div class="col-md-4 text-center">
              <div class="badge bg-light text-dark fs-5 px-3 py-2">
                <i class="bi bi-people-fill me-2"></i>
                {{ eleves.length }} élève(s)
              </div>
            </div>
            <div class="col-md-4 text-end">
              <a routerLink="/eleves/form" class="btn btn-light btn-lg">
                <i class="bi bi-plus-circle me-2"></i>
                Ajouter un élève
              </a>
            </div>
          </div>
        </div>
      </div>

      <div class="container">
        <div class="card animate-fade-in">
          <div class="card-body p-0">
            <div class="table-responsive">
              <table class="table table-hover mb-0">
                <thead>
                  <tr>
                    <th scope="col">N° Carte</th>
                    <th scope="col">Prénom</th>
                    <th scope="col">Nom</th>
                    <th scope="col">Date de naissance</th>
                    <th scope="col">Téléphone</th>
                    <th scope="col">Adresse</th>
                    <th scope="col" class="text-center">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  <tr *ngFor="let eleve of eleves" class="align-middle">
                    <td>
                      <span class="badge bg-info">{{ eleve.numero_carte }}</span>
                    </td>
                    <td>{{ eleve.prenom }}</td>
                    <td>{{ eleve.nom }}</td>
                    <td>
                      <i class="bi bi-calendar me-2"></i>
                      {{ eleve.date_naissance | date:'dd/MM/yyyy' }}
                    </td>
                    <td>
                      <i class="bi bi-telephone me-2"></i>
                      {{ eleve.telephone }}
                    </td>
                    <td>
                      <i class="bi bi-geo-alt me-2"></i>
                      {{ eleve.adresse }}
                    </td>
                    <td class="text-center">
                      <button
                        class="btn btn-outline-primary action-btn me-1"
                        [routerLink]="['/eleves/form', eleve.id]"
                        title="Modifier">
                        <i class="bi bi-pencil"></i>
                      </button>
                      <button
                        class="btn btn-outline-danger action-btn"
                        (click)="deleteEleve(eleve)"
                        title="Supprimer">
                        <i class="bi bi-trash"></i>
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            
            <div *ngIf="eleves.length === 0" class="text-center py-5">
              <i class="bi bi-inbox display-1 text-muted mb-3"></i>
              <h4 class="text-muted">Aucun élève trouvé</h4>
              <p class="text-muted">Commencez par ajouter votre premier élève.</p>
              <a routerLink="/eleves/form" class="btn btn-info">
                <i class="bi bi-plus-circle me-2"></i>
                Ajouter un élève
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  `
})
export class EleveListComponent implements OnInit {
  eleves: Eleve[] = [];

  constructor(private eleveService: EleveService) {}

  ngOnInit(): void {
    this.loadEleves();
  }

  loadEleves(): void {
    this.eleveService.getEleves().subscribe({
      next: (data) => this.eleves = data,
      error: (error) => console.error('Erreur lors du chargement des élèves:', error)
    });
  }

  deleteEleve(eleve: Eleve): void {
    if (confirm(`Êtes-vous sûr de vouloir supprimer l'élève ${eleve.prenom} ${eleve.nom} ?`)) {
      if (eleve.id) {
        this.eleveService.deleteEleve(eleve.id).subscribe({
          next: () => {
            this.loadEleves();
            alert('Élève supprimé avec succès !');
          },
          error: (error) => {
            console.error('Erreur lors de la suppression:', error);
            alert('Erreur lors de la suppression de l\'élève.');
          }
        });
      }
    }
  }
}