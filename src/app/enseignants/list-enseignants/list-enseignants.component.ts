import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-list-enseignants',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './list-enseignants.component.html',
  styleUrls: ['./list-enseignants.component.css']
})
export class ListEnseignantsComponent implements OnInit {
  enseignants = [
    {
      id: 1,
      prenom: 'Mamadou',
      nom: 'Ndiaye',
      specialite: 'Mathématiques',
      email: 'mamadou.ndiaye@example.com',
      telephone: '77 123 45 67'
    },
    {
      id: 2,
      prenom: 'Aminata',
      nom: 'Diop',
      specialite: 'Physique',
      email: 'aminata.diop@example.com',
      telephone: '77 234 56 78'
    },
    {
      id: 3,
      prenom: 'Ibrahima',
      nom: 'Fall',
      specialite: 'Chimie',
      email: 'ibrahima.fall@example.com',
      telephone: '77 345 67 89'
    }
  ];

  ngOnInit() {
    console.log('ListEnseignantsComponent chargé');
  }

  edit(enseignant: any) {
    console.log('Édition de :', enseignant);
    // Logique de navigation ou d’ouverture d’un formulaire d’édition
  }

  delete(enseignant: any) {
    console.log('Suppression de :', enseignant);
    // Exemple simple de suppression :
    this.enseignants = this.enseignants.filter(e => e.id !== enseignant.id);
  }
}
