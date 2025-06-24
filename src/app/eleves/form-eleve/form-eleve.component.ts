import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { EleveService } from '../../services/eleve.service';

@Component({
  selector: 'app-form-eleve',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './form-eleve.component.html',
  styleUrls: ['./form-eleve.component.css']
})
export class FormEleveComponent implements OnInit {
  eleve = {
    id: null,
    numero_carte: '',
    prenom: '',
    nom: '',
    adresse: '',
    telephone: '',
    date_naissance: ''
  };

  isEditMode = false;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private eleveService: EleveService
  ) {}

  ngOnInit(): void {
    const idParam = this.route.snapshot.paramMap.get('id');
    const id = idParam ? +idParam : null;

    if (id) {
      this.isEditMode = true;
      this.eleveService.getById(id).subscribe({
        next: (data) => {
          this.eleve = { ...data, id }; // ⚠️ Ajoute id manuellement si nécessaire
        },
        error: () => {
          alert('Élève introuvable !');
          this.router.navigate(['/eleves']);
        }
      });
    }
  }

  onSubmit(): void {
    if (this.isEditMode && this.eleve.id) {
      this.eleveService.update(this.eleve.id, this.eleve).subscribe({
        next: () => {
          alert('Élève modifié avec succès !');
          this.router.navigate(['/eleves']);
        },
        error: (err) => {
          console.error('Erreur lors de la modification', err);
        }
      });
    } else {
      this.eleveService.create(this.eleve).subscribe({
        next: () => {
          alert('Élève ajouté avec succès !');
          this.router.navigate(['/eleves']);
        },
        error: (err) => {
          console.error('Erreur lors de la création', err);
        }
      });
    }
  }
}
