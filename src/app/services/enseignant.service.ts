import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EnseignantService {

  constructor(
    private apiUrl = 'http://localhost:3000/eleves'
  )
  { }
}
