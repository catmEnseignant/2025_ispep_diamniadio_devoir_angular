import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { EnseignantService } from '../../services/enseignant.service';

@Component({
  selector: 'app-form-enseignant',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './form-enseignant.component.html',
  styleUrls: ['./form-enseignant.component.css']
})
export class FormEnseignantComponent implements OnInit {
  form: FormGroup;
  isEdit = false;
  id: number | null = null;

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private enseignantService: EnseignantService
  ) {
    this.form = this.fb.group({
      matricule: ['', Validators.required],
      prenom: ['', Validators.required],
      nom: ['', Validators.required],
      telephone: [''],
      adresse: ['']
    });
  }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    if (this.id) {
      this.isEdit = true;
      this.enseignantService.getEnseignantById(this.id).subscribe({
        next: data => this.form.patchValue(data),
        error: err => console.error('Erreur chargement enseignant', err)
      });
    }
  }

  enregistrer(): void {
    if (this.form.invalid) return;

    const enseignantData = this.form.value;

    if (this.isEdit && this.id !== null) {
      this.enseignantService.modifierEnseignant(this.id, enseignantData).subscribe({
        next: () => this.router.navigate(['/enseignants/liste-enseignant']),
        error: err => {
          console.error('Erreur modification enseignant', err);
          alert('Échec de la modification.');
        }
      });
    } else {
      this.enseignantService.ajouterEnseignant(enseignantData).subscribe({
        next: () => this.router.navigate(['/enseignants/liste-enseignant']),
        error: err => {
          console.error('Erreur ajout enseignant', err);
          alert('Échec de l\'ajout.');
        }
      });
    }
  }
}