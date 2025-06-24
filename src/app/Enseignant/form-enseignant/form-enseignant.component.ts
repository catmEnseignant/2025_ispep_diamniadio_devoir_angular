import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { EnseignantService } from '../../services/enseignant/enseignant-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form-enseignant',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './form-enseignant.component.html',
  styleUrls: ['./form-enseignant.component.css']
})
export class FormEnseignantComponent {

  enseignantForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private enseignantService: EnseignantService,
    private router: Router
  ) {
    this.enseignantForm = this.fb.group({
      matricule: [''],
      prenom: [''],
      nom: [''],
      adresse: [''],
      telephone: ['']
    });
  }

  submitEnseignant() {
    const isEdit = localStorage.getItem("editEnseignant") === "1";
    const current = localStorage.getItem("currentEnseignant");

    if (isEdit && current) {
      const edited = JSON.parse(current);
      const data = { ...this.enseignantForm.value, id: edited.id };

      this.enseignantService.update(data).subscribe(
        () => {
          alert('Enseignant modifié avec succès');
          this.router.navigate(['/enseignants/list-enseignants']);
        },
        (error) => {
          console.log('Erreur lors de la modification', error);
        }
      );
    } else {
      this.enseignantService.create(this.enseignantForm.value).subscribe(
        () => {
          alert('Enseignant ajouté avec succès');
          this.router.navigate(['/enseignants/list-enseignants']);
        },
        (error) => {
          console.log('Erreur lors de l\'ajout', error);
        }
      );
    }
  }

  ngOnInit() {
    const isEdit = localStorage.getItem("editEnseignant") === "1";
    if (isEdit) {
      const current = JSON.parse(localStorage.getItem("currentEnseignant") || '{}');
      this.enseignantForm.patchValue(current);
    }
  }
}
