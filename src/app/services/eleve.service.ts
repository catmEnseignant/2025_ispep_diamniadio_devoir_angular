import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EleveService {
  private url = 'http://localhost:3000/eleves';

  constructor(private http: HttpClient) {}

  getAll(): Observable<any[]> {
    return this.http.get<any[]>(this.url);
  }

  getById(id: number): Observable<any> {
    return this.http.get<any>(`${this.url}/${id}`);
  }

  add(eleve: any): Observable<any> {
    return this.http.post<any>(this.url, eleve);
  }

  update(id: number, eleve: any): Observable<any> {
    return this.http.put<any>(`${this.url}/${id}`, eleve);
  }

  delete(id: number): Observable<any> {
    return this.http.delete(`${this.url}/${id}`);
  }
}
