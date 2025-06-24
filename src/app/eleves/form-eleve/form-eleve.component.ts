import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators,ReactiveFormsModule } from '@angular/forms';
import { EleveService } from '../../services/eleve.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form-eleve',
  imports: [ReactiveFormsModule],
  templateUrl: './form-eleve.component.html',
  styleUrls: ['./form-eleve.component.css']
})
export class FormEleveComponent implements OnInit {

  eleveForm: FormGroup;
  editMode: boolean = false;
  eleveEdit: any;

  constructor(
    private fb: FormBuilder,
    private eleveService: EleveService,
    private router: Router
  ) {
    // Initialise ton formulaire ici (vide)
    this.eleveForm = this.fb.group({
      nom: ['', Validators.required],
      prenom: ['', Validators.required],
      telephone: ['', [Validators.required, Validators.pattern(/^\d{8,}$/)]],
      adresse: ['', Validators.required],
      dateNaissance: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    const editFlag = localStorage.getItem('editEleve');
    this.editMode = editFlag === '1';

    if (this.editMode) {
      const eleveData = localStorage.getItem('currentEleve');
      if (eleveData) {
        this.eleveEdit = JSON.parse(eleveData);
        // Remplir le formulaire avec les données existantes
        this.eleveForm.patchValue({
          nom: this.eleveEdit.nom,
          prenom: this.eleveEdit.prenom,
          telephone: this.eleveEdit.telephone,
          adresse: this.eleveEdit.adresse,
          dateNaissance: this.eleveEdit.dateNaissance
        });
      }
    }
  }

  onSubmit(): void {
    if (this.eleveForm.invalid) {
      this.eleveForm.markAllAsTouched();
      return;
    }

    if (this.editMode && this.eleveEdit?.id) {
      this.eleveService.updateEleve(this.eleveEdit.id, this.eleveForm.value).subscribe({
        next: () => this.router.navigate(['eleves/list-eleve']),
        error: err => console.error('Erreur update', err)
      });
    } else {
      this.eleveService.createEleve(this.eleveForm.value).subscribe({
        next: () => this.router.navigate(['eleves/list-eleve']),
        error: err => console.error('Erreur create', err)
      });
    }
  }

  onCancel(): void {
    this.router.navigate(['eleves/list-eleve']);
  }
}
