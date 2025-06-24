import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ElevesService } from '../../services/eleves.service'; // adapte le chemin si besoin
import { Router } from '@angular/router';

@Component({
  selector: 'app-liste-eleves',
  standalone: true,
  imports: [CommonModule], // <<== C'est ça qui manquait
  templateUrl: './liste-eleves.component.html',
  styleUrls: ['./liste-eleves.component.css']
})
export class ListeElevesComponent implements OnInit {
  eleves: any[] = [];

  constructor(private elevesService: ElevesService, private router: Router) {}

  ngOnInit(): void {
    this.elevesService.getEleves().subscribe(
      (data) => {
        this.eleves = data;
      },
      (error) => {
        console.error(error);
      }
    );
  }

  ajouter(): void {
    this.router.navigate(['/eleves/form']);
  }

  editer(eleve: any): void {
    localStorage.setItem('editEleve', JSON.stringify(eleve));
    this.router.navigate(['/eleves/form']);
  }

  supprimer(eleve: any): void {
    if (confirm('Voulez-vous vraiment supprimer cet élève ?')) {
      this.elevesService.deleteEleve(eleve.id).subscribe(() => {
        this.eleves = this.eleves.filter(e => e.id !== eleve.id);
      });
    }
  }
}
