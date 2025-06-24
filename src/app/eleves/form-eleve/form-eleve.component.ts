import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router'; 
import { ElevesService, Eleve } from '../../services/eleves/eleve.service';

@Component({
  selector: 'app-form-eleve',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './form-eleve.component.html',
  styleUrls: ['./form-eleve.component.css']
})
export class FormEleveComponent implements OnInit {

  eleveform!: FormGroup;
  eleveEdit?: Eleve;
  isedit: boolean = false;

  constructor(
    private fb: FormBuilder, 
    private eleveService: ElevesService, 
    private router: Router
  ) {}

  ngOnInit(): void {
    // Clé 'editEleve' (comme dans ListeEleveComponent)
    this.isedit = localStorage.getItem("editEleve") === "1";

    if (this.isedit) {
      const eleveData = localStorage.getItem('curentEleve'); // même clé que dans ListeEleveComponent
      if (eleveData) {
        this.eleveEdit = JSON.parse(eleveData);
      }
    }
    this.initForm();
  }

  private initForm() {
    this.eleveform = this.fb.group({
      numero_carte: [this.eleveEdit?.numero_carte || ''],
      prenom: [this.eleveEdit?.prenom || ''],
      nom: [this.eleveEdit?.nom || ''],
      telephone: [this.eleveEdit?.telephone || ''],
      Adresse: [this.eleveEdit?.Adresse || ''],
      date_naissance: [this.eleveEdit?.date_naissance || ''],
      nombres_eleve: [this.eleveEdit?.nombres_eleve || '']
    });
  }

  submitEleve() {
    if (this.isedit && this.eleveEdit?.id) {
      this.eleveService.updateEleve(this.eleveEdit.id, this.eleveform.value).subscribe({
        next: () => {
          this.router.navigate(['/eleves/liste-eleve']);
          localStorage.removeItem("editEleve");
          localStorage.removeItem("curentEleve");
        },
        error: (err: any) => console.error('Erreur mise à jour:', err)
      });
    } else {
      this.eleveService.storeEleve(this.eleveform.value).subscribe({
        next: () => {
          this.router.navigate(['/eleves/liste-eleve']);
          localStorage.removeItem("editEleve");
          localStorage.removeItem("curentEleve");
        },
        error: (err: any) => console.error('Erreur création:', err)
      });
    }
  }
}
