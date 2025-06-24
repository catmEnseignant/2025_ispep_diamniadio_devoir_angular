import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { EleveService } from '../../services/eleve.service';

@Component({
  selector: 'app-form-eleve',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './form-eleve.component.html',
  styleUrls: ['./form-eleve.component.css']
})
export class FormEleveComponent implements OnInit {
  form: FormGroup;
  isEdit = false;
  id: number | null = null;

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private eleveService: EleveService
  ) {
    this.form = this.fb.group({
      numero_carte: ['', Validators.required],
      prenom: ['', Validators.required],
      nom: ['', Validators.required],
      adresse: [''],
      telephone: [''],
      date_naissance: ['']
    });
  }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    if (this.id) {
      this.isEdit = true;
      this.eleveService.getEleveById(this.id).subscribe({
        next: (data) => this.form.patchValue(data),
        error: (err) => console.error('Erreur chargement élève', err)
      });
    }
  }

  enregistrer(): void {
    if (this.form.invalid) return;

    const eleveData = this.form.value;

    if (this.isEdit && this.id !== null) {
      this.eleveService.modifierEleve(this.id, eleveData).subscribe({
        next: () => this.router.navigate(['/eleves/liste-eleve']),
        error: (err) => {
          console.error('Erreur modification élève', err);
          alert('Échec de la modification.');
        }
      });
    } else {
      this.eleveService.ajouterEleve(eleveData).subscribe({
        next: () => this.router.navigate(['/eleves/liste-eleve']),
        error: (err) => {
          console.error('Erreur ajout élève', err);
          alert('Échec de l\'ajout.');
        }
      });
    }
  }
}




