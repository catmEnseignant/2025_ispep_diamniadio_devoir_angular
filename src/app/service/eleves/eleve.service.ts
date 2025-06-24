import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EleveService {
  private host = "http://localhost:3000";

  constructor(private http: HttpClient) { }

  getEleve() {
    return this.http.get(`${this.host}/eleve`);
  }

  storeEleve(eleve: any) {
    return this.http.post(`${this.host}/eleve`, eleve);
  }
}