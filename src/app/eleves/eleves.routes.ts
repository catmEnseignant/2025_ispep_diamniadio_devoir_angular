// services/eleve.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Eleve } from '../models/eleve.model/eleve.model.component';

@Injectable({ providedIn: 'root' })
export class EleveService {
  private apiUrl = 'http://localhost:3000/eleves';

  constructor(private http: HttpClient) {}

  getAll(): Observable<Eleve[]> {
    return this.http.get<Eleve[]>(this.apiUrl);
  }

  delete(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }

  // autres méthodes : create, getById, update
}
