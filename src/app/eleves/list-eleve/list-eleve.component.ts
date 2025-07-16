import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { Eleve, ElevesService } from '../../services/eleves/eleves-services.service';


@Component({
  selector: 'app-liste-eleves',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './list-eleve.component.html',
})
export class ListeElevesComponent implements OnInit {
  eleves: Eleve[] = [];

  constructor(private elevesService: ElevesService, private router: Router) {}

  ngOnInit(): void {
    this.elevesService.getEleves().subscribe({
      next: (data: Eleve[]) => this.eleves = data,
      error: (err) => console.error('Erreur récupération élèves', err)
    });
  }

  addEleve(): void {
    this.router.navigate(['/form-eleve']);
  }
  editEleve(eleve: Eleve): void {
  this.router.navigate(['/form-eleve', eleve.id]);
}

deleteEleve(eleve: any): void {
  if (confirm('Voulez-vous vraiment supprimer cet élève ?')) {
    this.elevesService.deleteEleve(eleve.id).subscribe(() => {
      this.eleves = this.eleves.filter(e => e.id !== eleve.id);
  });
}
}

}
