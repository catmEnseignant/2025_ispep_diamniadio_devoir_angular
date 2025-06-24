import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { EleveService } from '../../services/eleve.service';
import { Eleve } from '../../models/eleve.model';

@Component({
  selector: 'app-eleve-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  template: `
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-lg-8">
          <div class="card animate-fade-in">
            <div class="card-header bg-info text-white">
              <h4 class="mb-0">
                <i class="bi bi-person-plus-fill me-2"></i>
                {{ isEditMode ? 'Modifier' : 'Ajouter' }} un élève
              </h4>
            </div>
            <div class="card-body p-4">
              <form [formGroup]="eleveForm" (ngSubmit)="onSubmit()">
                <div class="row">
                  <div class="col-md-6 mb-3">
                    <div class="form-floating">
                      <input
                        type="text"
                        class="form-control"
                        id="numero_carte"
                        formControlName="numero_carte"
                        placeholder="Numéro de carte"
                        [class.is-invalid]="eleveForm.get('numero_carte')?.invalid && eleveForm.get('numero_carte')?.touched">
                      <label for="numero_carte">
                        <i class="bi bi-card-text me-2"></i>Numéro de carte *
                      </label>
                      <div class="invalid-feedback" *ngIf="eleveForm.get('numero_carte')?.invalid && eleveForm.get('numero_carte')?.touched">
                        Le numéro de carte est requis
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
                        [class.is-invalid]="eleveForm.get('prenom')?.invalid && eleveForm.get('prenom')?.touched">
                      <label for="prenom">
                        <i class="bi bi-person me-2"></i>Prénom *
                      </label>
                      <div class="invalid-feedback" *ngIf="eleveForm.get('prenom')?.invalid && eleveForm.get('prenom')?.touched">
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
                        [class.is-invalid]="eleveForm.get('nom')?.invalid && eleveForm.get('nom')?.touched">
                      <label for="nom">
                        <i class="bi bi-person-fill me-2"></i>Nom *
                      </label>
                      <div class="invalid-feedback" *ngIf="eleveForm.get('nom')?.invalid && eleveForm.get('nom')?.touched">
                        Le nom est requis
                      </div>
                    </div>
                  </div>
                  
                  <div class="col-md-6 mb-3">
                    <div class="form-floating">
                      <input
                        type="date"
                        class="form-control"
                        id="date_naissance"
                        formControlName="date_naissance"
                        [class.is-invalid]="eleveForm.get('date_naissance')?.invalid && eleveForm.get('date_naissance')?.touched">
                      <label for="date_naissance">
                        <i class="bi bi-calendar me-2"></i>Date de naissance *
                      </label>
                      <div class="invalid-feedback" *ngIf="eleveForm.get('date_naissance')?.invalid && eleveForm.get('date_naissance')?.touched">
                        La date de naissance est requise
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
                        [class.is-invalid]="eleveForm.get('telephone')?.invalid && eleveForm.get('telephone')?.touched">
                      <label for="telephone">
                        <i class="bi bi-telephone me-2"></i>Téléphone *
                      </label>
                      <div class="invalid-feedback" *ngIf="eleveForm.get('telephone')?.invalid && eleveForm.get('telephone')?.touched">
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
                        [class.is-invalid]="eleveForm.get('adresse')?.invalid && eleveForm.get('adresse')?.touched"></textarea>
                      <label for="adresse">
                        <i class="bi bi-geo-alt me-2"></i>Adresse *
                      </label>
                      <div class="invalid-feedback" *ngIf="eleveForm.get('adresse')?.invalid && eleveForm.get('adresse')?.touched">
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
                  <button type="submit" class="btn btn-info btn-lg" [disabled]="eleveForm.invalid">
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
export class EleveFormComponent implements OnInit {
  eleveForm: FormGroup;
  isEditMode = false;
  eleveId: number | null = null;

  constructor(
    private fb: FormBuilder,
    private eleveService: EleveService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.eleveForm = this.fb.group({
      numero_carte: ['', Validators.required],
      prenom: ['', Validators.required],
      nom: ['', Validators.required],
      adresse: ['', Validators.required],
      telephone: ['', Validators.required],
      date_naissance: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.isEditMode = true;
      this.eleveId = +id;
      this.loadEleve(this.eleveId);
    }
  }

  loadEleve(id: number): void {
    this.eleveService.getEleve(id).subscribe({
      next: (eleve) => {
        this.eleveForm.patchValue(eleve);
      },
      error: (error) => console.error('Erreur lors du chargement de l\'élève:', error)
    });
  }

  onSubmit(): void {
    if (this.eleveForm.valid) {
      const eleve: Eleve = this.eleveForm.value;
      
      if (this.isEditMode && this.eleveId) {
        this.eleveService.updateEleve(this.eleveId, eleve).subscribe({
          next: () => {
            alert('Élève modifié avec succès !');
            this.router.navigate(['/eleves']);
          },
          error: (error) => {
            console.error('Erreur lors de la modification:', error);
            alert('Erreur lors de la modification de l\'élève.');
          }
        });
      } else {
        this.eleveService.createEleve(eleve).subscribe({
          next: () => {
            alert('Élève ajouté avec succès !');
            this.router.navigate(['/eleves']);
          },
          error: (error) => {
            console.error('Erreur lors de la création:', error);
            alert('Erreur lors de l\'ajout de l\'élève.');
          }
        });
      }
    }
  }

  goBack(): void {
    this.router.navigate(['/eleves']);
  }
}