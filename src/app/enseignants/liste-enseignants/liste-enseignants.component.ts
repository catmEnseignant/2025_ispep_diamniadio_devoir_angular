import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EnseignantService } from '../../services/enseignants/enseignant.service';

@Component({
  selector: 'app-liste-enseignants',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './liste-enseignants.component.html',
  styleUrls: ['./liste-enseignants.component.css']
})
export class ListeEnseignantsComponent implements OnInit {
  enseignants: any[] = [];

  constructor(
    private router: Router,
    private enseignantService: EnseignantService
  ) {}

  ngOnInit(): void {
    this.loadEnseignants();
  }

  loadEnseignants(): void {
    this.enseignantService.getEnseignant().subscribe(
      (response) => {
        this.enseignants = response;
      },
      (error) => {
        console.error('Erreur lors de la récupération des enseignants :', error);
      }
    );
  }

  addEnseignant(): void {
    localStorage.setItem("editEnseignant", "0");
    this.router.navigate(["enseignants/ajout-enseignants"]);
  }

  editEnseignant(enseignant: any): void {
    console.log("Édition de l'enseignant :", enseignant);
    localStorage.setItem("enseignantCourant", JSON.stringify(enseignant));
    localStorage.setItem("editEnseignant", "1");
    this.router.navigate(["enseignants/ajout-enseignants"]);
  }

  deleteEnseignant(enseignant: any): void {
    if (confirm(`Supprimer l'enseignant ${enseignant.nom} ?`)) {
      if (!enseignant.id) {
        alert("Identifiant de l'enseignant manquant !");
        return;
      }

      this.enseignantService.deleteEnseignant(enseignant.id).subscribe(
        () => {
          this.enseignants = this.enseignants.filter((e) => e.id !== enseignant.id);
          alert("Enseignant supprimé avec succès !");
        },
        (error) => {
          console.error('Erreur lors de la suppression de l’enseignant :', error);
          alert("Erreur lors de la suppression !");
        }
      );
    }
  }
}
