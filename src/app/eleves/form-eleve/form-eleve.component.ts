import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { ElevesService } from '../../services/eleves.service'; // adapte le chemin

@Component({
  selector: 'app-form-eleve',
  templateUrl: './form-eleve.component.html',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule], // <-- IMPORTANT
})
export class FormEleveComponent implements OnInit {
  eleveForm!: FormGroup;
  id?: number;
  isEdit = false;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private route: ActivatedRoute,
    private eleveService: ElevesService
  ) {}

  ngOnInit(): void {
    this.eleveForm = this.fb.group({
      prenom: ['', Validators.required],
      nom: ['', Validators.required],
      adresse: [''],
      telephone: [''],
      date_naissance: [''],
    });

    this.id = Number(this.route.snapshot.paramMap.get('id'));
    if (this.id) {
      this.isEdit = true;
      this.eleveService.getEleveById(this.id).subscribe({
        next: (eleve) => this.eleveForm.patchValue(eleve),
        error: (err) => console.error('Erreur chargement élève', err)
      });
    }
  }

  onSubmit(): void {
    if (this.eleveForm.invalid) return;

    const formValue = this.eleveForm.value;

    if (this.isEdit) {
      this.eleveService.updateEleve({ id: this.id, ...formValue }).subscribe({
        next: () => {
          alert('Élève modifié avec succès');
          this.router.navigate(['/eleves/liste-eleves']);
        },
        error: () => alert('Erreur lors de la modification')
      });
    } else {
      this.eleveService.ajouterEleve(formValue).subscribe({
        next: () => {
          alert('Élève ajouté avec succès');
          this.router.navigate(['/eleves/liste-eleves']);
        },
        error: () => alert('Erreur lors de l\'ajout')
      });
    }
  }

  annuler(): void {
    this.router.navigate(['/eleves/liste-eleves']);
  }
}
