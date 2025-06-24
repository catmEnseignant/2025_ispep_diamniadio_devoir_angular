import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EnseignantService {
  private apiUrl = 'http://localhost:3000/enseignants';

  constructor(private http: HttpClient) {}

  getEnseignants(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  getEnseignantById(id: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/${id}`);
  }

  ajouterEnseignant(enseignant: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, enseignant);
  }

  modifierEnseignant(id: number, enseignant: any): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/${id}`, enseignant);
  }

  supprimerEnseignant(id: number): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/${id}`);
  }
}