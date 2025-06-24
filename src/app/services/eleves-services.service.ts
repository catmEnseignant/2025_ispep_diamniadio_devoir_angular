import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {Eleve, Eleves} from "../models/eleves";

@Injectable({
  providedIn: 'root'
})
export class ElevesServicesService {
  private apiUrl = 'http://localhost:3000/eleves';

  constructor(private http: HttpClient) {}

  getEleves(): Observable<Eleve[]> {
    return this.http.get<Eleve[]>(this.apiUrl);
  }

  getEleve(id: number): Observable<Eleve> {
    return this.http.get<Eleve>(`${this.apiUrl}/${id}`);
  }

  addEleve(eleve: Eleves): Observable<Eleve> {
    return this.http.post<Eleve>(this.apiUrl, eleve);
  }

  updateEleve(id: number, eleve: Eleves): Observable<Eleve> {
    return this.http.put<Eleve>(`${this.apiUrl}/${id}`, eleve);
  }

  deleteEleve(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}