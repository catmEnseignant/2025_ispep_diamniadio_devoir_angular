import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EleveService } from '../services/eleve.service';
import { Eleve } from '../shared/models/eleve.model';

@Component({
  selector: 'app-eleves',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  template: `
    <div class="container mt-4">
     
      <div class="card mb-4">
        <div class="card-body">
          <div class="row align-items-center">
            <div class="col-md-4">
              <h6 class="mb-0">
                
                Liste des élèves
              </h6>
            </div>
            <div class="col-md-4 text-center">
              <span class="badge bg-primary fs-6 px-3 py-2">
                Total: {{ eleves.length }} élève(s)
              </span>
            </div>
            <div class="col-md-4 text-end">
              <button class="btn btn-success" (click)="openAddForm()">
                <i class="bi bi-plus-circle me-2"></i>
                Ajouter un élève
              </button>
            </div>
          </div>
        </div>
      </div>

     
      <div *ngIf="showForm" class="card mb-4 fade-in">
        <div class="card-header bg-primary text-white">
          <h5 class="mb-0">
            <i class="bi bi-person-plus me-2"></i>
            {{ isEditing ? 'Modifier l\'élève' : 'Ajouter un nouvel élève' }}
          </h5>
        </div>
        <div class="card-body">
          <form [formGroup]="eleveForm" (ngSubmit)="onSubmit()">
            <div class="row g-3">
              <div class="col-md-6">
                <label for="prenom" class="form-label">Prénom *</label>
                <input type="text" class="form-control" id="prenom" formControlName="prenom"
                       [class.is-invalid]="eleveForm.get('prenom')?.touched && eleveForm.get('prenom')?.errors">
                <div class="invalid-feedback">
                  Le prénom est requis
                </div>
              </div>
              <div class="col-md-6">
                <label for="nom" class="form-label">Nom *</label>
                <input type="text" class="form-control" id="nom" formControlName="nom"
                       [class.is-invalid]="eleveForm.get('nom')?.touched && eleveForm.get('nom')?.errors">
                <div class="invalid-feedback">
                  Le nom est requis
                </div>
              </div>
              <div class="col-md-6">
                <label for="email" class="form-label">Email *</label>
                <input type="email" class="form-control" id="email" formControlName="email"
                       [class.is-invalid]="eleveForm.get('email')?.touched && eleveForm.get('email')?.errors">
                <div class="invalid-feedback">
                  <div *ngIf="eleveForm.get('email')?.errors?.['required']">L'email est requis</div>
                  <div *ngIf="eleveForm.get('email')?.errors?.['email']">Format d'email invalide</div>
                </div>
              </div>
              <div class="col-md-6">
                <label for="telephone" class="form-label">Téléphone *</label>
                <input type="tel" class="form-control" id="telephone" formControlName="telephone"
                       [class.is-invalid]="eleveForm.get('telephone')?.touched && eleveForm.get('telephone')?.errors">
                <div class="invalid-feedback">
                  Le téléphone est requis
                </div>
              </div>
              <div class="col-md-6">
                <label for="classe" class="form-label">Classe *</label>
                <select class="form-control" id="classe" formControlName="classe"
                        [class.is-invalid]="eleveForm.get('classe')?.touched && eleveForm.get('classe')?.errors">
                  <option value="">Sélectionner une classe</option>
                  <option value="L1 Informatique">L1 Informatique</option>
                  <option value="L2 Informatique">L2 Informatique</option>
                  <option value="L3 Informatique">L3 Informatique</option>
                  <option value="L1 Gestion">L1 Gestion</option>
                  <option value="L2 Gestion">L2 Gestion</option>
                  <option value="L3 Gestion">L3 Gestion</option>
                  <option value="M1 Informatique">M1 Informatique</option>
                  <option value="M2 Informatique">M2 Informatique</option>
                </select>
               
              </div>
              <div class="col-md-6">
                <label for="dateNaissance" class="form-label">Date de naissance *</label>
                <input type="date" class="form-control" id="dateNaissance" formControlName="dateNaissance"
                       [class.is-invalid]="eleveForm.get('dateNaissance')?.touched && eleveForm.get('dateNaissance')?.errors">
                <div class="invalid-feedback">
                  La date de naissance est requise
                </div>
              </div>
            </div>
            <div class="mt-4">
              <button type="submit" class="btn btn-primary me-2" [disabled]="eleveForm.invalid">
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
                  <th>Classe</th>
                  <th>Date de naissance</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                <tr *ngFor="let eleve of eleves; let i = index" class="fade-in">
                  <td>{{ i + 1 }}</td>
                  <td>{{ eleve.prenom }}</td>
                  <td>{{ eleve.nom }}</td>
                  <td>{{ eleve.email }}</td>
                  <td>{{ eleve.telephone }}</td>
                  <td>
                    <span class="badge bg-info">{{ eleve.classe }}</span>
                  </td>
                  <td>{{ eleve.dateNaissance | date:'dd/MM/yyyy' }}</td>
                  <td>
                    <button class="btn btn-sm btn-outline-primary me-2" (click)="editEleve(eleve)" title="Modifier">
                      <i class="bi bi-pencil"></i>
                    </button>
                    <button class="btn btn-sm btn-outline-danger" (click)="deleteEleve(eleve)" title="Supprimer">
                      <i class="bi bi-trash"></i>
                    </button>
                  </td>
                </tr>
                <tr *ngIf="eleves.length === 0">
                  
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>

  
    <div class="modal fade" id="deleteModal" tabindex="-1" *ngIf="eleveToDelete">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">
              <i class="bi bi-exclamation-triangle text-warning me-2"></i>
              Confirmer la suppression
            </h5>
          </div>
          <div class="modal-body">
            <p>Êtes-vous sûr de vouloir supprimer l'élève :</p>
            <p class="fw-bold text-danger">{{ eleveToDelete.prenom }} {{ eleveToDelete.nom }}</p>
            <p class="text-muted">Cette action est irréversible.</p>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" (click)="cancelDelete()">
              Annuler
            </button>
            <button type="button" class="btn btn-danger" (click)="confirmDelete()">
              <i class="bi bi-trash me-2"></i>
              Supprimer
            </button>
          </div>
        </div>
      </div>
    </div>
  `
})
export class ElevesComponent implements OnInit {
  eleves: Eleve[] = [];
  eleveForm: FormGroup;
  showForm = false;
  isEditing = false;
  editingEleveId?: number;
  eleveToDelete?: Eleve;

