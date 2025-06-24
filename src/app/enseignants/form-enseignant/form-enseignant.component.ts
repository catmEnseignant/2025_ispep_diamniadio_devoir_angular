import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { EnseignantService } from '../../service/enseignants/enseignant.service';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form-enseignant',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './form-enseignant.component.html',
  styleUrls: ['./form-enseignant.component.css']
})
export class FormEnseignantComponent {
  classform: FormGroup;

  constructor(
    private fb: FormBuilder,
    private enseignantService: EnseignantService,
    private router: Router
  ) {
    this.classform = this.fb.group({
      matricule: [''],
      prenom: [''],
      nom: [''],
      telephone: [''],
      adresse: ['']
    });
  }

  storeEnseignant() {
    this.enseignantService.storeEnseignant(this.classform.value).subscribe(
      () => {
        alert('Enseignant ajouté avec succès');
        this.router.navigate(['/enseignants/list-enseignant']);
      },
      (error) => {
        console.error('Erreur:', error);
        alert('Une erreur est survenue');
      }
    );
  }
}