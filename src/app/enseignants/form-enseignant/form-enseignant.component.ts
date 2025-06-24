import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-form-enseignant',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './form-enseignant.component.html',
  styleUrls: ['./form-enseignant.component.css']
})
export class FormEnseignantComponent implements OnInit {
  enseignantForm!: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.enseignantForm = this.fb.group({
      prenom: ['', Validators.required],
      nom: ['', Validators.required],
      specialite: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      telephone: ['', Validators.required]
    });
  }

  onSubmit(): void {
    if (this.enseignantForm.valid) {
      console.log('Données du formulaire enseignant :', this.enseignantForm.value);
      // envoyer à un service ou API ici
    }
  }
}
