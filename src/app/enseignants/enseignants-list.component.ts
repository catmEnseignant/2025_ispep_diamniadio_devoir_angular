import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { EnseignantService } from '../services/enseignant.service';

@Component({
  selector: 'app-enseignants-list',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <div class="card">
      <div class="card-header d-flex justify-content-between align-items-center">
        <h5 class="mb-0">Liste des enseignants</h5>
        <button class="btn btn-primary" (click)="goToAjout()">Ajouter un enseignant</button>
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
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr *ngFor="let enseignant of enseignants; let i = index">
              <td>{{ i + 1 }}</td>
              <td>{{ enseignant.prenom }}</td>
              <td>{{ enseignant.nom }}</td>
              <td>{{ enseignant.telephone }}</td>
              <td>{{ enseignant.adresse }}</td>
              <td>
                <button class="btn btn-sm btn-warning me-1" (click)="modifier(enseignant.id)">
                 Modifier
                </button>
                <button class="btn btn-sm btn-danger" (click)="supprimer(enseignant.id)">
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
export class EnseignantsListComponent implements OnInit {
  enseignants: any[] = [];

  constructor(private enseignantService: EnseignantService, private router: Router) {}

  ngOnInit(): void {
    this.chargerEnseignants();
  }

  chargerEnseignants() {
    this.enseignantService.getAll().subscribe((data) => {
      this.enseignants = data;
    });
  }

  goToAjout() {
    this.router.navigate(['/enseignants/ajouter']);
  }

  modifier(id: number) {
    this.router.navigate(['/enseignants/modifier', id]);
  }

  supprimer(id: number) {
    if (confirm('Tu veux vraiment supprimer ?')) {
      this.enseignantService.delete(id).subscribe(() => {
        this.chargerEnseignants();
      });
    }
  }
}
