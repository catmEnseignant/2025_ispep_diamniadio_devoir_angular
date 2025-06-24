import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';  // <-- Important
import { Router } from '@angular/router';
import { ElevesServiceService } from '../../services/eleves/eleves-service.service';

@Component({
  selector: 'app-eleves-list',
  standalone: true,                   // <-- indique que c'est standalone
  imports: [CommonModule],            // <-- ajoute CommonModule ici
  templateUrl: './eleves-list.component.html',
  styleUrls: ['./eleves-list.component.css']
})
export class ElevesListComponent implements OnInit {
  eleves: any[] = [];

  constructor(
    private elevesService: ElevesServiceService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.loadEleves();
  }

  loadEleves(): void {
    this.elevesService.getEleves().subscribe({
      next: (data) => {
        this.eleves = data;
      },
      error: (err) => {
        console.error('Erreur lors du chargement des élèves :', err);
      }
    });
  }

  addEleves(): void {
    localStorage.setItem('editEleves', '0');
    this.router.navigate(['/eleves/eleves-form']);
  }

  editEleves(eleves: any): void {
    localStorage.setItem('editEleves', '1');
    localStorage.setItem('curentEleves', JSON.stringify(eleves));
    this.router.navigate(['/eleves/eleves-form']);
  }

  deleteEleves(eleves: any): void {
    const confirmDelete = confirm(`Voulez-vous supprimer l'élève ${eleves.nom} ?`);
    if (confirmDelete) {
      this.elevesService.deleteEleves(eleves.id).subscribe({
        next: () => this.loadEleves(),
        error: (err) => console.error('Erreur lors de la suppression :', err)
      });
    }
  }
}
