
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { EleveServicesService } from '../../services/elves/eleve';



@Component({
  selector: 'app-list-eleve',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './list-eleve.html',
  styleUrls: ['./list-eleve.css']
})
export class ListeEleveComponent implements OnInit {
  eleves: Eleve[] = []; // ✅ Pluriel + typage
  // ou : any[] si le type Eleve n'est pas encore défini

  constructor(
    private route: Router,
    private eleveService: EleveServicesService
  ) {
    console.log('Constructeur ListeEleveComponent');
  }

  ngOnInit(): void {
    this.eleveService.getEleve().subscribe({
      next: (response: any) => {
        this.eleves = response;
        console.log('Élèves chargés :', response);
      },
      error: (error: any) => {
        console.error('Erreur lors du chargement des élèves :', error);
      }
    });
  }

  public addEleve(): void {
    localStorage.setItem('editEleve', '0');
    this.route.navigate(['classes/form-eleve']);
    console.log('Ajout d’un nouvel élève');
  }

  public editEleve(eleve: any): void {
    console.log('Édition de :', eleve);
    localStorage.setItem('curentEleve', JSON.stringify(eleve));
    localStorage.setItem('editEleve', '1');
    this.route.navigate(['eleve/form-eleve']);
  }

  public deleteEleve(eleve: any): void {
    const confirmation = confirm('Voulez-vous supprimer cet élève ?');
    if (confirmation) {
      this.eleveService.deleteClasses(eleve.id).subscribe({
        next: () => {
          alert('Élève bien supprimé');
          this.ngOnInit(); // recharger la liste
        },
        error: (error: any) => {
          console.error('Erreur lors de la suppression :', error);
        }
      });
    }
  }
}