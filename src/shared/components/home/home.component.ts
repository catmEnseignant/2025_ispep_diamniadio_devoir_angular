import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { EleveService } from '../../../services/eleve.service';
import { EnseignantService } from '../../../services/enseignant.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
   
  `
})
export class HomeComponent implements OnInit {
  totalEleves = 0;
  totalEnseignants = 0;

  constructor(
    private eleveService: EleveService,
    private enseignantService: EnseignantService
  ) {}

  ngOnInit() {
    this.loadStats();
  }

  loadStats() {
    this.eleveService.getEleves().subscribe({
      next: (eleves) => this.totalEleves = eleves.length,
      error: (error) => console.error('Erreur veiller reesayer:', error)
    });

    this.enseignantService.getEnseignants().subscribe({
      next: (enseignants) => this.totalEnseignants = enseignants.length,
      error: (error) => console.error('Erreur veiller reesayer:', error)
    });
  }
}