import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EleveServiceService {

  public url = "http://localhost:3000";

  constructor(private httpClient:HttpClient) { }

  public getEleves () {
    return this.httpClient.get(`${this.url}/eleves/`);
  }

  public storeEleves (eleve:any) {
    return this.httpClient.post(this.url + "/eleves/" ,eleve);
  }

  public deleEleves (id:any) {
    return this.httpClient.delete(`${this.url}/eleves/${id}`);
  }

  public updateEleves (id:any, eleve:any) {
    return this.httpClient.put(this.url + "/eleves/" + id, eleve)
  }
}
