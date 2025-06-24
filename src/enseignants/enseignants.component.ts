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
    <div class="container py-4">

      <h3 class="text-center mb-4">👨‍🏫 Gestion des Enseignants</h3>

      <form [formGroup]="enseignantForm" (ngSubmit)="onSubmit()" class="border rounded p-3 mb-4 shadow-sm bg-light">
        <div class="row g-3">
          <div class="col-md-4">
            <input formControlName="prenom" type="text" class="form-control" placeholder="Prénom *"
              [class.is-invalid]="f('prenom').touched && f('prenom').invalid">
          </div>
          <div class="col-md-4">
            <input formControlName="nom" type="text" class="form-control" placeholder="Nom *"
              [class.is-invalid]="f('nom').touched && f('nom').invalid">
          </div>
          <div class="col-md-4">
            <input formControlName="email" type="email" class="form-control" placeholder="Email *"
              [class.is-invalid]="f('email').touched && f('email').invalid">
          </div>
          <div class="col-md-4">
            <input formControlName="telephone" type="text" class="form-control" placeholder="Matricule *"
              [class.is-invalid]="f('telephone').touched && f('telephone').invalid">
          </div>
          <div class="col-md-4">
            <select formControlName="matiere" class="form-select"
              [class.is-invalid]="f('matiere').touched && f('matiere').invalid">
              <option value="">Matière *</option>
              <option *ngFor="let mat of matieres" [value]="mat">{{ mat }}</option>
            </select>
          </div>
          <div class="col-md-4">
            <input formControlName="dateNaissance" type="date" class="form-control"
              [class.is-invalid]="f('dateNaissance').touched && f('dateNaissance').invalid">
          </div>
        </div>

        <div class="mt-3 text-end">
          <button type="submit" class="btn btn-primary me-2" [disabled]="enseignantForm.invalid">
            {{ isEditing ? '✅ Modifier' : '➕ Ajouter' }}
          </button>
          <button type="button" class="btn btn-outline-secondary" (click)="cancelForm()">Annuler</button>
        </div>
      </form>

      <table class="table table-bordered table-hover shadow-sm">
        <thead class="table-dark text-center">
          <tr>
            <th>#</th>
            <th>Nom Complet</th>
            <th>Email</th>
            <th>Matricule</th>
            <th>Matière</th>
            <th>Naissance</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody *ngIf="enseignants.length > 0; else vide">
          <tr *ngFor="let e of enseignants; let i = index">
            <td>{{ i + 1 }}</td>
            <td>{{ e.prenom }} {{ e.nom }}</td>
            <td>{{ e.email }}</td>
            <td>{{ e.telephone }}</td>
            <td>{{ e.matiere }}</td>
            <td>{{ e.dateNaissance | date:'dd/MM/yyyy' }}</td>
            <td class="text-center">
              <button class="btn btn-sm btn-warning me-1" (click)="editEnseignant(e)">✏️</button>
              <button class="btn btn-sm btn-danger" (click)="deleteEnseignant(e)">🗑️</button>
            </td>
          </tr>
        </tbody>
      </table>

      <ng-template #vide>
        <p class="text-center text-muted mt-3">Aucun enseignant trouvé.</p>
      </ng-template>
    </div>
  `
})
export class EnseignantsComponent implements OnInit {
  enseignants: Enseignant[] = [];
  enseignantForm: FormGroup;
  isEditing = false;
  editingEnseignantId?: number;

  matieres = ['Mathématiques', 'Informatique', 'Physique', 'Français', 'Anglais', 'Gestion', 'Comptabilité', 'Marketing', 'Économie'];

  constructor(private enseignantService: EnseignantService, private fb: FormBuilder) {
    this.enseignantForm = this.fb.group({
      prenom: ['', Validators.required],
      nom: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      telephone: ['', Validators.required],
      matiere: ['', Validators.required],
      dateNaissance: ['', Validators.required]
    });
  }

  ngOnInit() {
    this.loadEnseignants();
  }

  f(field: string) {
    return this.enseignantForm.get(field)!;
  }

  loadEnseignants() {
    this.enseignantService.getEnseignants().subscribe({
      next: (data) => this.enseignants = data,
      error: () => alert("Erreur de chargement. Vérifiez l'API.")
    });
  }

  onSubmit() {
    if (this.enseignantForm.invalid) return;
    const data = this.enseignantForm.value;

    if (this.isEditing && this.editingEnseignantId) {
      this.enseignantService.updateEnseignant(this.editingEnseignantId, data).subscribe(() => {
        this.loadEnseignants();
        this.cancelForm();
      });
    } else {
      this.enseignantService.createEnseignant(data).subscribe(() => {
        this.loadEnseignants();
        this.cancelForm();
      });
    }
  }

  editEnseignant(e: Enseignant) {
    this.isEditing = true;
    this.editingEnseignantId = e.id;
    this.enseignantForm.patchValue(e);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  cancelForm() {
    this.isEditing = false;
    this.editingEnseignantId = undefined;
    this.enseignantForm.reset();
  }

  deleteEnseignant(e: Enseignant) {
    if (confirm(`Supprimer ${e.prenom} ${e.nom} ?`)) {
      this.enseignantService.deleteEnseignant(e.id!).subscribe(() => this.loadEnseignants());
    }
  }
}
