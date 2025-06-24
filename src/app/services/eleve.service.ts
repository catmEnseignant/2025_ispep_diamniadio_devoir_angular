import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EleveService {
  host="http://localhost:3000"

  constructor(private httpClient:HttpClient) { }

   getEleve(){
    return  this.httpClient.get(this.host +"/eleves")
  }

  storeEleve(eleve :any){
    return  this.httpClient.post(this.host +"/eleves ", eleve )

  }

  updateEleve(id_eleve :any,eleve  :any){
    return  this.httpClient.put(this.host +"/eleves/"+id_eleve , eleve )

  }


  deleteEleve(id_eleve :any){
    return  this.httpClient.delete(this.host +"/eleves/"+id_eleve )

  }
}
