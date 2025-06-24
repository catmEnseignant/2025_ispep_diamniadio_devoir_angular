import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class EnseignantService {
  Enseignats = "http://localhost:3000/enseignants"
  constructor(private http: HttpClient) { }

  addEnseignant(ensei:any){
    return this.http.post(this.Enseignats,ensei);
  }
  getAllEnseignant(){
    return this.http.get(this.Enseignats);
  }
  getEnseignantById(matricule:number){
    return this.http.get(`${this.Enseignats}/${matricule}`);
  }
  updatedEnseignant(matricule:number,enseig:any){
    return this.http.put(`${this.Enseignats}/${matricule}`, enseig);
  }
  deleteEnseignant(matricule: number) {
    return this.http.delete(`${this.Enseignats}/${matricule}`);
  }
}
