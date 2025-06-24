import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ElevesServiceService {
  private apiUrl = 'http://localhost:3000/eleves'; // URL API

  constructor(private http: HttpClient) {}

  getEleves(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  deleteEleves(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }

  updateEleves(id: number, eleveData: any): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/${id}`, eleveData);
  }

  storeEleves(eleveData: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, eleveData);
  }
}
