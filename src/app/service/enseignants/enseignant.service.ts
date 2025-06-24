import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EnseignantService {


  constructor(private httpClient:HttpClient) { }

    host="http://localhost:3000"

  getEnseignant(){
    
    return this.httpClient.get(this.host+ "/enseignants")

  }
    storeEnseignant(enseignant:any){
    return this.httpClient.post(this.host+ "/enseignants", enseignant)
  }
}
