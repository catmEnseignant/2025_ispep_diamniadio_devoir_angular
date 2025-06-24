import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-form-enseignant',
  templateUrl: './form-enseignant.component.html',
  styleUrls: ['./form-enseignant.component.css'],
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule]
})
export class FormEnseignantComponent {
  enseignantform!: FormGroup;

  constructor(private fb: FormBuilder) {
    this.enseignantform = this.fb.group({
      nom: [''],
      prenom: [''],
      telephone: [''],
      email: ['']
    });
  }

  submitEnseignant() {
    console.log('Formulaire enseignant soumis :', this.enseignantform.value);
    // Appel du service ici si nécessaire
  }
}
