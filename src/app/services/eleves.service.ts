import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Eleve {
  id?: number;
  prenom: string;
  nom: string;
  adresse?: string;
  telephone?: string;
  date_naissance?: string;
}

@Injectable({
  providedIn: 'root'
})
export class ElevesService {
  private apiUrl = 'http://localhost:3000/eleves'; // adapte selon ton backend

  constructor(private http: HttpClient) {}

  getEleves(): Observable<Eleve[]> {
    return this.http.get<Eleve[]>(this.apiUrl);
  }

  deleteEleve(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }

  getEleveById(id: number): Observable<Eleve> {
    return this.http.get<Eleve>(`${this.apiUrl}/${id}`);
  }

  ajouterEleve(eleve: Eleve): Observable<Eleve> {
    return this.http.post<Eleve>(this.apiUrl, eleve);
  }

  updateEleve(eleve: Eleve): Observable<Eleve> {
    return this.http.put<Eleve>(`${this.apiUrl}/${eleve.id}`, eleve);
  }
}
