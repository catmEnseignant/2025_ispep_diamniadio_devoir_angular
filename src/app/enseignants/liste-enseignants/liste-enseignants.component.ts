import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';         // Pour *ngFor, | date
import { RouterModule } from '@angular/router';         // Pour routerLink
import { EnseignantService } from '../../services/enseignant.service'; // ton service

@Component({
  selector: 'app-liste-enseignants',
  templateUrl: './liste-enseignants.component.html',
  styleUrls: ['./liste-enseignants.component.css'],
  standalone: true,
  imports: [CommonModule, RouterModule]
})
export class ListeEnseignantsComponent implements OnInit {
  enseignants: any[] = []; // ✅ Correctement nommé

  constructor(private enseignantService: EnseignantService) {}

  ngOnInit(): void {
    this.loadEnseignants();
  }

  loadEnseignants(): void {
    this.enseignantService.getAll().subscribe({
      next: (data) => (this.enseignants = data),
      error: (err) => console.error('Erreur chargement enseignants', err)
    });
  }

  confirmDelete(id: number): void {
    if (!id) return;
    if (confirm('Voulez-vous vraiment supprimer cet enseignant ?')) {
      this.enseignantService.delete(id).subscribe({
        next: () => this.loadEnseignants(),
        error: (err) => console.error('Erreur suppression', err)
      });
    }
  }
}
