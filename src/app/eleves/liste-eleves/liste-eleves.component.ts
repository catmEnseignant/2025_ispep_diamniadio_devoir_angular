import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { ElevesService, Eleve } from '../../services/eleves.service';

@Component({
  selector: 'app-liste-eleves',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './liste-eleves.component.html',
})
export class ListeElevesComponent implements OnInit {
  eleves: Eleve[] = [];

  constructor(private elevesService: ElevesService, private router: Router) {}

  ngOnInit(): void {
    this.elevesService.getEleves().subscribe({
      next: (data: Eleve[]) => this.eleves = data,
      error: (err) => console.error('Erreur récupération élèves', err)
    });
  }

  ajouter(): void {
    this.router.navigate(['/form-eleve']);
  }
  editer(eleve: any): void {
  this.router.navigate(['/form-eleve', eleve.id]);
}

supprimer(eleve: any): void {
  if (confirm('Voulez-vous vraiment supprimer cet élève ?')) {
    this.elevesService.deleteEleve(eleve.id).subscribe(() => {
      this.eleves = this.eleves.filter(e => e.id !== eleve.id);
    });
  }
}

}
