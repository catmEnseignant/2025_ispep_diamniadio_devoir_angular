import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EleveService {

  private host = 'http://localhost:3000';

  constructor(private httpClient: HttpClient) {}
  
  getEleve() {
    return this.httpClient.get(`${this.host}/eleves`);
  }

  // storeEleve(eleve: any) {
  //   return this.httpClient.post(`${this.host}/eleves`, eleve);
  // }

  addEleve(formData: any) {
    return this.httpClient.post(`${this.host}/eleves/ajout-eleve`, formData);
  }

  updateEleve(formData: any) {
    return this.httpClient.put(`${this.host}/eleves/${formData.numero_carte}`, formData);
  }

  deleteEleve(numero_carte: string) {
    return this.httpClient.delete(`${this.host}/eleves/${numero_carte}`);
  }
}
