import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EleveService {
  private host = "http://localhost:3000";

  constructor(private httpClient: HttpClient) {}

  // Ajouter un élève
  add(eleve: any) {
    return this.httpClient.post(this.host + "/eleves", eleve);
  }

  // Récupérer tous les élèves
  getAll() {
    return this.httpClient.get(this.host + "/eleves");
  }

  // Modifier un élève
  update(id: number, eleve: any) {
    return this.httpClient.put(this.host + "/eleves/" + id, eleve);
  }

  // Supprimer un élève
  delete(id: number) {
    return this.httpClient.delete(this.host + "/eleves/" + id);
  }

  // Récupérer un élève par ID
  getById(id: number) {
    return this.httpClient.get(this.host + "/eleves/" + id);
  }
}
