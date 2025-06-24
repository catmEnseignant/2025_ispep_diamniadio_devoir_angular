import { routes } from './../../app.routes';
import { Component, OnInit } from '@angular/core';
import { Eleve } from '../../services/eleves';

import { CommonModule,} from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-liste-eleve',
  imports: [CommonModule],
  templateUrl: './liste-eleve.component.html',
  styleUrl: './liste-eleve.component.css'
})
export class ListeEleveComponent implements OnInit {
  
     // Liste des étudiants à afficher
  eleves: Eleve[] = [];
 

  constructor(private routes: Router) {}

  // Cette fonction est automatiquement appelée quand la page se charge
  ngOnInit(): void {
    this.chargerEtudiants();
  }

  // On récupère les étudiants sauvegardés dans le navigateur
  chargerEtudiants() {
    const data = localStorage.getItem('etudiants'); // On récupère les données
    this.eleves = data ? JSON.parse(data) : []; // Si des données existent, on les transforme en tableau
  }
  ajouter() {
  this.routes.navigate(['/ajouter']);
}

  // Quand on clique sur Modifier, on redirige vers /modifier/:id
  modifier(id: number) {
    this.routes.navigate(['/modifier', id]);
  }

  // Quand on clique sur Supprimer
  supprimer(id: number) {
    this.eleves = this.eleves.filter(e => e.id !== id); // On enlève l'étudiant avec cet id
    localStorage.setItem('etudiants', JSON.stringify(this.eleves)); // On met à jour le stockage
  }
}


