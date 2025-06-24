import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Enseignant {
  id?: number;
  matricule?: string;
  prenom: string;
  nom: string;
  telephone?: string;
  adresse?: string;
}

@Injectable({
  providedIn: 'root'
})
export class EnseignantsService {
  private apiUrl = 'http://localhost:3000/enseignants'; // adapter selon backend

  constructor(private http: HttpClient) {}

  getEnseignants(): Observable<Enseignant[]> {
    return this.http.get<Enseignant[]>(this.apiUrl);
  }




  getEnseignantById(id: number): Observable<Enseignant> {
    return this.http.get<Enseignant>(`${this.apiUrl}/${id}`);
  }

  ajouterEnseignant(enseignant: Enseignant): Observable<Enseignant> {
    return this.http.post<Enseignant>(this.apiUrl, enseignant);
  }

  updateEnseignant(enseignant: Enseignant): Observable<Enseignant> {
    return this.http.put<Enseignant>(`${this.apiUrl}/${enseignant.id}`, enseignant);
  }

  deleteEnseignant(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
}
