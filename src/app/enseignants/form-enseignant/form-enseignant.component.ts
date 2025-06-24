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
storeEnseignant() {
throw new Error('Method not implemented.');
}
  classform: FormGroup;
  isEditMode = false;
  currentEnseignantId: string | null = null;

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
    const enseignantData = localStorage.getItem('currentEnseignant');
    if (enseignantData) {
      const enseignant = JSON.parse(enseignantData);
      this.currentEnseignantId = enseignant.id;
      this.classform.patchValue(enseignant);
      this.isEditMode = true;
    }
  }

  onSubmit() {
    if (this.classform.invalid) {
      alert('Veuillez remplir tous les champs obligatoires');
      return;
    }

    if (this.isEditMode && this.currentEnseignantId) {
      this.enseignantService.updateEnseignant(this.currentEnseignantId, this.classform.value).subscribe(
        () => {
          alert('Enseignant modifié avec succès');
          localStorage.removeItem('currentEnseignant');
          this.router.navigate(['/enseignants/list-enseignant']);
        },
        (error) => console.error('Erreur:', error)
      );
    } else {
      this.enseignantService.storeEnseignant(this.classform.value).subscribe(
        () => {
          alert('Enseignant ajouté avec succès');
          this.router.navigate(['/enseignants/list-enseignant']);
        },
        (error) => console.error('Erreur:', error)
      );
    }
  }
}