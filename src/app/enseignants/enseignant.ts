export interface Enseignant {
  id: number;
  nom: string;
  prenom: string;
  email: string;
  telephone?: string;     // facultatif
  specialite?: string;    // facultatif
}