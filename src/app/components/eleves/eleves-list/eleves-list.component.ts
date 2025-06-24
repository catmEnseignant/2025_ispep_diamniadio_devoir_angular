
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ElevesServicesService } from '../../../services/eleves-services.service';
import { Eleve } from '../../../models/eleves';
import {NgForOf} from "@angular/common";

@Component({
  selector: 'app-eleves-list',
  imports: [
    NgForOf
  ],
  templateUrl: './eleves-list.component.html',
  styleUrl: './eleves-list.component.css'
})

export class ElevesListComponent implements OnInit {
  eleves: Eleve[] = [];

  constructor(
      private eleveService: ElevesServicesService,
      private router: Router
  ) {}

  ngOnInit() {
    this.loadEleves();
  }

  loadEleves() {
    this.eleveService.getEleves().subscribe(
        data => this.eleves = data,
        error => console.error('Erreur lors du chargement des élèves', error)
    );
  }

  ajouterEleve() {
    this.router.navigate(['/eleves/add']);
  }

  modifierEleve(id: number) {
    this.router.navigate(['/eleves/edit', id]);
  }

  supprimerEleve(id: number, nom: string) {
    if (confirm(`Êtes-vous sûr de vouloir supprimer l'élève ${nom} ?`)) {
      this.eleveService.deleteEleve(id).subscribe(
          () => {
            this.loadEleves();
            alert('Élève supprimé avec succès');
          },
          error => {
            console.error('Erreur lors de la suppression', error);
            alert('Erreur lors de la suppression');
          }
      );
    }
  }
}
