import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { EnseignantService } from '../../services/enseignants/enseignant.service';

@Component({
  selector: 'app-liste-enseignants',
  imports: [CommonModule],
  templateUrl: './liste-enseignants.component.html',
  styleUrl: './liste-enseignants.component.css'
})
export class ListeEnseignantsComponent {
  enseignants: any;

  constructor(private route: Router, private enseignantService: EnseignantService) {
    console.log('constructeur');
  }

  ngOnInit() {
    this.enseignantService.getEnseignant().subscribe(
      (response) => {
        this.enseignants = response;
      },
      (error) => {
        console.log(error);
      }
    );
  }

  addEnseignant() {
    localStorage.setItem("editEnseignants", "0");
    return this.route.navigate(["enseignants/ajout-enseignants"]);
  }

  editEnseignant(edit: any) {
    console.log(edit);
    edit = JSON.stringify(edit);
    localStorage.setItem("enseignantCourant", edit);
    localStorage.setItem("editEnseignant", "1");
    return this.route.navigate(["enseignants/ajout-enseignants"]);
  }

  deleteEnseignant() {
    return this.route.navigate(["enseignants/liste-enseignants"]);
  }
}
