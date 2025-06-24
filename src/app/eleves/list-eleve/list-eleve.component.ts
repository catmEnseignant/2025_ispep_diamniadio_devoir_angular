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
    this.loadEleves();
  }

  loadEleves() {
    this.eleveService.getEleve().subscribe(
      (response: any) => this.eleve = response,
      (error) => console.error('Erreur:', error)
    );
  }

  addEleve() {
    localStorage.removeItem('currentEleve');
    this.router.navigate(['/eleves/form-eleve']);
  }

  editEleve(eleve: any) {
    localStorage.setItem('currentEleve', JSON.stringify(eleve));
    this.router.navigate(['/eleves/form-eleve']);
  }

  deleteEleve(id: string) {
    if (confirm('Êtes-vous sûr de vouloir supprimer cet élève ?')) {
      this.eleveService.deleteEleve(id).subscribe(
        () => {
          alert('Élève supprimé avec succès');
          this.loadEleves();
        },
        (error) => console.error('Erreur:', error)
      );
    }
  }
}