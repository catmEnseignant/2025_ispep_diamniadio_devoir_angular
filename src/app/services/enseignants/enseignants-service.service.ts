import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EnseignantsServiceService {
  host="http://localhost:3000/"

  constructor(private httpClient:HttpClient) { }
    getEnseignants(){
      return   this.httpClient.get(this.host+"/enseignants")
    }

    storeEnseignants(enseignants :any){
      return   this.httpClient.post(this.host+"/enseignants",enseignants)
    }
    updateEnseignants(id_enseignants:any,enseignants :any){
      return   this.httpClient.put(this.host+"/enseignants/"+id_enseignants, enseignants)
    }
    deleteEnseignants(id_enseignants:any){
      return   this.httpClient.delete(this.host+"/enseignants/"+id_enseignants)
  }


}
