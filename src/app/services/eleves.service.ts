import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Eleve {
  id?: number;
  numero_carte: string;
  prenom: string;
  nom: string;
  adresse: string;
  telephone: string;
  date_naissance: string;
}

@Injectable({ providedIn: 'root' })
export class ElevesService {
  private apiUrl = 'http://localhost:3000/eleves';

  constructor(private http: HttpClient) {}

  getAll(): Observable<Eleve[]> {
    return this.http.get<Eleve[]>(this.apiUrl);
  }
  getById(id: number): Observable<Eleve> {
    return this.http.get<Eleve>(`${this.apiUrl}/${id}`);
  }
  create(e: Eleve): Observable<Eleve> {
    return this.http.post<Eleve>(this.apiUrl, e);
  }
  update(id: number, e: Eleve): Observable<Eleve> {
    return this.http.put<Eleve>(`${this.apiUrl}/${id}`, e);
  }
  delete(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}

