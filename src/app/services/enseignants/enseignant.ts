import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class EnseignantServicesService {

  public math = "http://localhost:3000/eleves";

  constructor(private httpClint:HttpClient) { }

  public getEnseignant () {
    return this.httpClint.get(this.math + "/enseignants");
  }
}