import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class EleveService {
  private apiUrl = 'http://localhost:3000/eleves';

  constructor(private http: HttpClient) {}

  getEleves(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  storeEleve(data: any): Observable<any> {
    return this.http.post(this.apiUrl, data);
  }

  updateEleve(id: number | string, data: any): Observable<any> {
    return this.http.put(`${this.apiUrl}/${id}`, data);
  }

  deleteEleve(id: number | string): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
}