  constructor(
    private eleveService: EleveService,
    private fb: FormBuilder
  ) {
    this.eleveForm = this.fb.group({
      prenom: ['', [Validators.required, Validators.minLength(2)]],
      nom: ['', [Validators.required, Validators.minLength(2)]],
      email: ['', [Validators.required, Validators.email]],
      telephone: ['', [Validators.required]],
      classe: ['', [Validators.required]],
      dateNaissance: ['', [Validators.required]]
    });
  }

  ngOnInit() {
    this.loadEleves();
  }

  loadEleves() {
    this.eleveService.getEleves().subscribe({
      next: (eleves) => {
        this.eleves = eleves;
      },
      error: (error) => {
        console.error('Erreur lors du chargement des élèves:', error);
        alert('Erreur lors du chargement des élèves. Assurez-vous que l\'API est démarrée.');
      }
    });
  }

  openAddForm() {
    this.showForm = true;
    this.isEditing = false;
    this.eleveForm.reset();
  }

  editEleve(eleve: Eleve) {
    this.showForm = true;
    this.isEditing = true;
    this.editingEleveId = eleve.id;
    this.eleveForm.patchValue(eleve);
  }

  cancelForm() {
    this.showForm = false;
    this.isEditing = false;
    this.editingEleveId = undefined;
    this.eleveForm.reset();
  }

  onSubmit() {
    if (this.eleveForm.valid) {
      const eleveData = this.eleveForm.value;

      if (this.isEditing && this.editingEleveId) {
        this.eleveService.updateEleve(this.editingEleveId, eleveData).subscribe({
          next: () => {
            this.loadEleves();
            this.cancelForm();
            alert('Élève modifié avec succès !');
          },
          error: (error) => {
            console.error('Erreur lors de la modification:', error);
            alert('Erreur lors de la modification de l\'élève.');
          }
        });
      } else {
        this.eleveService.createEleve(eleveData).subscribe({
          next: () => {
            this.loadEleves();
            this.cancelForm();
            alert('Élève ajouté avec succès !');
          },
          error: (error) => {
            console.error('Erreur lors de l\'ajout:', error);
            alert('Erreur lors de l\'ajout de l\'élève.');
          }
        });
      }
    }
  }

  deleteEleve(eleve: Eleve) {
    this.eleveToDelete = eleve;
   
    setTimeout(() => {
      const modal = document.getElementById('deleteModal');
      if (modal) {
        modal.style.display = 'block';
        modal.classList.add('show');
      }
    }, 100);
  }

  cancelDelete() {
    this.eleveToDelete = undefined;
    const modal = document.getElementById('deleteModal');
    if (modal) {
      modal.style.display = 'none';
      modal.classList.remove('show');
    }
  }

  confirmDelete() {
    if (this.eleveToDelete && this.eleveToDelete.id) {
      this.eleveService.deleteEleve(this.eleveToDelete.id).subscribe({
        next: () => {
          this.loadEleves();
          this.cancelDelete();
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