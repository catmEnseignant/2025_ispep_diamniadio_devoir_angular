import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { EleveService } from '../services/eleve.service';

@Component({
  selector: 'app-eleves-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  template: `
    <div class="card">
      <div class="card-header">
        <h5>{{ isEdit ? 'Modifier' : 'Ajouter' }} un élève</h5>
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
          <div class="mb-3">
            <label>Date de naissance</label>
            <input type="date" formControlName="date_naissance" class="form-control" />
          </div>

          <button type="submit" class="btn btn-success" [disabled]="form.invalid">
            {{ isEdit ? 'Mettre à jour' : 'Ajouter' }}
          </button>
        </form>
      </div>
    </div>
  `
})
export class ElevesFormComponent implements OnInit {
  form!: FormGroup;
  isEdit = false;
  eleveId: number = 0;

  constructor(
    private fb: FormBuilder,
    private eleveService: EleveService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      prenom: ['', Validators.required],
      nom: ['', Validators.required],
      telephone: ['', Validators.required],
      adresse: ['', Validators.required],
      date_naissance: ['', Validators.required],
    });

    this.route.paramMap.subscribe(params => {
      const id = params.get('id');
      if (id) {
        this.isEdit = true;
        this.eleveId = +id;
        this.eleveService.getById(this.eleveId).subscribe(eleve => {
          this.form.patchValue(eleve);
        });
      }
    });
  }

  onSubmit(): void {
    if (this.form.invalid) return;

    if (this.isEdit) {
      this.eleveService.update(this.eleveId, this.form.value).subscribe(() => {
        this.router.navigate(['/eleves']);
      });
    } else {
      this.eleveService.add(this.form.value).subscribe(() => {
        this.router.navigate(['/eleves']);
      });
    }
  }
}
