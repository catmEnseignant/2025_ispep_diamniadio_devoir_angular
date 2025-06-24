import { Component, OnInit } from '@angular/core';
import { EleveService } from '../../services/eleve.service';

@Component({
  selector: 'app-liste-eleves',
  templateUrl: './liste-eleves.component.html',
  styleUrls: ['./liste-eleves.component.css']
})
export class ListeElevesComponent implements OnInit {
  eleves: any[] = [];

  constructor(private eleveService: EleveService) {}

  ngOnInit(): void {
    this.loadEleves();
  }

  loadEleves(): void {
    this.eleveService.getAll().subscribe({
      next: (data) => this.eleves = data,
      error: (err) => console.error('Erreur chargement élèves', err)
    });
  }

  confirmDelete(id: number): void {
    console.log('Supprimer ID:', id);
    if (!id) {
      alert("ID invalide pour la suppression");
      return;
    }
    if (confirm('Voulez-vous vraiment supprimer cet élève ?')) {
      this.eleveService.delete(id).subscribe({
        next: () => {
          alert('Élève supprimé avec succès');
          this.loadEleves();
        },
        error: (err) => {
          console.error('Erreur suppression', err);
          alert('Erreur lors de la suppression');
        }
      });
    }
  }
}
