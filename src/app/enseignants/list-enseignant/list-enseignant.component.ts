import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { EnseignantServicesService } from '../../services/enseignants/enseignants-services.service';

@Component({
  selector: 'app-list-enseignant',
  standalone: true,
  imports: [CommonModule, RouterModule], 
  templateUrl: './list-enseignant.component.html',
  styleUrls: ['./list-enseignant.component.css'] 
})
export class ListEnseignantComponent implements OnInit {

  enseignants: any[] = []; 

  constructor(
    private route: Router,
    private enseignantServices: EnseignantServicesService
  ) {
    console.log('Constructeur appelé');
  }

  ngOnInit(): void {
    this.loadEnseignants();
  }

  
  private loadEnseignants(): void {
    this.enseignantServices.getEnseignants().subscribe({
      next: (reponse) => {
        this.enseignants = reponse as any[]; 
      },
      error: (err) => {
      console.error('Erreur lors de la récupération :', err);
    }
    });
  }

  public addEnseignants(): void {
    this.route.navigate(['enseignants/form-enseignant']);
  }

  
  public editEnseignant(enseignant: any): void {
    localStorage.setItem('editEnseignant', '1');
    localStorage.setItem('currentEnseignant', JSON.stringify(enseignant));
    this.route.navigate(['enseignants/form-enseignant']);
  }


  public deleteEnseignant(id: number): void {
    const confirmation = confirm('Voulez-vous vraiment supprimer cet enseignant ?');
    if (confirmation) {
      this.enseignantServices.deleteEnseignant(id).subscribe({
        next: () => {
          alert('Enseignant supprimé avec succès');
          this.loadEnseignants(); 
        },
        error: (error) => {
          console.error('Erreur lors de la suppression :', error);
        }
      });
    }
  }
}
