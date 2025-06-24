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
    <div class="wrapper">
      <h2>Gestion des Élèves</h2>

      <button (click)="toggleForm()" class="btn add-btn">
        {{ showForm ? 'Fermer' : 'Ajouter un élève' }}
      </button>

      <form *ngIf="showForm" [formGroup]="eleveForm" (ngSubmit)="onSubmit()" class="form-card">
        <div class="form-group">
          <input placeholder="Prénom" formControlName="prenom" />
          <input placeholder="Nom" formControlName="nom" />
        </div>
        <div class="form-group">
          <input type="email" placeholder="Email" formControlName="email" />
          <input placeholder="Matricule" formControlName="telephone" />
        </div>
        <div class="form-group">
          <select formControlName="classe">
            <option value="">Filière</option>
            <option *ngFor="let f of filieres" [value]="f">{{ f }}</option>
          </select>
          <input type="date" formControlName="dateNaissance" />
        </div>
        <div class="form-group">
          <button class="btn submit-btn" type="submit" [disabled]="eleveForm.invalid">
            {{ isEditing ? 'Modifier' : 'Ajouter' }}
          </button>
          <button class="btn cancel-btn" type="button" (click)="cancelForm()">Annuler</button>
        </div>
      </form>

      <table *ngIf="eleves.length > 0">
        <thead>
          <tr>
            <th>#</th>
            <th>Prénom</th>
            <th>Nom</th>
            <th>Email</th>
            <th>Matricule</th>
            <th>Filière</th>
            <th>Naissance</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr *ngFor="let eleve of eleves; let i = index">
            <td>{{ i + 1 }}</td>
            <td>{{ eleve.prenom }}</td>
            <td>{{ eleve.nom }}</td>
            <td>{{ eleve.email }}</td>
            <td>{{ eleve.telephone }}</td>
            <td>{{ eleve.classe }}</td>
            <td>{{ eleve.dateNaissance | date:'dd/MM/yyyy' }}</td>
            <td>
              <button class="btn small" (click)="editEleve(eleve)">✏️</button>
              <button class="btn small danger" (click)="deleteEleve(eleve)">🗑️</button>
            </td>
          </tr>
        </tbody>
      </table>

      <p *ngIf="eleves.length === 0" class="empty">Aucun élève enregistré.</p>
    </div>

    <style>
      .wrapper {
        max-width: 800px;
        margin: auto;
        padding: 1rem;
        font-family: sans-serif;
      }

      h2 {
        text-align: center;
        margin-bottom: 1rem;
      }

      .form-card {
        background: #f0f0f0;
        padding: 1rem;
        border-radius: 6px;
        margin-bottom: 1rem;
      }

      .form-group {
        display: flex;
        gap: 1rem;
        margin-bottom: 1rem;
        flex-wrap: wrap;
      }

      input, select {
        flex: 1 1 45%;
        padding: 0.5rem;
        border-radius: 4px;
        border: 1px solid #ccc;
      }

      table {
        width: 100%;
        border-collapse: collapse;
        margin-top: 1rem;
      }

      th, td {
        padding: 0.5rem;
        border: 1px solid #ddd;
        text-align: left;
      }

      .btn {
        padding: 0.4rem 0.8rem;
        border: none;
        border-radius: 4px;
        cursor: pointer;
        background-color: #007bff;
        color: white;
      }

      .btn.add-btn {
        margin-bottom: 1rem;
      }

      .btn.cancel-btn {
        background-color: #6c757d;
      }

      .btn.submit-btn {
        background-color: #28a745;
      }

      .btn.small {
        padding: 0.2rem 0.4rem;
        font-size: 0.8rem;
      }

      .btn.danger {
        background-color: #dc3545;
      }

      .empty {
        text-align: center;
        margin-top: 2rem;
        color: #888;
      }
    </style>
  `
})
export class ElevesComponent implements OnInit {
  eleves: Eleve[] = [];
  eleveForm!: FormGroup;
  showForm = false;
  isEditing = false;
  editingEleveId?: number;
  filieres = [
    'L1 Informatique', 'L2 Informatique', 'L3 Informatique',
    'L1 Gestion', 'L2 Gestion', 'L3 Gestion',
    'M1 Informatique', 'M2 Informatique'
  ];

  constructor(private eleveService: EleveService, private fb: FormBuilder) {}

  ngOnInit() {
    this.eleveForm = this.fb.group({
      prenom: ['', Validators.required],
      nom: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      telephone: ['', Validators.required],
      classe: ['', Validators.required],
      dateNaissance: ['', Validators.required],
    });
    this.loadEleves();
  }

  loadEleves() {
    this.eleveService.getEleves().subscribe({
      next: data => this.eleves = data,
      error: () => alert('Erreur de chargement')
    });
  }

  toggleForm() {
    this.showForm = !this.showForm;
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
    if (this.eleveForm.invalid) return;

    const eleve = this.eleveForm.value;

    if (this.isEditing && this.editingEleveId) {
      this.eleveService.updateEleve(this.editingEleveId, eleve).subscribe({
        next: () => {
          this.loadEleves();
          this.cancelForm();
        },
        error: () => alert('Erreur de modification')
      });
    } else {
      this.eleveService.createEleve(eleve).subscribe({
        next: () => {
          this.loadEleves();
          this.cancelForm();
        },
        error: () => alert('Erreur d\'ajout')
      });
    }
  }

  deleteEleve(eleve: Eleve) {
    if (confirm(`Supprimer ${eleve.prenom} ${eleve.nom} ?`)) {
      this.eleveService.deleteEleve(eleve.id!).subscribe({
        next: () => this.loadEleves(),
        error: () => alert('Erreur de suppression')
      });
    }
  }
}
