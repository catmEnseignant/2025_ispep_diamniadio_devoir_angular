import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { EleveService } from '../../services/eleves/eleve.service';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-ajout-eleves',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, HttpClientModule],
  templateUrl: './ajout-eleve.component.html',
  styleUrls: ['./ajout-eleve.component.css']
})
export class AjoutElevesComponent implements OnInit {
  eleveForm: FormGroup;
  isEditMode = false;

  constructor(
    private fb: FormBuilder,
    private eleveService: EleveService,
    public router: Router
  ) {
    this.eleveForm = this.fb.group({
      id: [''],
      prenom: [''],
      nom: [''],
      date_naissance: [''],
      numero_carte: [''],
      adresse: [''],
      telephone: ['']
    });
  }

  ngOnInit(): void {
    this.isEditMode = localStorage.getItem("editEleve") === "1";
    if (this.isEditMode) {
      const eleve = JSON.parse(localStorage.getItem("eleveCourant") || '{}');
      this.eleveForm.patchValue(eleve);
    }
  }

  onSubmit(): void {
    const formData = this.eleveForm.value;

    if (this.isEditMode) {
      this.eleveService.updateEleve(formData.id, formData).subscribe(() => {
        alert("Élève mis à jour !");
        localStorage.removeItem("editEleve");
        localStorage.removeItem("eleveCourant");
        this.router.navigate(['/eleves/list-eleves']);
      }, error => {
        console.error("Erreur mise à jour", error);
        alert("Erreur lors de la mise à jour !");
      });
    } else {
      this.eleveService.storeEleve(formData).subscribe(() => {
        alert("Élève ajouté !");
        this.router.navigate(['/eleves/list-eleves']);
      }, error => {
        console.error("Erreur ajout", error);
        alert("Erreur lors de l'ajout !");
      });
    }
  }
}
