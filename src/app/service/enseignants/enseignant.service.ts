import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EnseignantService {
  private host = "http://localhost:3000";

  constructor(private http: HttpClient) { }

  getEnseignant() {
    return this.http.get(`${this.host}/enseignant`);
  }

  storeEnseignant(enseignant: any) {
    return this.http.post(`${this.host}/enseignant`, enseignant);
  }

  updateEnseignant(id: string, enseignant: any) {
    return this.http.put(`${this.host}/enseignant/${id}`, enseignant);
  }

  deleteEnseignant(id: string) {
    return this.http.delete(`${this.host}/enseignant/${id}`);
  }
}