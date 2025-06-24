import { Eleve } from './../../services/eleves';
import { Component } from '@angular/core';

@Component({
  selector: 'app-form-eleve',
  imports: [],
  templateUrl: './form-eleve.component.html',
  styleUrl: './form-eleve.component.css'
})
export class FormEleveComponent {
  etudiant: Eleve = {
     id?:" number";
  numero_carte: "string";
  prenom:" string;"
  nom: string;
  adresse: string;
  telephone: string;
  date_naissance: Date
}
  };

  mode: 'ajout' | 'modif' = 'ajout'; // Pour savoir si on est en train d’ajouter ou modifier

  constructor(private route: ActivatedRoute, private router:Router) {}

  ngOnInit(): void {
    const idFromUrl = this.route.snapshot.paramMap.get('id'); // On récupère l’ID dans l’URL

    if (idFromUrl) {
      // Si un id est présent dans l’URL, on est en mode modification
      this.mode = 'modif';
      const etudiants = JSON.parse(localStorage.getItem('etudiants') || '[]');
      const existant = etudiants.find((e: Etudiant) => e.id === +idFromUrl);
      if (existant) {
        this.etudiant = existant;
      }
    }
  }

  enregistrer() {
    const etudiants = JSON.parse(localStorage.getItem('etudiants') || '[]');

    if (this.mode === 'ajout') {
      // on génère un ID unique basé sur le temps
      this.etudiant.id = Date.now();
      etudiants.push(this.etudiant);
    } else {
      const index = etudiants.findIndex((e: Etudiant) => e.id === this.etudiant.id);
      if (index !== -1) {
        etudiants[index] = this.etudiant;
      }
    }

    // On enregistre la liste mise à jour dans le navigateur
    localStorage.setItem('etudiants', JSON.stringify(etudiants));
    this.router.navigate(['/etudiants']); // On retourne à la page liste
  }
}




