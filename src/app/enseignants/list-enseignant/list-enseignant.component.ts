import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { EnseignantServiceService } from '../../services/enseignants/enseignant.service';

@Component({
  selector: 'app-liste-enseignant',
  imports: [CommonModule],
  templateUrl: './list-enseignant.component.html',
  styleUrl: './list-enseignant.component.css'
})
export class ListEnseignantComponent implements OnInit {
  enseignants: any = [];
  nombres_enseignant: number = 0;

  constructor(private route: Router, private enseignantService: EnseignantServiceService) {}

  ngOnInit() {
    this.loadEnseignants();
  }

  loadEnseignants() {
    this.enseignantService.getEnseignants().subscribe(
      (response) => {
        this.enseignants = response;
      },
      (error) => {
        console.log(error);
      }
    );
  }

  editEnseignant(editEnseignant: any) {
    localStorage.setItem("curentEnseignant", JSON.stringify(editEnseignant));
    localStorage.setItem("editEnseignant", "1");
    return this.route.navigate(["/enseignant/form-enseignant"]);
  }

  addEnseignant() {
    localStorage.setItem("editEnseignant", "0");
    return this.route.navigate(["/enseignant/form-enseignant"]);
  }

  deleteEnseignant(enseignant: any) {
    if (confirm("Voulez-vous supprimer ?")) {
      this.enseignantService.deleteEnseignants(enseignant.id).subscribe(
        () => {
          alert("Enseignant bien supprimé");
          this.loadEnseignants();
        },
        (error) => {
          console.log(error);
        }
      );
    }
  }
}
