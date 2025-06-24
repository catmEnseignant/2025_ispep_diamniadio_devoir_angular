// services/eleve.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Enseignant } from '../models/enseignant.model/enseignant.model.component';

@Injectable({ providedIn: 'root' })
export class EleveService {
  private apiUrl = 'http://localhost:3000/enseignant';

  constructor(private http: HttpClient) {}

  getAll(): Observable<Enseignant[]> {
    return this.http.get<Enseignant[]>(this.apiUrl);
  }

  delete(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }

  // autres méthodes : create, getById, update
}
