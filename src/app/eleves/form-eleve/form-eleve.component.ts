import { Component, OnInit } from '@angular/core';
import { EleveService } from '../../service/eleves/eleve.service';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-form-eleve',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './form-eleve.component.html',
  styleUrls: ['./form-eleve.component.css']
})
export class FormEleveComponent implements OnInit {
storeEleve() {
throw new Error('Method not implemented.');
}
  classform: FormGroup;
  isEditMode = false;
  currentEleveId: string | null = null;

  constructor(
    private fb: FormBuilder,
    private eleveService: EleveService,
    private router: Router,
    private route: ActivatedRoute
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

  ngOnInit(): void {
    const eleveData = localStorage.getItem('currentEleve');
    if (eleveData) {
      const eleve = JSON.parse(eleveData);
      this.currentEleveId = eleve.id;
      this.classform.patchValue(eleve);
      this.isEditMode = true;
    }
  }

  onSubmit() {
    if (this.isEditMode && this.currentEleveId) {
      this.eleveService.updateEleve(this.currentEleveId, this.classform.value).subscribe(
        () => {
          alert('Élève modifié avec succès');
          localStorage.removeItem('currentEleve');
          this.router.navigate(['/eleves/list-eleve']);
        },
        (error) => console.error('Erreur:', error)
      );
    } else {
      this.eleveService.storeEleve(this.classform.value).subscribe(
        () => {
          alert('Élève ajouté avec succès');
          this.router.navigate(['/eleves/list-eleve']);
        },
        (error) => console.error('Erreur:', error)
      );
    }
  }
}