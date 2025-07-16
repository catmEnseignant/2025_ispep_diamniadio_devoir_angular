
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';



export interface Enseignant {
  id?: number;          // optionnel : auto-généré par le backend
  matricule: string;
  prenom: string;
  nom: string;
  telephone: string;
  adresse: string;
}

@Injectable({
  providedIn: 'root'
})
export class EnseignantServicesService {

  host = 'http:localhost:3000';

  constructor(private httpClient: HttpClient) {}

  // ✅ Récupérer les enseignants
  public getEnseignants(): Observable<any> {
    return this.httpClient.get(this.host);
  }

  // ✅ Supprimer un enseignant
  public deleteEnseignant(id: number): Observable<any> {
    return this.httpClient.delete(`${this.host}/${id}`);
  }
  updateEnseignants(eleve: Enseignant, value: any): Observable<Enseignant> {
      return this.httpClient.put<Enseignant>(`${this.host}/${eleve.id}`, eleve);
  }
  storeEnseignants(enseignant :any){
    return this.httpClient.post(this.host+"/enseignants",enseignant)
  }
}
