import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EleveService } from '../../services/eleves/eleve.service';

@Component({
  selector: 'app-liste-eleves',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './liste-eleves.component.html',
  styleUrls: ['./liste-eleves.component.css']
})
export class ListeElevesComponent implements OnInit {
  eleves: any[] = [];

  constructor(
    private router: Router,
    private eleveService: EleveService
  ) {}

  ngOnInit(): void {
    this.loadEleves();
  }

  loadEleves(): void {
    this.eleveService.getEleves().subscribe(
      (response) => {
        this.eleves = response;
      },
      (error) => {
        console.error('Erreur lors de la récupération des élèves :', error);
      }
    );
  }

  addEleve(): void {
    localStorage.setItem("editEleve", "0");
    this.router.navigate(["eleves/ajout-eleves"]);
  }

  editEleve(eleve: any): void {
    console.log("Édition de l'élève :", eleve);
    localStorage.setItem("eleveCourant", JSON.stringify(eleve));
    localStorage.setItem("editEleve", "1");
    this.router.navigate(["eleves/ajout-eleves"]);
  }

  deleteEleve(eleve: any): void {
    if (confirm(`Supprimer l'élève ${eleve.nom} ?`)) {
      if (!eleve.id) {
        alert("Identifiant de l'élève manquant !");
        return;
      }

      this.eleveService.deleteEleve(eleve.id).subscribe(
        () => {
          this.eleves = this.eleves.filter((e) => e.id !== eleve.id);
          alert("Élève supprimé avec succès !");
        },
        (error) => {
          console.error('Erreur lors de la suppression de l’élève :', error);
          alert("Erreur lors de la suppression !");
        }
      );
    }
  }
}
