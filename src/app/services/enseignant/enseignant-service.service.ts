import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EnseignantService {
  private host = "http://localhost:3000";

  constructor(private httpClient: HttpClient) {}

  getAll() {
    return this.httpClient.get(this.host + "/enseignants");
  }

  create(enseignant: any) {
    return this.httpClient.post(this.host + "/enseignants", enseignant);
  }

  update(enseignant: any) {
    return this.httpClient.put(this.host + "/enseignants/" + enseignant.id, enseignant);
  }

  delete(id: any) {
    return this.httpClient.delete(this.host + "/enseignants/" + id);
  }
}
