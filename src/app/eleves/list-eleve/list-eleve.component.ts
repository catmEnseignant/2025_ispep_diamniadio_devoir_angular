import { Component, OnInit } from '@angular/core';
import { EleveService, Eleve } from '../../services/eleve.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-list-eleve',
  imports: [CommonModule],
  templateUrl: './list-eleve.component.html',
  styleUrls: ['./list-eleve.component.css']
})
export class ListEleveComponent implements OnInit {
  eleves: Eleve[] = [];

  constructor(
    private eleveService: EleveService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.getEleves();
  }

  getEleves(): void {
    this.eleveService.getAll().subscribe(data => {
      this.eleves = data;
    });
  }

  editEleve(id: number): void {
    this.router.navigate(['/eleves/edit', id]);
  }

  deleteEleve(id: number): void {
    const confirmDelete = confirm("Voulez-vous vraiment supprimer cet élève ?");
    if (confirmDelete) {
      this.eleveService.delete(id).subscribe(() => {
        this.getEleves(); // recharger après suppression
      });
    }
  }

  goToAjout(): void {
    this.router.navigate(['/eleves/add']);
  }
}
