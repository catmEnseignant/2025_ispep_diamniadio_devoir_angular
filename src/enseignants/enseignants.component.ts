import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EnseignantService } from '../services/enseignant.service';
import { Enseignant } from '../shared/models/enseignant.model';

@Component({
  selector: 'app-enseignants',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  template: `
    <div class="container mt-4">
      <!-- En-tête -->
      <div class="card mb-4">
        <div class="card-body">
          <div class="row align-items-center">
            <div class="col-md-4">
              <h6 class="mb-0">
                Liste des enseignants
              </h6>
            </div>
            <div class="col-md-4 text-center">
              <span class="badge bg-success fs-6 px-3 py-2">
                Total: {{ enseignants.length }} enseignant(s)
              </span>
            </div>
            <div class="col-md-4 text-end">
              <button class="btn btn-success" (click)="openAddForm()">
                <i class="bi bi-plus-circle me-2"></i>
                Ajouter un enseignant
              </button>
            </div>
          </div>
        </div>
      </div>

      <!-- Formulaire (affiché conditionnellement) -->
      <div *ngIf="showForm" class="card mb-4 fade-in">
        <div class="card-header bg-success text-white">
          <h5 class="mb-0">
            <i class="bi bi-person-plus me-2"></i>
            {{ isEditing ? 'Modifier l\'enseignant' : 'Ajouter un nouvel enseignant' }}
          </h5>
        </div>
        <div class="card-body">
          <form [formGroup]="enseignantForm" (ngSubmit)="onSubmit()">
            <div class="row g-3">
              <div class="col-md-6">
                <label for="prenom" class="form-label">Prénom *</label>
                <input type="text" class="form-control" id="prenom" formControlName="prenom"
                       [class.is-invalid]="enseignantForm.get('prenom')?.touched && enseignantForm.get('prenom')?.errors">
                <div class="invalid-feedback">
                  Le prénom est requis
                </div>
              </div>
              <div class="col-md-6">
                <label for="nom" class="form-label">Nom *</label>
                <input type="text" class="form-control" id="nom" formControlName="nom"
                       [class.is-invalid]="enseignantForm.get('nom')?.touched && enseignantForm.get('nom')?.errors">
                <div class="invalid-feedback">
                  Le nom est requis
                </div>
              </div>
              <div class="col-md-6">
                <label for="email" class="form-label">Email *</label>
                <input type="email" class="form-control" id="email" formControlName="email"
                       [class.is-invalid]="enseignantForm.get('email')?.touched && enseignantForm.get('email')?.errors">
                <div class="invalid-feedback">
                  <div *ngIf="enseignantForm.get('email')?.errors?.['required']">L'email est requis</div>
                  <div *ngIf="enseignantForm.get('email')?.errors?.['email']">Format d'email invalide</div>
                </div>
              </div>
              <div class="col-md-6">
                <label for="telephone" class="form-label">Téléphone *</label>
                <input type="tel" class="form-control" id="telephone" formControlName="telephone"
                       [class.is-invalid]="enseignantForm.get('telephone')?.touched && enseignantForm.get('telephone')?.errors">
                <div class="invalid-feedback">
                  Le téléphone est requis
                </div>
              </div>
              <div class="col-md-6">
                <label for="matiere" class="form-label">Matière *</label>
                <select class="form-control" id="matiere" formControlName="matiere"
                        [class.is-invalid]="enseignantForm.get('matiere')?.touched && enseignantForm.get('matiere')?.errors">
                  <option value="">Sélectionner une matière</option>
                  <option value="Mathématiques">Mathématiques</option>
                  <option value="Informatique">Informatique</option>
                  <option value="Physique">Physique</option>
                  <option value="Français">Français</option>
                  <option value="Anglais">Anglais</option>
                  <option value="Gestion">Gestion</option>
                  <option value="Comptabilité">Comptabilité</option>
                  <option value="Marketing">Marketing</option>
                  <option value="Économie">Économie</option>
                </select>
                <div class="invalid-feedback">
                  La matière est requise
                </div>
              </div>
              <div class="col-md-6">
                <label for="dateNaissance" class="form-label">Date de naissance *</label>
                <input type="date" class="form-control" id="dateNaissance" formControlName="dateNaissance"
                       [class.is-invalid]="enseignantForm.get('dateNaissance')?.touched && enseignantForm.get('dateNaissance')?.errors">
                <div class="invalid-feedback">
                  La date de naissance est requise
                </div>
              </div>
            </div>
            <div class="mt-4">
              <button type="submit" class="btn btn-success me-2" [disabled]="enseignantForm.invalid">
                <i class="bi bi-check-circle me-2"></i>
                {{ isEditing ? 'Modifier' : 'Ajouter' }}
              </button>
              <button type="button" class="btn btn-secondary" (click)="cancelForm()">
                <i class="bi bi-x-circle me-2"></i>
                Annuler
              </button>
            </div>
          </form>
        </div>
      </div>

      <!-- Tableau des enseignants -->
      <div class="card">
        <div class="card-body">
          <div class="table-responsive">
            <table class="table table-hover">
              <thead>
                <tr>
                  <th>#</th>
                  <th>Prénom</th>
                  <th>Nom</th>
                  <th>Email</th>
                  <th>Téléphone</th>
                  <th>Matière</th>
                  <th>Date de naissance</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                <tr *ngFor="let enseignant of enseignants; let i = index" class="fade-in">
                  <td>{{ i + 1 }}</td>
                  <td>{{ enseignant.prenom }}</td>
                  <td>{{ enseignant.nom }}</td>
                  <td>{{ enseignant.email }}</td>
                  <td>{{ enseignant.telephone }}</td>
                  <td>
                    <span class="badge bg-warning text-dark">{{ enseignant.matiere }}</span>
                  </td>
                  <td>{{ enseignant.dateNaissance | date:'dd/MM/yyyy' }}</td>
                  <td>
                    <button class="btn btn-sm btn-outline-primary me-2" (click)="editEnseignant(enseignant)" title="Modifier">
                      <i class="bi bi-pencil"></i>
                    </button>
                    <button class="btn btn-sm btn-outline-danger" (click)="deleteEnseignant(enseignant)" title="Supprimer">
                      <i class="bi bi-trash"></i>
                    </button>
                  </td>
                </tr>
                <tr *ngIf="enseignants.length === 0">
                  
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>

    <!-- Modal de confirmation de suppression -->
    <div class="modal fade" id="deleteModal" tabindex="-1" *ngIf="enseignantToDelete">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">
              <i class="bi bi-exclamation-triangle text-warning me-2"></i>
              Confirmer la suppression
            </h5>
          </div>
          <div class="modal-body">
            <p>Êtes-vous sûr de vouloir supprimer l'enseignant :</p>
            <p class="fw-bold text-danger">{{ enseignantToDelete.prenom }} {{ enseignantToDelete.nom }}</p>
            <p class="text-muted">Cette action est irréversible.</p>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-dark" (click)="cancelDelete()">
              Annuler
            </button>
            <button type="button" class="btn btn-dark" (click)="confirmDelete()">
              <i class="bi bi-trash me-2"></i>
              Supprimer
            </button>
          </div>
        </div>
      </div>
    </div>
  `
})
export class EnseignantsComponent implements OnInit {
  enseignants: Enseignant[] = [];
  enseignantForm: FormGroup;
  showForm = false;
  isEditing = false;
  editingEnseignantId?: number;
  enseignantToDelete?: Enseignant;

