import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EleveServicesService {

  public host = 'http://localhost:3000';

  constructor(private httpClient: HttpClient) {}

  // Récupérer tous les élèves
  public getEleve() {
    return this.httpClient.get(`${this.host}/eleve`);
  }

  
  public updateEleve(id_eleve: any, eleve: any) {
    return this.httpClient.put(`${this.host}/eleve/${id_eleve}`, eleve);
  }

  public storeClasses(eleve: any) {
    return this.httpClient.post(`${this.host}/eleve`, eleve);
  }

  public deleteClasses(id_classe: any) {
    return this.httpClient.delete(`${this.host}/eleve/${id_classe}`);
  }
}
