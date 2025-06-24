import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EnseignantService } from '../../service/enseignants/enseignant.service';

@Component({
  selector: 'app-list-enseignant',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './list-enseignant.component.html',
  styleUrls: ['./list-enseignant.component.css']
})
export class ListEnseignantComponent implements OnInit {
  enseignant: any[] = [];

  constructor(
    private router: Router,
    private enseignantService: EnseignantService
  ) { }

  ngOnInit() {
    this.loadEnseignants();
  }

  loadEnseignants() {
    this.enseignantService.getEnseignant().subscribe(
      (response: any) => this.enseignant = response,
      (error) => console.error('Erreur:', error)
    );
  }

  addEnseignant() {
    localStorage.removeItem('currentEnseignant');
    this.router.navigate(['/enseignants/form-enseignant']);
  }

  editEnseignant(enseignant: any) {
    localStorage.setItem('currentEnseignant', JSON.stringify(enseignant));
    this.router.navigate(['/enseignants/form-enseignant']);
  }

  deleteEnseignant(id: string) {
    if (confirm('Êtes-vous sûr de vouloir supprimer cet enseignant ?')) {
      this.enseignantService.deleteEnseignant(id).subscribe(
        () => {
          alert('Enseignant supprimé avec succès');
          this.loadEnseignants();
        },
        (error) => console.error('Erreur:', error)
      );
    }
  }
}