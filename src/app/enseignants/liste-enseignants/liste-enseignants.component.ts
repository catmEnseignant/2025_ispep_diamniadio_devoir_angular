import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { EnseignantsService } from '../../services/enseignants.service';

@Component({
  selector: 'app-liste-enseignants',
  standalone: true,
  imports: [CommonModule,RouterModule],
  templateUrl: './liste-enseignants.component.html',
  styleUrls: ['./liste-enseignants.component.css']
})
export class ListeEnseignantsComponent implements OnInit {
  enseignants: any[] = [];

  constructor(
    private enseignantsService: EnseignantsService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.loadEnseignants();
  }

  loadEnseignants(): void {
    this.enseignantsService.getEnseignants().subscribe({
      next: (data) => (this.enseignants = data),
      error: (err) => console.error('Erreur lors du chargement des enseignants', err)
    });
  }

  ajouter(): void {
    this.router.navigate(['/enseignants/form']);
  }

  editer(enseignant: any): void {
    localStorage.setItem('editEnseignant', JSON.stringify(enseignant));
    this.router.navigate(['/enseignants/form']);
  }

  supprimer(enseignant: any): void {
    if (confirm('Voulez-vous vraiment supprimer cet enseignant ?')) {
      this.enseignantsService.deleteEnseignant(enseignant.id).subscribe({
        next: () => {
          // Supprimer localement sans recharger la page
          this.enseignants = this.enseignants.filter(e => e.id !== enseignant.id);
        },
        error: (err) => console.error('Erreur lors de la suppression', err)
      });
    }
  }
}
