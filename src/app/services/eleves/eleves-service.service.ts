import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ElevesServiceService {
  host="http://localhost:3000"

  constructor(private httpClient: HttpClient) { }
  

  getEleves(){
    return   this.httpClient.get(this.host+"/eleves")
  }

  storeEleves(eleves:any){
    return   this.httpClient.post(this.host+"/eleves",eleves)
  }
  updateEleves(id_eleves:any, eleves:any){
    return   this.httpClient.put(this.host+"/eleves/"+id_eleves,eleves)
  }
  deleteEleves(id_eleves:any){
    return   this.httpClient.delete(this.host+"/eleves/"+id_eleves)
  }

  
  
}
