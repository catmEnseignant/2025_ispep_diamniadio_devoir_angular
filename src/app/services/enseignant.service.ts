import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


export interface Enseignant {
  id?: number;
  matricule: string;
  nom: string;
  prenom: string;
  telephone: string;
  adresse: string;
}


@Injectable({
  providedIn: 'root'
})
export class EnseignantService {
  private apiUrl = 'http://localhost:3000/enseignants'; // Adapté pour json-server

  constructor(private http: HttpClient) {}

  getAll(): Observable<Enseignant[]> {
    return this.http.get<Enseignant[]>(this.apiUrl);
  }

  getById(id: number): Observable<Enseignant> {
    return this.http.get<Enseignant>(`${this.apiUrl}/${id}`);
  }

  add(enseignant: Enseignant): Observable<Enseignant> {
    return this.http.post<Enseignant>(this.apiUrl, enseignant);
  }
  create(enseignant: Enseignant): Observable<Enseignant> {
    return this.http.post<Enseignant>(this.apiUrl, enseignant);
  }

  update(id: number, enseignant: Enseignant): Observable<Enseignant> {
    return this.http.put<Enseignant>(`${this.apiUrl}/${id}`, enseignant);
  }

  delete(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
