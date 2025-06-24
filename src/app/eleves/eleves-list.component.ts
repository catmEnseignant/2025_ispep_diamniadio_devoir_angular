import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { EleveService } from '../services/eleve.service';

@Component({
  selector: 'app-eleves-list',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="card">
      <div class="card-header d-flex justify-content-between align-items-center">
        <h5 class="mb-0">Liste des élèves</h5>
        <button class="btn btn-primary" (click)="goToAjout()">Ajouter un élève</button>
      </div>

      <div class="card-body p-0">
        <table class="table table-striped table-bordered m-0">
          <thead class="table-dark">
            <tr>
              <th>#</th>
              <th>Prénom</th>
              <th>Nom</th>
              <th>Téléphone</th>
              <th>Adresse</th>
              <th>Date de naissance</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr *ngFor="let eleve of eleves; let i = index">
              <td>{{ i + 1 }}</td>
              <td>{{ eleve.prenom }}</td>
              <td>{{ eleve.nom }}</td>
              <td>{{ eleve.telephone }}</td>
              <td>{{ eleve.adresse }}</td>
              <td>{{ eleve.date_naissance }}</td>
              <td>
                <button class="btn btn-sm btn-warning me-1" (click)="modifier(eleve.id)">
                  Modifier
                </button>
                <button class="btn btn-sm btn-danger" (click)="supprimer(eleve.id)">
                  Supprimer
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  `
})
export class ElevesListComponent implements OnInit {
  eleves: any[] = [];

  constructor(private eleveService: EleveService, private router: Router) {}

  ngOnInit(): void {
    this.chargerEleves();
  }

  chargerEleves() {
    this.eleveService.getAll().subscribe((data) => {
      this.eleves = data;
    });
  }

  goToAjout() {
    this.router.navigate(['/eleves/ajouter']);
  }

  modifier(id: number) {
    this.router.navigate(['/eleves/modifier', id]);
  }

  supprimer(id: number) {
    if (confirm('Tu veux vraiment supprimer ?')) {
      this.eleveService.delete(id).subscribe(() => {
        this.chargerEleves();
      });
    }
  }
}
