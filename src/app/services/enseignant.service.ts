import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EnseignantService {
  host="http://localhost:3000"

  constructor(private httpClient:HttpClient) { }

   getEnseignant(){
    return  this.httpClient.get(this.host +"/enseignants")
  }

  storeEnseignant(enseignant :any){
    return  this.httpClient.post(this.host +"/enseignants", enseignant)

  }

  updateEnseignant(id_enseignant:any,enseignant :any){
    return  this.httpClient.put(this.host +"/enseignants/"+id_enseignant, enseignant)

  }


  deleteEnseignant(id_enseignant:any){
    return  this.httpClient.delete(this.host +"/enseignants/"+id_enseignant)

  }
}
