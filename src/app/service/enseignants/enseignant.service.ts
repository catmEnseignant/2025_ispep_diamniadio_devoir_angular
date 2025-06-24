import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EnseignantService {
  private host = "http://localhost:3000";

  constructor(private http: HttpClient) { }

  getEnseignant() {
    return this.http.get(`${this.host}/enseignant`); // Endpoint corrigé
  }

  storeEnseignant(enseignant: any) {
    return this.http.post(`${this.host}/enseignant`, enseignant); // Endpoint corrigé
  }
}