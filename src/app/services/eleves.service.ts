import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environnement } from '../../environnements/environnement';

export interface Eleve {
  id?: string;
  numero_carte: string;
  prenom: string;
  nom: string;
  adresse: string;
  telephone: string;
  date_naissance: string;
}


@Injectable({
  providedIn: 'root'
})
export class ElevesService {
  private apiUrl = environnement.host+"/eleves"; // adapte selon ton backend

  constructor(private http: HttpClient) {}

  getEleves(): Observable<Eleve[]> {
    return this.http.get<Eleve[]>(this.apiUrl);
  }

  deleteEleve(id: string): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }

  getEleveById(id: string): Observable<Eleve> {
    return this.http.get<Eleve>(`${this.apiUrl}/${id}`);
  }

  addEleve(eleve: Eleve): Observable<Eleve> {
    console.log("tester")
    return this.http.post<Eleve>(this.apiUrl, eleve);
  }

  editerEleve(eleve: Eleve): Observable<Eleve> {
    return this.http.put<Eleve>(`${this.apiUrl}/${eleve.id}`, eleve);
  }
}
