import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EnseignantService } from '../../services/enseignant.service';

@Component({
  selector: 'app-liste-enseignant',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './liste-enseignant.component.html',
  styleUrls: ['./liste-enseignant.component.css']
})
export class ListeEnseignantComponent implements OnInit {
  enseignants: any[] = [];

  constructor(private enseignantService: EnseignantService) {}

  ngOnInit(): void {
    this.chargerEnseignants();
  }

  chargerEnseignants(): void {
    this.enseignantService.getEnseignants().subscribe({
      next: data => this.enseignants = data,
      error: err => console.error('Erreur chargement enseignants', err)
    });
  }

  supprimerEnseignant(id: number): void {
    if (confirm('Voulez-vous vraiment supprimer cet enseignant ?')) {
      this.enseignantService.supprimerEnseignant(id).subscribe({
        next: () => this.enseignants = this.enseignants.filter(e => e.id !== id),
        error: err => {
          console.error('Erreur suppression enseignant', err);
          alert('Erreur lors de la suppression.');
        }
      });
    }
  }
}