  constructor(
    private enseignantService: EnseignantService,
    private fb: FormBuilder
  ) {
    this.enseignantForm = this.fb.group({
      prenom: ['', [Validators.required, Validators.minLength(2)]],
      nom: ['', [Validators.required, Validators.minLength(2)]],
      email: ['', [Validators.required, Validators.email]],
      telephone: ['', [Validators.required]],
      matiere: ['', [Validators.required]],
      dateNaissance: ['', [Validators.required]]
    });
  }

  ngOnInit() {
    this.loadEnseignants();
  }

  loadEnseignants() {
    this.enseignantService.getEnseignants().subscribe({
      next: (enseignants) => {
        this.enseignants = enseignants;
      },
      error: (error) => {
        console.error('Erreur lors du chargement des enseignants:', error);
        alert('Erreur lors du chargement des enseignants..');
      }
    });
  }

  openAddForm() {
    this.showForm = true;
    this.isEditing = false;
    this.enseignantForm.reset();
  }

  editEnseignant(enseignant: Enseignant) {
    this.showForm = true;
    this.isEditing = true;
    this.editingEnseignantId = enseignant.id;
    this.enseignantForm.patchValue(enseignant);
  }

  cancelForm() {
    this.showForm = false;
    this.isEditing = false;
    this.editingEnseignantId = undefined;
    this.enseignantForm.reset();
  }

  onSubmit() {
    if (this.enseignantForm.valid) {
      const enseignantData = this.enseignantForm.value;

      if (this.isEditing && this.editingEnseignantId) {
        this.enseignantService.updateEnseignant(this.editingEnseignantId, enseignantData).subscribe({
          next: () => {
            this.loadEnseignants();
            this.cancelForm();
            alert('Enseignant modifié avec succès !');
          },
          error: (error) => {
            console.error('Erreur lors de la modification:', error);
            alert('Erreur lors de la modification de l\'enseignant.');
          }
        });
      } else {
        this.enseignantService.createEnseignant(enseignantData).subscribe({
          next: () => {
            this.loadEnseignants();
            this.cancelForm();
            alert('Enseignant ajouté avec succès !');
          },
          error: (error) => {
            console.error('Erreur lors de l\'ajout:', error);
            alert('Erreur lors de l\'ajout de l\'enseignant.');
          }
        });
      }
    }
  }

  deleteEnseignant(enseignant: Enseignant) {
    this.enseignantToDelete = enseignant;
  
    setTimeout(() => {
      const modal = document.getElementById('deleteModal');
      if (modal) {
        modal.style.display = 'block';
        modal.classList.add('show');
      }
    }, 100);
  }

  cancelDelete() {
    this.enseignantToDelete = undefined;
    const modal = document.getElementById('deleteModal');
    if (modal) {
      modal.style.display = 'none';
      modal.classList.remove('show');
    }
  }

  confirmDelete() {
    if (this.enseignantToDelete && this.enseignantToDelete.id) {
      this.enseignantService.deleteEnseignant(this.enseignantToDelete.id).subscribe({
        next: () => {
          this.loadEnseignants();
          this.cancelDelete();
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