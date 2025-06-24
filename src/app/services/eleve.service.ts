import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

// ✅ Définir l'interface Élève (tu peux la déplacer dans un fichier model.ts plus tard)
export interface Eleve {
  id?: number; // facultatif pour l'ajout
  numero_carte: string;
  prenom: string;
  nom: string;
  adresse: string;
  telephone: string;
  date_naissance: string; // ou Date, mais string pour json-server
}

@Injectable({
  providedIn: 'root',
})
export class EleveService {
  private apiUrl = 'http://localhost:3000/eleves'; // URL du json-server

  constructor(private http: HttpClient) {}

  // ✅ Récupérer tous les élèves
  getAll(): Observable<Eleve[]> {
    return this.http.get<Eleve[]>(this.apiUrl);
  }

  // ✅ Ajouter un élève
  add(eleve: Eleve): Observable<Eleve> {
    return this.http.post<Eleve>(this.apiUrl, eleve);
  }

  // ✅ Récupérer un élève par ID
  getById(id: number): Observable<Eleve> {
    return this.http.get<Eleve>(`${this.apiUrl}/${id}`);
  }

  
  createEleve(data: Eleve): Observable<Eleve> {
    return this.http.post<Eleve>(this.apiUrl, data);
  }


  // ✅ Modifier un élève
  updateEleve(id: number, data: any): Observable<any> {
    return this.http.put(`${this.apiUrl}/${id}`, data);
  }
  

  // ✅ Supprimer un élève
  delete(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
