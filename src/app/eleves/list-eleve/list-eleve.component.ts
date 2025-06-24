import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { EleveService } from '../../services/eleves/eleve.service';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-list-eleve',
  standalone: true,
  imports: [CommonModule, HttpClientModule],
  templateUrl: './list-eleve.component.html',
  styleUrls: ['./list-eleve.component.css']
})
export class ListEleveComponent implements OnInit {

  eleves: any;
  nombreEleves: number = 0;

  constructor(private router: Router, private eleveService: EleveService) {
    console.log("constructeur ListEleve");
  }

  ngOnInit() {
    this.loadEleves();
  }

  loadEleves() {
    this.eleveService.getAll().subscribe(
      (response) => {
        this.eleves = response;
        this.nombreEleves = this.eleves.length;
        console.log("Nombre total d'élèves :", this.nombreEleves);
      },
      (error) => console.log(error)
    );
  }

  editEleve(eleve: any) {
    console.log("Élève à éditer :", eleve);
    localStorage.setItem("editEleve", "1");
    localStorage.setItem("currentEleve", JSON.stringify(eleve));
    this.router.navigate(["eleves/edit", eleve.id]);
  }

  addEleve() {
    console.log("Ajout d'un nouvel élève");
    localStorage.setItem("editEleve", "0");
    localStorage.removeItem("currentEleve");
    this.router.navigate(["eleves/ajout"]);
  }

  deleteEleve(eleve: any) {
    const confirmation = confirm("Voulez-vous vraiment supprimer cet élève ?");
    if (confirmation) {
      this.eleveService.delete(eleve.id).subscribe(
        () => {
          alert("Élève supprimé avec succès");
          this.loadEleves(); // recharge la liste après suppression
        },
        (error) => {
          console.log(error);
        }
      );
    }
  }
}
