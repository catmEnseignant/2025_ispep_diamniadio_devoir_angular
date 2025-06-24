import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ElevesService {
  Eleves = "http://localhost:3000/eleves"
  constructor(private http:HttpClient) {
  }

  addEleves(data:any){
    return this.http.post(this.Eleves,data);
  }
  getAllEleves(){
    return this.http.get(this.Eleves);
  }
  getElevesById(numero_cart:number){
    return this.http.get(`${this.Eleves}/${numero_cart}`);
  }
  updatedEleves(numero_cart:number,data:any){
    return this.http.put(`${this.Eleves}/${numero_cart}`, data);
  }
  deleteEleves(numero_cart: number) {
    return this.http.delete(`${this.Eleves}/${numero_cart}`);
  }

}
