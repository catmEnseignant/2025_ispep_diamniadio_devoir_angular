import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { CommonModule } from '@angular/common';
import { EnseignantsService } from '../../services/enseignants/enseignant.service';

@Component({
  selector: 'app-liste-enseignant',
  imports: [CommonModule],
  templateUrl: './liste-enseignant.component.html',
  styleUrls: ['./liste-enseignant.component.css']
})
export class ListeEnseignantComponent implements OnInit {
  enseignants: any;
  nombres_enseignant: number = 0;

  constructor(
    private router: Router,
    private enseignantService: EnseignantsService
  ) {
    console.log("Constructeur ListeEnseignantComponent");
  }

  ngOnInit() {
    this.enseignantService.getEnseignants().subscribe(
      (response) => {
        this.enseignants = response;
        this.nombres_enseignant = this.enseignants.length;
        console.log(this.nombres_enseignant);
      },
      (error) => {
        console.error(error);
      }
    );
  }

  editEnseignant(enseignant: any) {
    console.log(enseignant);
    localStorage.setItem("currentEnseignant", JSON.stringify(enseignant));
    localStorage.setItem("editEnseignant", "1");
    return this.router.navigate(["/enseignants/form-enseignant"]);
  }

  addEnseignant() {
    localStorage.setItem("editEnseignant", "0");
    return this.router.navigate(["/enseignants/form-enseignant"]);
  }

  deleteEnseignant(enseignant: any) {
    if (confirm("Voulez-vous supprimer cet enseignant ?")) {
      this.enseignantService.deleteEnseignant(enseignant.id).subscribe(
        (response) => {
          alert("Enseignant supprimé avec succès");
          // Optionnel : recharger la liste après suppression
          this.ngOnInit();
        },
        (error) => {
          console.error(error);
        }
      );
    }
  }
}
