import { Component } from '@angular/core'


Component({
  selector: 'app-eleve.model',
  imports: [ 
    
  ],
  templateUrl: './eleve.model.component.html',
  styleUrl: './eleve.model.component.css'
})
export interface Eleve {
  id?: number;
  numero_carte: string;
  prenom: string;
  nom: string;
  adresse: string;
  telephone: string;
  date_naissance: string; // format ISO, ex: "2000-05-12"
}

