import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EleveService {
   private apiUrl = 'http://localhost:3000/eleves';
  constructor(private http: HttpClient) { }
   // Obtenir tous les élèves
  getEleves(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  // Obtenir un élève par son ID
  getEleveById(id: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/${id}`);
  }

  // Ajouter un élève
  ajouterEleve(eleve: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, eleve);
  }

  // Modifier un élève
  modifierEleve(id: number, eleve: any): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/${id}`, eleve);
  }

  // Supprimer un élève
  supprimerEleve(id: number): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/${id}`);
  }
}
