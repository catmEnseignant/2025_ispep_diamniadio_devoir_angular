import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { EleveService } from '../../service/eleves/eleve.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-eleve',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './list-eleve.component.html',
  styleUrls: ['./list-eleve.component.css']
})
export class ListEleveComponent implements OnInit {
  eleve: any[] = [];

  constructor(
    private router: Router,
    private eleveService: EleveService
  ) { }

  ngOnInit() {
    this.eleveService.getEleve().subscribe(
      (response: any) => {
        this.eleve = response;
      },
      (error) => {
        console.error('Erreur:', error);
      }
    );
  }

  addEleve() {
    this.router.navigate(['/eleves/form-eleve']);
  }

  editEleve(eleve: any) {
    localStorage.setItem('currentEleve', JSON.stringify(eleve));
    this.router.navigate(['/eleves/form-eleve']);
  }
}