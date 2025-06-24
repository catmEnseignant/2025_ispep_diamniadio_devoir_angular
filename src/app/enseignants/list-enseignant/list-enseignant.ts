import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Enseignants, EnseignantServicesService } from './../../services/enseignants/enseignant'; // Ce doit être un modèle (interface ou classe)
 // Ce doit être un service injectable

@Component({
  selector: 'app-list-enseignant', 
  templateUrl: './list-enseignant.html',
  styleUrls: ['./list-enseignant.css']
})
export class ListEnseignant implements OnInit {

  enseignants: Enseignants[] = []; 

  constructor(
    private router: Router,
    private EnseignantServicesService: EnseignantServicesService
  ) {
    console.log("Constructeur appelé");
  }

  ngOnInit(): void {
    this.EnseignantServicesService.getEnseignant().subscribe({
      next: (response: Enseignants[]) => {

        this.enseignants = response;
        console.log("Liste des enseignants :", response);
      },
      error: (error: any) => {
        console.error("Erreur lors de la récupération des enseignants :", error);
      }
    });
  }

  public addEnseignant(): void {
    this.router.navigate(["enseignants/form-enseignants"]);
    console.log("Navigation vers le formulaire d'ajout d'enseignant");
  }
}
