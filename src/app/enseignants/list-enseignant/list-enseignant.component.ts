import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EnseignantService, Enseignant } from '../../services/enseignant.service';
import { CommonModule } from '@angular/common';



@Component({
  selector: 'app-list-enseignant',
  imports: [CommonModule],
  templateUrl: './list-enseignant.component.html',
  styleUrls: ['./list-enseignant.component.css']
})
export class ListEnseignantComponent implements OnInit {
  enseignants: Enseignant[] = [];

  constructor(
    private enseignantService: EnseignantService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.getEnseignants();
  }

  getEnseignants(): void {
    this.enseignantService.getAll().subscribe({
      next: (data) => {
        this.enseignants = data;
      },
      error: (err) => {
        console.error('Erreur lors du chargement des enseignants', err);
      }
    });
  }

  editEnseignant(id: number): void {
    this.router.navigate(['/enseignants/form-enseignant', id]);
  }

  deleteEnseignant(id: number): void {
    if (confirm("Voulez-vous vraiment supprimer cet enseignant ?")) {
      this.enseignantService.delete(id).subscribe({
        next: () => {
          alert("Enseignant supprimé avec succès.");
          this.getEnseignants();
        },
        error: (err) => {
          console.error("Erreur lors de la suppression", err);
        }
      });
    }
  }

  goToAjout(): void {
    this.router.navigate(['/enseignants/form-enseignant']);
  }
}
