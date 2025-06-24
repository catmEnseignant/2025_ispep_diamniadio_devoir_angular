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
    private route: Router,
    private elevesService: EleveService
  ) {
    console.log('Constructeur');
  }

  ngOnInit() {
     this.elevesService.getEleve().subscribe(
    (response: any) => {
      this.eleves = response as any[];
    },
    (error) => {
      console.error('Erreur chargement des élèves :', error);
    }
  );
  }

  addEleve() {
    localStorage.setItem('editEleve', '0');
    return this.route.navigate(['eleves']);
  }

  updateEleve(eleve: any) {
    return this.route.navigate(['eleves/modifier', eleve.numero_carte]);
  }

  editEleve(eleve: any) {
    console.log('Élève sélectionné :', eleve);
    localStorage.setItem('eleveCourant', JSON.stringify(eleve));
    localStorage.setItem('editEleve', '1');
    return this.route.navigate(['eleves/ajout-eleve', eleve.numero_carte]);
  }

  deleteEleve(eleve: any) {
      if (confirm(`Supprimer l'élève ${eleve.nom} ?`)) {
    if (!eleve.id) {
      alert("Identifiant numérique de l'élève manquant !");
      return;
    }
    this.elevesService.deleteEleve(eleve.id).subscribe(
      () => {
        this.eleves = this.eleves.filter(e => e.id !== eleve.id);
        console.log('Élève supprimé avec succès');
      },
      (error) => {
        console.error('Erreur suppression élève :', error);
      }
    );
  }
  }
}
