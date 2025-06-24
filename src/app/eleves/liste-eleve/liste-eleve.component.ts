import { EleveService } from './../../services/eleve.service';

import { CommonModule } from '@angular/common';

import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-liste-eleve',
  imports: [CommonModule],
  templateUrl: './liste-eleve.component.html',
  styleUrl: './liste-eleve.component.css'
})
export class ListeEleveComponent implements OnInit {






  eleves: any[] = [];

  constructor(private eleveService:EleveService) {}

  ngOnInit(): void {
    this.chargerEleves();
  }

  chargerEleves(): void {
    this.eleveService.getEleves().subscribe({
      next: (data) => {
        this.eleves = data;
      },
      error: (error) => {
        console.error('Erreur lors du chargement des élèves :', error);
      }
    });
  }

  supprimerEleve(id: number): void {
    if (confirm('Voulez-vous vraiment supprimer cet élève ?')) {
      this.eleveService.supprimerEleve(id).subscribe({
        next: () => {
          // Supprime localement
          this.eleves = this.eleves.filter(e => e.id !== id);
        },
        error: (error) => {
          console.error('Erreur lors de la suppression :', error);
          alert('Erreur de suppression.');
        }
      });
    }
  }
}