import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { EnseignantService } from '../../services/enseignant.service';
import { Enseignant } from '../../models/enseignant.model';

@Component({
  selector: 'app-enseignant-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  template: `
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-lg-8">
          <div class="card animate-fade-in">
            <div class="card-header bg-primary text-white">
              <h4 class="mb-0">
                <i class="bi bi-person-plus-fill me-2"></i>
                {{ isEditMode ? 'Modifier' : 'Ajouter' }} un enseignant
              </h4>
            </div>
            <div class="card-body p-4">
              <form [formGroup]="enseignantForm" (ngSubmit)="onSubmit()">
                <div class="row">
                  <div class="col-md-6 mb-3">
                    <div class="form-floating">
                      <input
                        type="text"
                        class="form-control"
                        id="matricule"
                        formControlName="matricule"
                        placeholder="Matricule"
                        [class.is-invalid]="enseignantForm.get('matricule')?.invalid && enseignantForm.get('matricule')?.touched">
                      <label for="matricule">
                        <i class="bi bi-card-text me-2"></i>Matricule *
                      </label>
                      <div class="invalid-feedback" *ngIf="enseignantForm.get('matricule')?.invalid && enseignantForm.get('matricule')?.touched">
                        Le matricule est requis
                      </div>
                    </div>
                  </div>
                  
                  <div class="col-md-6 mb-3">
                    <div class="form-floating">
                      <input
                        type="text"
                        class="form-control"
                        id="prenom"
                        formControlName="prenom"
                        placeholder="Prénom"
                        [class.is-invalid]="enseignantForm.get('prenom')?.invalid && enseignantForm.get('prenom')?.touched">
                      <label for="prenom">
                        <i class="bi bi-person me-2"></i>Prénom *
                      </label>
                      <div class="invalid-feedback" *ngIf="enseignantForm.get('prenom')?.invalid && enseignantForm.get('prenom')?.touched">
                        Le prénom est requis
                      </div>
                    </div>
                  </div>
                  
                  <div class="col-md-6 mb-3">
                    <div class="form-floating">
                      <input
                        type="text"
                        class="form-control"
                        id="nom"
                        formControlName="nom"
                        placeholder="Nom"
                        [class.is-invalid]="enseignantForm.get('nom')?.invalid && enseignantForm.get('nom')?.touched">
                      <label for="nom">
                        <i class="bi bi-person-fill me-2"></i>Nom *
                      </label>
                      <div class="invalid-feedback" *ngIf="enseignantForm.get('nom')?.invalid && enseignantForm.get('nom')?.touched">
                        Le nom est requis
                      </div>
                    </div>
                  </div>
                  
                  <div class="col-md-6 mb-3">
                    <div class="form-floating">
                      <input
                        type="tel"
                        class="form-control"
                        id="telephone"
                        formControlName="telephone"
                        placeholder="Téléphone"
                        [class.is-invalid]="enseignantForm.get('telephone')?.invalid && enseignantForm.get('telephone')?.touched">
                      <label for="telephone">
                        <i class="bi bi-telephone me-2"></i>Téléphone *
                      </label>
                      <div class="invalid-feedback" *ngIf="enseignantForm.get('telephone')?.invalid && enseignantForm.get('telephone')?.touched">
                        Le téléphone est requis
                      </div>
                    </div>
                  </div>
                  
                  <div class="col-12 mb-4">
                    <div class="form-floating">
                      <textarea
                        class="form-control"
                        id="adresse"
                        formControlName="adresse"
                        placeholder="Adresse"
                        style="height: 100px"
                        [class.is-invalid]="enseignantForm.get('adresse')?.invalid && enseignantForm.get('adresse')?.touched"></textarea>
                      <label for="adresse">
                        <i class="bi bi-geo-alt me-2"></i>Adresse *
                      </label>
                      <div class="invalid-feedback" *ngIf="enseignantForm.get('adresse')?.invalid && enseignantForm.get('adresse')?.touched">
                        L'adresse est requise
                      </div>
                    </div>
                  </div>
                </div>
                
                <div class="d-flex justify-content-between">
                  <button type="button" class="btn btn-outline-secondary btn-lg" (click)="goBack()">
                    <i class="bi bi-arrow-left me-2"></i>
                    Retour
                  </button>
                  <button type="submit" class="btn btn-primary btn-lg" [disabled]="enseignantForm.invalid">
                    <i class="bi bi-check-circle me-2"></i>
                    {{ isEditMode ? 'Modifier' : 'Ajouter' }}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  `
})
export class EnseignantFormComponent implements OnInit {
  enseignantForm: FormGroup;
  isEditMode = false;
  enseignantId: number | null = null;

  constructor(
    private fb: FormBuilder,
    private enseignantService: EnseignantService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.enseignantForm = this.fb.group({
      matricule: ['', Validators.required],
      prenom: ['', Validators.required],
      nom: ['', Validators.required],
      telephone: ['', Validators.required],
      adresse: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.isEditMode = true;
      this.enseignantId = +id;
      this.loadEnseignant(this.enseignantId);
    }
  }

  loadEnseignant(id: number): void {
    this.enseignantService.getEnseignant(id).subscribe({
      next: (enseignant) => {
        this.enseignantForm.patchValue(enseignant);
      },
      error: (error) => console.error('Erreur lors du chargement de l\'enseignant:', error)
    });
  }

  onSubmit(): void {
    if (this.enseignantForm.valid) {
      const enseignant: Enseignant = this.enseignantForm.value;
      
      if (this.isEditMode && this.enseignantId) {
        this.enseignantService.updateEnseignant(this.enseignantId, enseignant).subscribe({
          next: () => {
            alert('Enseignant modifié avec succès !');
            this.router.navigate(['/enseignants']);
          },
          error: (error) => {
            console.error('Erreur lors de la modification:', error);
            alert('Erreur lors de la modification de l\'enseignant.');
          }
        });
      } else {
        this.enseignantService.createEnseignant(enseignant).subscribe({
          next: () => {
            alert('Enseignant ajouté avec succès !');
            this.router.navigate(['/enseignants']);
          },
          error: (error) => {
            console.error('Erreur lors de la création:', error);
            alert('Erreur lors de l\'ajout de l\'enseignant.');
          }
        });
      }
    }
  }

  goBack(): void {
    this.router.navigate(['/enseignants']);
  }
}