import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { EnseignantsService } from '../../services/enseignants.service';

@Component({
  selector: 'app-form-enseignant',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './form-enseignant.component.html',
  styleUrls: ['./form-enseignant.component.css']
})
export class FormEnseignantComponent implements OnInit {
  enseignantForm!: FormGroup;
  id?: number;
  isEdit = false;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private route: ActivatedRoute,
    private enseignantsService: EnseignantsService
  ) {}

  ngOnInit(): void {
    this.enseignantForm = this.fb.group({
      prenom: ['', Validators.required],
      nom: ['', Validators.required],
      matricule: ['', Validators.required],
      telephone: [''],
      adresse: ['']
    });

    this.id = Number(this.route.snapshot.paramMap.get('id'));
    if (this.id) {
      this.isEdit = true;
      this.enseignantsService.getEnseignantById(this.id).subscribe({
        next: (enseignant) => this.enseignantForm.patchValue(enseignant),
        error: (err) => console.error('Erreur chargement enseignant', err)
      });
    }
  }

  onSubmit(): void {
    if (this.enseignantForm.invalid) return;

    const formValue = this.enseignantForm.value;

    if (this.isEdit) {
      this.enseignantsService.editerEnseignant({ id: this.id, ...formValue }).subscribe({
        next: () => {
          alert('Enseignant modifié avec succès');
          this.router.navigate(['/enseignants/liste-enseignants']);
        },
        error: () => alert('Erreur lors de la modification')
      });
    } else {
      this.enseignantsService.ajouterEnseignant(formValue).subscribe({
        next: () => {
          alert('Enseignant ajouté avec succès');
          this.router.navigate(['/enseignants/liste-enseignants']);
        },
        error: () => alert('Erreur lors de l\'ajout')
      });
    }
  }

  annuler(): void {
    this.router.navigate(['/enseignants/liste-enseignants']);
  }
}
