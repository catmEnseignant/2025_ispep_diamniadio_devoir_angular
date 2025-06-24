import { Component } from '@angular/core';

Component({
  selector: 'app-enseignant.model',
  imports: [],
  templateUrl: './enseignant.model.component.html',
  styleUrl: './enseignant.model.component.css'
})
export interface Enseignant {
  id?: number;
  matricule: string;
  prenom: string;
  nom: string;
  telephone: string;
  adresse: string;
}

