import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { EnseignantService } from '../services/enseignant.service';

@Component({
  selector: 'app-enseignants-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  template: `
    <div class="card">
      <div class="card-header">
        <h5>{{ isEdit ? 'Modifier' : 'Ajouter' }} un enseignant</h5>
      </div>

      <div class="card-body">
        <form [formGroup]="form" (ngSubmit)="onSubmit()">
          <div class="mb-3">
            <label>Prénom</label>
            <input formControlName="prenom" class="form-control" />
          </div>
          <div class="mb-3">
            <label>Nom</label>
            <input formControlName="nom" class="form-control" />
          </div>
          <div class="mb-3">
            <label>Téléphone</label>
            <input formControlName="telephone" class="form-control" />
          </div>
          <div class="mb-3">
            <label>Adresse</label>
            <input formControlName="adresse" class="form-control" />
          </div>

          <button type="submit" class="btn btn-success" [disabled]="form.invalid">
            {{ isEdit ? 'Mettre à jour' : 'Ajouter' }}
          </button>
        </form>
      </div>
    </div>
  `
})
export class EnseignantsFormComponent implements OnInit {
  form!: FormGroup;
  isEdit = false;
  enseignantId: number = 0;

  constructor(
    private fb: FormBuilder,
    private enseignantService: EnseignantService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      prenom: ['', Validators.required],
      nom: ['', Validators.required],
      telephone: ['', Validators.required],
      adresse: ['', Validators.required],
    });

    this.route.paramMap.subscribe(params => {
      const id = params.get('id');
      if (id) {
        this.isEdit = true;
        this.enseignantId = +id;
        this.enseignantService.getById(this.enseignantId).subscribe(ens => {
          this.form.patchValue(ens);
        });
      }
    });
  }

  onSubmit(): void {
    if (this.form.invalid) return;

    if (this.isEdit) {
      this.enseignantService.update(this.enseignantId, this.form.value).subscribe(() => {
        this.router.navigate(['/enseignants']);
      });
    } else {
      this.enseignantService.add(this.form.value).subscribe(() => {
        this.router.navigate(['/enseignants']);
      });
    }
  }
}
