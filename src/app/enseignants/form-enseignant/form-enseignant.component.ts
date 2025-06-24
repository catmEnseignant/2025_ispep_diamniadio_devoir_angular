import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router'; 
import { EnseignantsService, Enseignant } from '../../services/enseignants/enseignant.service';

@Component({
  selector: 'app-form-enseignant',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './form-enseignant.component.html',
  styleUrls: ['./form-enseignant.component.css']
})
export class FormEnseignantComponent implements OnInit {

  enseignantform!: FormGroup;
  enseignantEdit?: Enseignant;
  isedit: boolean = false;

  constructor(
    private fb: FormBuilder, 
    private enseignantService: EnseignantsService, 
    private router: Router
  ) {}

  ngOnInit(): void {
    // Clé 'editEnseignant' (comme dans ListeEnseignantComponent)
    this.isedit = localStorage.getItem("editEnseignant") === "1";

    if (this.isedit) {
      const enseignantData = localStorage.getItem('currentEnseignant'); // même clé que dans ListeEnseignantComponent
      if (enseignantData) {
        this.enseignantEdit = JSON.parse(enseignantData);
      }
    }
    this.initForm();
  }

  private initForm() {
    this.enseignantform = this.fb.group({
      matricule: [this.enseignantEdit?.matricule || ''],
      prenom: [this.enseignantEdit?.prenom || ''],
      nom: [this.enseignantEdit?.nom || ''],
      telephone: [this.enseignantEdit?.telephone || ''],
      adresse: [this.enseignantEdit?.adresse || ''],
      date_embauche: [this.enseignantEdit?.date_embauche || '']
    });
  }

  submitEnseignant() {
    if (this.isedit && this.enseignantEdit?.id) {
      this.enseignantService.updateEnseignant(this.enseignantEdit.id, this.enseignantform.value).subscribe({
        next: () => {
          this.router.navigate(['/enseignants/liste-enseignant']);
          localStorage.removeItem("editEnseignant");
          localStorage.removeItem("currentEnseignant");
        },
        error: (err: any) => console.error('Erreur mise à jour:', err)
      });
    } else {
      this.enseignantService.storeEnseignant(this.enseignantform.value).subscribe({
        next: () => {
          this.router.navigate(['/enseignants/liste-enseignant']);
          localStorage.removeItem("editEnseignant");
          localStorage.removeItem("currentEnseignant");
        },
        error: (err: any) => console.error('Erreur création:', err)
      });
    }
  }
}
