import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EnseignantService } from '../../services/enseignant/enseignant-service.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-list-enseignant',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './list-enseignant.component.html',
  styleUrls: ['./list-enseignant.component.css']
})
export class ListEnseignantComponent implements OnInit {
  enseignants: any[] = [];
  nombreEnseignants: number = 0;

  constructor(private router: Router, private enseignantService: EnseignantService) {
    console.log("Constructeur - ListEnseignantComponent");
  }

  ngOnInit() {
    this.enseignantService.getAll().subscribe(
      (response: any) => {
        this.enseignants = response;
        this.nombreEnseignants = this.enseignants.length;
        console.log("Nombre d'enseignants :", this.nombreEnseignants);
      },
      (error) => {
        console.log(error);
      }
    );
  }

  addEnseignant() {
    console.log("Ajout d'un nouvel enseignant");
    localStorage.setItem("editEnseignant", "0");
    localStorage.removeItem("currentEnseignant");
    this.router.navigate(["enseignants/ajout"]);
  }

  editEnseignant(enseignant: any) {
    console.log("Édition de l'enseignant :", enseignant);
    localStorage.setItem("editEnseignant", "1");
    localStorage.setItem("currentEnseignant", JSON.stringify(enseignant));
    this.router.navigate(["enseignants/edit", enseignant.id]);
  }

  deleteEnseignant(enseignant: any) {
    const confirmation = confirm("Voulez-vous vraiment supprimer cet enseignant ?");
    if (confirmation) {
      this.enseignantService.delete(enseignant.id).subscribe(
        () => {
          alert("Enseignant supprimé avec succès");
          this.ngOnInit(); // recharge la liste après suppression
        },
        (error) => {
          console.log("Erreur lors de la suppression", error);
        }
      );
    }
  }
}
