import { Component } from '@angular/core';
import { EleveService } from '../../service/eleves/eleve.service';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form-eleve',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './form-eleve.component.html',
  styleUrls: ['./form-eleve.component.css']
})
export class FormEleveComponent {
  classform: FormGroup;

  constructor(
    private fb: FormBuilder,
    private eleveService: EleveService,
    private router: Router
  ) {
    this.classform = this.fb.group({
      numero_carte: [''],
      prenom: [''],
      nom: [''],
      telephone: [''],
      adresse: [''],
      date_naissance: ['']
    });
  }

  storeEleve() {
    this.eleveService.storeEleve(this.classform.value).subscribe(
      () => {
        alert('Élève ajouté avec succès');
        this.router.navigate(['/eleves/list-eleve']);
      },
      (error) => {
        console.error('Erreur:', error);
        alert('Une erreur est survenue');
      }
    );
  }
}