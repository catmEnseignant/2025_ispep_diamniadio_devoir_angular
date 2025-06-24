import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { EleveServiceService } from '../../services/eleves/eleve.service';

@Component({
  selector: 'app-list-eleve',
  imports: [CommonModule],
  templateUrl: './list-eleve.component.html',
  styleUrl: './list-eleve.component.css'
})
export class ListEleveComponent implements OnInit {
  eleves: any = [];
  nombres_eleves: number = 0;

  constructor(private route: Router, private eleveService: EleveServiceService) {}

  ngOnInit() {
    this.loadEleves();
  }

  loadEleves() {
    this.eleveService.getEleves().subscribe(
      (response) => {
        this.eleves = response;
      },
      (error) => {
        console.log(error);
      }
    );
  }

  editEleve(editEleve: any) {
    localStorage.setItem("curentEleve", JSON.stringify(editEleve));
    localStorage.setItem("editEleve", "1");
    return this.route.navigate(["/eleve/form-eleve"]);
  }

  addEleve() {
    localStorage.setItem("editEleve", "0");
    return this.route.navigate(["/eleve/form-eleve"]);
  }

  deleteEleve(eleve: any) {
    if (confirm("Voulez-vous supprimer ?")) {
      this.eleveService.deleteEleves(eleve.id).subscribe(
        () => {
          alert("Élève bien supprimé");
          this.loadEleves(); 
        },
        (error) => {
          console.log(error);
        }
      );
    }
  }
}
