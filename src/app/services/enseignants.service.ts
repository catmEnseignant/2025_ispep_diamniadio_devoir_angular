import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class EnseignantsService {
  private url = 'http://localhost:3000/enseignants';

  constructor(private http: HttpClient) {}

  getEnseignants(): Observable<any[]> {
    return this.http.get<any[]>(this.url);
  }

  addEnseignant(enseignant: any): Observable<any> {
    return this.http.post(this.url, enseignant);
  }

  updateEnseignant(enseignant: any): Observable<any> {
    return this.http.put(`${this.url}/${enseignant.id}`, enseignant); // 👈 ici
  }

  deleteEnseignant(id: number): Observable<any> {
    return this.http.delete(`${this.url}/${id}`);
  }
}
