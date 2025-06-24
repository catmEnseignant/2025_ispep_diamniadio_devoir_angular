import { Component, OnInit } from '@angular/core';
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
export class FormEnseignantComponent implements OnInit {
  classform: FormGroup;
  isEditMode = false;

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

  ngOnInit() {
    const currentEnseignant = localStorage.getItem('currentEnseignant');
    
    if (currentEnseignant) {
      this.isEditMode = true;
      const enseignant = JSON.parse(currentEnseignant);
      this.classform.patchValue(enseignant);
    }
  }

  storeEnseignant() {
    if (this.classform.invalid) {
      alert('Veuillez remplir tous les champs obligatoires');
      return;
    }

    const enseignantData = this.classform.value;
    
    if (this.isEditMode) {
      // Logique de mise à jour
      alert('Mise à jour non implémentée');
    } else {
      this.enseignantService.storeEnseignant(enseignantData).subscribe(
        () => {
          alert('Enseignant ajouté avec succès');
          this.router.navigate(['/enseignants/list-enseignant']);
        },
        (error) => {
          console.error('Erreur:', error);
          alert('Une erreur est survenue lors de l\'ajout');
        }
      );
    }
  }
}