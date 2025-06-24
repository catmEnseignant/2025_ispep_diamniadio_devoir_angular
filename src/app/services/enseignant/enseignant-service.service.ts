import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EnseignantServiceService {
  
  public url = "http://localhost:3000";

  constructor(private httpClient:HttpClient) { }

  public storeEnseignants (enseignant:any) {
    return this.httpClient.post(this.url + "/enseignants/" , enseignant);
  }

  public getEnseignats () {
    return this.httpClient.get(this.url + "/enseignants/");
  }

  public deleteEnseignants (id:any) {
    return this.httpClient.delete(`${this.url}/enseignants/${id}`)
  }

  public updateEnseignants (id:any, enseignant:any){
    return this.httpClient.put(this.url + "/enseignants/" + id,enseignant)
  }
}
