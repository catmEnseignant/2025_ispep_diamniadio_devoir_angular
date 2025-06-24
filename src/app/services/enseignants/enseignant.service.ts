import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EnseignantService {

  private host = 'http://localhost:3000';

  constructor(private httpClient: HttpClient) {}

  getEnseignant() {
    return this.httpClient.get(`${this.host}/enseignants`);
  }

  storeEnseignant(enseignant: any) {
    return this.httpClient.post(`${this.host}/enseignants`, enseignant);
  }
}
