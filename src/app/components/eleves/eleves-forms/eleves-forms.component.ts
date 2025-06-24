import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ElevesServicesService } from '../../../services/eleves-services.service';
import {Eleve, Eleves} from '../../../models/eleves';

@Component({
  selector: 'app-eleves-forms',
  imports: [
    ReactiveFormsModule
  ],
  templateUrl: './eleves-forms.component.html',
  styleUrl: './eleves-forms.component.css'
})
export class ElevesFormsComponent implements OnInit {
  eleveForm: FormGroup;
  isEditMode = false;
  eleveId?: number;

  constructor(
      private fb: FormBuilder,
      private eleveService: ElevesServicesService,
      private router: Router,
      private route: ActivatedRoute
  ) {
    this.eleveForm = this.fb.group({
      numero_carte: ['', Validators.required],
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
      this.eleveId = +id;
      this.loadEleve(this.eleveId);
    }
  }

  loadEleve(id: number) {
    this.eleveService.getEleve(id).subscribe(
        eleve => {
          this.eleveForm.patchValue(eleve);
        },
        error => {
          console.error('Erreur lors du chargement de l\'élève', error);
          this.router.navigate(['/eleves']);
        }
    );
  }

  onSubmit() {
    if (this.eleveForm.valid) {
      const eleveData: Eleves = this.eleveForm.value;

      if (this.isEditMode && this.eleveId) {
        this.eleveService.updateEleve(this.eleveId, eleveData).subscribe(
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
        this.eleveService.addEleve(eleveData).subscribe(
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
    this.router.navigate(['/eleves']);
  }
}
