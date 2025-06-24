import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ElevesService } from '../../services/eleves.service';

@Component({
  selector: 'app-form-eleve',
  templateUrl: './form-eleve.component.html',
})
export class FormEleveComponent {
  eleveForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private elevesService: ElevesService,
    private router: Router
  ) {
    this.eleveForm = this.fb.group({
      prenom: ['', Validators.required],
      nom: ['', Validators.required],
      adresse: [''],
      telephone: [''],
      date_naissance: ['']
    });
  }

  onSubmit() {
    if (this.eleveForm.valid) {
      this.elevesService.ajouterEleve(this.eleveForm.value).subscribe({
        next: () => {
          alert('Élève ajouté avec succès !');
          this.router.navigate(['/eleves/liste-eleves']); // redirection après ajout
        },
        error: () => {
          alert('Erreur lors de l’ajout de l’élève.');
        }
      });
    }
  }

  annuler() {
    this.router.navigate(['/eleves/liste-eleves']);
  }
}
