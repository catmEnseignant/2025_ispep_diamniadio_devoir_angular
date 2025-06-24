import { Component, OnInit } from '@angular/core';
import { EleveService } from '../../services/eleve.service';
import { Eleve } from '../../models/eleve.model/eleve.model.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-eleve-list',
  templateUrl: './eleve-list.component.html'
})
export class EleveListComponent implements OnInit {
  eleves: Eleve[] = [];

  constructor(private eleveService: EleveService, private router: Router) {}

  ngOnInit(): void {
    this.chargerEleves();
  }
  chargerEleves() {
    throw new Error('Method not implemented.');
  }
}
 
