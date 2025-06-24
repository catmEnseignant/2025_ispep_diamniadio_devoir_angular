import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EnseignantService {
  host="http://localhost:3000"

  constructor(private httpClient: HttpClient) { }
  

  getEnseignants(){
    return   this.httpClient.get(this.host+"/enseignants")
  }

  storeEnseignants(enseignant :any){
    return   this.httpClient.post(this.host+"/enseignants",enseignant)
  }
  updateEnseignants(id_enseignant:any,enseignant :any){
    return   this.httpClient.put(this.host+"/classes/"+id_enseignant,enseignant)
  }
  deleteEnseignants(id_enseignant:any){
    return   this.httpClient.delete(this.host+"/enseignants/"+id_enseignant)
  }

  
  
}
