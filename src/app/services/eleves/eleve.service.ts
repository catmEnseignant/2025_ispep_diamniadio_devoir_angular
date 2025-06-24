import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Eleve {
  id?: number;
  numero_carte: string;
  prenom: string;
  nom: string;
  telephone: string;
  Adresse: string;
  date_naissance: string;
  nombres_eleve?: number | string;
}

@Injectable({
  providedIn: 'root'
})
export class ElevesService {
  private apiUrl = 'http://localhost:3000/eleves';

  constructor(private http: HttpClient) {}

  getEleves(): Observable<Eleve[]> {
    return this.http.get<Eleve[]>(this.apiUrl);
  }

  storeEleve(eleve: Eleve): Observable<Eleve> {
    return this.http.post<Eleve>(this.apiUrl, eleve);
  }

  updateEleve(id: number, eleve: Eleve): Observable<Eleve> {
    return this.http.put<Eleve>(`${this.apiUrl}/${id}`, eleve);
  }

  deleteEleve(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
