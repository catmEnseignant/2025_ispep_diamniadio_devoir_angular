import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class EnseignantService {
  private apiUrl = 'http://localhost:3000/enseignants';

  constructor(private http: HttpClient) {}

  getEnseignant(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  storeEnseignant(data: any): Observable<any> {
    return this.http.post(this.apiUrl, data);
  }

  updateEnseignant(id: number | string, data: any): Observable<any> {
    return this.http.put(`${this.apiUrl}/${id}`, data);
  }

  deleteEnseignant(id: number | string): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
}
  