import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EnseignantService {
  private url = 'http://localhost:3000/enseignants';

  constructor(private http: HttpClient) {}

  getAll(): Observable<any[]> {
    return this.http.get<any[]>(this.url);
  }

  getById(id: number): Observable<any> {
    return this.http.get<any>(`${this.url}/${id}`);
  }

  add(enseignant: any): Observable<any> {
    return this.http.post<any>(this.url, enseignant);
  }

  update(id: number, enseignant: any): Observable<any> {
    return this.http.put<any>(`${this.url}/${id}`, enseignant);
  }

  delete(id: number): Observable<any> {
    return this.http.delete<any>(`${this.url}/${id}`);
  }
}
