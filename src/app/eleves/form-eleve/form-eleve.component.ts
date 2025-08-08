import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { ElevesService, Eleve } from '../../services/eleves.service'; // adapte le chemin si besoin
import { formatDate } from '@angular/common';

@Component({
  selector: 'app-form-eleve',
  templateUrl: './form-eleve.component.html',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
})
export class FormEleveComponent implements OnInit {
  eleveForm!: FormGroup;
  id?: string; // ✅ string au lieu de number
  isEdit = false;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private route: ActivatedRoute,
    private eleveService: ElevesService
  ) {}

  ngOnInit(): void {
    // Création du formulaire avec les validateurs
    this.eleveForm = this.fb.group({
      numero_carte: ['', Validators.required],
      prenom: ['', Validators.required],
      nom: ['', Validators.required],
      adresse: ['', Validators.required],
      telephone: ['', [Validators.required, Validators.pattern(/^\d{10}$/)]],
      date_naissance: ['', Validators.required],
    });

    // Récupération de l'ID (string)
    this.id = this.route.snapshot.paramMap.get('id')!;
    if (this.id) {
      this.isEdit = true;
      this.eleveService.getEleveById(this.id).subscribe({
        next: (eleve) => {
          console.log('Élève reçu pour édition :', eleve);
          
          // ✅ Si nécessaire, formater la date pour l'input type="date"
          const formattedEleve: Eleve = {
            ...eleve,
            date_naissance: formatDate(eleve.date_naissance, 'yyyy-MM-dd', 'en'),
          };

          this.eleveForm.patchValue(formattedEleve);
        },
        error: (err) => console.error('Erreur chargement élève', err)
      });
    }
  }

  onSubmit(): void {
    if (this.eleveForm.invalid) {
      this.eleveForm.markAllAsTouched();
      return;
    }

    const formValue = this.eleveForm.value;

    if (this.isEdit) {
      this.eleveService.editerEleve({ id: this.id, ...formValue }).subscribe({
        next: () => {
          alert('Élève modifié avec succès');
          this.router.navigate(['/eleves/liste-eleves']);
        },
        error: () => alert('Erreur lors de la modification')
      });
    } else {
      this.eleveService.addEleve(formValue).subscribe({
        next: (response) => {
          alert('Élève ajouté avec succès');
          this.router.navigate(['/eleves/liste-eleves']);
          console.log(response)
        },
        error: (error) =>{
          console.log(error);
           alert('Erreur lors de l\'ajout')
        } 
      });
    }
  }

  annuler(): void {
    this.router.navigate(['/eleves/liste-eleves']);
  }
}
