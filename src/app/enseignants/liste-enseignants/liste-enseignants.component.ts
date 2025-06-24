import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EnseignantsService, Enseignant } from '../../services/enseignants.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-liste-enseignants',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './liste-enseignants.component.html',
  styleUrls: ['./liste-enseignants.component.css']
})
export class ListeEnseignantsComponent implements OnInit {
  enseignants: Enseignant[] = [];

  constructor(private enseignantsService: EnseignantsService, private router: Router) {}

  ngOnInit(): void {
    this.loadEnseignants();
  }

  loadEnseignants(): void {
    this.enseignantsService.getEnseignants().subscribe({
      next: data => this.enseignants = data,
      error: err => console.error(err)
    });
  }

  ajouter(): void {
  this.router.navigate(['/form-enseignant']);
}


  editer(enseignant: Enseignant): void {
    this.router.navigate(['/form-enseignant', enseignant.id]);
  }

  supprimer(enseignant: Enseignant): void {
    if (confirm('Voulez-vous vraiment supprimer cet enseignant ?')) {
      this.enseignantsService.deleteEnseignant(enseignant.id!).subscribe(() => {
        this.loadEnseignants();
      });
    }
  }
}
