import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { EnseignantService } from '../../services/enseignants/enseignant.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-ajout-enseignants',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './ajout-enseignants.component.html',
  styleUrls: ['./ajout-enseignants.component.css']
})
export class AjoutEnseignantsComponent implements OnInit {
  enseignantForm: FormGroup;
  isEditMode = false;

  constructor(
    private fb: FormBuilder,
    private enseignantService: EnseignantService,
    public router: Router
  ) {
    this.enseignantForm = this.fb.group({
      id: [''],
      matricule: [''],
      prenom: [''],
      nom: [''],
      telephone: [''],
      adresse: ['']
    });
  }

  ngOnInit(): void {
    this.isEditMode = localStorage.getItem("editEnseignant") === "1";

    if (this.isEditMode) {
      const enseignant = JSON.parse(localStorage.getItem("enseignantCourant") || '{}');
      console.log("Chargement pour modification :", enseignant);
      this.enseignantForm.patchValue(enseignant);
    }
  }

  onSubmit(): void {
    const formData = this.enseignantForm.value;
    console.log("Données soumises :", formData);

    if (this.isEditMode) {
      this.enseignantService.updateEnseignant(formData.matricule, formData).subscribe(
        () => {
          alert("Enseignant mis à jour !");
          localStorage.removeItem("editEnseignant");
          localStorage.removeItem("enseignantCourant");
          this.router.navigate(['/enseignants']);
        },
        error => {
          console.error("Erreur mise à jour", error);
          alert("Erreur lors de la mise à jour !");
        }
      );
    } else {
      this.enseignantService.storeEnseignant(formData).subscribe(
        () => {
          alert("Enseignant ajouté !");
          this.router.navigate(['/enseignants']);
        },
        error => {
          console.error("Erreur ajout", error);
          alert("Erreur lors de l'ajout !");
        }
      );
    }
  }
}
