import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ElevesService {
  host="http://localhost:3000"

  constructor(private httpClient: HttpClient) { }
  

  getEleves(){
    return   this.httpClient.get(this.host+"/eleves")
  }

  storeEleves(eleve :any){
    return   this.httpClient.post(this.host+"/eleves",eleve)
  }
  updateEleves(id_eleve:any,eleve :any){
    return   this.httpClient.put(this.host+"/eleves/"+id_eleve,eleve)
  }
  deleteEleves(id_eleve:any){
    return   this.httpClient.delete(this.host+"eleves/"+id_eleve)
  }

  
  
}


