import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class ElevesService {
  private url = 'http://localhost:3000/eleves';

  constructor(private http: HttpClient) {}

  getEleves(): Observable<any[]> {
    return this.http.get<any[]>(this.url);
  }

  ajouterEleve(eleve: any): Observable<any> {
    return this.http.post(this.url, eleve);
  }

  updateEleve(eleve: any): Observable<any> {
    return this.http.put(`${this.url}/${eleve.id}`, eleve);
  }

  deleteEleve(id: number): Observable<any> {
    return this.http.delete(`${this.url}/${id}`);
  }
}
