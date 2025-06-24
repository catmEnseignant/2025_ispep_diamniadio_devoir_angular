import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { EnseignantService } from '../../services/enseignant.service';
import { Enseignant } from '../../models/enseignant.model';

@Component({
  selector: 'app-enseignant-list',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <div class="container-fluid">
      <div class="page-header">
        <div class="container">
          <div class="row align-items-center">
            <div class="col-md-4">
              <h2 class="mb-0">
                <i class="bi bi-person-workspace me-2"></i>
                Liste des Enseignants
              </h2>
            </div>
            <div class="col-md-4 text-center">
              <div class="badge bg-light text-dark fs-5 px-3 py-2">
                <i class="bi bi-people-fill me-2"></i>
                {{ enseignants.length }} enseignant(s)
              </div>
            </div>
            <div class="col-md-4 text-end">
              <a routerLink="/enseignants/form" class="btn btn-light btn-lg">
                <i class="bi bi-plus-circle me-2"></i>
                Ajouter un enseignant
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
                    <th scope="col">Matricule</th>
                    <th scope="col">Prénom</th>
                    <th scope="col">Nom</th>
                    <th scope="col">Téléphone</th>
                    <th scope="col">Adresse</th>
                    <th scope="col" class="text-center">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  <tr *ngFor="let enseignant of enseignants" class="align-middle">
                    <td>
                      <span class="badge bg-primary">{{ enseignant.matricule }}</span>
                    </td>
                    <td>{{ enseignant.prenom }}</td>
                    <td>{{ enseignant.nom }}</td>
                    <td>
                      <i class="bi bi-telephone me-2"></i>
                      {{ enseignant.telephone }}
                    </td>
                    <td>
                      <i class="bi bi-geo-alt me-2"></i>
                      {{ enseignant.adresse }}
                    </td>
                    <td class="text-center">
                      <button
                        class="btn btn-outline-primary action-btn me-1"
                        [routerLink]="['/enseignants/form', enseignant.id]"
                        title="Modifier">
                        <i class="bi bi-pencil"></i>
                      </button>
                      <button
                        class="btn btn-outline-danger action-btn"
                        (click)="deleteEnseignant(enseignant)"
                        title="Supprimer">
                        <i class="bi bi-trash"></i>
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            
            <div *ngIf="enseignants.length === 0" class="text-center py-5">
              <i class="bi bi-inbox display-1 text-muted mb-3"></i>
              <h4 class="text-muted">Aucun enseignant trouvé</h4>
              <p class="text-muted">Commencez par ajouter votre premier enseignant.</p>
              <a routerLink="/enseignants/form" class="btn btn-primary">
                <i class="bi bi-plus-circle me-2"></i>
                Ajouter un enseignant
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  `
})
export class EnseignantListComponent implements OnInit {
  enseignants: Enseignant[] = [];

  constructor(private enseignantService: EnseignantService) {}

  ngOnInit(): void {
    this.loadEnseignants();
  }

  loadEnseignants(): void {
    this.enseignantService.getEnseignants().subscribe({
      next: (data) => this.enseignants = data,
      error: (error) => console.error('Erreur lors du chargement des enseignants:', error)
    });
  }

  deleteEnseignant(enseignant: Enseignant): void {
    if (confirm(`Êtes-vous sûr de vouloir supprimer l'enseignant ${enseignant.prenom} ${enseignant.nom} ?`)) {
      if (enseignant.id) {
        this.enseignantService.deleteEnseignant(enseignant.id).subscribe({
          next: () => {
            this.loadEnseignants();
            alert('Enseignant supprimé avec succès !');
          },
          error: (error) => {
            console.error('Erreur lors de la suppression:', error);
            alert('Erreur lors de la suppression de l\'enseignant.');
          }
        });
      }
    }
  }
}