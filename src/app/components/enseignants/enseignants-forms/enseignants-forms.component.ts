import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import {EnseignantsServicesService} from "../../../services/enseignants-services.service";
import {Enseignants} from "../../../models/enseignants";

@Component({
  selector: 'app-enseignants-forms',
  imports: [
    ReactiveFormsModule
  ],
  templateUrl: './enseignants-forms.component.html',
  styleUrl: './enseignants-forms.component.css'
})
export class EnseignantsFormsComponent implements OnInit {
  enseignantForm: FormGroup;
  isEditMode = false;
  enseignantId?: number;

  constructor(
      private fb: FormBuilder,
      private enseigantService: EnseignantsServicesService,
      private router: Router,
      private route: ActivatedRoute
  ) {
    this.enseignantForm = this.fb.group({
      matricule: ['', Validators.required],
      prenom: ['', Validators.required],
      nom: ['', Validators.required],
      telephone: ['', Validators.required],
      adresse: ['', Validators.required],
    });
  }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.isEditMode = true;
      this.enseignantId = +id;
      this.loadEnseignant(this.enseignantId);
    }
  }

  loadEnseignant(id: number) {
    this.enseigantService.getEnseignant(id).subscribe(
        enseigant => {
          this.enseignantForm.patchValue(enseigant);
        },
        error => {
          console.error('Erreur lors du chargement de l\'élève', error);
          this.router.navigate(['/eleves']);
        }
    );
  }

  onSubmit() {
    if (this.enseignantForm.valid) {
      const enseignantData: Enseignants = this.enseignantForm.value;

      if (this.isEditMode && this.enseignantId) {
        this.enseigantService.updateEnseignant(this.enseignantId, enseignantData).subscribe(
            () => {
              alert('Élève modifié avec succès');
              this.router.navigate(['/eleves']);
            },
            error => {
              console.error('Erreur lors de la modification', error);
              alert('Erreur lors de la modification');
            }
        );
      } else {
        this.enseigantService.addEnseignant(enseignantData).subscribe(
            () => {
              alert('Élève ajouté avec succès');
              this.router.navigate(['/eleves']);
            },
            error => {
              console.error('Erreur lors de l\'ajout', error);
              alert('Erreur lors de l\'ajout');
            }
        );
      }
    }
  }

  retour() {
    this.router.navigate(['/enseignants']);
  }
}

